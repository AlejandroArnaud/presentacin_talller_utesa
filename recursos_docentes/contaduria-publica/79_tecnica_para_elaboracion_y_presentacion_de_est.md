# Técnica para Elaboración y Presentación de Estados Financieros

**Carrera:** Contaduría Pública · **Cuatrimestre:** Electiva · **Código:** CON-902

## Sobre la materia
Se centra en construir y presentar el juego completo de estados financieros conforme a NIC 1: estado de situación financiera, resultados, cambios en el patrimonio, flujos de efectivo y notas. Competencias clave: clasificación corriente/no corriente, elaboración del flujo de efectivo (método directo e indirecto), redacción de notas reveladoras y presentación profesional coherente entre estados.

## Enfoque IA (taller)
La IA actúa como un asistente que arma plantillas, propone clasificaciones y borradores de notas; el estudiante verifica que los estados cuadren entre sí, corrige clasificaciones y responde por la presentación. Integridad por diseño: se evalúa con un juego de estados de datos propios, hojas de trabajo y defensa oral; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una unidad de 3 clases sobre el estado de flujos de efectivo (método indirecto) para Contaduría. Por clase: objetivo, concepto clave (actividades de operación/inversión/financiación), un ejercicio con cifras en pesos dominicanos y un error frecuente al ajustar la utilidad.
```

```
Genera 5 conjuntos de saldos de prueba realistas de MIPYMES de Dajabón (una ferretería, una importadora, una cooperativa) y pide al estudiante elaborar el estado de situación financiera y el de resultados, incluyendo una partida que obligue a decidir entre corriente y no corriente.
```

```
Crea una rúbrica para evaluar un juego completo de estados financieros con criterios: clasificación correcta, cuadre entre los cinco estados, calidad de las notas reveladoras, aplicación de NIC 1 y presentación profesional. Define niveles de logro.
```

```
Toma este balance de comprobación y genera tres versiones por nivel: básica (clasificación guiada), intermedia (el estudiante clasifica solo) y avanzada (incluye reclasificaciones y una nota revelable obligatoria).
```

```
Formula 6 preguntas socráticas para que el estudiante explique por qué una partida va en operación, inversión o financiación dentro del flujo de efectivo, llevándolo a razonar la naturaleza del flujo en lugar de copiar un formato.
```

## Ejercicios y actividades con IA
- **Notas reveladoras auditadas.** Objetivo: revelar lo correcto. La IA redacta notas para un estado (a veces incompletas o genéricas); el estudiante las corrige según NIC 1 y agrega las que faltan. Rol de la IA: generar el borrador a depurar.
- **Caza de descuadres.** Objetivo: verificar coherencia. La IA entrega un juego de estados con un error de cuadre introducido; el estudiante localiza dónde no concuerdan el balance, el flujo y el patrimonio. Rol de la IA: producir el material a verificar.

## Evaluaciones auténticas
- **Juego de estados financieros con datos propios (AIAS Nivel 2: IA para planificar/idear).** Cada estudiante recibe un balance de comprobación distinto y elabora los cinco estados con sus notas; usa IA solo para plantillas, no para resolver cifras. Rúbrica: (1) clasificación correcta, (2) cuadre entre estados, (3) calidad de las notas, (4) aplicación de NIC 1.
- **Defensa oral de la presentación (AIAS Nivel 1: sin IA).** Explica sus clasificaciones y el flujo de efectivo frente a preguntas. Rúbrica: (1) dominio de la estructura, (2) justificación de clasificaciones, (3) coherencia entre estados, (4) claridad.

## Recurso interactivo en HTML
Idea: un clasificador de partidas para el flujo de efectivo que valida si la categoría elegida es correcta.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS puro, sin librerías) titulado "Clasificador de Flujos de Efectivo". El usuario ve una lista de partidas (cobro a clientes, compra de equipo, préstamo recibido, pago de dividendos) y arrastra o selecciona la categoría: operación, inversión o financiación. La página marca aciertos y errores y muestra una breve explicación de cada clasificación. En español, funciona sin internet.
```

## Notas
Verificación: la IA descuadra estados y omite revelaciones; todo juego debe recalcularse y validarse el cuadre entre los cinco estados. Privacidad: usar datos ficticios o anonimizar empresas reales; no subir estados financieros confidenciales al chat de IA. Contexto Dajabón: ambientar los saldos en MIPYMES fronterizas (ferreterías, importadoras, cooperativas) con operaciones y cifras típicas de la zona en pesos dominicanos.
