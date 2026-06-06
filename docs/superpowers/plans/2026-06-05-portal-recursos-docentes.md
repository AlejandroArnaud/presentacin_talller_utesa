# Portal de Recursos Docentes — Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una SPA estática que consolide el taller, las 633 materias de 8 carreras, pensums y una biblioteca de prompts, que abra en local (`file://`) y se publique igual.

**Architecture:** Sitio estático sin dependencias en runtime. Un build script Node parsea los `.md` y genera `assets/data.js` (`window.PORTAL`). El front (`index.html` + `app.js` vanilla) hace routing por hash, render por vista y búsqueda en cliente. La identidad visual (esmeralda/marfil, Playfair+Inter) vive en `styles.css`. Un workflow multiagente enriquece y verifica los datos por carrera.

**Tech Stack:** HTML/CSS/JS vanilla (runtime), Node 22 + `marked` (solo build), Workflow tool (Fase A).

**Spec:** `docs/superpowers/specs/2026-06-05-portal-recursos-docentes-design.md`

---

## File Structure

```
portal/
  index.html            # app shell: <head> con fuentes + #app + <script src=assets/...>
  assets/
    styles.css          # design system (tokens + componentes) — §4 del spec
    app.js              # router hash + render de vistas + buscador (vanilla)
    data.js             # window.PORTAL = {…} (GENERADO, no editar a mano)
  README.md             # cómo abrir/publicar/regenerar
scripts/
  build-portal.mjs      # genera assets/data.js desde los .md + dossier
  lib/
    parse-materia.mjs   # parser determinista de un .md de materia
    parse-dossier.mjs   # extrae secciones del Taller_IA_UTESA_Dajabon.html
package.json            # devDependency: marked; scripts: build
build/
  enrichment/<carrera>.json   # salida del workflow (Fase A) — fusionada por el build
```

Responsabilidades: `parse-materia.mjs` (texto→objeto materia), `build-portal.mjs` (recorrido + MD→HTML + merge enrichment + escribe data.js), `app.js` (UI), `styles.css` (estética). Archivos chicos y enfocados.

---

## Task 1: Scaffold + package.json

**Files:**
- Create: `package.json`, `portal/index.html`, `portal/assets/styles.css` (vacío con comentario), `portal/assets/app.js` (stub), `portal/README.md`, `scripts/lib/.gitkeep`

- [ ] **Step 1: Crear `package.json`**

```json
{
  "name": "portal-recursos-docentes",
  "private": true,
  "type": "module",
  "scripts": { "build": "node scripts/build-portal.mjs" },
  "devDependencies": { "marked": "^12.0.0" }
}
```

- [ ] **Step 2: Instalar dependencia de build**

Run: `npm install`
Expected: crea `node_modules/` y `package-lock.json`; sin errores.

- [ ] **Step 3: `portal/index.html` (shell)**

```html
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Portal de Recursos Docentes · UTESA Dajabón</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/styles.css">
</head>
<body>
<div id="app" aria-live="polite">Cargando…</div>
<script src="assets/data.js"></script>
<script src="assets/app.js"></script>
</body>
</html>
```

- [ ] **Step 4: Stubs** — `portal/assets/app.js` con `console.log('portal', window.PORTAL?.materias?.length)`, `styles.css` con `:root{}` comentado, `README.md` con una línea.

- [ ] **Step 5: Añadir a `.gitignore`**: `node_modules/` y `build/`.

- [ ] **Step 6: Commit**

```bash
git add package.json portal/ scripts/ .gitignore
git commit -m "feat(portal): scaffold del sitio estático y build"
```

---

## Task 2: Parser determinista de materia

**Files:**
- Create: `scripts/lib/parse-materia.mjs`, `scripts/lib/parse-materia.test.mjs`

- [ ] **Step 1: Escribir el test (failing)** usando un `.md` real

```js
// scripts/lib/parse-materia.test.mjs
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { parseMateria } from './parse-materia.mjs';

const md = readFileSync('recursos_docentes/administracion-empresas/01_introduccion_a_la_administracion_de_empresa.md', 'utf8');
const m = parseMateria(md, { carreraSlug: 'administracion-empresas', file: '01_introduccion_a_la_administracion_de_empresa.md' });

assert.equal(m.nombre, 'Introducción a la Administración de Empresa');
assert.equal(m.carreraSlug, 'administracion-empresas');
assert.equal(m.cuatrimestre, '1');
assert.equal(m.codigo, 'ADM-112');
assert.ok(m.prompts.length >= 3, 'debe extraer los bloques de prompt');
assert.ok(/Nivel 3/i.test(JSON.stringify(m.evaluaciones)), 'debe captar nivel AIAS');
assert.ok(m.html.includes('<h2'), 'debe renderizar secciones a HTML');
console.log('OK parse-materia');
```

- [ ] **Step 2: Correr y ver que falla**

Run: `node scripts/lib/parse-materia.test.mjs`
Expected: FAIL (`parseMateria` no existe).

- [ ] **Step 3: Implementar `parse-materia.mjs`**

```js
import { marked } from 'marked';

// Extrae el primer título H1, los metadatos en negrita, secciones ## y bloques ```.
export function parseMateria(md, { carreraSlug, file }) {
  const nombre = (md.match(/^#\s+(.+)$/m)?.[1] || '').trim();
  const meta = md.match(/\*\*Carrera:\*\*\s*(.+?)\s*·\s*\*\*Cuatrimestre:\*\*\s*(.+?)\s*·\s*\*\*Código:\*\*\s*(.+)/);
  const carrera = meta?.[1]?.trim() || '';
  const cuatrimestre = meta?.[2]?.trim() || '';
  const codigo = meta?.[3]?.trim() || '';

  // Secciones por encabezado ##
  const sections = {};
  const re = /^##\s+(.+)$/gm; let mm, last = null, idx = 0, lastEnd = 0;
  const marks = [];
  while ((mm = re.exec(md))) marks.push({ title: mm[1].trim(), start: mm.index, contentStart: mm.index + mm[0].length });
  marks.forEach((s, i) => { s.end = i + 1 < marks.length ? marks[i + 1].start : md.length; sections[s.title] = md.slice(s.contentStart, s.end).trim(); });

  // Prompts: bloques ``` dentro de "Prompts para el docente" + recurso HTML
  const prompts = [...md.matchAll(/```[\w]*\n([\s\S]*?)```/g)].map(x => x[1].trim());

  // Evaluaciones: líneas con "AIAS: Nivel N"
  const evaluaciones = [...md.matchAll(/\*\*(.+?)\*\*[\s\S]*?AIAS:\s*Nivel\s*(\d)/g)]
    .map(x => ({ titulo: x[1].trim(), nivelAIAS: Number(x[2]) }));

  const slug = file.replace(/\.md$/, '').replace(/^\d+_/, '').replace(/_/g, '-');
  const id = `${carreraSlug}/${file.replace(/\.md$/, '')}`;

  return {
    id, slug, carreraSlug, carrera, nombre, cuatrimestre, codigo,
    sobre: sections['Sobre la materia'] || '',
    enfoqueIA: sections['Enfoque IA (taller)'] || '',
    prompts, evaluaciones,
    notas: sections['Notas'] || '',
    html: marked.parse(md.replace(/^#\s+.+$/m, '')), // cuerpo sin el H1 (lo pinta la UI)
    keywords: [], // lo añade la Fase A
  };
}
```

- [ ] **Step 4: Correr y ver que pasa**

Run: `node scripts/lib/parse-materia.test.mjs`
Expected: `OK parse-materia`. Si un assert falla, ajustar la regex del metadato/encabezado a lo que muestre el `.md`.

- [ ] **Step 5: Commit**

```bash
git add scripts/lib/parse-materia.mjs scripts/lib/parse-materia.test.mjs
git commit -m "feat(build): parser determinista de materia con test"
```

---

## Task 3: build-portal.mjs — recorrido y data.js

**Files:**
- Create: `scripts/build-portal.mjs`

- [ ] **Step 1: Implementar el build**

```js
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parseMateria } from './lib/parse-materia.mjs';

const ROOT = 'recursos_docentes';
const carpetas = readdirSync(ROOT, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

const carreras = [], materias = [], prompts = [];
for (const carreraSlug of carpetas) {
  const dir = join(ROOT, carreraSlug);
  const files = readdirSync(dir).filter(f => /^\d+_.+\.md$/.test(f) && !/^00_/.test(f)).sort();
  let nombreCarrera = carreraSlug;
  const enrichPath = join('build', 'enrichment', `${carreraSlug}.json`);
  const enrich = existsSync(enrichPath) ? JSON.parse(readFileSync(enrichPath, 'utf8')) : {};
  for (const file of files) {
    const m = parseMateria(readFileSync(join(dir, file), 'utf8'), { carreraSlug, file });
    const e = enrich[m.id] || {};
    m.keywords = e.keywords || [m.nombre.toLowerCase()];
    if (e.evaluaciones) m.evaluaciones = e.evaluaciones;
    nombreCarrera = m.carrera || nombreCarrera;
    materias.push(m);
    m.prompts.forEach(texto => prompts.push({ texto, materiaId: m.id, carrera: nombreCarrera }));
  }
  carreras.push({ slug: carreraSlug, nombre: nombreCarrera, nMaterias: files.length });
}

const PORTAL = { generatedAt: process.env.BUILD_TS || '', carreras, materias, prompts };
writeFileSync('portal/assets/data.js', 'window.PORTAL = ' + JSON.stringify(PORTAL) + ';\n');
console.log(`carreras=${carreras.length} materias=${materias.length} prompts=${prompts.length}`);
if (carreras.length !== 8) throw new Error('Se esperaban 8 carreras');
if (materias.length !== 633) console.warn(`Aviso: ${materias.length} materias (esperadas 633) — revisar`);
```

- [ ] **Step 2: Correr el build**

Run: `node scripts/build-portal.mjs`
Expected: imprime `carreras=8 materias=633 prompts=…`; crea `portal/assets/data.js`.

- [ ] **Step 3: Verificar data.js**

Run: `node -e "require('./portal/assets/data.js')" 2>/dev/null || node --input-type=module -e "import {readFileSync} from 'fs'; const s=readFileSync('portal/assets/data.js','utf8'); globalThis.window={}; eval(s); console.log(window.PORTAL.carreras.length, window.PORTAL.materias.length)"`
Expected: `8 633`.

- [ ] **Step 4: Commit**

```bash
git add scripts/build-portal.mjs portal/assets/data.js
git commit -m "feat(build): recorrido de carreras y generación de data.js"
```

---

## Task 4: styles.css — design system

**Files:**
- Modify: `portal/assets/styles.css`

- [ ] **Step 1: Volcar los tokens y componentes del spec §4** (reusar el CSS del preview aprobado `visual-style-v4` como base: variables de color, Playfair+Inter, hero, tarjetas con hairline, sidebar, vista de materia, badges AIAS, bloque de prompt oscuro con botón Copiar, buscador). Incluir estados `:focus-visible`, `@media (prefers-reduced-motion)`, y breakpoints 375/768/1024/1440.

```css
:root{
  --em:#0F5132; --em-deep:#0B3D2E; --gold:#A98B5D;
  --paper:#F6F7F9; --surface:#FFFFFF; --ink:#14161A; --ink-soft:#3A3D42;
  --muted:#6B7079; --line:#E8EAED; --line-2:#D7DAE0;
}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:'Inter',system-ui,sans-serif;line-height:1.6}
h1,h2,h3,.serif{font-family:'Playfair Display',Georgia,serif}
a{color:var(--em);text-underline-offset:2px}
:focus-visible{outline:2px solid var(--em);outline-offset:2px}
@media (prefers-reduced-motion: reduce){*{transition:none!important;animation:none!important}}
/* … hero, .layout (sidebar+main), .card, .subject, .badge, .prompt, .copy-btn, .search … */
```

- [ ] **Step 2: Verificación visual** — abrir `portal/index.html` (tras Task 5) y comparar con el preview aprobado.

- [ ] **Step 3: Commit**

```bash
git add portal/assets/styles.css
git commit -m "feat(portal): design system esmeralda/marfil (Playfair+Inter, AA)"
```

---

## Task 5: app.js — router por hash + vistas

**Files:**
- Modify: `portal/assets/app.js`

- [ ] **Step 1: Router + render**

```js
const $ = (s, r=document) => r.querySelector(s);
const P = window.PORTAL;
const app = $('#app');
const routes = {
  '': renderHub,
  'carrera': renderCarrera,   // #/carrera/<slug>
  'materia': renderMateria,   // #/materia/<carrera>/<slug>
  'taller': renderTaller,
  'prompts': renderPrompts,
  'pensums': renderPensums,
  'buscar': renderBuscar,     // #/buscar?q=...
};
function router(){
  const [path, query] = location.hash.replace(/^#\/?/, '').split('?');
  const parts = path.split('/');
  (routes[parts[0]] || renderHub)(parts.slice(1), new URLSearchParams(query||''));
  app.scrollTo?.(0,0);
}
function h(html){ app.innerHTML = html; }
function renderHub(){ h(`<header class="hero">…</header><section class="cards">…</section>`); }
function renderCarrera([slug]){ const c = P.carreras.find(x=>x.slug===slug); const ms = P.materias.filter(m=>m.carreraSlug===slug); h(`<div class="layout">${sidebar(slug)}<main>…lista…</main></div>`); }
function renderMateria([carrera, slug]){ const m = P.materias.find(x=>x.carreraSlug===carrera && x.slug===slug); h(`<div class="layout">${sidebar(carrera)}<main><h1>${m.nombre}</h1>${badges(m)}${m.html}</main></div>`); enableCopy(); }
function sidebar(activeCarrera){ /* lista carreras→materias con el activo marcado */ return `<aside class="sidebar">…</aside>`; }
function badges(m){ return m.evaluaciones.map(e=>`<span class="badge">AIAS Nivel ${e.nivelAIAS}</span>`).join(' '); }
addEventListener('hashchange', router); addEventListener('DOMContentLoaded', router); router();
```

- [ ] **Step 2: Verificación** — abrir `portal/index.html` en el navegador; navegar hub → carrera → materia; el contenido (`m.html`) se ve con estilos. Probar deep-link pegando `#/materia/administracion-empresas/introduccion-a-la-administracion-de-empresa`.

- [ ] **Step 3: Commit**

```bash
git add portal/assets/app.js
git commit -m "feat(portal): router por hash y vistas (hub, carrera, materia)"
```

---

## Task 6: app.js — buscador en cliente

**Files:**
- Modify: `portal/assets/app.js`
- Create: `scripts/lib/search.test.mjs`

- [ ] **Step 1: Función pura de búsqueda + test**

```js
// en app.js, exportable para test:
export function buscar(materias, q){
  const t = q.trim().toLowerCase(); if(!t) return [];
  return materias.filter(m =>
    m.nombre.toLowerCase().includes(t) ||
    m.carrera.toLowerCase().includes(t) ||
    (m.keywords||[]).some(k=>k.includes(t)) ||
    m.evaluaciones.some(e=>('aias nivel '+e.nivelAIAS).includes(t))
  ).slice(0,50);
}
```

```js
// scripts/lib/search.test.mjs
import assert from 'node:assert';
import { buscar } from '../../portal/assets/app.js';
const ms=[{nombre:'Contabilidad I',carrera:'Mercadeo',keywords:['costos'],evaluaciones:[{nivelAIAS:3}]}];
assert.equal(buscar(ms,'conta').length,1);
assert.equal(buscar(ms,'costos').length,1);
assert.equal(buscar(ms,'xyz').length,0);
console.log('OK search');
```

(Para poder importar `buscar` en Node sin DOM, envolver el código que toca `document` en `if (typeof window!=='undefined')`.)

- [ ] **Step 2: Correr test** — `node scripts/lib/search.test.mjs` → `OK search`.

- [ ] **Step 3: UI del buscador** — input en el hub y barra superior; al teclear, `renderBuscar` lista resultados con enlace a `#/materia/...`. Resaltar coincidencia.

- [ ] **Step 4: Verificación** — abrir local, buscar "contabilidad", "sistemas", "AIAS nivel 3".

- [ ] **Step 5: Commit**

```bash
git add portal/assets/app.js scripts/lib/search.test.mjs
git commit -m "feat(portal): buscador en cliente con test"
```

---

## Task 7: Copiar prompt, accesibilidad y responsive

**Files:**
- Modify: `portal/assets/app.js`, `portal/assets/styles.css`

- [ ] **Step 1: Botón Copiar** en cada `.prompt` (usa `navigator.clipboard.writeText`; fallback `document.execCommand('copy')` para `file://`).
- [ ] **Step 2: Accesibilidad** — roles/aria en nav y resultados, foco visible, `prefers-reduced-motion` (ya en CSS), `cursor:pointer` en clicables.
- [ ] **Step 3: Responsive** — sidebar colapsable < 880px (patrón del dossier), grids fluidos.
- [ ] **Step 4: Verificación** — copiar un prompt; navegar por teclado; redimensionar a 375/768/1024/1440.
- [ ] **Step 5: Commit** — `git commit -am "feat(portal): copiar prompt, accesibilidad y responsive"`

---

## Task 8: Reconstruir el dossier como vista "El taller"

**Files:**
- Create: `scripts/lib/parse-dossier.mjs`
- Modify: `scripts/build-portal.mjs` (añade `PORTAL.taller`), `portal/assets/app.js` (`renderTaller`)

- [ ] **Step 1:** `parse-dossier.mjs` extrae del `Taller_IA_UTESA_Dajabon.html` las secciones por sus `id` (`inv-*`, `tal-*`, `mat-*`) y el quiz, devolviendo `{ secciones:[{id,titulo,html}], quiz:[…] }`. Re-estiliza con clases del portal (no copia el `<style>` índigo del original).
- [ ] **Step 2:** El build añade `PORTAL.taller`. Verificar: `window.PORTAL.taller.secciones.length > 0`.
- [ ] **Step 3:** `renderTaller` pinta el dossier con la identidad nueva (incluye el quiz interactivo y los prompts con botón Copiar).
- [ ] **Step 4: Verificación** — `#/taller` se ve premium-verde, el quiz funciona.
- [ ] **Step 5: Commit** — `git commit -am "feat(portal): vista del taller reconstruida con la identidad nueva"`

---

## Task 9: Fase A — enriquecimiento + QA por carrera (WORKFLOW)

Orquestación multiagente pedida por el usuario. Produce `build/enrichment/<carrera>.json` que el build (Task 3) ya sabe fusionar.

- [ ] **Step 1: Ejecutar el Workflow** — 8 agentes en paralelo (uno por carrera). Cada agente recibe la lista de `.md` de su carrera y, por materia, devuelve `{ id, keywords:[6-10], evaluaciones:[{titulo,nivelAIAS}], qa:{ok:bool, problema?:string} }`. Schema validado. Una etapa de verificación marca materias con secciones faltantes.

Esqueleto del script (pipeline por carrera):
```js
const CARRERAS = [/* 8 slugs */];
const out = await pipeline(CARRERAS,
  slug => agent(`Leé recursos_docentes/${slug}/*.md. Para cada materia generá 6-10 keywords de búsqueda (es), normalizá el nivel AIAS de cada evaluación y reportá QA. Devolvé JSON por el schema.`, {schema: ENRICH_SCHEMA, label:`enrich:${slug}`, phase:'Enriquecer'}),
  (res, slug) => agent(`Verificá este enriquecimiento de ${slug}: ¿keywords razonables?, ¿AIAS 1-5?, ¿materias sin secciones?`, {schema: QA_SCHEMA, label:`qa:${slug}`, phase:'Verificar'}).then(qa=>({slug,res,qa}))
);
// Escribir cada out[i].res a build/enrichment/<slug>.json
```

- [ ] **Step 2: Re-build** — `node scripts/build-portal.mjs` (ahora fusiona keywords/AIAS). Verificar que `materias[0].keywords.length >= 6`.
- [ ] **Step 3: Resolver incidencias** del reporte QA (materias mal parseadas) ajustando el parser o el `.md`.
- [ ] **Step 4: Commit** — `git add build portal/assets/data.js && git commit -m "feat(portal): enriquecimiento y QA de datos por carrera (workflow)"`

---

## Task 10: QA final + publicación

- [ ] **Step 1:** Recorrer una muestra de 2 materias por carrera (16) verificando render, badges y prompts.
- [ ] **Step 2:** Checklist de éxito del spec §12 (abre local, 8/633, buscador, taller integrado, accesibilidad, build reproducible).
- [ ] **Step 3:** `README.md` del portal: abrir (`index.html`), regenerar (`npm run build`), publicar (subir `portal/` a Hetzner como estático, o copiar a `docs/` para GitHub Pages).
- [ ] **Step 4: Commit** — `git commit -am "docs(portal): README de uso y publicación"`

---

## Self-Review (verificación del plan contra el spec)

- **Cobertura del spec:** alcance (T3,T5,T8) · distribución estática/`file://` (T1,T5) · identidad (T4) · arquitectura (T1,T3,T5) · datos (T2,T3) · navegación+búsqueda (T5,T6) · dossier (T8) · workflow (T9) · pensums representativos (T5 vista pensums + rótulo) · QA/accesibilidad (T7,T10). ✓
- **Pensums:** añadir en T5/T10 que la vista de pensums rotula "representativos (estándar MESCyT), no oficiales".
- **Tipos consistentes:** `parseMateria` define `{id,slug,carreraSlug,carrera,nombre,cuatrimestre,codigo,sobre,enfoqueIA,prompts,evaluaciones,notas,html,keywords}`; el build y `app.js` usan esos mismos nombres; `buscar()` usa `nombre/carrera/keywords/evaluaciones`. ✓
- **Verde provisional `#0F5132`** centralizado en `:root` (T4) → cambio en un punto cuando llegue el oficial. ✓
```
