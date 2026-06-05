# Costo I

**Carrera:** Contaduría Pública · **Cuatrimestre:** 5 · **Código:** CON-305

## Sobre la materia
Introduce la contabilidad de costos: clasificación de costos (fijos/variables, directos/indirectos), elementos del costo (materia prima, mano de obra, costos indirectos de fabricación), estado de costo de producción y venta, y costeo por órdenes de trabajo. Competencias clave: identificar y acumular costos, calcular el costo unitario y apoyar decisiones de precio y producción.

## Enfoque IA (taller)
La IA actúa como un auxiliar que clasifica costos y arma hojas de costo que el estudiante debe verificar contra la lógica del proceso productivo. Integridad por diseño: se evalúa con casos de empresas locales, hojas de costo propias y sustentación oral; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre la diferencia entre costo y gasto, y entre costo fijo y variable, para Costo I (cuatrimestre 5). Incluye objetivo, ejemplos de una panadería de Dajabón, un ejercicio de clasificación y un error común que los estudiantes deben detectar.
```

```
Genera 5 casos de costeo de pequeñas industrias de Dajabón (panadería, bloquera, ebanistería, confección, procesadora de lácteos). Para cada una da los datos del mes (materiales, mano de obra, CIF) y pide armar el estado de costo de producción y el costo unitario.
```

```
Crea una rúbrica para evaluar una hoja de costos por órdenes elaborada por el estudiante, con criterios: correcta separación de los tres elementos del costo, prorrateo razonable de CIF, exactitud del costo unitario, cuadre con la producción y presentación. Define niveles de logro.
```

```
Toma este caso de costeo por órdenes y genera tres versiones por nivel: básica (datos clasificados), intermedia (el estudiante clasifica los costos) y avanzada (incluye una base de prorrateo de CIF que debe justificar).
```

```
Formula 6 preguntas socráticas para que el estudiante razone por qué un mismo desembolso puede ser costo o gasto según dónde ocurra, llevándolo a pensar en la función en lugar de memorizar listas.
```

## Ejercicios y actividades con IA
- **Auditoría de la hoja de costos de la IA.** Objetivo: clasificar con criterio. La IA arma una hoja de costos (a veces mete un gasto administrativo como costo de producción); el estudiante detecta el error, lo corrige y explica por qué. Rol de la IA: generar el borrador a auditar.
- **¿Cuánto cuesta producir?** Objetivo: calcular costo unitario real. El estudiante pide a la IA un primer cálculo de costo de un producto local, luego rehace el prorrateo de CIF con una base mejor justificada y compara. Rol de la IA: dar un cálculo inicial editable.

## Evaluaciones auténticas
- **Costeo de un producto real de una microempresa de Dajabón (AIAS Nivel 2: IA para planificar/idear).** Cada estudiante toma un producto distinto, levanta sus costos y calcula el costo unitario; usa IA solo para entender conceptos, no para resolver. Rúbrica: (1) separación correcta de elementos, (2) prorrateo razonable de CIF, (3) exactitud del costo unitario, (4) sustento de los supuestos.
- **Sustentación oral de la hoja de costos (AIAS Nivel 1: sin IA).** Explica cómo acumuló los costos y responde "¿qué pasa con el costo unitario si baja la producción?". Rúbrica: (1) dominio del proceso, (2) justificación del prorrateo, (3) interpretación del resultado, (4) claridad.

## Recurso interactivo en HTML
Idea: una hoja de costos que suma los tres elementos y calcula el costo unitario automáticamente.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS puro, sin librerías) titulado "Hoja de Costos por Orden". El usuario ingresa materia prima directa, mano de obra directa, CIF aplicados y unidades producidas. La página suma el costo total de la orden, calcula el costo unitario y muestra el peso porcentual de cada elemento. En español, con pesos dominicanos, funciona sin internet.
```

## Notas
Verificación: la IA confunde costos con gastos y prorratea CIF sin justificar; toda clasificación debe revisarse contra la función del desembolso y todo cálculo recalcularse. Privacidad: usar datos ficticios o anonimizar la microempresa; no subir información de costos confidencial. Contexto Dajabón: ambientar con pequeñas industrias locales (panaderías, bloqueras, talleres) y cifras en pesos dominicanos.
