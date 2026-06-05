# Pensamiento Lógico

**Carrera:** Lenguas Extranjeras · **Cuatrimestre:** 3 · **Código:** MAT-306

## Sobre la materia

Introduce el razonamiento formal e informal: proposiciones, conectivos lógicos, tablas de verdad, validez de argumentos, silogismos, falacias, deducción e inducción, y resolución de problemas. Competencias clave: pensar con rigor, detectar argumentos inválidos y estructurar conclusiones bien fundamentadas.

## Enfoque IA (taller)

La IA es un generador de argumentos y problemas que el estudiante audita: la IA propone razonamientos (a veces falaces) y el estudiante verifica su validez, detecta la falacia y la corrige. La integridad se diseña con resolución en pizarra y justificación oral del razonamiento, no con detección de texto.

## Prompts para el docente

```
Eres docente de Pensamiento Lógico. Planifica una clase de 60 min sobre falacias informales (ad hominem, falsa causa, hombre de paja, generalización apresurada). Incluye una explicación con ejemplos cotidianos, una dinámica de identificación en grupo y un cierre. Audiencia: estudiantes de Lenguas Extranjeras sin base matemática fuerte.
```

```
Genera 8 argumentos cortos basados en situaciones reales (debates de redes sociales, publicidad, política local de Dajabón, conversaciones de familia): la mitad válidos y la mitad con una falacia distinta. Para cada uno indica si es válido y, si no, qué falacia contiene.
```

```
Crea una rúbrica de 4 criterios para evaluar un análisis escrito donde el estudiante descompone un argumento real en premisas y conclusión y juzga su validez. Niveles: Logrado / En proceso / Inicial. Criterios: identificación de premisas, evaluación de validez, detección de falacias, claridad.
```

```
Toma este ejercicio de tablas de verdad y dame tres versiones: una con un solo conectivo para quien recién empieza, una con dos conectivos, y una de reto con condicional y bicondicional combinados. Mantén el mismo formato.
```

```
Genera 6 preguntas socráticas para discutir en clase la diferencia entre "el argumento es válido" y "la conclusión es verdadera", con ejemplos que tengan premisas falsas pero forma válida.
```

## Ejercicios y actividades con IA

- **Auditoría de argumentos.** *Objetivo:* detectar falacias. *Estudiante:* pide a ChatGPT que defienda una postura con un argumento persuasivo, luego identifica las falacias o saltos lógicos y las explica. *IA:* produce el argumento; el estudiante lo juzga.
- **Verificador de tablas de verdad.** *Objetivo:* comprobar validez. *Estudiante:* resuelve una tabla a mano, luego pide a Gemini su versión y contrasta para hallar quién erró y por qué. *IA:* da una segunda opinión, no la respuesta única.
- **Construye la falacia.** *Objetivo:* comprender las falacias creándolas. *Estudiante:* pide a la IA solo un tema y construye él mismo un argumento falaz, luego lo corrige. *IA:* da el disparador, no la falacia.

## Evaluaciones auténticas

- **Análisis de un argumento real (aplicada).** El estudiante elige un anuncio o publicación real, lo descompone en premisas y conclusión, y juzga su validez por escrito. **AIAS Nivel 2 (IA para explorar ideas, declarado).** *Mini-rúbrica:* identificación de premisas / juicio de validez / detección de falacia / claridad.
- **Defensa oral en pizarra (de proceso).** El estudiante resuelve un problema de lógica en la pizarra y explica cada paso ante preguntas del docente. **AIAS Nivel 1 (Sin IA en el examen).** *Mini-rúbrica:* corrección del procedimiento / justificación de cada paso / manejo de preguntas / notación.

## Recurso interactivo en HTML

Un generador interactivo de tablas de verdad con verificación.

```
Crea UN archivo .html autocontenido (sin internet, sin librerías) que muestre 8 ejercicios de tablas de verdad. Para cada proposición (con AND, OR, NOT, condicional) el usuario marca verdadero/falso en cada fila; el programa corrige al instante y resalta los errores con la fila correcta. Al final da el puntaje. Diseño limpio y claro.
```

## Notas

- Verifica siempre las tablas de verdad y la validez que afirma la IA: comete errores lógicos sutiles, sobre todo con el condicional.
- No es necesario subir datos de estudiantes; si usan ejemplos de redes, evita exponer nombres de personas reales.
- Usa debates y publicidad del contexto de Dajabón para que el análisis lógico se sienta aplicado y cercano.
