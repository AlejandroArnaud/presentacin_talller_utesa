# Base de Datos II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 5 · **Código:** INF-481

## Sobre la materia

Profundiza en bases de datos relacionales: SQL avanzado (subconsultas, JOINs complejos, funciones de agregación, vistas), procedimientos almacenados y disparadores, transacciones y control de concurrencia (ACID), índices y optimización de consultas, y nociones de seguridad y respaldo. Competencias clave: diseñar consultas eficientes, garantizar integridad de datos y razonar sobre el rendimiento de una base de datos.

## Enfoque IA (taller)

La IA genera consultas SQL, esquemas y explicaciones que el estudiante debe ejecutar contra una base real, verificar resultados y optimizar; saber leer y corregir una consulta vale más que copiarla. Integridad por diseño: se evalúa con problemas resueltos sobre una base de datos en vivo, defensa de consultas y modificaciones imprevistas; sin detectores de IA.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre transacciones y propiedades ACID para estudiantes que ya conocen SQL básico. Incluye una analogía (ej. transferencia bancaria), un ejemplo con COMMIT/ROLLBACK, un caso de concurrencia problemático y un ejercicio guiado con solución.
```

```
Genera un esquema de base de datos realista para un comercio dominicano (colmado o farmacia: productos, clientes, ventas, inventario) y 6 consultas SQL de práctica de dificultad creciente, con JOINs, agregaciones y subconsultas. Incluye el resultado esperado de cada una.
```

```
Crea una rúbrica (1-4) para evaluar las consultas SQL de un estudiante: corrección del resultado, eficiencia (uso de índices/JOINs adecuados), legibilidad, manejo de casos especiales (NULL, duplicados) y uso correcto de transacciones cuando aplica. Formato tabla.
```

```
Toma el ejercicio "reporte de ventas mensuales por producto" y diferéncialo en tres niveles: con la consulta base dada, con pistas sobre GROUP BY y agregación, y abierto exigiendo optimizar con un índice y justificarlo. Mantén el objetivo.
```

```
Dame 6 preguntas de discusión para que los estudiantes expliquen por qué una consulta es lenta y predigan el efecto de agregar un índice o reescribir un JOIN, antes de probarlo en el motor.
```

## Ejercicios y actividades con IA

- **Optimiza la consulta de la IA.** Objetivo: razonar el rendimiento. La IA escribe una consulta que funciona pero es ineficiente; el estudiante la ejecuta, analiza el plan de ejecución y la reescribe mejorándola. Rol de la IA: producir el borrador a optimizar.
- **Caza el bug en el SQL.** Objetivo: leer y depurar. El docente pide a la IA una consulta o procedimiento con un error sutil (JOIN incorrecto, agregación mal agrupada); el estudiante lo ejecuta, detecta el problema y lo corrige. Rol de la IA: generar el código fallido.
- **Del requerimiento a la consulta.** Objetivo: traducir necesidades a SQL. El estudiante redacta un requerimiento en lenguaje natural, escribe su propia consulta, la compara con la de la IA y explica las diferencias. Rol de la IA: contraste, no fuente.

## Evaluaciones auténticas

- **Reto SQL sobre base en vivo con variación (AIAS Nivel 1: sin IA durante la prueba).** En clase, el estudiante resuelve consultas sobre una base real y el docente pide una modificación en el momento (otra condición, otro agrupamiento). Rúbrica: (1) resultado correcto, (2) eficiencia de la consulta, (3) capacidad de modificarla, (4) explicación de la lógica.
- **Proyecto de base de datos comentado (AIAS Nivel 3: IA asistida declarada).** Diseño e implementación de una pequeña base de datos con consultas, procedimientos y un registro de qué se pidió a la IA y por qué. Rúbrica: (1) diseño normalizado e íntegro, (2) consultas correctas y eficientes, (3) calidad de la documentación, (4) honestidad y reflexión sobre el uso de IA.

## Recurso interactivo en HTML

Idea: un visualizador de JOINs que muestra cómo se combinan dos tablas según el tipo de unión.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS puro, sin librerías) llamado "Visualizador de JOINs". Muestra dos tablas pequeñas de ejemplo (clientes y ventas) y, al elegir INNER, LEFT, RIGHT o FULL JOIN, resalta y muestra las filas resultantes con una breve explicación de por qué se incluyen o excluyen. En español, funciona offline.
```

## Notas

Verificación: la IA puede generar SQL que corre pero devuelve datos incorrectos, usar sintaxis de otro motor (MySQL vs PostgreSQL vs SQL Server) o inventar funciones; ejecuta y valida siempre los resultados contra el motor del curso. Privacidad: usar datos ficticios; nunca subir bases con datos reales de personas a las herramientas de IA. Contexto Dajabón: modelar comercios y servicios locales (colmados, farmacias, cooperativas) para que los esquemas resulten cercanos y significativos.
