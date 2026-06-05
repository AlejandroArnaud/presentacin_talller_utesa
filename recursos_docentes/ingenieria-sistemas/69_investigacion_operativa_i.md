# Investigación Operativa I

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 8 · **Código:** IID-725

## Sobre la materia
Introduce los modelos cuantitativos para la toma de decisiones: formulación de problemas de programación lineal, método gráfico y símplex, análisis de sensibilidad, problemas de transporte y asignación, y nociones de teoría de colas e inventarios. Competencias clave: traducir una situación real a un modelo matemático, resolverlo, interpretar la solución óptima y comunicar recomendaciones fundamentadas.

## Enfoque IA (taller)
La IA agiliza el planteo del modelo y el cálculo, pero el estudiante debe validar las restricciones, interpretar la solución y defender por qué es óptima; el criterio cuantitativo no se delega. La integridad se diseña con datos cambiados en vivo y defensa oral del modelo, sin detectores de IA.

## Prompts para el docente
```
Eres profesor de Investigación Operativa I. Planifica una unidad de 3 sesiones sobre programación lineal: formulación, método gráfico y símplex. Incluye objetivos, un caso motivador, ejemplos resueltos paso a paso y ejercicios graduados con solución.
```
```
Genera 5 problemas REALES de optimización con contexto dominicano y de Dajabón: mezcla de productos en un colmado fronterizo, asignación de rutas de transporte hacia Santiago, planificación de turnos de personal, dieta de mínimo costo y mezcla de cultivos. Da datos, función objetivo y restricciones; pon la solución aparte.
```
```
Crea una rúbrica (1-4) para evaluar la formulación y resolución de un modelo de programación lineal: correcta definición de variables, función objetivo, restricciones, interpretación del óptimo y análisis de sensibilidad. Formato tabla.
```
```
Diferencia un problema de transporte en tres niveles: con tabla de costos casi completa, con datos parciales que el estudiante debe completar, y abierto exigiendo plantear una restricción adicional de capacidad. Mantén el mismo objetivo.
```
```
Dame 6 preguntas socráticas para que los estudiantes razonen por qué una solución es óptima, qué pasa si cambia un coeficiente y cuándo un modelo lineal NO representa bien la realidad.
```

## Ejercicios y actividades con IA
- **Audita el modelo de la IA.** Objetivo: validar formulaciones. El docente pide a la IA un modelo de PL con una restricción mal planteada; el estudiante lo detecta, lo corrige y reinterpreta el óptimo. Rol de la IA: generar el modelo con un error a diagnosticar.
- **Del enunciado al modelo, sin copiar.** Objetivo: modelar. El estudiante formula sus propias variables y restricciones, luego pide a la IA otra formulación y justifica cuál representa mejor el problema. Rol de la IA: alternativa para contrastar.
- **Interpreta la solución.** Objetivo: leer resultados. El estudiante resuelve (a mano o con Solver), pide a la IA que interprete el análisis de sensibilidad y verifica si la interpretación es correcta. Rol de la IA: borrador a verificar.

## Evaluaciones auténticas
- **Caso de optimización con datos cambiados en vivo (situada + oral).** El estudiante formula y resuelve un caso de Dajabón; el docente altera un coeficiente o agrega una restricción en el momento y pide rehacer la interpretación. *AIAS Nivel 2 (IA solo para estudio previo, declarado).* Rúbrica: formulación correcta, resolución, interpretación del óptimo, respuesta a la variación.
- **Informe técnico de recomendación (proceso + aplicada).** Modelo de un problema real con bitácora de qué consultó a la IA y por qué; cierra con una recomendación al "tomador de decisiones". *AIAS Nivel 3 (IA asistida declarada).* Rúbrica: validez del modelo, análisis de sensibilidad, claridad de la recomendación, honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un graficador de programación lineal que dibuja la región factible y el óptimo de dos variables.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS, sin librerías externas) llamado "Región Factible". El usuario ingresa la función objetivo y hasta 4 restricciones de dos variables; el programa dibuja en un canvas la región factible, los vértices y marca el punto óptimo con su valor. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica los cálculos: la IA puede equivocarse en el símplex o en el análisis de sensibilidad y presentar resultados plausibles pero erróneos, útiles como ejercicio de detección. No subir datos reales de empresas ni trabajos identificables de estudiantes. Adapta a Dajabón con casos del comercio fronterizo, transporte hacia Santiago, agricultura y servicios locales; permite resolver a mano o con hoja de cálculo según el acceso a equipos.
