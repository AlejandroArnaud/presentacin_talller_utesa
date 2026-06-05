# Spec de diseño — Portal de Recursos Docentes (UTESA Dajabón)

- **Fecha:** 2026-06-05
- **Estado:** aprobado en decisiones clave (brainstorming); pendiente revisión final del usuario antes de planificar
- **Rama del proyecto:** "web que consolida los recursos docentes" (la 2.ª de las dos ramas; la 1.ª es la presentación proyectable, que se aborda en paralelo)
- **Skill de diseño usada:** [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (estilo, tipografía, paleta y checklist de accesibilidad)

## 1. Objetivo

Consolidar los materiales del taller *Uso Pedagógico de la IA* en un **portal web navegable y buscable**: un único sitio estático que reúne el dossier del taller, las **633 materias** con recursos de las **8 carreras** de Dajabón, los pensums, el catálogo de carreras y una biblioteca de prompts transversal. Debe **abrir en local** (doble clic, sin internet) **y publicarse** igual (Hetzner o GitHub Pages).

## 2. Audiencia y principios (heredados del proyecto)

- **Audiencia:** docentes universitarios principiantes en IA, de disciplinas mixtas, con conectividad variable.
- **Principios innegociables:** (1) nada de detección de IA — el foco es evaluación auténtica e integridad por diseño; (2) recursos HTML pedidos a la IA; (3) herramientas gratuitas en español; (4) marco de evaluación AIAS. El portal expone y organiza estos materiales; no los contradice.

## 3. Alcance

**Incluye (portal integral):**
- Hub de entrada (home).
- **Recursos por carrera → materia** (633 materias, contenido completo: prompts, ejercicios con IA, evaluaciones auténticas con nivel AIAS + rúbrica, idea de recurso HTML, notas).
- **El taller**: dossier reconstruido con la identidad nueva (investigación, agenda de 2 h, materiales, prompts, quiz de demostración).
- **Pensums** por carrera (representativos — ver §11).
- **Catálogo de carreras**.
- **Biblioteca de prompts transversal**: todos los prompts, buscables por tema/disciplina.
- **Buscador global** y navegación Hub + barra lateral.

**No incluye (YAGNI / fuera de alcance v1):**
- Backend, base de datos, cuentas de usuario, edición en línea.
- Generación de los recursos HTML interactivos por materia (es trabajo aparte; el portal solo muestra la *idea* y el *prompt* de cada uno).
- Detección de IA (excluido por principio).

## 4. Identidad visual (design system)

Estilo **minimal-editorial premium** (UI/UX Pro Max: *Minimalism & Swiss* + *Editorial*), tema claro, **un único color fuerte: verde esmeralda**, usado con moderación sobre neutros fríos, con un hilo de oro como detalle.

**Tokens de color**
```
--em:      #0F5132   /* esmeralda profundo — color de marca / acento fuerte */
--em-deep: #0B3D2E   /* hover / énfasis */
--gold:    #A98B5D   /* detalle premium (filetes, subrayados) — uso mínimo */
--paper:   #F6F7F9   /* fondo (gris claro frío) */
--surface: #FFFFFF   /* tarjetas y superficies */
--ink:     #14161A   /* texto principal */
--ink-soft:#3A3D42   /* texto secundario */
--muted:   #6B7079   /* texto terciario / labels */
--line:    #E8EAED   /* hairline */
--line-2:  #D7DAE0   /* bordes algo más marcados */
/* bloque de prompt: fondo #14161A, texto #CFD6D0 */
```
> El verde es provisional (`#0F5132`). Sustituir por el **verde institucional oficial de UTESA** cuando se disponga del hex exacto; está centralizado en variables CSS para cambiarlo en un punto.

**Tipografía**
- Titulares: **Playfair Display** (500/600/700), con cursiva editorial para énfasis.
- Texto y UI: **Inter** (400–700).
- Código/prompts: `ui-monospace, Consolas, monospace`.

**Estilo y componentes**
- Mucho espacio en blanco, hairlines en vez de sombras fuertes, radios suaves (9–18 px), hover 150–300 ms.
- Componentes: hero, tarjetas de área (grid con separadores hairline), barra lateral navegable, **vista de materia** (badges de nivel AIAS, bloque de prompt oscuro con botón *Copiar*), buscador, callouts (tip/clave/aviso), quiz interactivo, tabla de pénsum.
- **Iconos SVG** de trazo (Lucide/Heroicons), nunca emojis como iconos.

**Accesibilidad (checklist UI/UX Pro Max)**
- Contraste de texto ≥ 4.5:1 (la paleta lo cumple con margen).
- Estados de foco visibles para teclado; `cursor:pointer` en clicables.
- `prefers-reduced-motion` respetado.
- Responsive: 375 / 768 / 1024 / 1440 px.

## 5. Arquitectura técnica — SPA estática

Sitio **estático, sin dependencias en runtime** (HTML/CSS/JS puro). Abre desde `file://` y se publica idéntico. El contenido se carga vía `<script src="assets/data.js">` (no `fetch`), evitando el bloqueo CORS de `file://`.

```
portal/                  ← el sitio (se publica tal cual)
  index.html             ← app shell (hub + layout + buscador)
  assets/
    styles.css           ← design system (§4)
    app.js               ← router por hash + render de vistas + buscador (vanilla)
    data.js              ← window.PORTAL = {…} (contenido generado, §6)
  README.md              ← cómo abrir/publicar/regenerar
scripts/
  build-portal.mjs       ← genera data.js desde los .md y el dossier (Node, §7)
```

Decisiones:
- **Routing por hash** (`#/...`) para que los deep-links funcionen en `file://`.
- **Render por vista** (solo se renderiza la materia/sección activa) → 633 materias sin penalizar el render.
- Carpeta `portal/`; para GitHub Pages se publica esa carpeta (o se copia a `docs/`). Para Hetzner se sirve estáticamente.

## 6. Modelo de datos (`data.js`)

Una sola global: `window.PORTAL = { generatedAt, carreras, materias, taller, prompts }`.

- `carreras[]`: `{ slug, nombre, codigo, facultad, nMaterias, pensum }`.
- `materias[]`: `{ id, slug, carreraSlug, carrera, nombre, cuatrimestre, codigo, html, sobre, enfoqueIA, prompts[], ejercicios[], evaluaciones[{ titulo, nivelAIAS, rubrica }], recursoHTML{ idea, prompt }, notas, keywords[] }`.
  - `html`: contenido completo ya renderizado (Markdown→HTML en build-time).
  - campos estructurados: para filtros, badges y búsqueda.
- `taller{}`: secciones del dossier reconstruidas (investigación, agenda, materiales, quiz).
- `prompts[]`: biblioteca transversal `{ texto, materiaSlug, carrera, tema }` para buscar prompts por tema.

## 7. Generación (`build-portal.mjs`, Node)

1. Recorre `recursos_docentes/**/*.md` y los `00_PENSUM.md`; lee `INDICE.md` y `CATALOGO_CARRERAS.md`.
2. Parsea cada materia (formato consistente: `# título`, metadatos en negrita, secciones `##`, bloques ```` ``` ```` de prompts) y convierte Markdown→HTML (dependencia **solo de build**, p. ej. `marked`/`markdown-it`).
3. Extrae del encabezado los metadatos deterministas (carrera, cuatrimestre, código) y separa las secciones; **fusiona** el enriquecimiento de la Fase A (keywords de búsqueda, niveles AIAS normalizados — §10).
4. Integra el contenido del **dossier** reconstruido.
5. Escribe `portal/assets/data.js`. Idempotente y re-ejecutable; valida que las 8 carreras y el conteo de materias cuadren.

## 8. Navegación y búsqueda

- Rutas: `#/` (hub) · `#/carrera/<slug>` · `#/materia/<carrera>/<slug>` · `#/taller` · `#/prompts` · `#/pensums` · `#/buscar?q=`.
- **Hub**: hero + tarjetas de área + stats + buscador global.
- **Zona de recursos**: barra lateral (carreras → materias) + contenido.
- **Buscador**: filtra materias y prompts por nombre, carrera, keyword y nivel AIAS; instantáneo, en cliente, vanilla (sin dependencias). Resaltado de coincidencias.
- **Copiar prompt**: botón en cada bloque de prompt.

## 9. Integración del dossier

**Reconstruir** el dossier con la identidad nueva (decisión del usuario): volcar su contenido (investigación con sus fuentes, agenda minuto a minuto, materiales, biblioteca de prompts del taller, quiz) en el sistema del portal, con la paleta esmeralda/premium y los componentes compartidos. El `Taller_IA_UTESA_Dajabon.html` original se conserva como pieza independiente; el portal tiene su propia versión integrada y coherente.

## 10. Plan de construcción (con workflow multiagente)

- **Fase A — Enriquecimiento y verificación (workflow):** las **8 carreras en paralelo** (un agente por carrera) revisan sus materias y producen, por materia, `keywords` de búsqueda y niveles AIAS normalizados, más un **reporte de QA** (materias con secciones faltantes o formato irregular). Una ronda de verificación consolida. Aquí entra la orquestación pedida. Salida: `build/enrichment/<carrera>.json` + incidencias.
- **Fase B — Ensamblaje (build script):** `build-portal.mjs` parsea los `.md` (determinista), **fusiona** el enriquecimiento de la Fase A y el dossier reconstruido → `data.js`; valida conteos (8 carreras / 633 materias). Puede correr aun sin la Fase A (con keywords básicas derivadas del título), que entonces solo añade calidad.
- **Fase C — App shell (ingeniería directa):** `index.html`, `styles.css` (design system §4) y `app.js` (router + vistas + buscador).
- **Fase D — QA:** abrir local (file://) y verificar navegación, búsqueda, copiar prompt, responsive y accesibilidad; revisar una muestra de materias por carrera.

## 11. Riesgos y notas

- **Pensums representativos, no oficiales:** `pensum.asp` de UTESA no es accesible; los pensums son reconstrucciones del estándar MESCyT. El portal debe **rotularlos como "representativos"** y no afirmar que son oficiales.
- **Verde de UTESA pendiente:** usar `#0F5132` hasta tener el hex oficial; cambio centralizado en variables CSS.
- **Tamaño de `data.js`:** 643 archivos → unos MB. Aceptable para carga local única; si pesa, dividir en índice ligero (búsqueda) + contenido por materia cargado on-demand vía inyección de `<script>`.
- **`file://` y `fetch`:** resuelto usando `data.js` como `<script>`, no `fetch` de JSON.

## 12. Criterios de éxito

1. El portal abre con doble clic en `index.html` (sin servidor) y funciona igual publicado.
2. Las 8 carreras y 633 materias están presentes, navegables y con su contenido completo.
3. El buscador encuentra materias y prompts por nombre/carrera/tema/nivel AIAS al instante.
4. El dossier del taller está integrado con la identidad premium verde.
5. Cumple el checklist de accesibilidad (contraste, foco, reduced-motion, responsive).
6. `build-portal.mjs` regenera el sitio de forma reproducible desde los `.md`.

## 13. Futuro (fuera de v1)

- Generar los recursos HTML interactivos por materia (fan-out con workflow).
- Afinar pensums con planes oficiales.
- Ampliar a más carreras de UTESA.
- Convertir el guion de diapositivas en la presentación proyectable (rama 1).
