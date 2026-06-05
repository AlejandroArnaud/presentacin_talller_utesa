# Lógica Computacional

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 2 · **Código:** INF-204

## Sobre la materia

Fundamentos lógicos de la computación: lógica proposicional y de predicados, tablas de verdad, equivalencias, reglas de inferencia, álgebra booleana y su aplicación a circuitos y condiciones de programación. Competencias clave: razonar formalmente, demostrar validez de argumentos y modelar condiciones lógicas correctas.

## Enfoque IA (taller)

La IA propone demostraciones y simplificaciones que el estudiante debe verificar paso a paso, detectando errores formales. La integridad se diseña con resolución en pizarra y justificación oral de cada paso, sin detectores de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre "reglas de inferencia (modus ponens, modus tollens, silogismo)" para principiantes: introducción intuitiva, 3 ejemplos resueltos y un set de práctica con solución. Indica errores frecuentes de los estudiantes.
```

```
Genera 6 argumentos en lenguaje natural (algunos válidos, otros falaces) sobre situaciones cotidianas, para que los estudiantes los formalicen y evalúen su validez con tablas de verdad. Incluye la clave de respuestas aparte.
```

```
Crea una rúbrica (1-4) para evaluar una demostración lógica: formalización correcta del enunciado, reglas aplicadas válidas, secuencia de pasos justificada y conclusión correcta. Formato tabla.
```

```
Adapta este ejercicio de simplificación booleana a tres niveles (guiado con pasos parciales, intermedio, avanzado con expresión más larga) para diferenciar por nivel, manteniendo el objetivo.
```

```
Dame 6 preguntas socráticas que obliguen al estudiante a justificar por qué un paso de una demostración es válido y a detectar dónde se rompería el razonamiento.
```

## Ejercicios y actividades con IA

- **Demostración auditada.** Objetivo: validar inferencias. El estudiante pide a la IA una demostración y revisa cada paso marcando si la regla aplicada es correcta; corrige los pasos erróneos. Rol de la IA: producir la prueba a verificar.
- **De lenguaje natural a lógica.** Objetivo: formalizar. El estudiante traduce un argumento a fórmulas a mano, pide la versión de la IA y explica las diferencias y cuál es correcta. Rol de la IA: contraste para discutir.
- **Detector de falacias.** Objetivo: razonar. El estudiante solicita a la IA un argumento "convincente pero inválido", construye su tabla de verdad y demuestra la falacia. Rol de la IA: generar el caso a refutar.

## Evaluaciones auténticas

- **Demostración en pizarra con preguntas (AIAS Nivel 1 – Sin IA en la prueba).** El estudiante resuelve y explica cada paso respondiendo "¿por qué es válido esto?". Rúbrica: formalización, validez de los pasos, justificación oral, conclusión correcta.
- **Reto "encuentra el error" con bitácora (AIAS Nivel 2 – IA para generar el material).** El docente usa IA para crear demostraciones con fallas; el estudiante identifica el error y lo corrige documentando su razonamiento. Rúbrica: detección del error, corrección válida, claridad de la explicación, rigor formal.

## Recurso interactivo en HTML

Idea: un generador de tablas de verdad interactivo para que el estudiante compruebe equivalencias lógicas.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado "Tablas de Verdad Interactivas". El usuario escribe una expresión con variables p, q, r y operadores AND, OR, NOT, IMPLICA; al pulsar "Generar", muestra la tabla de verdad completa e indica si es tautología, contradicción o contingencia. En español, funciona offline.
```

## Notas

Verifica cada demostración: la IA puede aplicar mal una regla o "saltar" pasos inválidos con apariencia correcta. No subir datos personales de estudiantes a las herramientas. Usa ejemplos cercanos a Dajabón (reglas de comercio, condiciones de un trámite local) para que la formalización lógica parta de situaciones reconocibles.
