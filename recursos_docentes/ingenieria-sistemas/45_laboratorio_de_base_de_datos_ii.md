# Laboratorio de Base de Datos II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 5 · **Código:** INF-482

## Sobre la materia

Práctica avanzada de bases de datos relacionales: SQL complejo (JOINs, subconsultas, vistas), procedimientos almacenados, triggers, transacciones, índices, normalización aplicada y optimización de consultas sobre un SGBD real (MySQL, PostgreSQL, SQL Server). Competencias clave: modelar y poblar una base de datos coherente, escribir consultas correctas y eficientes, y diagnosticar problemas de rendimiento e integridad.

## Enfoque IA (taller)

La IA redacta borradores de consultas y esquemas que el estudiante debe ejecutar contra datos reales, validar con casos límite y optimizar; el aprendizaje está en verificar resultados y leer planes de ejecución, no en pegar SQL. La integridad se diseña con defensa en vivo sobre la base de datos cargada y modificaciones imprevistas, sin detectores de IA.

## Prompts para el docente

```
Eres docente de Laboratorio de Base de Datos II. Planifica una práctica de 3 horas sobre triggers y procedimientos almacenados en PostgreSQL. Incluye objetivos, un esquema de ejemplo (ventas de un colmado), 3 ejercicios graduados con su solución SQL aparte y errores comunes a anticipar.
```

```
Genera un escenario realista para Dajabón: base de datos de una farmacia o ferretería de la frontera con 4-5 tablas relacionadas. Da el DDL (CREATE TABLE con claves foráneas) y 15 filas de datos de prueba con productos y precios en pesos dominicanos.
```

```
Crea una rúbrica (1-4) para evaluar un conjunto de consultas SQL: corrección del resultado, uso adecuado de JOINs/subconsultas, eficiencia (uso de índices, evitar consultas redundantes) y legibilidad/formato. Formato tabla.
```

```
Diferencia este ejercicio de "reporte de ventas con GROUP BY" en tres niveles: con la consulta casi armada, con pistas sobre qué funciones usar, y abierto exigiendo además una vista y un índice justificado. Mantén el mismo objetivo.
```

```
Dame 6 preguntas de discusión para que los estudiantes razonen por qué dos consultas que devuelven el mismo resultado pueden diferir mucho en rendimiento, y cómo leerían el EXPLAIN para decidir.
```

## Ejercicios y actividades con IA

- **Optimiza la consulta de la IA.** Objetivo: razonar sobre rendimiento. El estudiante pide a la IA una consulta funcional pero lenta, la ejecuta con EXPLAIN sobre datos reales, identifica el cuello de botella y la reescribe (índice, reordenar JOINs). Rol de la IA: producir el borrador subóptimo.
- **Caza el error de integridad.** Objetivo: validar restricciones. El estudiante pide a la IA un esquema con un fallo de diseño (clave foránea faltante, normalización incompleta), lo carga, detecta la anomalía con datos de prueba y lo corrige. Rol de la IA: generar el esquema defectuoso.
- **Explica y traduce.** Objetivo: comprender SQL ajeno. El estudiante pide a la IA una consulta compleja, la explica línea por línea con sus palabras, predice su salida y luego la verifica ejecutándola. Rol de la IA: borrador a interpretar, no a copiar.

## Evaluaciones auténticas

- **Reto en vivo sobre la base cargada (AIAS Nivel 1 – Sin IA durante la prueba).** En el laboratorio, el estudiante resuelve 3 consultas sobre una base que el docente acaba de poblar y luego recibe una variación en el momento (otro filtro, otro agrupamiento). Rúbrica: corrección del resultado, uso adecuado de JOINs/subconsultas, capacidad de modificar bajo cambio, explicación verbal.
- **Proyecto de base de datos con bitácora (AIAS Nivel 3 – IA asistida declarada).** Diseña y puebla una base para un caso real local, entrega DDL + consultas + un registro de qué pidió a la IA, qué corrigió y por qué. Rúbrica: coherencia del modelo, normalización, calidad de las consultas, honestidad y reflexión sobre el uso de IA.

## Recurso interactivo en HTML

Idea: un simulador de consultas que ejecuta SQL contra una base de datos de ejemplo precargada en el navegador y muestra el resultado en tabla.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, usando sql.js desde un CDN o datos simulados si no hay red) que cargue una base de ejemplo de 3 tablas (clientes, productos, ventas) y permita escribir una consulta SELECT y ver el resultado en una tabla. Incluye 4 retos con su respuesta oculta. En español, usable al abrir en el navegador.
```

## Notas

Verifica ejecutando: la IA puede generar SQL que corre pero devuelve resultados incorrectos, usa funciones de un SGBD distinto o ignora casos con valores NULL. No subir esquemas ni datos reales identificables de personas a las herramientas; usa datos ficticios. Adapta a Dajabón con casos del comercio fronterizo (importación, doble moneda, inventarios de colmado) y prevé el acceso desigual: permite trabajar con SGBD ligeros locales (SQLite) cuando no haya servidor disponible.
