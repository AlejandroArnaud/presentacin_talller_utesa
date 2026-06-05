# Excel para Finanzas

**Carrera:** Administración de Empresas · **Cuatrimestre:** 4 · **Código:** CON-500

## Sobre la materia
Aplica la hoja de cálculo a la gestión financiera: fórmulas y funciones (SUMA, SI, BUSCARV, financieras como VNA y TIR), tablas dinámicas, gráficos, presupuestos, flujos de caja, amortización de préstamos y modelos financieros básicos. Competencias clave: análisis cuantitativo, automatización de cálculos y presentación de información financiera.

## Enfoque IA (taller)
La IA explica funciones, sugiere fórmulas y depura errores, pero el estudiante debe construir, verificar y entender el modelo: una fórmula que no comprende es un riesgo financiero. La integridad se diseña con archivos construidos en vivo y defensas orales, no con entregables que la IA podría generar sin que el alumno toque Excel.

## Prompts para el docente

```
Actúa como instructor de Excel para finanzas. Planifica una clase de 90 minutos sobre la función BUSCARV aplicada a una nómina, con un ejemplo paso a paso y un ejercicio práctico con datos de una PYME dominicana.
```

```
Genera un conjunto de datos ficticios (20 filas) de ventas mensuales de una tienda en Dajabón, con columnas de producto, mes, cantidad y precio, para que mis estudiantes practiquen tablas dinámicas y gráficos.
```

```
Crea una rúbrica para evaluar un modelo de flujo de caja en Excel, con criterios de exactitud de fórmulas, estructura, uso de funciones financieras y presentación. Cuatro niveles y 100 puntos.
```

```
Diseña tres versiones del mismo ejercicio de presupuesto en Excel (básico con sumas, intermedio con función SI, avanzado con tabla dinámica y gráfico) para diferenciar por nivel de mis estudiantes.
```

```
Dame 6 preguntas para que un estudiante explique qué hace cada parte de una fórmula compleja como =SI(BUSCARV(...)>0; ...; ...) y por qué la usó.
```

## Ejercicios y actividades con IA
- **Depurador de fórmulas.** Objetivo: entender el error, no solo arreglarlo. El estudiante crea una fórmula con un error (#REF! o #VALOR!), pide a la IA que lo explique y debe describir con sus palabras la causa. Rol de la IA: diagnosticar el error.
- **Traductor de problema a fórmula.** Objetivo: modelar. El estudiante plantea un cálculo financiero en palabras, pide a la IA una fórmula candidata, la prueba en Excel y verifica que dé el resultado correcto. Rol de la IA: proponer la sintaxis.
- **Auditor de modelo.** Objetivo: validar resultados. El estudiante construye un préstamo amortizado, pide a la IA que revise su lógica y confirma manualmente con una fila de cálculo. Rol de la IA: revisar y sugerir mejoras.

## Evaluaciones autenticas
- **Modelo financiero construido y defendido (AIAS Nivel 2 — IA solo para dudas puntuales).** El estudiante entrega un flujo de caja o presupuesto en Excel para un negocio real de Dajabón y explica en clase cómo lo construyó.
  - *Rúbrica:* (1) exactitud de las fórmulas, (2) uso pertinente de funciones financieras, (3) comprensión demostrada en la defensa, (4) claridad de la presentación.
- **Reto en vivo con datos nuevos (AIAS Nivel 1 — sin IA).** En clase el docente entrega datos frescos y el estudiante construye una tabla dinámica y un cálculo de TIR o VNA en el momento.
  - *Rúbrica:* (1) construcción correcta, (2) elección adecuada de funciones, (3) interpretación del resultado, (4) rapidez y autonomía.

## Recurso interactivo en HTML
Una calculadora de amortización de préstamos que muestra la tabla completa.

```
Crea un único archivo .html autocontenido (sin librerías externas) titulado "Calculadora de Amortización de Préstamos". El usuario ingresa monto, tasa de interés anual y número de cuotas; el programa calcula la cuota mensual y genera la tabla de amortización completa (cuota, interés, capital, saldo) con totales. Muestra montos en pesos dominicanos. Interfaz en español, funcional sin internet.
```

## Notas
La IA a veces propone fórmulas con sintaxis de otra versión de Excel o con separadores distintos (coma vs. punto y coma): verifica que funcionen en tu instalación. No cargar estados financieros reales ni datos personales en herramientas de IA: usar datos ficticios. Usa cifras en pesos dominicanos y casos de comercios de Dajabón (importación, agroindustria, ventas fronterizas) para que los modelos financieros reflejen la economía local.
