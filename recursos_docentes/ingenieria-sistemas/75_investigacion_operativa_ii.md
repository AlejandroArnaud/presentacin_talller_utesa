# Investigación Operativa II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** IID-830

## Sobre la materia

Profundiza en modelos avanzados de optimización y decisión: programación entera y por metas, teoría de colas, modelos de inventario, programación dinámica, cadenas de Markov y simulación. Competencias clave: formular un problema real como modelo matemático, resolverlo con software, e interpretar la solución para recomendar decisiones de gestión.

## Enfoque IA (taller)

La IA ayuda a formular el modelo, generar datos y explicar la teoría, pero el estudiante debe validar supuestos, verificar que la solución sea factible y defender la interpretación gerencial. La integridad se diseña pidiendo la formulación razonada y la defensa de resultados, no detectando IA.

## Prompts para el docente

```
Eres profesor de Investigación Operativa II. Planifica una clase de 2 horas sobre teoría de colas (modelo M/M/1). Incluye objetivos, una analogía cotidiana (una caja de banco), las fórmulas clave de Lq, Wq y rho, un ejemplo numérico resuelto y 3 ejercicios graduados.
```
```
Genera 4 casos reales de optimización para Dajabón: ruteo de un camión que abastece colmados, mezcla de producción de una panadería con recursos limitados, asignación de cajeros en horas pico del mercado fronterizo, y control de inventario de una farmacia. Da datos y la formulación esperada por separado.
```
```
Crea una rúbrica (1-4) para evaluar un modelo de programación lineal entera: claridad de variables de decisión, corrección de función objetivo y restricciones, factibilidad e interpretación de la solución, y recomendación gerencial.
```
```
Diferencia un ejercicio de programación dinámica (problema de la mochila) en tres niveles: con tabla parcialmente llena, con pistas sobre la recurrencia, y abierto con una restricción adicional. Mantén el mismo objetivo.
```
```
Dame 6 preguntas socráticas que lleven al estudiante a discutir cuándo la solución óptima de un modelo NO es la mejor decisión real (supuestos irreales, costos no modelados, factor humano).
```

## Ejercicios y actividades con IA

- **Audita el modelo de la IA.** Objetivo: validar supuestos. El estudiante pide a la IA la formulación de un caso, detecta restricciones faltantes o supuestos irreales y la corrige justificando. Rol de la IA: borrador de modelo a criticar.
- **Genera y resuelve con Solver.** Objetivo: pasar del modelo a la herramienta. La IA propone un escenario de inventario; el estudiante lo resuelve en Excel Solver o Python y contrasta su salida con la explicación de la IA. Rol de la IA: generador de escenario y referencia.
- **Interpreta la sensibilidad.** Objetivo: leer más allá del óptimo. El estudiante pide a la IA que explique un reporte de análisis de sensibilidad y luego decide, con sus palabras, qué recurso conviene ampliar. Rol de la IA: tutor del concepto.

## Evaluaciones auténticas

- **Estudio de caso de optimización local (aplicada, AIAS Nivel 3 – IA asistida declarada).** El estudiante modela un problema real de un negocio de Dajabón, lo resuelve con software y entrega informe + bitácora de uso de IA. Rúbrica: corrección del modelo, factibilidad de la solución, calidad de la interpretación, honestidad sobre el uso de IA.
- **Defensa oral del modelo (oral, AIAS Nivel 2 – IA solo para estudio previo).** Ante una variación del enunciado, el estudiante ajusta una restricción en vivo y explica el efecto. Rúbrica: comprensión del modelo, capacidad de modificar, justificación de decisiones, claridad.

## Recurso interactivo en HTML

Idea: un simulador de cola M/M/1 donde el usuario mueve la tasa de llegada y de servicio y ve cómo crecen la cola y la espera.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que simule una cola M/M/1. El usuario ajusta lambda y mu con sliders y ve en tiempo real rho, Lq, Wq y una animación simple de clientes esperando. Muestra una advertencia cuando rho se acerca a 1. En español, abrible offline en el navegador.
```

## Notas

Verifica numéricamente: la IA puede dar fórmulas plausibles pero mal aplicadas o soluciones infactibles; recalcula al menos un caso a mano. No subas datos reales de empresas locales sin permiso ni información identificable. Adapta los casos al contexto de Dajabón (comercio fronterizo, colmados, transporte) y considera el acceso desigual a software: ofrece alternativas con hojas de cálculo gratuitas.
