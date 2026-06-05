# Laboratorio de Programación III

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 4 · **Código:** INF-173

## Sobre la materia
Componente práctico de Programación III: implementación en máquina de programas orientados a objetos con herencia, polimorfismo, interfaces, colecciones y manejo de excepciones, usando un IDE, control de versiones básico y pruebas. Competencias clave: programar, compilar, depurar y probar soluciones OO completas a partir de un diseño.

## Enfoque IA (taller)
La IA acelera la escritura de código OO, pero el laboratorio mide que el estudiante sepa ejecutar, depurar y extender lo que entrega: leer el código es lo que enseña. La integridad se diseña con desempeño observado en máquina y cambios pedidos en vivo, no con detectores.

## Prompts para el docente

```
Planifica una práctica de laboratorio de 2 horas para implementar una jerarquía de
clases con polimorfismo (figuras o empleados) en el lenguaje del curso. Incluye los
pasos, los archivos a crear, casos de prueba a verificar y preguntas de cierre.
```

```
Genera 4 guías de laboratorio REALES con contexto de Dajabón (nómina de empleados de un
comercio, tipos de cuentas de una cooperativa, catálogo de productos) donde el estudiante
implemente herencia, una interfaz y manejo de una excepción. Da objetivo, pasos y la
salida esperada.
```

```
Crea una rúbrica de 4 criterios para evaluar la práctica: el programa compila y corre,
implementa correctamente la POO requerida, maneja casos límite/excepciones y el código
es legible (nombres, estructura). En español, escala 1 a 4, formato tabla.
```

```
Toma la práctica "gestor de empleados con herencia" y propón tres niveles: básico
(clases ya diseñadas, solo implementar), intermedio (agregar una subclase y un método),
avanzado (manejar una excepción al cargar datos inválidos y probarla). Mantén el objetivo.
```

```
Dame 8 preguntas para hacer durante la práctica que obliguen al estudiante a explicar QUÉ
hace cada parte de su código, PREDECIR la salida de una llamada polimórfica y decir cómo
depuraría un error de ejecución.
```

## Ejercicios y actividades con IA
- **Depura el programa OO de la IA.** Objetivo: depuración. El docente pide a la IA un programa OO con un bug de ejecución (un cast inválido o un null); el estudiante lo ejecuta, localiza el error con el depurador y lo arregla. Rol de la IA: código fallido a corregir.
- **Extiende en vivo.** Objetivo: comprender para modificar. El estudiante pide a la IA una base de clases, la ejecuta y luego agrega por su cuenta una subclase o método nuevo, sin volver a pedir a la IA. Rol de la IA: punto de partida a extender con criterio.
- **Escribe la prueba.** Objetivo: verificación. A partir de una clase generada por IA, el estudiante escribe casos de prueba (incluyendo entradas inválidas) y comprueba si el código realmente se comporta como dice. Rol de la IA: código a poner a prueba.

## Evaluaciones auténticas
- **Examen práctico en máquina con variación (AIAS Nivel 1 — sin IA durante la prueba).** El estudiante implementa una pequeña jerarquía y el docente pide un cambio en el momento (otra subclase, otro caso de error). Mini-rúbrica: (1) compila y corre, (2) POO correcta, (3) capacidad de modificar en vivo, (4) explicación del código.
- **Proyecto de laboratorio con bitácora y demo (AIAS Nivel 3 — IA asistida declarada).** Entrega un programa OO funcional, lo demuestra en máquina y registra qué pidió a la IA y qué cambió. Mini-rúbrica: (1) funcionalidad y pruebas, (2) calidad del diseño OO, (3) manejo de excepciones, (4) honestidad y dominio demostrado en la demo.

## Recurso interactivo en HTML
Idea: una lista de verificación interactiva para depurar errores comunes de POO en el laboratorio.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado
"Checklist de Depuración OO". Presenta una lista de errores comunes (NullPointer, cast
inválido, herencia mal usada, excepción no capturada); el usuario marca síntomas con
casillas y la app sugiere qué revisar en su código. Interfaz en español, funciona offline.
```

## Notas
Verifica ejecutando y probando: el código de la IA puede compilar pero fallar en tiempo de ejecución o ignorar casos límite. No subir trabajos identificables de estudiantes a las herramientas. Considera el contexto de Dajabón (equipos modestos, conectividad intermitente): prioriza prácticas que corran offline en el IDE local y datos de ejemplo del comercio y las cooperativas locales.
