# Cálculo IV

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 5 · **Código:** MAT-360

## Sobre la materia

Cálculo avanzado para ingeniería: ecuaciones diferenciales ordinarias (primer y segundo orden), series de potencias y de Fourier, transformada de Laplace y, según el programa, introducción a ecuaciones en derivadas parciales. Competencias clave: modelar fenómenos con ecuaciones diferenciales, seleccionar y aplicar el método de solución adecuado, e interpretar el resultado en términos físicos o de ingeniería.

## Enfoque IA (taller)

La IA propone desarrollos y soluciones que el estudiante debe verificar paso a paso, justificar y reinterpretar; el reto no es obtener la respuesta, sino validar cada paso y detectar errores algebraicos o de método. La integridad se diseña evaluando el razonamiento (resolución a mano, explicación oral, interpretación del modelo), no la entrega de un desarrollo que la IA pudo producir.

## Prompts para el docente

```
Eres docente de Cálculo IV. Planifica una clase de 90 min sobre la transformada de Laplace aplicada a resolver una EDO de segundo orden. Incluye objetivos, motivación con un ejemplo de ingeniería (circuito RLC), un desarrollo resuelto y 3 ejercicios graduados con solución aparte.
```

```
Genera 5 problemas de ecuaciones diferenciales con contexto real de ingeniería de sistemas y del entorno (enfriamiento de un equipo, crecimiento de usuarios de una app, descarga de un capacitor, mezcla en un tanque). Da el enunciado, el modelo esperado y la solución detallada por separado.
```

```
Crea una rúbrica (1-4) para evaluar la solución de una ecuación diferencial: planteamiento correcto del modelo, elección y aplicación del método, exactitud algebraica, e interpretación del resultado. Formato tabla.
```

```
Diferencia un ejercicio de "EDO de primer orden" en tres niveles: con el método ya indicado y pasos guía, con pista solo del tipo de ecuación, y abierto exigiendo además interpretar la solución y su comportamiento límite. Mantén el mismo objetivo.
```

```
Dame 6 preguntas socráticas para que los estudiantes razonen por qué una misma ecuación diferencial puede resolverse por varios métodos, cuál conviene en cada caso y cómo verificar que la solución satisface la ecuación original.
```

## Ejercicios y actividades con IA

- **Verifica el desarrollo de la IA.** Objetivo: validar paso a paso. El estudiante pide a la IA la solución de una EDO, la revisa línea por línea buscando un error algebraico o de método (a veces inducido), lo señala y corrige el desarrollo. Rol de la IA: producir el desarrollo a auditar.
- **Del enunciado al modelo, sin saltar pasos.** Objetivo: modelar antes de resolver. El estudiante plantea por su cuenta la ecuación diferencial de un fenómeno, luego pide a la IA su planteamiento y compara supuestos y condiciones iniciales, justificando cuál es correcto. Rol de la IA: contraste del modelo, no fuente.
- **Comprueba sustituyendo.** Objetivo: cerrar el razonamiento. El estudiante toma la solución dada por la IA y la sustituye a mano en la ecuación original para confirmar (o refutar) que la satisface, documentando el chequeo. Rol de la IA: borrador a verificar.

## Evaluaciones auténticas

- **Resolución a mano con interpretación (AIAS Nivel 1 – Sin IA durante la prueba).** El estudiante resuelve una EDO en papel, muestra todos los pasos e interpreta el comportamiento de la solución (estabilidad, límite). Rúbrica: planteamiento del modelo, elección del método, exactitud algebraica, interpretación.
- **Defensa oral de un problema modelado (AIAS Nivel 2 – IA solo para estudio previo, declarado).** El estudiante explica cómo modeló un fenómeno con una EDO y resuelve en vivo una variación de las condiciones iniciales o parámetros. Rúbrica: comprensión del método, capacidad de modificar, justificación de supuestos, claridad al explicar.

## Recurso interactivo en HTML

Idea: un visualizador de campos de pendientes y soluciones de una EDO de primer orden, donde el estudiante cambia parámetros y ve cómo varía la curva solución.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, dibujando en un canvas, sin librerías) que muestre el campo de pendientes de una EDO de primer orden y =f(x,y) seleccionable entre 3 ejemplos, con deslizadores para la condición inicial, y que trace la curva solución aproximada por el método de Euler. En español, funciona offline al abrir en el navegador.
```

## Notas

Verifica los desarrollos: la IA puede cometer errores algebraicos, omitir la solución particular o confundir métodos, lo que la hace útil como ejercicio de detección. No subas datos personales ni trabajos identificables de estudiantes. Adapta a Dajabón con fenómenos del entorno (clima, riego, equipos eléctricos) y considera el acceso desigual a software: prioriza el trabajo en papel y permite herramientas gratuitas (GeoGebra, Wolfram Alpha) solo como apoyo de verificación, nunca como sustituto del razonamiento.
