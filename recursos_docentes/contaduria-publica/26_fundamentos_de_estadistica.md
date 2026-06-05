# Fundamentos de Estadística

**Carrera:** Contaduría Pública · **Cuatrimestre:** 4 · **Código:** MAT-134

## Sobre la materia
Introduce la estadística descriptiva y nociones básicas de probabilidad: organización de datos, tablas y gráficos, medidas de tendencia central y dispersión, e interpretación de resultados. Competencias clave: resumir e interpretar datos, elegir la medida adecuada y comunicar hallazgos cuantitativos aplicados a contextos contables y empresariales.

## Enfoque IA (taller)
La IA ayuda a explicar conceptos, generar datasets de práctica y revisar procedimientos, mientras el estudiante calcula, verifica e interpreta con sentido. Integridad por diseño: se evalúa con datos propios recolectados, cálculo a mano o en hoja, e interpretación oral; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre media, mediana y moda para estudiantes de Contaduría. Incluye objetivo, un ejemplo con sueldos de empleados de un comercio (donde la media engaña por un valor extremo), un ejercicio guiado y preguntas de cierre sobre cuándo usar cada medida.
```

```
Genera un conjunto de datos realista (30 valores) de ventas diarias de un colmado en Dajabón y pide al estudiante calcular media, mediana, rango y desviación estándar. Incluye uno o dos días atípicos para discutir su efecto. Da también la solución para el docente.
```

```
Crea una rúbrica para un mini-estudio estadístico de pregrado, con criterios: calidad de los datos recolectados, corrección de los cálculos, elección adecuada de gráficos y medidas, e interpretación de resultados. Define niveles de logro.
```

```
Toma este problema de medidas de dispersión y genera tres versiones por nivel (básico con datos pequeños, intermedio, avanzado con datos agrupados) para diferenciar dentro del mismo curso.
```

```
Formula 6 preguntas socráticas que lleven al estudiante a descubrir por qué un promedio puede dar una imagen falsa de la realidad (ej. ingreso promedio), razonando con la dispersión y los valores atípicos.
```

## Ejercicios y actividades con IA
- **Caza el error de cálculo.** Objetivo: dominar el procedimiento. La IA resuelve un ejercicio de desviación estándar (a veces con un paso mal); el estudiante recalcula a mano y detecta dónde falló. Rol de la IA: producir una solución a auditar.
- **Datos propios + IA narradora.** Objetivo: interpretar. El estudiante recolecta datos reales (gastos de la semana, precios en un mercado), los procesa y pide a la IA un primer texto interpretativo que luego corrige con su propio análisis. Rol de la IA: dar un borrador de interpretación, no los números.

## Evaluaciones auténticas
- **Mini-estudio con datos recolectados (AIAS Nivel 2: IA para planificar/idear).** Cada estudiante recoge un pequeño set de datos del entorno (precios, ventas, tiempos), calcula medidas y las interpreta; la IA solo se usa para entender conceptos. Rúbrica: (1) datos propios válidos, (2) cálculos correctos, (3) gráfico/medida adecuados, (4) interpretación con sentido.
- **Sustentación oral del análisis (AIAS Nivel 1: sin IA).** Explica qué dicen sus datos y por qué eligió cada medida, frente a preguntas. Rúbrica: (1) comprensión de las medidas, (2) lectura correcta de resultados, (3) manejo de los atípicos, (4) claridad.

## Recurso interactivo en HTML
Idea: calculadora que toma una lista de números y muestra todas las medidas con un mini-gráfico.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS sin librerías externas) titulado "Calculadora de Estadística Descriptiva". El usuario pega o escribe una lista de números separados por comas y la página muestra: media, mediana, moda, rango, varianza y desviación estándar, más un histograma simple dibujado en canvas. Resalta los valores atípicos. En español, funciona sin internet.
```

## Notas
Verificación: la IA se equivoca con frecuencia en aritmética y en pasos de fórmula; todo cálculo debe rehacerse a mano o en hoja y compararse. Privacidad: si se recolectan datos de personas, anonimizar y no pedir información sensible. Contexto Dajabón: usar datos reales y cercanos (ventas de comercios, precios en mercados fronterizos, remesas) para que la estadística sea significativa y verificable.
