# Análisis de Sistemas

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 3 · **Código:** INF-121

## Sobre la materia
Fundamentos del análisis de sistemas de información: levantamiento de requerimientos, modelado de procesos y datos (diagramas de flujo de datos, casos de uso, diagrama entidad-relación), estudio de factibilidad y documentación. Competencias clave: entender el problema de un usuario, traducirlo a requerimientos claros y modelar la solución antes de programarla.

## Enfoque IA (taller)
La IA propone requerimientos y diagramas plausibles pero no conoce al usuario real: el estudiante debe entrevistar, validar y corregir el modelo contra el contexto concreto. Integridad por diseño porque el análisis se ancla a un caso real y a su defensa, no a la detección de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre levantamiento de requerimientos para estudiantes
de Ingeniería en Sistemas. Incluye la diferencia entre requerimientos funcionales y no
funcionales, técnicas de entrevista, y un ejercicio sobre un caso local (sistema de
inventario para un colmado de Dajabón).
```

```
Genera 4 casos reales de organizaciones de Dajabón que necesitarían un sistema de
información (una farmacia con su inventario, una escuela con sus calificaciones, un
taller con sus órdenes de servicio, una cooperativa con sus socios). Describe el contexto
y los actores, sin proponer la solución.
```

```
Crea una rúbrica de 4 criterios (escala 1 a 4, en español, formato tabla) para evaluar un
documento de análisis: claridad y completitud de los requerimientos, correctitud del
modelo (DFD, casos de uso o ER), coherencia entre el modelo y el problema, y calidad de
la documentación.
```

```
Toma el tema "diagrama entidad-relación" y propón tres niveles de ejercicio: básico
(identificar entidades y atributos de un caso dado), intermedio (definir relaciones y
cardinalidades) y avanzado (modelar un sistema completo a partir de una entrevista).
```

```
Dame 8 preguntas socráticas que lleven al estudiante a justificar POR QUÉ definió cierta
entidad, relación o requerimiento, y a detectar requerimientos faltantes o ambiguos en un
enunciado.
```

## Ejercicios y actividades con IA
- **Valida los requerimientos de la IA.** Objetivo: pensamiento crítico. El estudiante describe un caso real, pide a la IA una lista de requerimientos y la contrasta con una entrevista real al usuario, marcando qué falta o sobra. Rol de la IA: borrador que el estudiante valida contra la realidad.
- **Critica el modelo generado.** Objetivo: modelar con criterio. El estudiante pide a la IA un diagrama entidad-relación de un caso y detecta errores (cardinalidades mal puestas, entidades faltantes) corrigiéndolo. Rol de la IA: modelo imperfecto a auditar.
- **Entrevista simulada.** Objetivo: levantar requerimientos. La IA hace de "cliente" con un sistema en mente; el estudiante la entrevista con preguntas para extraer requerimientos y luego los documenta. Rol de la IA: usuario simulado, no analista.

## Evaluaciones auténticas
- **Documento de análisis de un caso real (AIAS Nivel 3 — IA asistida declarada).** El estudiante analiza una organización real de Dajabón y entrega requerimientos y modelos, declarando qué aportó la IA y qué validó él. Mini-rúbrica: (1) requerimientos completos y claros, (2) modelos correctos, (3) coherencia con el caso real, (4) declaración del uso de IA.
- **Defensa oral del análisis (AIAS Nivel 1 — sin IA).** El estudiante presenta su análisis y responde preguntas sobre por qué modeló así y qué pasaría si cambia un requerimiento. Mini-rúbrica: (1) dominio del caso, (2) justificación de las decisiones de modelado, (3) detección de requerimientos faltantes, (4) claridad al comunicar.

## Recurso interactivo en HTML
Tablero interactivo de requerimientos donde el estudiante clasifica tarjetas en funcionales y no funcionales y las prioriza.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que presente un
caso breve y una serie de requerimientos en tarjetas. El estudiante arrastra cada tarjeta a
"Funcional" o "No funcional" y le asigna una prioridad (alta/media/baja). Muestra un resumen
final con el conteo por categoría. En español, abre directo en el navegador.
```

## Notas
Verifica con el usuario real: la IA inventa requerimientos que suenan razonables pero no corresponden al contexto, por eso la entrevista es insustituible. No subir información sensible de las organizaciones analizadas a las herramientas. Usa casos de Dajabón (farmacias, escuelas, talleres, cooperativas) para que el análisis parta de necesidades reales y verificables.
