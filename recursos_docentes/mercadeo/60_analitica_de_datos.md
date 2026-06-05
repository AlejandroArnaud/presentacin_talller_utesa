# Analítica de Datos

**Carrera:** Mercadeo · **Cuatrimestre:** 9 · **Código:** MER-902

## Sobre la materia
Introduce el análisis de datos aplicado al marketing: tipos de datos y métricas (KPI), limpieza y exploración, estadística descriptiva, visualización efectiva, métricas de marketing digital (CTR, conversión, CAC, ROI, embudo) y la conversión de datos en decisiones. Competencias clave: leer e interpretar un dashboard, elegir la métrica correcta para una pregunta de negocio, visualizar sin engañar y traducir números en recomendaciones accionables.

## Enfoque IA (taller)
La IA limpia datos, sugiere análisis, escribe fórmulas y explica resultados; el estudiante formula la pregunta, valida los cálculos, juzga si el gráfico engaña y decide qué hacer con el hallazgo. Integridad por diseño: se evalúa la interpretación de datos reales y la decisión de negocio, no la mecánica del cálculo. Sin detectores de IA.

## Prompts para el docente

```
Eres docente de Analítica de Datos para Mercadeo, cuatrimestre 9, UTESA Dajabón. Planifica una clase de 2 horas sobre cómo elegir la métrica correcta para una pregunta de negocio (vanity metrics vs. métricas accionables). Usa el caso de una tienda de Dajabón con redes sociales y ventas. Incluye ejemplos de KPI de marketing y un ejercicio guiado. Indica tiempos.
```

```
Genera un conjunto de datos ficticio pero realista (en formato tabla) de ventas y marketing de una pyme dominicana: 12 meses con gasto en publicidad, alcance, clics, conversiones e ingresos. Inclúyele un par de anomalías o tendencias ocultas para que los estudiantes las descubran al analizarlo.
```

```
Crea una rúbrica de 4 criterios para evaluar un informe de analítica de marketing hecho por estudiantes: pregunta de negocio bien planteada, métricas e interpretación correctas, calidad y honestidad de las visualizaciones, y recomendaciones accionables basadas en los datos. Define niveles de logro.
```

```
Diferencia un análisis del mismo dataset en tres niveles: básico (calcular e interpretar 3 KPI clave), intermedio (analizar el embudo de conversión y detectar una caída), avanzado (relacionar gasto e ingreso, estimar ROI/CAC y recomendar reasignar presupuesto). Describe los entregables.
```

```
Dame 6 preguntas socráticas para que el estudiante cuestione los datos: ¿correlación implica causa?, ¿este gráfico engaña con su escala?, ¿una métrica que sube siempre es buena?, ¿qué no me dicen estos datos?, ¿confío en un dato que la IA calculó sin verificar? Orienta al pensamiento crítico, no a una respuesta única.
```

## Ejercicios y actividades con IA
- **Detective de gráficos engañosos.** Objetivo: visualizar con honestidad. El estudiante pide a la IA que cree un gráfico tendencioso (eje truncado, escala manipulada) y otro honesto sobre los mismos datos, los compara y explica cómo cada uno induce conclusiones distintas. La IA: genera los gráficos; el estudiante: auditor de la visualización.
- **Análisis verificado con IA.** Objetivo: interpretar sin delegar el juicio. El estudiante sube un dataset ficticio, pide a la IA que calcule KPI y los recalcula a mano en una muestra para verificar; luego interpreta el hallazgo y decide la acción. La IA: calculadora y explicadora; el estudiante: verifica y decide.
- **De los números a la recomendación.** Objetivo: traducir datos en decisión. El estudiante usa la IA para resumir un dashboard y redacta su propia recomendación de negocio, descartando conclusiones que los datos no respaldan. La IA: resume; el estudiante: decide y argumenta.

## Evaluaciones auténticas
- **Informe analítico con dashboard y recomendaciones (AIAS Nivel 3 – IA como asistente con uso declarado).** El estudiante analiza un dataset de una pyme (real anonimizado o provisto), construye visualizaciones honestas y entrega recomendaciones accionables, declarando dónde usó la IA. Mini-rúbrica: (1) pregunta y métricas correctas, (2) cálculos e interpretación verificados, (3) visualizaciones honestas, (4) recomendaciones accionables y declaración del uso de IA.
- **Lectura de un dashboard sorpresa en vivo (oral, AIAS Nivel 1 – Sin IA).** El docente muestra un dashboard nuevo y el estudiante lo interpreta y recomienda una acción en el momento. Mini-rúbrica: (1) lee correctamente las métricas, (2) detecta la señal o anomalía relevante, (3) distingue dato sólido de ruido, (4) propone una decisión razonada.

## Recurso interactivo en HTML
Idea: un dashboard de marketing interactivo que, al cambiar el gasto en publicidad con un control deslizante, recalcula KPI y muestra cómo se interpreta cada métrica.

```
Crea UN archivo .html autocontenido (HTML, CSS y JavaScript, sin librerías externas) titulado "Dashboard de Marketing de una Pyme". Muestra datos de ejemplo de una pyme dominicana y permite ajustar con controles deslizantes el gasto en publicidad y la tasa de conversión; recalcula y grafica en vivo alcance, conversiones, ingreso, CAC y ROI, con una breve explicación de qué significa cada KPI. En español, diseño claro, funciona offline con doble clic.
```

## Notas
Verificación: la IA comete errores aritméticos y de fórmula y puede "alucinar" cifras; todo cálculo crítico debe recalcularse y todo dato externo confirmarse. Privacidad: no subir datos reales de clientes, ventas confidenciales ni información personal a la IA; anonimizar y usar valores ficticios o agregados. Contexto Dajabón: usar datos realistas de pymes locales (montos pequeños, ventas estacionales, comercio fronterizo en pesos y dólares) y enseñar que sin Excel o herramientas costosas se puede empezar con hojas de cálculo gratuitas y la IA como apoyo.
