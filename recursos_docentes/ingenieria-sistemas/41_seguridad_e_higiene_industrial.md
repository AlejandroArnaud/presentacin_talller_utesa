# Seguridad e Higiene Industrial

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 5 · **Código:** IID-420

## Sobre la materia

Principios de prevención de riesgos laborales: identificación de peligros, evaluación de riesgos, ergonomía, factores físicos y eléctricos, normativa dominicana (SISTAP/Ministerio de Trabajo), señalización, EPP y planes de emergencia. Competencias clave: detectar riesgos en un entorno de trabajo (incluido centros de datos y oficinas TI), proponer controles y elaborar protocolos de seguridad.

## Enfoque IA (taller)

La IA ayuda a redactar matrices de riesgo, listas de chequeo y procedimientos que el estudiante debe ajustar a la normativa dominicana y al sitio real; las normas las verifica el estudiante. Integridad por diseño: se evalúan inspecciones de campo, matrices aplicadas y simulacros, no documentos genéricos; sin detectores de IA.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre evaluación de riesgos en un centro de datos / sala de servidores para principiantes. Incluye objetivo, lista de peligros típicos (eléctricos, térmicos, ergonómicos, incendio), un caso de ejemplo y un ejercicio guiado de matriz de riesgo con su solución.
```

```
Genera 5 escenarios laborales reales con riesgos a identificar (un técnico cableando un rack, una oficina con sillas inadecuadas, un taller con cortocircuito potencial, una bodega del recinto). Para cada uno lista peligros, posibles consecuencias y un control sugerido.
```

```
Crea una rúbrica (1-4) para evaluar una matriz de identificación y evaluación de riesgos elaborada por un estudiante: identificación completa de peligros, valoración probabilidad/severidad, pertinencia de los controles, referencia a normativa y claridad. Formato tabla.
```

```
Toma el ejercicio "evaluar riesgos de una sala de cómputo" y diferéncialo en tres niveles: con la lista de peligros ya dada, con pistas sobre categorías de riesgo, y abierto exigiendo proponer un plan de control priorizado. Mantén el objetivo.
```

```
Dame 6 preguntas de discusión para que los estudiantes justifiquen cómo priorizaron los riesgos y por qué un control administrativo no basta sin uno de ingeniería, sin darles la respuesta.
```

## Ejercicios y actividades con IA

- **Audita el procedimiento de la IA.** Objetivo: aplicar normativa. La IA redacta un procedimiento de seguridad genérico; el estudiante lo contrasta con la normativa dominicana y lo corrige para que sea aplicable y legal. Rol de la IA: borrador a auditar.
- **De peligro a control.** Objetivo: razonar la jerarquía de controles. El estudiante describe un riesgo real, pide a la IA varias opciones de control y selecciona/justifica la mejor según la jerarquía (eliminación > sustitución > ingeniería > administrativo > EPP). Rol de la IA: generar alternativas a evaluar.

## Evaluaciones auténticas

- **Inspección de seguridad de un espacio real con informe (AIAS Nivel 2: IA para organizar el informe).** El estudiante inspecciona un laboratorio u oficina del recinto, levanta hallazgos con evidencia y propone controles; la IA solo estructura el informe. Rúbrica: (1) hallazgos reales y completos, (2) valoración del riesgo, (3) pertinencia y jerarquía de controles, (4) sustento normativo.
- **Simulacro/charla de seguridad oral (AIAS Nivel 1: sin IA en vivo).** El estudiante dirige una breve charla de cinco minutos sobre un riesgo y su prevención ante la clase. Rúbrica: (1) exactitud técnica, (2) claridad y orden, (3) aplicabilidad al contexto, (4) manejo de preguntas.

## Recurso interactivo en HTML

Idea: una calculadora de nivel de riesgo que cruza probabilidad y severidad y muestra el color/prioridad resultante.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS puro, sin librerías) llamado "Matriz de Riesgo Interactiva". El usuario elige probabilidad (1-5) y severidad (1-5); la página calcula el nivel de riesgo, lo ubica en una matriz coloreada (verde/amarillo/rojo) e indica la prioridad de acción. En español, funciona sin internet.
```

## Notas

Verificación: la IA puede citar normas inexistentes o de otros países; valida siempre contra la legislación dominicana vigente y el material del curso. Privacidad: no incluir nombres ni datos de personas reales en los informes de inspección. Contexto Dajabón: usar espacios reales del recinto y empresas locales de la zona fronteriza como escenarios de inspección.
