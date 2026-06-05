# Matemática Financiera

**Carrera:** Contaduría Pública · **Cuatrimestre:** 4 · **Código:** MAT-180

## Sobre la materia
Estudia el valor del dinero en el tiempo: interés simple y compuesto, valor presente y futuro, tasas nominales y efectivas, anualidades, amortización de préstamos y evaluación de inversiones (VAN, TIR). Competencias clave: modelar problemas financieros reales, construir tablas de amortización y decidir entre alternativas con criterio cuantitativo.

## Enfoque IA (taller)
La IA funciona como una calculadora que "razona en voz alta": propone el planteo y el cálculo, y el estudiante verifica la fórmula, la tasa usada y el resultado contra su propia hoja. Integridad por diseño: se evalúa con datos personalizados, tablas construidas a mano y sustentación; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre tasa nominal vs. tasa efectiva para Matemática Financiera (cuatrimestre 4). Incluye objetivo, la diferencia conceptual con un ejemplo numérico en pesos dominicanos, un ejercicio de conversión y un error frecuente que los estudiantes deben detectar.
```

```
Genera 5 casos reales de financiamiento en Dajabón: un préstamo de banco para una ferretería, una venta a plazos en un colmado, una hipoteca, un préstamo de cooperativa y un microcrédito fronterizo. Da los datos (monto, tasa, plazo) y pide calcular cuota, interés total y costo efectivo. Incluye uno donde la tasa publicitada engaña.
```

```
Crea una rúbrica para evaluar una tabla de amortización elaborada por el estudiante, con criterios: fórmula correcta, exactitud de la cuota, separación capital/interés, cuadre del saldo final en cero y presentación. Define niveles de logro.
```

```
Toma este problema de anualidades y genera tres versiones por nivel: básica (fórmula dada), intermedia (el estudiante elige la fórmula) y avanzada (decide entre dos planes de financiamiento y justifica cuál conviene).
```

```
Formula 6 preguntas socráticas para que el estudiante razone por qué dos préstamos con la misma tasa nominal pueden tener costos distintos, llevándolo a pensar en la capitalización en lugar de memorizar fórmulas.
```

## Ejercicios y actividades con IA
- **Auditoría del cálculo de la IA.** Objetivo: dominar la fórmula. La IA resuelve un problema de valor presente (a veces con la tasa mal aplicada); el estudiante recalcula, detecta el error y explica la corrección. Rol de la IA: generar el procedimiento a auditar.
- **¿Cuál préstamo conviene?** Objetivo: decidir con criterio. El estudiante pide a la IA comparar dos ofertas de crédito, luego construye él mismo la tabla y argumenta la decisión señalando dónde la IA simplificó. Rol de la IA: dar un primer análisis editable.

## Evaluaciones auténticas
- **Plan de financiamiento con datos propios (AIAS Nivel 2: IA para planificar/idear).** Cada estudiante recibe un escenario distinto (monto, tasa, plazo), construye la tabla de amortización y recomienda una opción. Puede usar IA solo para entender conceptos, no para calcular. Rúbrica: (1) fórmula correcta, (2) exactitud de cuotas, (3) cuadre del saldo, (4) justificación de la decisión.
- **Sustentación oral del cálculo (AIAS Nivel 1: sin IA).** Explica su tabla y responde "¿qué pasa si sube la tasa?" en vivo. Rúbrica: (1) dominio del procedimiento, (2) interpretación del resultado, (3) respuesta a variaciones, (4) claridad.

## Recurso interactivo en HTML
Idea: una calculadora de amortización que genera la tabla completa cuota por cuota.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS puro, sin librerías) titulado "Calculadora de Amortización de Préstamos". El usuario ingresa monto, tasa anual y número de cuotas; la página calcula la cuota fija (sistema francés) y muestra una tabla cuota por cuota con capital, interés y saldo. Indica el interés total pagado. En español, con pesos dominicanos, funciona sin internet.
```

## Notas
Verificación: la IA confunde tasa nominal con efectiva y comete errores aritméticos; todo resultado debe recalcularse a mano o en hoja de cálculo. Privacidad: usar montos ficticios; no subir datos reales de deudas de personas. Contexto Dajabón: ambientar con tasas de bancos y cooperativas locales, ventas a plazo en comercios fronterizos y microcréditos, siempre en pesos dominicanos.
