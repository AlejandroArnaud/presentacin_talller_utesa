import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parseMateria } from './lib/parse-materia.mjs';
import { parseDossier } from './lib/parse-dossier.mjs';

const ROOT = 'recursos_docentes';
const carpetas = readdirSync(ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort();

const carreras = [], materias = [], prompts = [];
for (const carreraSlug of carpetas) {
  const dir = join(ROOT, carreraSlug);
  // Materias: NN_*.md con NN >= 01 (excluye 00_PENSUM y cualquier 00_*).
  const files = readdirSync(dir)
    .filter(f => /^\d+_.+\.md$/.test(f) && !/^00_/.test(f))
    .sort();
  let nombreCarrera = carreraSlug;

  // Enriquecimiento opcional de la Fase A (workflow): build/enrichment/<carrera>.json,
  // un objeto { "<materiaId>": { keywords:[], evaluaciones:[] } }.
  const enrichPath = join('build', 'enrichment', `${carreraSlug}.json`);
  const enrich = existsSync(enrichPath) ? JSON.parse(readFileSync(enrichPath, 'utf8')) : {};

  for (const file of files) {
    const m = parseMateria(readFileSync(join(dir, file), 'utf8'), { carreraSlug, file });
    const e = enrich[m.id] || {};
    // keywords: del enrichment si existe; si no, una base derivada del nombre.
    m.keywords = e.keywords?.length ? e.keywords : [m.nombre.toLowerCase()];
    if (e.evaluaciones?.length) m.evaluaciones = e.evaluaciones;
    nombreCarrera = m.carrera || nombreCarrera;
    materias.push(m);
    m.prompts.forEach(texto => prompts.push({ texto, materiaId: m.id, carrera: nombreCarrera }));
  }

  carreras.push({ slug: carreraSlug, nombre: nombreCarrera, nMaterias: files.length });
}

// Dossier del taller reconstruido (secciones + quiz), sin el <style> índigo original.
let taller = { secciones: [], quiz: [] };
const dossierPath = 'Taller_IA_UTESA_Dajabon.html';
if (existsSync(dossierPath)) {
  taller = parseDossier(readFileSync(dossierPath, 'utf8'));
}

const PORTAL = { generatedAt: process.env.BUILD_TS || '', carreras, materias, taller, prompts };
writeFileSync('portal/assets/data.js', 'window.PORTAL = ' + JSON.stringify(PORTAL) + ';\n');

console.log(`carreras=${carreras.length} materias=${materias.length} prompts=${prompts.length} tallerSecciones=${taller.secciones.length}`);
if (carreras.length !== 8) throw new Error(`Se esperaban 8 carreras, hay ${carreras.length}`);
if (materias.length !== 633) console.warn(`Aviso: ${materias.length} materias (esperadas 633) — revisar`);
if (taller.secciones.length === 0) console.warn('Aviso: PORTAL.taller sin secciones — revisar el dossier');
