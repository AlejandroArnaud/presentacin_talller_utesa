// Extrae el contenido del dossier del taller (Taller_IA_UTESA_Dajabon.html) para
// reconstruirlo dentro del portal con la identidad nueva. NO copia el <style> índigo
// original: solo devuelve las secciones (id, título, html) y el quiz estructurado,
// que la UI del portal vuelve a estilar con sus propias clases.
//
// Estructura del HTML fuente: dentro de cada <section class="part">, los apartados
// son encabezados <h2 id="inv-N|tal-N|mat-N">Título</h2>; el contenido de cada
// apartado va desde ese <h2> hasta el siguiente <h2 id=…> o el cierre </section>.
// El quiz de demostración vive en <div class="quiz" id="demoQuiz"> con un <div class="q"
// data-answer="x"> por pregunta y <label><input value="x">…</label> por opción.

const SECTION_PREFIXES = ['inv', 'tal', 'mat'];

/** Decodifica las entidades HTML básicas que aparecen en los textos de opción/título. */
function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ');
}

/** Quita las etiquetas HTML de un fragmento (para títulos y opciones de quiz). */
function stripTags(s) {
  return decodeEntities(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}

/**
 * @param {string} html  Contenido completo de Taller_IA_UTESA_Dajabon.html
 * @returns {{ secciones: {id:string,titulo:string,html:string}[], quiz: object[] }}
 */
export function parseDossier(html) {
  const secciones = [];

  // Localizar todos los <h2 id="prefijo-N">Título</h2> que nos interesan.
  const idRe = /<h2\s+id="((?:inv|tal|mat)-\d+)"\s*>([\s\S]*?)<\/h2>/gi;
  const heads = [];
  let m;
  while ((m = idRe.exec(html))) {
    heads.push({ id: m[1], titulo: stripTags(m[2]), start: m.index, contentStart: m.index + m[0].length });
  }

  for (let i = 0; i < heads.length; i++) {
    const head = heads[i];
    // El contenido termina en el siguiente <h2 id=…> de interés, en cualquier otro
    // <h2 …> (no etiquetado), o en el cierre </section> del bloque que lo contiene.
    const next = heads[i + 1]?.start ?? html.length;
    const slice = html.slice(head.contentStart, next);
    // Cortar en el primer </section> o <h2 …> sin id de interés que aparezca dentro.
    const cutSection = slice.search(/<\/section>/i);
    const cutH2 = slice.search(/<h2\b/i);
    let end = slice.length;
    if (cutSection !== -1) end = Math.min(end, cutSection);
    if (cutH2 !== -1) end = Math.min(end, cutH2);
    const body = slice.slice(0, end).trim();
    secciones.push({ id: head.id, titulo: head.titulo, html: body });
  }

  return { secciones, quiz: parseQuiz(html) };
}

/** Extrae el quiz de demostración como datos estructurados (no markup). */
function parseQuiz(html) {
  const quizBlock = html.match(/<div\s+class="quiz"\s+id="demoQuiz"\s*>([\s\S]*?)<\/div>\s*(?=<p>|<div\s+class="prompt")/i);
  const scope = quizBlock?.[1] ?? html;
  const preguntas = [];
  const qRe = /<div\s+class="q"\s+data-answer="([a-z])"\s*>([\s\S]*?)(?=<div\s+class="q"|<button|<\/div>\s*$)/gi;
  let q;
  while ((q = qRe.exec(scope))) {
    const correcta = q[1];
    const inner = q[2];
    const texto = stripTags((inner.match(/<p\s+class="q-text"\s*>([\s\S]*?)<\/p>/i)?.[1]) || '');
    const opciones = [];
    const optRe = /<label>\s*<input[^>]*value="([a-z])"[^>]*>\s*([\s\S]*?)<\/label>/gi;
    let o;
    while ((o = optRe.exec(inner))) {
      opciones.push({ valor: o[1], texto: stripTags(o[2]), correcta: o[1] === correcta });
    }
    if (texto && opciones.length) preguntas.push({ texto, correcta, opciones });
  }
  return preguntas;
}
