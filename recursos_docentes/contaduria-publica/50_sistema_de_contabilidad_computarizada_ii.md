# Sistema de Contabilidad Computarizada II

**Carrera:** Contaduría Pública · **Cuatrimestre:** 7 · **Código:** INF-408

## Sobre la materia
Profundiza el uso de software contable y de hojas de cálculo avanzadas para automatizar el ciclo: configuración del catálogo de cuentas, registro de transacciones, módulos de cuentas por cobrar/pagar e inventario, emisión de estados financieros y reportes para la DGII (formatos 606/607). Competencias clave: parametrizar un sistema contable, validar la integridad de los datos y generar reportes fiscales confiables.

## Enfoque IA (taller)
La IA acelera tareas repetitivas (fórmulas, macros, depuración de datos) y explica funciones, pero el estudiante valida que el resultado cuadre con la contabilidad y la norma. Integridad por diseño evaluando el proceso de armado del sistema y su sustentación frente a la pantalla, no el archivo final; sin detectores de IA.

## Prompts para el docente

```
Planifica una unidad de 3 clases sobre automatización del ciclo contable en hoja de cálculo (diario, mayor automático con SUMAR.SI, balance de comprobación). Por clase: objetivo, función o herramienta clave, un ejercicio práctico y un error común al vincular las hojas.
```

```
Genera un caso de una MIPYME de Dajabón (ferretería o importadora) con 15 transacciones del mes para cargar en un sistema contable; entrega el listado de operaciones y el balance de comprobación esperado para que el estudiante verifique su archivo.
```

```
Crea una rúbrica para evaluar un libro contable automatizado en hoja de cálculo, con criterios: catálogo de cuentas bien estructurado, fórmulas de mayorización correctas, cuadre del balance de comprobación y claridad de los reportes. Define niveles de logro.
```

```
Explícame, paso a paso y en español, cómo construir en una hoja de cálculo un mayor que se actualice solo desde el libro diario usando SUMAR.SI.CONJUNTO, y dame 3 errores típicos que cometen los estudiantes al armarlo.
```

```
Formula 6 preguntas de discusión que lleven al estudiante a evaluar cuándo conviene un software contable comercial frente a una hoja de cálculo propia, considerando volumen, controles y reportes a la DGII.
```

## Ejercicios y actividades con IA
- **Depura la fórmula con la IA.** Objetivo: resolver problemas reales. El estudiante pega una fórmula de mayorización que da error y pide a la IA explicar la falla; luego prueba la corrección en su archivo y verifica el cuadre. Rol de la IA: copiloto de depuración, no la respuesta final.
- **Audita el reporte que generó la IA.** Objetivo: validar la integridad de los datos. La IA propone un reporte 606 a partir de unas operaciones; el estudiante revisa que los NCF, tasas y totales sean correctos. Rol de la IA: generar el borrador a auditar.

## Evaluaciones auténticas
- **Montaje de un sistema contable para un negocio (AIAS Nivel 3 — IA con tarea y supervisión).** El estudiante parametriza el sistema, carga las transacciones del mes y genera estados y el reporte 606; puede usar IA para fórmulas, pero documenta su proceso. Rúbrica: (1) catálogo y parametrización, (2) registro correcto, (3) cuadre de estados, (4) reporte fiscal válido.
- **Demostración en vivo del sistema (AIAS Nivel 1 — Sin IA).** Frente al docente, ejecuta una transacción, muestra cómo fluye al estado y explica cada paso. Rúbrica: (1) dominio del sistema, (2) integridad de los datos, (3) lectura del reporte, (4) claridad.

## Recurso interactivo en HTML
Idea: un mini libro diario-mayor que muestra cómo cada asiento alimenta automáticamente el saldo de las cuentas.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS puro, sin librerías) titulado "Mini Sistema Contable". El usuario registra asientos (cuenta, debe, haber) en un libro diario; la página actualiza automáticamente un mayor con el saldo de cada cuenta y un balance de comprobación que indica en verde si la suma de débitos iguala la de créditos. Incluye 3 asientos de ejemplo de un negocio dominicano. En español, funciona sin internet.
```

## Notas
Verificación: la IA da fórmulas con sintaxis de otra versión o idioma del software y omite validaciones; prueba siempre la fórmula en el archivo real y confirma el cuadre. Privacidad: no subas a la IA bases de datos contables reales con RNC, nombres de clientes o NCF; usa datos ficticios. Contexto Dajabón: usa comercios fronterizos y los formatos de la DGII (606/607) que el estudiante manejará en la práctica local.
