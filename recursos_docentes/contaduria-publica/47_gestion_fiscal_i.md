# Gestión Fiscal I

**Carrera:** Contaduría Pública · **Cuatrimestre:** 7 · **Código:** CON-702

## Sobre la materia
Introduce el sistema tributario dominicano y la práctica de cumplimiento: ITBIS, Impuesto sobre la Renta de personas físicas y jurídicas, retenciones, anticipos, comprobantes fiscales (NCF) y deberes formales ante la DGII. Competencias clave: liquidar impuestos con base en la norma vigente, preparar declaraciones y asesorar sobre obligaciones fiscales con responsabilidad legal.

## Enfoque IA (taller)
La IA explica conceptos tributarios y arma plantillas de cálculo, pero el estudiante verifica cada tasa y plazo contra la norma de la DGII, porque la IA desconoce las particularidades dominicanas. Integridad por diseño con liquidaciones de datos únicos y sustentación oral; sin detectores de IA.

## Prompts para el docente

```
Planifica una unidad de 3 clases sobre liquidación del ITBIS en RD (hecho generador, base imponible, ITBIS adelantado y retenido). Por clase: objetivo, concepto clave, un ejercicio con cifras en pesos dominicanos y un error común en el llenado del formulario IT-1.
```

```
Genera 4 casos de cumplimiento fiscal para una MIPYME de Dajabón (importadora fronteriza, colmado, taller): describe sus operaciones del mes y pide identificar qué impuestos debe declarar, con qué NCF y en qué plazo. Incluye un caso con una operación exenta para forzar el análisis.
```

```
Crea una rúbrica para evaluar una declaración jurada preparada por el estudiante, con criterios: correcta determinación de la base, aplicación de la tasa vigente, uso adecuado de comprobantes y cumplimiento de plazos. Define niveles de logro.
```

```
Toma este ejercicio de retenciones del ISR y genera tres versiones por nivel: básica (una retención por servicios), intermedia (varias tasas según el tipo de pago) y avanzada (incluye un pago al exterior y una operación dudosa que exija interpretar la norma).
```

```
Formula 6 preguntas socráticas que lleven al estudiante a distinguir entre evasión, elusión y planificación fiscal legítima, partiendo de un caso de una empresa que busca reducir su carga tributaria.
```

## Ejercicios y actividades con IA
- **Verifica la tasa que dio la IA.** Objetivo: validar contra la norma local. El estudiante pide a la IA liquidar un impuesto; como la IA suele usar tasas de otros países, debe contrastar cada cifra con la norma DGII vigente y corregir. Rol de la IA: generar el cálculo a auditar.
- **Asesor fiscal junior.** Objetivo: traducir la norma a un consejo claro. El estudiante usa la IA para un primer borrador de respuesta a un contribuyente y lo reescribe citando el artículo del Código Tributario correcto. Rol de la IA: dar el borrador inicial.

## Evaluaciones auténticas
- **Liquidación fiscal del mes de un negocio (AIAS Nivel 2 — IA para idear).** Cada estudiante recibe operaciones distintas, determina los impuestos y prepara las declaraciones; usa IA solo para entender conceptos, no para liquidar. Rúbrica: (1) determinación de la base, (2) tasas y plazos correctos, (3) comprobantes adecuados, (4) sustento normativo.
- **Sustentación oral del caso fiscal (AIAS Nivel 1 — Sin IA).** Explica qué declaró y por qué, ante preguntas del docente. Rúbrica: (1) dominio de la obligación, (2) justificación normativa, (3) manejo de plazos, (4) claridad.

## Recurso interactivo en HTML
Idea: una calculadora de ITBIS e ISR de personas físicas según la escala vigente.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS puro, sin librerías) titulado "Calculadora Fiscal RD". El usuario elige ITBIS (ingresa monto gravado y aplica 18%) o ISR de persona física (ingresa renta anual y aplica la escala progresiva por tramos). La página muestra el impuesto a pagar y el desglose por tramo. Incluye una nota visible: "Verificar tasas y tramos en la DGII". En español, funciona sin internet.
```

## Notas
Verificación: la IA inventa tasas, fechas y formularios o usa los de México/España; toda cifra debe confirmarse en la norma vigente de la DGII. Privacidad: nunca subas declaraciones reales, RNC ni cédulas de contribuyentes; usa datos ficticios. Contexto Dajabón: enfatiza el régimen de importadores y comerciantes fronterizos, los NCF y los regímenes simplificados frecuentes en la zona.
