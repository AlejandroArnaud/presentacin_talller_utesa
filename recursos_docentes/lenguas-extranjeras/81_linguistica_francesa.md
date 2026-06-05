# Lingüística Francesa

**Carrera:** Lenguas Extranjeras · **Cuatrimestre:** 7 · **Código:** LMO-251

## Sobre la materia

Estudio científico del sistema de la lengua francesa: fonología (oposiciones vocálicas, nasales, liaison y enchaînement), morfología, sintaxis, semántica y variación sociolingüística de la francofonía (Francia, Quebec, Haití, África). Competencias clave: transcribir en AFI, analizar estructuras con metalenguaje, distinguir registros y dialectos, y argumentar sobre fenómenos lingüísticos con evidencia y terminología precisa.

## Enfoque IA (taller)

La IA es un asistente de análisis lingüístico: propone transcripciones, glosa estructuras y genera corpus de ejemplos, pero el estudiante verifica cada dato, detecta el error y construye el argumento teórico. La integridad se diseña con análisis aplicados a corpus reales y defensa oral, nunca con detectores de IA.

## Prompts para el docente

```
Eres profesor de Lingüística Francesa. Planifica una unidad de 2 sesiones (75 min) sobre fonología del francés: vocales orales vs. nasales, semivocales y el fenómeno de la liaison. Incluye un disparador con audio auténtico, ejercicios de transcripción en AFI, errores típicos del hispanohablante (confusión /y/-/u/, /ø/-/œ/) y un cierre de discusión.
```

```
Genera un corpus de 12 oraciones en francés auténtico (prensa francófona, Quebec, África) que ilustren tres fenómenos sintácticos: dislocación, inversión sujeto-verbo y "ne" expletivo. Para cada una, marca el fenómeno y deja 2 líneas en blanco para que el estudiante lo glose.
```

```
Crea una rúbrica de 4 criterios para evaluar un análisis morfosintáctico escrito de un párrafo francés. Niveles: Logrado / En proceso / Inicial. Foco en uso correcto del metalenguaje, precisión del análisis, identificación de variación y claridad argumentativa.
```

```
Toma este ejercicio de transcripción fonética y dame tres versiones: una para quien recién aprende el AFI, una de nivel medio y una de reto con liaison facultativa y elisión. Mantén el mismo objetivo: transcribir francés hablado.
```

```
Formula 8 preguntas socráticas para debatir si el francés de Haití y el criollo haitiano son lenguas distintas o un continuum. Que cada pregunta obligue a usar criterios lingüísticos (inteligibilidad mutua, gramática, prestigio) y a matizar.
```

## Ejercicios y actividades con IA

- **Auditoría de transcripción.** *Objetivo:* dominar el AFI. *Estudiante:* pide a Claude que transcriba 5 palabras francesas en AFI, verifica cada una contra Forvo/Larousse y corrige los errores de la IA explicando por qué. *IA:* genera la propuesta falible a auditar.
- **Glosa con criterio.** *Objetivo:* analizar sintaxis. *Estudiante:* da una oración compleja, pide a Gemini un análisis sintáctico y lo evalúa: marca qué es correcto, qué es dudoso y qué falta. *IA:* ofrece el borrador de análisis.
- **Cazador de calcos teóricos.** *Objetivo:* metalenguaje preciso. *Estudiante:* pide a ChatGPT una definición de "morfema" y "liaison" y la contrasta con el manual, señalando imprecisiones. *IA:* produce el texto a verificar.

## Evaluaciones auténticas

- **Análisis de corpus aplicado (defensa oral).** El estudiante elige un texto francófono real, lo analiza por escrito (fonología o sintaxis) y defiende su análisis 8 min respondiendo preguntas. **AIAS Nivel 2 (IA para explorar, no para el producto final):** *Mini-rúbrica:* corrección del análisis / dominio del metalenguaje / uso de evidencia del corpus / solidez en la defensa.
- **Informe de variación francófona con bitácora.** Compara un rasgo lingüístico en dos variedades (p. ej. Francia vs. Quebec) declarando qué consultó a la IA. **AIAS Nivel 3 (IA asistida, declarada):** *Mini-rúbrica:* rigor de la comparación / fuentes verificadas / honestidad del uso de IA / claridad expositiva.

## Recurso interactivo en HTML

Un entrenador de transcripción fonética francesa con teclado AFI y autoevaluación.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS, sin librerías ni internet) titulado "Transcription IPA — Français". Muestra una palabra francesa de una lista de 20, ofrece un teclado en pantalla con los símbolos AFI del francés (incluidas vocales nasales y semivocales), el estudiante construye la transcripción y recibe feedback inmediato comparando con la respuesta correcta. Lleva puntaje y usa speechSynthesis en francés para pronunciar la palabra. Diseño limpio en azul/blanco, botones grandes.
```

## Notas

- Verifica toda transcripción y dato dialectal con fuentes fiables (Larousse, Le Robert, Forvo, atlas lingüísticos); la IA inventa símbolos AFI y atribuye rasgos a variedades equivocadas.
- No subas grabaciones ni textos de estudiantes con nombres completos; usa iniciales o seudónimos.
- Ancla la variación al contexto de Dajabón: la frontera con Haití (francés y criollo) ofrece un laboratorio sociolingüístico vivo para estudiar contacto de lenguas y préstamos.
