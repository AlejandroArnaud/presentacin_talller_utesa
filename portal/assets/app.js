// Portal de Recursos Docentes — UTESA Dajabón
// Lógica de la SPA: router por hash, render de vistas desde window.PORTAL,
// sidebar carreras→materias, badges de nivel AIAS, copiar prompt y buscador
// en cliente. JS vanilla, sin dependencias.
//
// IMPORTANTE — carga como SCRIPT CLÁSICO (no `type="module"`): así el portal
// abre con doble clic desde file:// en cualquier navegador (Chrome bloquea los
// ES modules en file://). Por eso no se usa la palabra clave `export` a nivel
// de módulo. La función pura `buscar(materias, q)` se expone en `globalThis`
// para poder testearla en Node (sin DOM): el código que toca el DOM queda
// detrás de `typeof document !== 'undefined'`.

// ---------------------------------------------------------------------------
// 1. Lógica pura (testeable sin DOM)
// ---------------------------------------------------------------------------

/**
 * Busca materias por nombre, carrera, código, keyword o nivel AIAS.
 * Devuelve hasta 50 resultados. Función pura: no toca el DOM.
 * @param {Array} materias
 * @param {string} q
 * @returns {Array}
 */
function buscar(materias, q) {
  const t = (q || '').trim().toLowerCase();
  if (!t) return [];
  return (materias || []).filter((m) =>
    (m.nombre || '').toLowerCase().includes(t) ||
    (m.carrera || '').toLowerCase().includes(t) ||
    (m.codigo || '').toLowerCase().includes(t) ||
    (m.keywords || []).some((k) => (k || '').toLowerCase().includes(t)) ||
    (m.evaluaciones || []).some((e) =>
      ('aias nivel ' + e.nivelAIAS).includes(t)
    )
  ).slice(0, 50);
}

// Disponible para tests en Node y para uso programático en el navegador.
if (typeof globalThis !== 'undefined') globalThis.buscar = buscar;

// Solo arrancamos la UI cuando hay DOM (en Node no existe `document`).
if (typeof document !== 'undefined') {
  initPortal();
}

// ---------------------------------------------------------------------------
// 2. UI (solo en navegador)
// ---------------------------------------------------------------------------
function initPortal() {
  const P = window.PORTAL || { carreras: [], materias: [], prompts: [], taller: { secciones: [], quiz: [] } };
  const app = document.getElementById('app');

  // --- helpers -------------------------------------------------------------
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const escAttr = esc; // mismo escape sirve para atributos entrecomillados

  // Índice rápido por carrera para el sidebar y conteos.
  const materiasPorCarrera = new Map();
  for (const m of P.materias) {
    if (!materiasPorCarrera.has(m.carreraSlug)) materiasPorCarrera.set(m.carreraSlug, []);
    materiasPorCarrera.get(m.carreraSlug).push(m);
  }
  for (const list of materiasPorCarrera.values()) {
    list.sort((a, b) => {
      const ca = Number(a.cuatrimestre) || 999, cb = Number(b.cuatrimestre) || 999;
      if (ca !== cb) return ca - cb;
      return (a.nombre || '').localeCompare(b.nombre || '', 'es');
    });
  }

  const findCarrera = (slug) => P.carreras.find((c) => c.slug === slug);
  const findMateria = (carreraSlug, slug) =>
    P.materias.find((m) => m.carreraSlug === carreraSlug && m.slug === slug);

  // --- iconos SVG inline (trazo, currentColor) -----------------------------
  const ICON = {
    grad: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>',
    book: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
    spark: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
    list: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    table: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/></svg>',
    search: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
    copy: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    check: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>',
    home: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v11h14V9"/></svg>',
    arrow: '<svg class="ico ico-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    menu: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  };

  // --- router --------------------------------------------------------------
  const routes = {
    '': renderHub,
    'carrera': renderCarrera,
    'materia': renderMateria,
    'taller': renderTaller,
    'prompts': renderPrompts,
    'pensums': renderPensums,
    'buscar': renderBuscar,
  };

  function parseHash() {
    // #/carrera/<slug>  ó  #/buscar?q=...
    let raw = location.hash.replace(/^#\/?/, '');
    const qi = raw.indexOf('?');
    const query = qi >= 0 ? raw.slice(qi + 1) : '';
    const path = qi >= 0 ? raw.slice(0, qi) : raw;
    const parts = path.split('/').filter((x) => x.length > 0).map(decodeURIComponent);
    return { parts, params: new URLSearchParams(query) };
  }

  function router() {
    const { parts, params } = parseHash();
    const key = parts[0] || '';
    const fn = routes[key] || renderNotFound;
    try {
      fn(parts.slice(1), params);
    } catch (err) {
      console.error('Error al renderizar la vista', err);
      renderError(err);
    }
    // foco al encabezado principal para lectores de pantalla / teclado
    const heading = app.querySelector('[data-autofocus], h1');
    if (heading) {
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    window.scrollTo(0, 0);
    updateActiveNav();
  }

  function h(html) { app.innerHTML = html; }

  // --- chrome compartido (topbar) -----------------------------------------
  function topbar() {
    return `
      <header class="topbar">
        <a class="brand" href="#/" aria-label="Inicio del portal">
          <span class="brand-mark">${ICON.grad}</span>
          <span class="brand-text"><b>Recursos Docentes</b><small>UTESA · Dajabón</small></span>
        </a>
        <form class="topsearch" role="search" data-topsearch>
          <label class="sr-only" for="q-top">Buscar materias y prompts</label>
          <span class="topsearch-ico" aria-hidden="true">${ICON.search}</span>
          <input id="q-top" name="q" type="search" autocomplete="off"
            placeholder="Buscar materia, carrera, tema o nivel AIAS…">
        </form>
        <nav class="topnav" aria-label="Secciones">
          <a href="#/taller" data-nav="taller">El taller</a>
          <a href="#/prompts" data-nav="prompts">Prompts</a>
          <a href="#/pensums" data-nav="pensums">Pensums</a>
        </nav>
      </header>`;
  }

  function shellMain(inner) {
    return topbar() + `<main id="main" class="container">${inner}</main>` + footer();
  }

  function footer() {
    return `
      <footer class="site-footer">
        <p>Portal de recursos docentes · Taller <i>Uso Pedagógico de la IA</i> · UTESA Dajabón.
        Evaluación auténtica e integridad por diseño — sin detección de IA.</p>
      </footer>`;
  }

  // --- vista: HUB ----------------------------------------------------------
  function renderHub() {
    const nMaterias = P.materias.length;
    const nCarreras = P.carreras.length;
    const nPrompts = (P.prompts || []).length;

    const cards = P.carreras.map((c) => {
      const n = c.nMaterias != null ? c.nMaterias : (materiasPorCarrera.get(c.slug) || []).length;
      return `
        <a class="area-card" href="#/carrera/${escAttr(c.slug)}">
          <span class="area-ico" aria-hidden="true">${ICON.book}</span>
          <span class="area-body">
            <span class="area-name">${esc(c.nombre)}</span>
            <span class="area-meta">${n} materia${n === 1 ? '' : 's'}</span>
          </span>
          <span class="area-go" aria-hidden="true">${ICON.arrow}</span>
        </a>`;
    }).join('');

    h(shellMain(`
      <section class="hero">
        <p class="eyebrow">Universidad Tecnológica de Santiago · Recinto Dajabón</p>
        <h1 class="hero-title">Recursos docentes para el <i>uso pedagógico</i> de la inteligencia artificial</h1>
        <p class="hero-lead">Prompts listos, actividades con IA y evaluaciones auténticas (con nivel
          <abbr title="AI Assessment Scale">AIAS</abbr> y rúbrica) para ${nMaterias} materias de ${nCarreras} carreras.
          El foco es <b>evaluar mejor</b> e integridad por diseño, no la detección.</p>
        <form class="hero-search" role="search" data-herosearch>
          <label class="sr-only" for="q-hero">Buscar en el portal</label>
          <span class="hero-search-ico" aria-hidden="true">${ICON.search}</span>
          <input id="q-hero" name="q" type="search" autocomplete="off"
            placeholder="Probá: «contabilidad», «sistemas», «AIAS nivel 3»">
          <button type="submit" class="btn btn-em">Buscar</button>
        </form>
        <ul class="stats" aria-label="Resumen del portal">
          <li><b>${nCarreras}</b><span>carreras</span></li>
          <li><b>${nMaterias}</b><span>materias</span></li>
          <li><b>${nPrompts}</b><span>prompts</span></li>
        </ul>
      </section>

      <section class="section" aria-labelledby="h-carreras">
        <div class="section-head">
          <h2 id="h-carreras">Carreras</h2>
          <p class="section-sub">Elegí una carrera para ver sus materias y recursos.</p>
        </div>
        <div class="area-grid">${cards}</div>
      </section>

      <section class="section" aria-labelledby="h-accesos">
        <div class="section-head"><h2 id="h-accesos">Accesos rápidos</h2></div>
        <div class="quick-grid">
          <a class="quick-card" href="#/taller">
            <span class="quick-ico" aria-hidden="true">${ICON.spark}</span>
            <span class="quick-name">El taller</span>
            <span class="quick-desc">Dossier completo: investigación, agenda de 2 h, materiales y quiz de demostración.</span>
          </a>
          <a class="quick-card" href="#/prompts">
            <span class="quick-ico" aria-hidden="true">${ICON.list}</span>
            <span class="quick-name">Biblioteca de prompts</span>
            <span class="quick-desc">Todos los prompts del portal, buscables por tema, carrera o materia.</span>
          </a>
          <a class="quick-card" href="#/pensums">
            <span class="quick-ico" aria-hidden="true">${ICON.table}</span>
            <span class="quick-name">Pensums</span>
            <span class="quick-desc">Planes de estudio representativos (estándar MESCyT) por carrera.</span>
          </a>
        </div>
      </section>
    `));
    wireSearchForms();
  }

  // --- sidebar (carreras → materias) --------------------------------------
  function sidebar(activeCarreraSlug, activeMateriaSlug) {
    const items = P.carreras.map((c) => {
      const isActive = c.slug === activeCarreraSlug;
      const ms = materiasPorCarrera.get(c.slug) || [];
      const sublist = isActive
        ? `<ul class="side-sub" role="list">` + ms.map((m) => {
            const cur = m.slug === activeMateriaSlug;
            return `<li><a href="#/materia/${escAttr(c.slug)}/${escAttr(m.slug)}"${cur ? ' aria-current="page" class="is-current"' : ''}>${esc(m.nombre)}</a></li>`;
          }).join('') + `</ul>`
        : '';
      return `
        <li class="side-group${isActive ? ' is-open' : ''}">
          <a class="side-carrera${isActive ? ' is-active' : ''}" href="#/carrera/${escAttr(c.slug)}"${isActive ? ' aria-current="true"' : ''}>
            <span>${esc(c.nombre)}</span>
            <small>${(c.nMaterias != null ? c.nMaterias : ms.length)}</small>
          </a>
          ${sublist}
        </li>`;
    }).join('');

    return `
      <aside class="sidebar" aria-label="Carreras y materias">
        <button class="side-toggle" type="button" data-sidetoggle aria-expanded="false" aria-controls="side-nav">
          ${ICON.menu}<span>Carreras y materias</span>
        </button>
        <nav id="side-nav" class="side-nav" aria-label="Índice de carreras">
          <ul role="list">${items}</ul>
        </nav>
      </aside>`;
  }

  function crumbs(items) {
    const parts = items.map((it, i) => {
      const last = i === items.length - 1;
      if (last || !it.href) return `<span aria-current="page">${esc(it.label)}</span>`;
      return `<a href="${escAttr(it.href)}">${esc(it.label)}</a>`;
    });
    return `<nav class="crumbs" aria-label="Ruta de navegación">${parts.join('<span class="crumb-sep" aria-hidden="true">/</span>')}</nav>`;
  }

  // --- vista: CARRERA ------------------------------------------------------
  function renderCarrera(parts) {
    const slug = parts[0];
    const carrera = findCarrera(slug);
    if (!carrera) return renderNotFound();
    const ms = materiasPorCarrera.get(slug) || [];

    // Agrupar por cuatrimestre para una lista legible.
    const grupos = new Map();
    for (const m of ms) {
      const k = m.cuatrimestre || '—';
      if (!grupos.has(k)) grupos.set(k, []);
      grupos.get(k).push(m);
    }
    const ordenCuatris = [...grupos.keys()].sort((a, b) => (Number(a) || 999) - (Number(b) || 999));

    const lista = ordenCuatris.map((cuat) => {
      const fila = grupos.get(cuat).map((m) => `
        <li>
          <a class="mat-row" href="#/materia/${escAttr(slug)}/${escAttr(m.slug)}">
            <span class="mat-name">${esc(m.nombre)}</span>
            ${m.codigo ? `<span class="mat-code">${esc(m.codigo)}</span>` : ''}
            ${nivelTagsCompact(m)}
            <span class="mat-go" aria-hidden="true">${ICON.arrow}</span>
          </a>
        </li>`).join('');
      const etiqueta = cuat === '—' ? 'Sin cuatrimestre' : `Cuatrimestre ${esc(cuat)}`;
      return `<div class="cuat-group"><h3 class="cuat-title">${etiqueta}</h3><ul class="mat-list" role="list">${fila}</ul></div>`;
    }).join('');

    h(topbar() + `
      <div class="layout">
        ${sidebar(slug, null)}
        <main id="main" class="content">
          ${crumbs([{ label: 'Inicio', href: '#/' }, { label: carrera.nombre }])}
          <header class="page-head">
            <p class="eyebrow">${ICON.book} Carrera</p>
            <h1>${esc(carrera.nombre)}</h1>
            <p class="page-sub">${ms.length} materia${ms.length === 1 ? '' : 's'} con recursos docentes.</p>
          </header>
          ${lista || '<p class="empty">Esta carrera aún no tiene materias cargadas.</p>'}
        </main>
      </div>` + footer());
    wireSidebar();
  }

  // --- vista: MATERIA ------------------------------------------------------
  function renderMateria(parts) {
    const [carreraSlug, slug] = parts;
    const m = findMateria(carreraSlug, slug);
    if (!m) return renderNotFound();
    const carrera = findCarrera(carreraSlug);

    h(topbar() + `
      <div class="layout">
        ${sidebar(carreraSlug, slug)}
        <main id="main" class="content">
          ${crumbs([
            { label: 'Inicio', href: '#/' },
            { label: carrera ? carrera.nombre : carreraSlug, href: `#/carrera/${escAttr(carreraSlug)}` },
            { label: m.nombre },
          ])}
          <article class="subject">
            <header class="subject-head">
              <h1>${esc(m.nombre)}</h1>
              <p class="subject-meta">
                ${carrera ? `<span>${esc(carrera.nombre)}</span>` : ''}
                ${m.cuatrimestre ? `<span>Cuatrimestre ${esc(m.cuatrimestre)}</span>` : ''}
                ${m.codigo ? `<span class="mono">${esc(m.codigo)}</span>` : ''}
              </p>
              ${nivelBadges(m)}
            </header>
            <div class="prose">${m.html || ''}</div>
          </article>
        </main>
      </div>` + footer());
    enhancePrompts();   // botón Copiar en cada bloque de prompt del HTML
    enableCopy();
    wireSidebar();
  }

  // --- badges AIAS ---------------------------------------------------------
  function nivelInfo(n) {
    const nombres = {
      1: 'Sin IA', 2: 'IA para explorar', 3: 'IA colaborativa',
      4: 'IA con justificación', 5: 'IA integrada',
    };
    return nombres[n] || 'Nivel ' + n;
  }
  function nivelBadges(m) {
    const evs = m.evaluaciones || [];
    if (!evs.length) return '';
    // niveles únicos, ordenados
    const niveles = [...new Set(evs.map((e) => e.nivelAIAS).filter((x) => x != null))].sort();
    if (!niveles.length) return '';
    const items = niveles.map((n) =>
      `<span class="badge badge-aias n${esc(n)}" title="AIAS — ${esc(nivelInfo(n))}">AIAS Nivel ${esc(n)} · ${esc(nivelInfo(n))}</span>`
    ).join('');
    return `<div class="badges" aria-label="Niveles AIAS de las evaluaciones">${items}</div>`;
  }
  function nivelTagsCompact(m) {
    const evs = m.evaluaciones || [];
    const niveles = [...new Set(evs.map((e) => e.nivelAIAS).filter((x) => x != null))].sort();
    if (!niveles.length) return '';
    return `<span class="mat-badges">` + niveles.map((n) =>
      `<span class="badge badge-aias badge-xs n${esc(n)}" title="AIAS — ${esc(nivelInfo(n))}">N${esc(n)}</span>`
    ).join('') + `</span>`;
  }

  // --- vista: TALLER -------------------------------------------------------
  function renderTaller() {
    const t = P.taller || { secciones: [], quiz: [] };
    const nav = (t.secciones || []).map((s) =>
      `<li><a href="#sec-${escAttr(s.id)}">${esc(s.titulo)}</a></li>`
    ).join('');
    const secciones = (t.secciones || []).map((s) =>
      `<section class="taller-sec" id="sec-${escAttr(s.id)}" aria-labelledby="h-${escAttr(s.id)}">
        <h2 id="h-${escAttr(s.id)}">${esc(s.titulo)}</h2>
        <div class="prose">${s.html || ''}</div>
      </section>`
    ).join('');

    h(topbar() + `
      <div class="layout">
        <aside class="sidebar sidebar-toc" aria-label="Secciones del taller">
          <button class="side-toggle" type="button" data-sidetoggle aria-expanded="false" aria-controls="toc-nav">
            ${ICON.menu}<span>Contenido del taller</span>
          </button>
          <nav id="toc-nav" class="side-nav" aria-label="Índice del taller">
            <ul role="list">${nav}</ul>
          </nav>
        </aside>
        <main id="main" class="content">
          ${crumbs([{ label: 'Inicio', href: '#/' }, { label: 'El taller' }])}
          <header class="page-head">
            <p class="eyebrow">${ICON.spark} Dossier del taller</p>
            <h1>Uso Pedagógico de la Inteligencia Artificial</h1>
            <p class="page-sub">Investigación, diseño del taller de 2 horas, materiales y un quiz de demostración.</p>
          </header>
          ${secciones}
          ${renderQuiz(t.quiz || [])}
        </main>
      </div>` + footer());
    enhancePrompts();
    enableCopy();
    wireSidebar();
    wireQuiz();
  }

  function renderQuiz(quiz) {
    if (!quiz.length) return '';
    const preguntas = quiz.map((q, qi) => {
      const opciones = (q.opciones || []).map((o) => `
        <label class="quiz-opt">
          <input type="radio" name="q${qi}" value="${escAttr(o.valor)}" data-correcta="${o.correcta ? '1' : '0'}">
          <span class="quiz-opt-txt"><b>${esc(o.valor)})</b> ${esc(o.texto)}</span>
        </label>`).join('');
      return `
        <fieldset class="quiz-q" data-correcta="${escAttr(q.correcta)}">
          <legend>${esc(q.texto)}</legend>
          <div class="quiz-opts">${opciones}</div>
          <p class="quiz-fb" role="status" aria-live="polite"></p>
        </fieldset>`;
    }).join('');
    return `
      <section class="taller-sec quiz" aria-labelledby="h-quiz">
        <h2 id="h-quiz">Quiz de demostración</h2>
        <p class="page-sub">Un ejemplo de recurso interactivo en un solo archivo, del tipo que se le puede pedir a la IA.</p>
        <form data-quiz>
          ${preguntas}
          <div class="quiz-actions">
            <button type="submit" class="btn btn-em">Comprobar respuestas</button>
            <p class="quiz-score" role="status" aria-live="polite"></p>
          </div>
        </form>
      </section>`;
  }

  function wireQuiz() {
    const form = app.querySelector('[data-quiz]');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const qs = form.querySelectorAll('.quiz-q');
      let ok = 0;
      qs.forEach((fs) => {
        const correcta = fs.getAttribute('data-correcta');
        const sel = fs.querySelector('input:checked');
        const fb = fs.querySelector('.quiz-fb');
        fs.classList.remove('is-ok', 'is-bad');
        if (!sel) { fb.textContent = 'Elegí una opción.'; return; }
        if (sel.value === correcta) {
          ok++; fs.classList.add('is-ok');
          fb.textContent = '✓ Correcto.';
        } else {
          fs.classList.add('is-bad');
          fb.textContent = 'Revisá: la respuesta más sólida es la (' + correcta + ').';
        }
      });
      const score = form.querySelector('.quiz-score');
      if (score) score.textContent = `Acertaste ${ok} de ${qs.length}.`;
    });
  }

  // --- vista: PROMPTS (biblioteca transversal) -----------------------------
  function renderPrompts(parts, params) {
    const all = P.prompts || [];
    const q = (params.get('q') || '').trim();
    const tl = q.toLowerCase();
    // Índice id→nombre de materia para poder filtrar por el nombre de la materia
    // (los prompts no tienen campo `tema`: su tema es la materia a la que pertenecen).
    const nombrePorId = new Map(P.materias.map((m) => [m.id, m.nombre]));
    const filtrados = q
      ? all.filter((p) =>
          (p.texto || '').toLowerCase().includes(tl) ||
          (p.carrera || '').toLowerCase().includes(tl) ||
          (nombrePorId.get(p.materiaId) || '').toLowerCase().includes(tl))
      : all;
    const tope = 300;
    const vista = filtrados.slice(0, tope);

    const cards = vista.map((p) => {
      const mat = P.materias.find((m) => m.id === p.materiaId);
      const enlace = mat ? `#/materia/${escAttr(mat.carreraSlug)}/${escAttr(mat.slug)}` : '';
      const fuente = mat
        ? `<a class="prompt-src" href="${enlace}">${esc(mat.nombre)} · ${esc(p.carrera || '')}</a>`
        : `<span class="prompt-src">${esc(p.carrera || '')}</span>`;
      return `
        <article class="prompt-card">
          <div class="prompt" data-prompt>
            <button class="copy-btn" type="button" data-copy aria-label="Copiar prompt">${ICON.copy}<span class="copy-label">Copiar</span></button>
            <pre class="prompt-text">${esc(p.texto)}</pre>
          </div>
          ${fuente}
        </article>`;
    }).join('');

    h(shellMain(`
      ${crumbs([{ label: 'Inicio', href: '#/' }, { label: 'Biblioteca de prompts' }])}
      <header class="page-head">
        <p class="eyebrow">${ICON.list} Biblioteca transversal</p>
        <h1>Prompts para docentes</h1>
        <p class="page-sub">${all.length} prompts de todas las materias. Buscalos por tema, carrera o materia.</p>
      </header>
      <form class="filter-bar" role="search" data-promptfilter>
        <label class="sr-only" for="q-prompts">Filtrar prompts</label>
        <span class="filter-ico" aria-hidden="true">${ICON.search}</span>
        <input id="q-prompts" name="q" type="search" autocomplete="off"
          value="${escAttr(q)}" placeholder="Filtrar por tema, carrera o materia…">
      </form>
      <p class="result-count" role="status">${filtrados.length} prompt${filtrados.length === 1 ? '' : 's'}${q ? ` para «${esc(q)}»` : ''}${filtrados.length > tope ? ` (mostrando los primeros ${tope})` : ''}.</p>
      <div class="prompt-grid">${cards || '<p class="empty">Sin prompts para ese filtro.</p>'}</div>
    `));
    enableCopy();
    const input = app.querySelector('[data-promptfilter] input');
    if (input) {
      const form = input.closest('form');
      if (form) form.addEventListener('submit', (e) => e.preventDefault());
      let tid;
      input.addEventListener('input', () => {
        clearTimeout(tid);
        tid = setTimeout(() => {
          const v = input.value.trim();
          const nh = v ? `#/prompts?q=${encodeURIComponent(v)}` : '#/prompts';
          history.replaceState(null, '', nh);
          renderPrompts([], new URLSearchParams(v ? 'q=' + encodeURIComponent(v) : ''));
          const again = app.querySelector('[data-promptfilter] input');
          if (again) { again.focus(); const L = again.value.length; again.setSelectionRange(L, L); }
        }, 160);
      });
    }
  }

  // --- vista: PENSUMS ------------------------------------------------------
  function renderPensums() {
    const cards = P.carreras.map((c) => {
      const n = c.nMaterias != null ? c.nMaterias : (materiasPorCarrera.get(c.slug) || []).length;
      return `
        <a class="area-card" href="#/carrera/${escAttr(c.slug)}">
          <span class="area-ico" aria-hidden="true">${ICON.table}</span>
          <span class="area-body">
            <span class="area-name">${esc(c.nombre)}</span>
            <span class="area-meta">${n} materia${n === 1 ? '' : 's'}</span>
          </span>
          <span class="area-go" aria-hidden="true">${ICON.arrow}</span>
        </a>`;
    }).join('');

    h(shellMain(`
      ${crumbs([{ label: 'Inicio', href: '#/' }, { label: 'Pensums' }])}
      <header class="page-head">
        <p class="eyebrow">${ICON.table} Planes de estudio</p>
        <h1>Pensums por carrera</h1>
      </header>
      <div class="callout callout-aviso" role="note">
        <b>Pensums representativos (estándar MESCyT), no oficiales.</b>
        El portal <code>pensum.asp</code> de UTESA no expone los planes de estudio a accesos externos,
        por lo que estos pénsum son <b>reconstrucciones representativas</b> del estándar dominicano
        (MESCyT). No los uses como documento oficial: cotejalos con el pénsum oficial de UTESA antes
        de cualquier uso formal.
      </div>
      <p class="page-sub">Cada carrera enlaza a su listado de materias por cuatrimestre con los recursos asociados.</p>
      <div class="area-grid">${cards}</div>
    `));
  }

  // --- vista: BUSCAR -------------------------------------------------------
  function renderBuscar(parts, params) {
    const q = (params.get('q') || '');
    const resultados = buscar(P.materias, q);
    const promptsHit = q.trim()
      ? (P.prompts || []).filter((p) => (p.texto || '').toLowerCase().includes(q.trim().toLowerCase())).slice(0, 12)
      : [];

    const matItems = resultados.map((m) => `
      <li>
        <a class="result-row" href="#/materia/${escAttr(m.carreraSlug)}/${escAttr(m.slug)}">
          <span class="result-main">
            <span class="result-name">${highlight(m.nombre, q)}</span>
            <span class="result-sub">${esc(m.carrera)}${m.cuatrimestre ? ` · Cuatrimestre ${esc(m.cuatrimestre)}` : ''}${m.codigo ? ` · ${esc(m.codigo)}` : ''}</span>
          </span>
          ${nivelTagsCompact(m)}
          <span class="mat-go" aria-hidden="true">${ICON.arrow}</span>
        </a>
      </li>`).join('');

    const promptItems = promptsHit.map((p) => {
      const mat = P.materias.find((m) => m.id === p.materiaId);
      const enlace = mat ? `#/materia/${escAttr(mat.carreraSlug)}/${escAttr(mat.slug)}` : '#/prompts';
      return `
        <li>
          <a class="result-row" href="${enlace}">
            <span class="result-main">
              <span class="result-name result-prompt">${highlight(snippet(p.texto, q), q)}</span>
              <span class="result-sub">${esc(p.carrera || '')}${mat ? ` · ${esc(mat.nombre)}` : ''}</span>
            </span>
            <span class="mat-go" aria-hidden="true">${ICON.arrow}</span>
          </a>
        </li>`;
    }).join('');

    h(shellMain(`
      ${crumbs([{ label: 'Inicio', href: '#/' }, { label: 'Buscar' }])}
      <header class="page-head">
        <p class="eyebrow">${ICON.search} Buscador</p>
        <h1>Resultados</h1>
      </header>
      <form class="filter-bar" role="search" data-buscarfilter>
        <label class="sr-only" for="q-buscar">Buscar materias y prompts</label>
        <span class="filter-ico" aria-hidden="true">${ICON.search}</span>
        <input id="q-buscar" name="q" type="search" autocomplete="off"
          value="${escAttr(q)}" placeholder="Buscar materia, carrera, tema o nivel AIAS…">
      </form>
      ${q.trim() ? '' : '<p class="empty">Escribí algo para buscar entre las materias y los prompts.</p>'}
      ${q.trim() ? `
        <section class="section" aria-labelledby="h-rmat">
          <div class="section-head"><h2 id="h-rmat">Materias</h2>
            <p class="result-count" role="status">${resultados.length} resultado${resultados.length === 1 ? '' : 's'} para «${esc(q)}».</p></div>
          ${resultados.length ? `<ul class="result-list" role="list">${matItems}</ul>` : '<p class="empty">Ninguna materia coincide.</p>'}
        </section>` : ''}
      ${q.trim() && promptItems ? `
        <section class="section" aria-labelledby="h-rprompt">
          <div class="section-head"><h2 id="h-rprompt">Prompts relacionados</h2></div>
          <ul class="result-list" role="list">${promptItems}</ul>
        </section>` : ''}
    `));
    const input = app.querySelector('[data-buscarfilter] input');
    if (input) {
      const form = input.closest('form');
      if (form) form.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = input.value.trim();
        location.hash = v ? `#/buscar?q=${encodeURIComponent(v)}` : '#/buscar';
      });
      let tid;
      input.addEventListener('input', () => {
        clearTimeout(tid);
        tid = setTimeout(() => {
          const v = input.value.trim();
          const nh = v ? `#/buscar?q=${encodeURIComponent(v)}` : '#/buscar';
          history.replaceState(null, '', nh);
          renderBuscar([], new URLSearchParams(v ? 'q=' + encodeURIComponent(v) : ''));
          const again = app.querySelector('[data-buscarfilter] input');
          if (again) { again.focus(); const L = again.value.length; again.setSelectionRange(L, L); }
        }, 160);
      });
    }
  }

  // --- not found / error ---------------------------------------------------
  function renderNotFound() {
    h(shellMain(`
      <div class="page-head" data-autofocus tabindex="-1">
        <h1>No encontramos esa página</h1>
        <p class="page-sub">El enlace puede estar desactualizado. Volvé al inicio para seguir navegando.</p>
        <p><a class="btn btn-em" href="#/">${ICON.home} Ir al inicio</a></p>
      </div>`));
  }
  function renderError(err) {
    h(shellMain(`
      <div class="page-head"><h1>Ocurrió un error al mostrar la vista</h1>
      <p class="page-sub mono">${esc(err && err.message ? err.message : String(err))}</p>
      <p><a class="btn btn-em" href="#/">Ir al inicio</a></p></div>`));
  }

  // --- resaltado de coincidencias -----------------------------------------
  function highlight(text, q) {
    const safe = esc(text);
    const t = (q || '').trim();
    if (!t) return safe;
    const rx = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return safe.replace(rx, '<mark>$1</mark>');
  }
  function snippet(text, q) {
    const t = (q || '').trim().toLowerCase();
    const lower = (text || '').toLowerCase();
    const i = t ? lower.indexOf(t) : -1;
    if (i < 0) return (text || '').slice(0, 140) + ((text || '').length > 140 ? '…' : '');
    const start = Math.max(0, i - 40);
    const end = Math.min(text.length, i + t.length + 80);
    return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
  }

  // --- copiar prompt -------------------------------------------------------
  // Convierte los <pre><code> generados por el build (dentro de la vista de
  // materia) en bloques .prompt con botón Copiar.
  function enhancePrompts() {
    const blocks = app.querySelectorAll('.prose pre');
    blocks.forEach((pre) => {
      if (pre.closest('.prompt')) return;
      const wrap = document.createElement('div');
      wrap.className = 'prompt';
      wrap.setAttribute('data-prompt', '');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.setAttribute('data-copy', '');
      btn.setAttribute('aria-label', 'Copiar prompt');
      btn.innerHTML = ICON.copy + '<span class="copy-label">Copiar</span>';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(btn);
      wrap.appendChild(pre);
    });
  }

  // Delegación: un único listener por render para todos los botones Copiar.
  function enableCopy() {
    app.querySelectorAll('[data-copy]').forEach((btn) => {
      if (btn.__wired) return;
      btn.__wired = true;
      btn.addEventListener('click', () => {
        const host = btn.closest('[data-prompt]') || btn.parentElement;
        const code = host ? host.querySelector('pre, code, .prompt-text') : null;
        const texto = code ? code.textContent : '';
        copyText(texto).then((ok) => flashCopy(btn, ok));
      });
    });
  }

  function copyText(texto) {
    // Clipboard API (https / algunos navegadores en file://) con fallback a
    // execCommand, que sí funciona desde file://.
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      return navigator.clipboard.writeText(texto).then(() => true, () => fallbackCopy(texto));
    }
    return Promise.resolve(fallbackCopy(texto));
  }

  function fallbackCopy(texto) {
    try {
      const ta = document.createElement('textarea');
      ta.value = texto;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, ta.value.length);
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function flashCopy(btn, ok) {
    const label = btn.querySelector('.copy-label');
    const prev = label ? label.textContent : '';
    btn.classList.add(ok ? 'is-copied' : 'is-failed');
    if (label) label.textContent = ok ? 'Copiado' : 'Copiá manual';
    const ico = btn.querySelector('.ico');
    const original = ico ? ico.outerHTML : '';
    if (ok && ico) ico.outerHTML = ICON.check;
    setTimeout(() => {
      btn.classList.remove('is-copied', 'is-failed');
      if (label) label.textContent = prev || 'Copiar';
      const cur = btn.querySelector('.ico');
      if (ok && cur && original) cur.outerHTML = original;
    }, 1600);
  }

  // --- buscadores del hub / topbar ----------------------------------------
  function wireSearchForms() {
    const hero = app.querySelector('[data-herosearch]');
    if (hero) {
      hero.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = hero.querySelector('input').value.trim();
        location.hash = v ? `#/buscar?q=${encodeURIComponent(v)}` : '#/buscar';
      });
    }
  }

  // El topbar existe en (casi) todas las vistas: cableamos su buscador tras cada render.
  function wireTopSearch() {
    const top = app.querySelector('[data-topsearch]');
    if (!top || top.__wired) return;
    top.__wired = true;
    top.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = top.querySelector('input').value.trim();
      location.hash = v ? `#/buscar?q=${encodeURIComponent(v)}` : '#/buscar';
    });
  }

  // --- sidebar responsive (colapsable) ------------------------------------
  function wireSidebar() {
    app.querySelectorAll('[data-sidetoggle]').forEach((btn) => {
      if (btn.__wired) return;
      btn.__wired = true;
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        const aside = btn.closest('.sidebar');
        if (aside) aside.classList.toggle('is-open', !expanded);
      });
    });
  }

  // marca la sección activa en la navegación superior
  function updateActiveNav() {
    const { parts } = parseHash();
    const key = parts[0] || '';
    app.querySelectorAll('[data-nav]').forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('data-nav') === key);
      if (a.getAttribute('data-nav') === key) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    wireTopSearch();
  }

  // --- arranque ------------------------------------------------------------
  window.addEventListener('hashchange', router);
  // Render del hash inicial (incluso si el documento ya cargó: el script va al final del body).
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', router, { once: true });
  } else {
    router();
  }
}
