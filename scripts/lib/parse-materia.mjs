import { marked } from 'marked';

// Extrae el primer título H1, los metadatos en negrita, secciones ## y bloques ```.
export function parseMateria(md, { carreraSlug, file }) {
  const nombre = (md.match(/^#\s+(.+)$/m)?.[1] || '').trim();
  // El separador entre metadatos varía en el corpus: '·' (middle dot) o '—' (em dash).
  // 'Código' aparece a veces sin tilde ('Codigo'); toleramos ambas formas.
  const meta = md.match(/\*\*Carrera:\*\*\s*(.+?)\s*[·—]\s*\*\*Cuatrimestre:\*\*\s*(.+?)\s*[·—]\s*\*\*C[óo]digo:\*\*\s*(.+)/);
  const carrera = meta?.[1]?.trim() || '';
  const cuatrimestre = meta?.[2]?.trim() || '';
  const codigo = meta?.[3]?.trim() || '';

  // Secciones por encabezado ##
  const sections = {};
  const re = /^##\s+(.+)$/gm; let mm;
  const marks = [];
  while ((mm = re.exec(md))) marks.push({ title: mm[1].trim(), start: mm.index, contentStart: mm.index + mm[0].length });
  marks.forEach((s, i) => { s.end = i + 1 < marks.length ? marks[i + 1].start : md.length; sections[s.title] = md.slice(s.contentStart, s.end).trim(); });

  // Prompts: bloques ``` dentro de "Prompts para el docente" + recurso HTML
  // (\r?\n tolera CRLF, presente en los .md del repo)
  const prompts = [...md.matchAll(/```[\w]*\r?\n([\s\S]*?)```/g)].map(x => x[1].trim());

  // Evaluaciones: dentro de "Evaluaciones auténticas", cada ítem abre con un
  // **Título** y declara un nivel AIAS en una de tres grafías presentes en el corpus:
  //   1) "AIAS Nivel N" / "AIAS: Nivel N" (con o sin dos puntos, may/min)
  //   2) "Nivel AIAS: N" (invertido, en itálicas)
  // El marcador puede ir dentro del propio **Título** o más adelante en el ítem.
  // El título de la sección varía ('auténticas', 'autenticas', 'autênticas');
  // la localizamos por el prefijo normalizado "Evaluaci".
  const evalKey = Object.keys(sections).find(k => /^evaluaci/i.test(k));
  const evalSection = evalKey ? sections[evalKey] : '';
  const evaluaciones = [];
  if (evalSection) {
    // Partir en ítems: por guion de lista al inicio de línea, o por párrafo que abre con **negrita**.
    const items = evalSection.split(/\r?\n(?=[-*]\s+\*\*|\*\*[^*])/);
    for (const raw of items) {
      const item = raw.trim();
      if (!item) continue;
      const tituloM = item.match(/\*\*(.+?)\*\*/s);
      // Toleramos '*' (negrita), ':' y espacios entre AIAS y Nivel: cubre
      // "AIAS Nivel N", "AIAS: Nivel N", "**AIAS:** Nivel N" y "Nivel AIAS: N".
      const nivelM = item.match(/AIAS[\s*:]*Nivel[\s*:]*(\d)/i) || item.match(/Nivel\s+AIAS[\s*:]*(\d)/i);
      if (!nivelM) continue;
      let titulo = (tituloM?.[1] || '').trim();
      // Si el marcador AIAS quedó dentro del propio **negrita**, recortar desde el
      // paréntesis que lo abre (p. ej. "Título (AIAS Nivel 2 — …)." -> "Título.").
      const aiasIn = titulo.match(/^(.*?)\s*\(?\s*(?:AIAS|Nivel\s+AIAS)\b/i);
      if (aiasIn && /(?:AIAS|Nivel\s+AIAS)/i.test(titulo)) {
        titulo = aiasIn[1].trim().replace(/[\s(]+$/, '');
        if (!/[.!?]$/.test(titulo)) titulo += '.';
      }
      evaluaciones.push({ titulo, nivelAIAS: Number(nivelM[1]) });
    }
  }

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
