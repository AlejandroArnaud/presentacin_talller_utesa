# Contabilidad Impositiva y Laboral

**Carrera:** Contaduría Pública · **Cuatrimestre:** 11 · **Código:** CON-907

## Sobre la materia
Integra la liquidación de impuestos y obligaciones laborales en República Dominicana: ITBIS, ISR, retenciones, comprobantes fiscales (NCF), nómina, TSS (seguridad social) e Infotep, y prestaciones laborales. Competencias clave: liquidar tributos y nómina conforme a la DGII y al Código de Trabajo, preparar declaraciones y calcular prestaciones con sustento normativo.

## Enfoque IA (taller)
La IA ayuda a explicar procedimientos y a generar casos de liquidación que el estudiante debe recalcular y verificar contra la norma fiscal y laboral vigente. Integridad por diseño: se evalúa con liquidaciones de casos propios, declaraciones simuladas y defensa oral; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre liquidación del ITBIS y retenciones para Contabilidad Impositiva. Incluye objetivo, un ejemplo con facturas de una empresa de servicios, el cálculo del ITBIS a pagar y las retenciones aplicables, y preguntas de cierre sobre errores frecuentes en los NCF.
```

```
Genera un caso de nómina realista de una empresa de Dajabón con 5 empleados (distintos sueldos): pide al estudiante calcular el ISR de cada uno, los aportes a la TSS (SFS, SVDS), Infotep y el neto a pagar. Incluye la solución y advierte si algún sueldo queda exento de ISR.
```

```
Crea una rúbrica para evaluar la liquidación de prestaciones laborales por desahucio o despido, con criterios: aplicación correcta del Código de Trabajo, exactitud del cálculo (preaviso, cesantía, vacaciones, salario de Navidad), sustento normativo y presentación. Define niveles de logro.
```

```
Toma este ejercicio de cálculo de ISR de personas físicas y genera tres versiones por nivel: básica (un sueldo dentro de la escala), intermedia (con regalía y bonificaciones) y avanzada (con retenciones de honorarios y un caso de doble ingreso).
```

```
Formula 6 preguntas socráticas que lleven al estudiante a razonar por qué el ITBIS es un impuesto que la empresa cobra pero no le pertenece, y qué pasa si no lo entera a tiempo.
```

## Ejercicios y actividades con IA
- **Declaración con un error escondido.** Objetivo: dominar la liquidación. La IA prepara una declaración de ITBIS o un cálculo de ISR con un fallo; el estudiante recalcula, detecta el error y cita la norma DGII. Rol de la IA: generar la liquidación a auditar.
- **Calculadora de prestaciones a revisar.** Objetivo: aplicar el Código de Trabajo. El estudiante pide a la IA el cálculo de prestaciones de un caso y verifica cada componente contra los plazos y fórmulas legales. Rol de la IA: dar un borrador de liquidación.

## Evaluaciones auténticas
- **Liquidación tributaria/laboral de un caso propio (AIAS Nivel 2: IA para planificar/idear).** Cada estudiante recibe datos distintos de una empresa y liquida ITBIS, ISR o nómina; la IA solo apoya la comprensión de la norma. Rúbrica: (1) cálculo exacto, (2) aplicación correcta de tasas y escalas, (3) sustento normativo, (4) presentación de la declaración.
- **Sustentación oral de la liquidación (AIAS Nivel 1: sin IA).** Explica cómo llegó a cada cifra y qué norma aplicó. Rúbrica: (1) dominio del procedimiento, (2) justificación legal, (3) manejo de exenciones, (4) claridad.

## Recurso interactivo en HTML
Idea: calculadora de nómina dominicana que desglosa ISR, TSS e Infotep y muestra el neto.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS puro, sin librerías) titulado "Calculadora de Nómina RD". El usuario ingresa el salario bruto mensual; la página calcula los aportes del empleado (SFS, SVDS), aplica la escala del ISR sobre el salario neto de cotizaciones, muestra los aportes del empleador e Infotep, y entrega el salario neto a pagar, con un desglose línea por línea. Permite editar las tasas y la escala para mantenerlas actualizadas. En español, funciona sin internet.
```

## Notas
Verificación: las tasas, escalas de ISR y topes de la TSS cambian por año; la IA suele dar valores desactualizados. Confirmar siempre contra la DGII, la TSS y el Código de Trabajo vigentes antes de usar cualquier cifra. Privacidad: usar datos ficticios o anonimizar; no subir nóminas ni RNC reales. Contexto Dajabón: usar empresas y sueldos típicos de la zona, con cifras en pesos dominicanos.
