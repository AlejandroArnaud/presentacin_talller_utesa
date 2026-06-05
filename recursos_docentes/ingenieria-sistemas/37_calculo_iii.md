# Cálculo III

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 4 · **Código:** MAT-350

## Sobre la materia

Cálculo de varias variables: funciones de dos y tres variables, derivadas parciales, gradiente, regla de la cadena, optimización con y sin restricciones (multiplicadores de Lagrange) e integrales múltiples. Competencias clave: razonar sobre funciones multivariables, resolver problemas de optimización y conectar el cálculo con aplicaciones de la ingeniería.

## Enfoque IA (taller)

La IA resuelve y explica procedimientos como borrador; el estudiante reproduce los pasos, verifica cada uno y detecta errores de la IA, porque el valor está en dominar el método, no en obtener el resultado. La integridad se diseña con resolución en pizarra, defensa oral del procedimiento y variaciones en vivo, sin detectores de IA.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre derivadas parciales y gradiente para estudiantes que ya saben derivar funciones de una variable. Incluye una analogía geométrica (una superficie como un terreno con pendientes), 3 ejemplos progresivos y un ejercicio guiado resuelto paso a paso.
```

```
Genera 5 problemas de aplicación REALES de optimización multivariable en ingeniería (minimizar material de un envase, maximizar cobertura de una señal, optimizar costo de un diseño, ruta de menor consumo) con su planteamiento y solución detallada.
```

```
Crea una rúbrica (1-4) para evaluar la resolución de un problema de cálculo multivariable: planteamiento correcto, aplicación adecuada del método (parciales, Lagrange, integral), corrección del cálculo, interpretación del resultado y orden del procedimiento. Formato tabla.
```

```
Diferencia este problema de "encontrar el máximo de una función de dos variables" en tres niveles: con el procedimiento parcialmente dado, con pistas sobre qué derivadas calcular, y abierto con una restricción adicional (Lagrange). Mantén el mismo objetivo.
```

```
Dame 6 preguntas socráticas para que los estudiantes expliquen el SIGNIFICADO de los conceptos: qué representa el gradiente físicamente, por qué las parciales se anulan en un extremo, qué información da la integral doble.
```

## Ejercicios y actividades con IA

- **Audita el procedimiento de la IA.** Objetivo: dominar el método. El docente pide a la IA la solución de una optimización con un paso mal hecho; el estudiante rehace el cálculo, encuentra el error y lo corrige. Rol de la IA: producir el procedimiento fallido a auditar.
- **Explica el porqué.** Objetivo: comprensión conceptual. El estudiante pide a la IA la solución de un problema y luego escribe con sus palabras por qué cada paso es válido, sin repetir literalmente. Rol de la IA: borrador a interpretar.
- **Inventa y resuelve.** Objetivo: transferir. El estudiante plantea su propio problema de aplicación, lo resuelve a mano y usa la IA solo para verificar el resultado final. Rol de la IA: comprobador, no fuente de la solución.

## Evaluaciones auténticas

- **Resolución en pizarra con variación (AIAS Nivel 1 – Sin IA durante la prueba).** El estudiante resuelve un problema de optimización en la pizarra y el docente le cambia un dato o una restricción en el momento. Mini-rúbrica: planteamiento correcto, dominio del método, exactitud del cálculo, explicación verbal del razonamiento.
- **Proyecto de aplicación con bitácora (AIAS Nivel 3 – IA asistida declarada).** Entrega un problema de ingeniería modelado y resuelto más un registro de qué pidió a la IA, qué verificó y qué corrigió. Mini-rúbrica: modelado del problema, corrección matemática, interpretación del resultado, honestidad sobre el uso de IA.

## Recurso interactivo en HTML

Idea: un visualizador de una superficie de dos variables con sus curvas de nivel y la dirección del gradiente en un punto.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías externas) llamado "Superficies y Gradiente". Dibuja en un canvas las curvas de nivel de una función simple de dos variables (por ejemplo z = x² + y²); permite al usuario mover un punto y muestra el vector gradiente y el valor de las derivadas parciales en ese punto. En español, funciona offline al abrir en el navegador.
```

## Notas

Verifica cada paso: la IA comete errores de signo, de regla de la cadena o presenta procedimientos plausibles pero incorrectos, y puede "alucinar" resultados. No subir datos identificables de estudiantes a las herramientas. Vincula las aplicaciones con el contexto de Dajabón y la ingeniería local (diseño de estructuras, optimización de recursos, cobertura de redes) para que los problemas resulten concretos y motivadores.
