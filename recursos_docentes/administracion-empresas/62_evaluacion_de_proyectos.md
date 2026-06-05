# Evaluación de Proyectos

**Carrera:** Administración de Empresas · **Cuatrimestre:** 9 · **Código:** ECO-250

## Sobre la materia
Enseña a determinar la viabilidad de un proyecto de inversión mediante sus estudios de mercado, técnico, organizacional y financiero, y a decidir con indicadores como VAN, TIR, periodo de recuperación y relación beneficio-costo. Competencias clave: construir y proyectar flujos de caja, calcular indicadores de rentabilidad e interpretar el riesgo para recomendar o rechazar una inversión.

## Enfoque IA (taller)
La IA es un evaluador externo: arma flujos de caja preliminares y escenarios que el estudiante debe revisar supuesto por supuesto, corregir y sustentar. La integridad se diseña con datos locales y defensa oral del modelo; no se usan detectores de IA.

## Prompts para el docente

```
Actúa como profesor de Evaluación de Proyectos. Planifica una clase de 90 minutos sobre construcción de flujo de caja y cálculo de VAN/TIR para un proyecto pequeño de Dajabón (por ejemplo, una planta empacadora de plátano o un negocio de transporte fronterizo). Incluye objetivos, un caso disparador, un ejercicio guiado en hoja de cálculo y un cierre con interpretación de la TIR.
```

```
Genera 3 ideas de proyecto de inversión realistas para la zona fronteriza de Dajabón (agroindustria, comercio binacional, servicios) con un supuesto de inversión inicial y de ingresos. Para cada una, deja 3 preguntas que obliguen a cuestionar los supuestos antes de evaluar.
```

```
Crea una rúbrica de 5 criterios para evaluar un estudio de viabilidad de proyecto: calidad del estudio de mercado, coherencia del flujo de caja, corrección del cálculo de VAN/TIR, análisis de riesgo/sensibilidad y claridad de la recomendación. Escala 1-4 con descriptores observables.
```

```
Adapta una explicación del VAN en tres niveles: básico (idea del valor del dinero en el tiempo con una analogía), intermedio (fórmula y descuento de flujos) y avanzado (relación VAN-TIR y qué hacer cuando se contradicen).
```

```
Formula 6 preguntas socráticas para debatir si un proyecto con TIR alta pero mucho riesgo en zona fronteriza debe aprobarse, obligando al estudiante a integrar rentabilidad, riesgo e impacto local.
```

## Ejercicios y actividades con IA
- **Auditoría de supuestos.** Objetivo: pensar críticamente sobre el modelo financiero. El estudiante pide a la IA un flujo de caja para una idea de proyecto, luego revisa cada supuesto (precios, costos, demanda) y lo ajusta a precios reales del mercado de Dajabón, documentando cada cambio. La IA aporta el borrador; el estudiante lo hace creíble.
- **Análisis de sensibilidad asistido.** Objetivo: entender el riesgo. El estudiante pide a la IA que genere escenarios optimista/pesimista variando una variable clave, recalcula el VAN a mano para verificar y explica cuál variable es más sensible. La IA explora; el estudiante valida los números.

## Evaluaciones autenticas
- **Estudio de viabilidad de un proyecto local (aplicada/de proceso).** El estudiante formula un proyecto para Dajabón, construye el flujo de caja con datos reales, calcula los indicadores y emite una recomendación; declara el aporte de la IA. **AIAS: Nivel 3 (IA para asistencia, uso declarado).** Mini-rúbrica: (1) realismo de los supuestos y datos locales; (2) corrección de VAN/TIR/PRI; (3) análisis de riesgo; (4) transparencia del uso de IA.
- **Defensa del modelo financiero (oral).** Sustentación de 7 minutos donde el docente cambia un supuesto en vivo y el estudiante explica el efecto en los indicadores. **AIAS: Nivel 1 (Sin IA en la defensa).** Mini-rúbrica: dominio del modelo, interpretación correcta de indicadores, manejo de la pregunta.

## Recurso interactivo en HTML
Idea: una calculadora de VAN y TIR donde el estudiante ingresa la inversión y los flujos y ve el resultado con un veredicto de aprobación.

```
Crea UN archivo .html autocontenido (HTML, CSS y JavaScript en el mismo archivo, sin librerías externas) con una calculadora de evaluación de proyectos. Campos para inversión inicial, hasta 6 flujos de caja anuales y una tasa de descuento; que calcule VAN, TIR (por iteración) y periodo de recuperación, y muestre un veredicto "Se acepta / Se rechaza" con explicación. Incluye un botón "Reiniciar". Español, listo para abrir en el navegador.
```

## Notas
Verificar siempre los cálculos de la IA, sobre todo la TIR y el descuento de flujos: comete errores aritméticos y a veces inventa fórmulas. No subir cifras reales confidenciales de un emprendedor o empresa; anonimizar. Usar tasas de interés y precios coherentes con la economía dominicana y el costo de capital local para que la evaluación sea defendible en el contexto de Dajabón.
