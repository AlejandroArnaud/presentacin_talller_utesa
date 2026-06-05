# Laboratorio de Base de Datos I

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 4 · **Código:** INF-387

## Sobre la materia

Componente práctico de Base de Datos I: instalación y uso de un gestor (MySQL/PostgreSQL), creación de tablas con DDL, inserción y manipulación de datos con DML, ejecución de consultas SQL y pruebas sobre datos reales. Competencias clave: implementar físicamente un esquema, escribir y depurar SQL en un motor real, y comprobar empíricamente que las consultas devuelven lo esperado.

## Enfoque IA (taller)

La IA produce scripts SQL y comandos que el estudiante debe ejecutar en el gestor, observar el resultado y corregir cuando falla; el aprendizaje está en hacer correr el código, no en entregarlo sin probar. La integridad se diseña con trabajo en máquina observado y modificaciones imprevistas en vivo, sin detectores de IA.

## Prompts para el docente

```
Planifica una práctica de laboratorio de 2 horas sobre CREATE TABLE y JOIN en MySQL para estudiantes que recién instalaron el gestor. Incluye los comandos paso a paso, los datos de prueba a insertar y un reto final con su solución esperada.
```

```
Genera el script SQL (CREATE + INSERT) de una base de datos pequeña con datos REALES de contexto dominicano (productos de un colmado de Dajabón con precios en pesos, ventas y clientes), lista para que los estudiantes practiquen consultas. Incluye al menos 3 tablas relacionadas y 10 filas por tabla.
```

```
Crea una rúbrica (1-4) para evaluar una práctica de laboratorio: la base se crea sin errores, los datos se insertan correctamente, las consultas devuelven el resultado esperado, uso correcto de JOIN y agregaciones, y orden del script. Formato tabla.
```

```
Diferencia este reto de "obtener el total vendido por cliente" en tres niveles: con la consulta casi escrita a completar, con pistas sobre qué tablas unir, y abierto con un requisito extra (filtrar por mes). Mantén el mismo objetivo.
```

```
Dame 6 preguntas para que el estudiante PREDIGA el resultado de una consulta SQL antes de ejecutarla y luego explique por qué la salida real coincidió o no con su predicción.
```

## Ejercicios y actividades con IA

- **Ejecuta y depura el script.** Objetivo: hacer correr SQL real. El docente pide a la IA un script con un error (tipo de dato o llave foránea mal definida); el estudiante lo ejecuta, lee el mensaje del gestor y lo arregla. Rol de la IA: generar el script fallido.
- **Optimiza con criterio.** Objetivo: comparar consultas. El estudiante escribe su consulta, pide a la IA otra versión y comprueba en el gestor si dan el mismo resultado y cuál es más clara. Rol de la IA: alternativa a verificar empíricamente.
- **Datos de prueba a medida.** Objetivo: poblar tablas. El estudiante pide a la IA datos de inserción para su esquema, revisa que respeten la integridad referencial y los carga. Rol de la IA: generar datos que el estudiante valida.

## Evaluaciones auténticas

- **Práctica en máquina con variación (AIAS Nivel 1 – Sin IA durante la prueba).** En el laboratorio el estudiante crea una tabla, la puebla y consulta; luego el docente le pide en el momento una consulta adicional. Mini-rúbrica: la base funciona, consulta correcta, capacidad de modificar en vivo, explicación de cada comando.
- **Reporte de laboratorio con bitácora de IA (AIAS Nivel 3 – IA asistida declarada).** Entrega el script final, capturas de los resultados y un registro de qué pidió a la IA, qué corrigió y por qué. Mini-rúbrica: scripts ejecutables, resultados correctos, comprensión demostrada, honestidad sobre el uso de IA.

## Recurso interactivo en HTML

Idea: un simulador donde el estudiante escribe SQL contra tablas precargadas en el navegador y ve el resultado al instante.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías externas) llamado "SQL en el Navegador". Carga en memoria 2 tablas relacionadas (Producto y Venta) con datos de ejemplo; permite escribir una consulta SELECT simple con WHERE y, al pulsar "Ejecutar", muestra las filas resultantes en una tabla. Incluye 3 retos con su respuesta. En español, funciona offline al abrir en el navegador.
```

## Notas

Verifica ejecutando siempre en el gestor: lo que la IA propone puede no correr o usar sintaxis de otro motor (SQLite vs MySQL vs PostgreSQL). No subir datos reales ni identificables a las herramientas; usar datos ficticios. Usa conjuntos de datos de Dajabón (comercio, ventas locales, registros escolares) para que las prácticas sean concretas y motivadoras, y confirma que la versión del gestor en el laboratorio coincide con la que asume la IA.
