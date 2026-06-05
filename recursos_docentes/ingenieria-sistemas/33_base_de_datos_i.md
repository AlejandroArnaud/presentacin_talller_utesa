# Base de Datos I

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 4 · **Código:** INF-385

## Sobre la materia

Fundamentos de bases de datos relacionales: modelo entidad-relación, diseño conceptual y lógico, normalización (1FN a 3FN), llaves primarias y foráneas, y consultas SQL (SELECT, JOIN, agregaciones, subconsultas). Competencias clave: modelar un dominio real en un esquema relacional correcto, escribir consultas que respondan preguntas de negocio y razonar sobre integridad y redundancia de datos.

## Enfoque IA (taller)

La IA genera esquemas y consultas SQL como borrador que el estudiante debe validar contra los requisitos, ejecutar y corregir; el criterio está en juzgar si el modelo es correcto, no en copiarlo. La integridad se diseña con defensa oral del diseño y cambios de requisitos en vivo, sin recurrir a detectores de IA.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre normalización (1FN, 2FN, 3FN) para estudiantes que ya conocen el modelo entidad-relación. Incluye una tabla mal diseñada con redundancia, el proceso de normalizarla paso a paso y un ejercicio guiado con su solución explicada.
```

```
Genera 5 mini-casos REALES de un dominio dominicano (inventario de un colmado, citas de una clínica en Dajabón, matrícula de una escuela, préstamos de una biblioteca, registro de una cooperativa) y, para cada uno, las entidades, atributos y relaciones que el estudiante debería identificar para su diagrama E-R.
```

```
Crea una rúbrica (1-4) para evaluar el diseño de una base de datos: corrección del modelo E-R, nivel de normalización alcanzado, definición de llaves primarias y foráneas, integridad referencial y claridad de la documentación. Formato tabla.
```

```
Diferencia este ejercicio de "diseñar la base de datos de una tienda" en tres niveles: con el diagrama E-R ya dado para escribir solo el SQL, con las entidades listadas, y abierto con un requisito extra (manejar historial de precios). Mantén el mismo objetivo.
```

```
Dame 6 preguntas socráticas para que los estudiantes justifiquen sus decisiones de diseño: por qué una tabla y no dos, por qué esa llave foránea, qué pasa con la integridad si se borra un registro padre.
```

## Ejercicios y actividades con IA

- **Audita el esquema de la IA.** Objetivo: evaluar diseño. El docente pide a la IA un esquema con un fallo de normalización; el estudiante detecta la redundancia, la corrige y justifica el cambio. Rol de la IA: producir el modelo defectuoso a criticar.
- **Verifica la consulta SQL.** Objetivo: validar resultados. El estudiante pide a la IA una consulta con JOIN, la ejecuta sobre datos de prueba y comprueba si responde realmente la pregunta planteada. Rol de la IA: borrador de SQL a verificar.
- **De requisito a modelo.** Objetivo: modelar. El estudiante redacta su propio diagrama E-R desde un caso, luego pide el de la IA y explica las diferencias y cuál es mejor. Rol de la IA: contraste, no fuente única.

## Evaluaciones auténticas

- **Defensa de diseño con cambio en vivo (AIAS Nivel 2 – IA solo para explorar).** El estudiante presenta su esquema y el docente introduce un nuevo requisito en el momento (agregar una entidad, soportar un caso límite) que debe resolver y explicar. Mini-rúbrica: corrección del modelo, capacidad de adaptarlo, justificación verbal de las decisiones, manejo de la integridad.
- **Proyecto de base de datos con bitácora (AIAS Nivel 3 – IA asistida declarada).** Entrega un esquema normalizado más consultas SQL y un registro de qué pidió a la IA, qué corrigió y por qué. Mini-rúbrica: funcionalidad de las consultas, calidad del diseño, comprensión demostrada, honestidad sobre el uso de IA.

## Recurso interactivo en HTML

Idea: un visualizador de un diagrama entidad-relación con sus tablas y relaciones, que muestre cómo viajan las llaves foráneas.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado "Explora el Modelo E-R". Muestra 3 tablas relacionadas (por ejemplo Cliente, Pedido, Producto) con sus columnas; al hacer clic en una llave foránea, resalta la tabla y la llave primaria con la que se conecta y explica la relación en un panel lateral. En español, funciona offline al abrir en el navegador.
```

## Notas

Verifica ejecutando: el SQL de la IA puede ser sintácticamente válido pero devolver resultados incorrectos o usar funciones específicas de otro motor. No subir datos reales ni identificables de estudiantes o de instituciones a las herramientas. Usa dominios de Dajabón (comercio fronterizo, clínicas, cooperativas, escuelas) para que los casos de modelado sean concretos y cercanos a la realidad de los estudiantes.
