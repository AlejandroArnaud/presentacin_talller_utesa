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
// nivelAIAS se guarda como número estructurado (no como texto "Nivel 3").
assert.ok(m.evaluaciones.some(e => e.nivelAIAS === 3), 'debe captar nivel AIAS 3');
assert.equal(m.evaluaciones[0].titulo, 'Portafolio de diagnóstico empresarial (de proceso).', 'el título debe ser el del ítem, no el del metadato');
assert.ok(m.html.includes('<h2'), 'debe renderizar secciones a HTML');
console.log('OK parse-materia');
