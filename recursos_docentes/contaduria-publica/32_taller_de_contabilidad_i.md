# Taller de Contabilidad I

**Carrera:** Contaduría Pública · **Cuatrimestre:** 5 · **Código:** CON-370

## Sobre la materia
Materia práctica que integra el ciclo contable completo en un caso continuo: desde el registro de transacciones en el diario hasta la mayorización, balanza de comprobación, ajustes, cierre y estados financieros, usando documentos fuente reales (facturas, recibos, conduces). Competencias clave: ejecutar el ciclo contable de principio a fin, organizar la documentación y aplicar la norma con autonomía.

## Enfoque IA (taller)
La IA funciona como un colega que propone registros y plantillas, pero el estudiante hace y verifica todo el ciclo con sus propios documentos. Integridad por diseño: al ser práctica con datos individualizados y sustentación en vivo, la evaluación es naturalmente a prueba de copia; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una sesión de taller de 2 horas para que el estudiante registre un mes completo de operaciones de una MIPYME de Dajabón, desde documentos fuente hasta balanza de comprobación. Incluye objetivo, lista de documentos a entregar, pasos del ciclo y los puntos donde suelen equivocarse.
```

```
Genera un set de 12 a 15 transacciones realistas de una importadora fronteriza de Dajabón para un mes (compras, ventas, gastos, pago de impuestos, nómina), con sus documentos fuente descritos, para que el estudiante practique el ciclo contable completo. Incluye una transacción ambigua que obligue a decidir el tratamiento.
```

```
Crea una rúbrica para evaluar un caso integrador del ciclo contable, con criterios: registro correcto en el diario, mayorización exacta, balanza cuadrada, ajustes y cierre apropiados, y estados financieros bien presentados. Define niveles de logro.
```

```
Toma este caso de taller y genera tres versiones por nivel: básica (asientos guiados), intermedia (solo documentos fuente) y avanzada (documentos fuente más una operación con criterio profesional discutible).
```

```
Formula 6 preguntas socráticas para que, al revisar su balanza descuadrada, el estudiante razone dónde buscar el error en lugar de pedir la respuesta, guiándolo por la lógica de la partida doble.
```

## Ejercicios y actividades con IA
- **Detective de la balanza descuadrada.** Objetivo: depurar el ciclo. La IA entrega un caso con la balanza descuadrada a propósito; el estudiante rastrea el error (transposición, omisión, mala mayorización) y lo corrige. Rol de la IA: generar el caso con el error a cazar.
- **Plantilla mejorada.** Objetivo: organizar el trabajo. El estudiante pide a la IA una plantilla de hoja de trabajo, luego la adapta a su caso real señalando qué columnas faltaban o sobraban. Rol de la IA: dar una estructura inicial editable.

## Evaluaciones auténticas
- **Carpeta del ciclo contable completo con caso individual (AIAS Nivel 2: IA para planificar/idear).** Cada estudiante recibe documentos fuente distintos y entrega diario, mayor, balanza, ajustes y estados. La IA solo se usa para entender conceptos o armar plantillas, no para resolver. Rúbrica: (1) registros correctos, (2) mayorización y balanza cuadradas, (3) ajustes y cierre apropiados, (4) orden de la documentación.
- **Sustentación oral del cierre (AIAS Nivel 1: sin IA).** El estudiante muestra su carpeta y explica un asiento elegido al azar por el docente. Rúbrica: (1) dominio del ciclo, (2) justificación del registro, (3) localización de errores propios, (4) claridad.

## Recurso interactivo en HTML
Idea: un verificador de partida doble que avisa si un asiento no cuadra antes de pasarlo al mayor.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS puro, sin librerías) titulado "Verificador de Asientos (Partida Doble)". El usuario ingresa las cuentas de un asiento con su débito o crédito. La página suma débitos y créditos, indica si el asiento cuadra y resalta la diferencia si no. Permite agregar varios asientos y muestra el total general. En español, con pesos dominicanos, funciona sin internet.
```

## Notas
Verificación: la IA produce asientos plausibles pero a veces incorrectos; en un taller todo debe rehacerse y cuadrarse manualmente. Privacidad: usar documentos fuente ficticios o anonimizados; no subir facturas reales con datos de terceros. Contexto Dajabón: armar el caso continuo en torno a un negocio fronterizo (importadora, ferretería, colmado) con operaciones y documentos típicos de la zona, en pesos dominicanos.
