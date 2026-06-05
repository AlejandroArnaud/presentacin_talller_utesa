# Producción Escrita en Inglés

**Carrera:** Lenguas Extranjeras · **Cuatrimestre:** 6 · **Código:** ING-604

## Sobre la materia

Curso de escritura académica y funcional en inglés (nivel B1-B2): párrafo y ensayo, cohesión y coherencia, conectores, registro formal e informal, proceso de redacción (planificar, borrador, revisar, editar) y géneros como email profesional, carta de presentación, reseña y ensayo argumentativo. Competencias clave: escribir textos claros y organizados, autocorregir y citar fuentes con honestidad.

## Enfoque IA (taller)

La IA es un editor que sugiere, no el autor que escribe. El estudiante produce su propio borrador y usa la IA para detectar fallos de cohesión, vocabulario o gramática, decidiendo qué corrección acepta y por qué. La integridad se diseña evaluando el proceso (borradores fechados, decisiones de revisión) y el desempeño en clase, nunca con detectores.

## Prompts para el docente

```
Eres profesor de escritura en inglés B1-B2 para hispanohablantes. Planifica una unidad de 4 sesiones sobre el ensayo argumentativo de 5 párrafos. Para cada sesión define objetivo, modelo de texto, mini-lección de lenguaje (tesis, topic sentences, conectores, conclusión) y un producto escrito. Cierra con peer review estructurado.
```

```
Genera 6 prompts de escritura auténticos y cercanos a estudiantes de Dajabón (comercio fronterizo, turismo del norte, migración, bilingüismo) para ensayos argumentativos B2. Para cada prompt da la pregunta, dos posturas posibles y tres puntos de evidencia que el estudiante podría desarrollar.
```

```
Crea una rúbrica analítica de 4 criterios para un ensayo argumentativo en inglés B2: tesis y argumentación, organización y cohesión, gramática y vocabulario, mecánica y citación. Niveles: Excellent / Proficient / Developing / Beginning, con descriptores observables en cada celda.
```

```
Toma esta tarea de "escribir un email formal de solicitud de empleo" y genera tres versiones por nivel: A2-B1 (con frases modelo), B1-B2 (semi-guiada) y B2+ (solo el escenario y la rúbrica). Mantén el mismo objetivo comunicativo.
```

```
Dame 8 preguntas socráticas en inglés para una discusión de revisión entre pares sobre un ensayo argumentativo, que obliguen al autor a justificar su tesis, su evidencia y su elección de conectores en lugar de solo corregir ortografía.
```

## Ejercicios y actividades con IA

- **Editor crítico, no ghostwriter.** *Objetivo:* mejorar cohesión. *Estudiante:* escribe su párrafo, pide a la IA "señala 3 problemas de cohesión sin reescribir mi texto" y aplica solo las mejoras que entiende y justifica. *IA:* diagnostica; el estudiante decide.
- **Banco de errores típicos.** *Objetivo:* reducir errores L1. *Estudiante:* pide a Gemini un párrafo B1 con errores típicos del hispanohablante (false friends, orden de adjetivos, artículos) y los corrige explicando la regla. *IA:* genera el texto fallado; el criterio es del estudiante.
- **Dos voces, mismo tema.** *Objetivo:* registro. *Estudiante:* pide a la IA un mismo mensaje en versión formal e informal, compara y reescribe ambos para un destinatario real. *IA:* contrasta; el estudiante adapta.

## Evaluaciones auténticas

- **Portafolio de proceso con conferencia de escritura.** El estudiante entrega borrador 1, versión IA-comentada con sus decisiones marcadas y versión final; en una mini-conferencia oral explica dos revisiones que hizo. **AIAS Nivel 3 (IA para feedback, uso declarado):** *Mini-rúbrica:* evolución entre borradores / calidad del texto final / justificación de las revisiones / honestidad del registro de IA.
- **Ensayo in-class manuscrito sobre un prompt local.** Escritura en clase (40 min) a partir de un caso de Dajabón, sin dispositivos. **AIAS Nivel 1 (Sin IA):** *Mini-rúbrica:* claridad de tesis / organización / corrección gramatical / vocabulario apropiado.

## Recurso interactivo en HTML

Un revisor de ensayos que resalta conectores y muestra un checklist de cohesión.

```
Crea UN archivo .html autocontenido (sin librerías externas) donde el estudiante pega un ensayo en inglés en un textarea y, al presionar "Analyze", la página resalta los conectores hallados (linking words de una lista), cuenta párrafos y oraciones, y muestra un checklist editable de cohesión (tesis, topic sentences, conclusión). Todo el procesamiento es en JavaScript local. Diseño limpio, instrucciones en inglés.
```

## Notas

- Verifica las sugerencias de la IA con un diccionario (Cambridge/Collins); puede proponer colocaciones poco naturales o "americanizar" sin avisar.
- No subas textos con datos personales de estudiantes a las plataformas; pide trabajar con iniciales o seudónimos.
- Ancla los prompts a temas reales de Dajabón (frontera, comercio, turismo, ONG) para que escribir en inglés tenga propósito comunicativo cercano.
