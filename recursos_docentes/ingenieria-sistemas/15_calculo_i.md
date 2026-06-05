# Cálculo I

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 2 · **Código:** MAT-170

## Sobre la materia
Estudio del límite, la continuidad, la derivada y sus aplicaciones (razones de cambio, optimización, trazado de curvas) e introducción a la integral. Competencias clave: modelar el cambio con derivadas, interpretar el comportamiento de una función y resolver problemas de optimización razonando, no solo aplicando fórmulas mecánicamente.

## Enfoque IA (taller)
La IA resuelve derivadas y límites paso a paso pero comete errores de signo, de regla de la cadena y de simplificación: el estudiante audita cada paso, lo que entrena el razonamiento matemático. Integridad por diseño mediante problemas aplicados, interpretación y defensa del procedimiento, nunca por detección.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre la derivada como razón de cambio para
estudiantes de segundo cuatrimestre de Ingeniería en Sistemas. Conecta con un caso
de informática (velocidad de procesamiento, crecimiento de usuarios por día). Incluye
la idea intuitiva, ejemplos guiados con la regla de potencias y ejercicios individuales.
```

```
Genera 6 problemas de optimización aplicados a contextos de informática y del comercio
de Dajabón (minimizar el costo de almacenamiento, maximizar la ganancia de un negocio
según el precio, área máxima de un terreno fronterizo). Da solo los enunciados.
```

```
Crea una rúbrica de 4 criterios (escala 1 a 4, en español, formato tabla) para evaluar
un problema de optimización: planteamiento de la función objetivo, derivación correcta,
hallazgo y justificación del punto crítico, e interpretación del resultado en el contexto.
```

```
Toma el tema "regla de la cadena" y propón tres niveles de ejercicio: básico (composición
simple), intermedio (función compuesta dentro de un cociente) y avanzado (modelar y
derivar una situación real). Mantén el mismo objetivo de aprendizaje.
```

```
Dame 8 preguntas socráticas que lleven al estudiante a explicar POR QUÉ la derivada vale
cero en un máximo o mínimo y QUÉ significa el signo de la segunda derivada, en vez de
memorizar el criterio.
```

## Ejercicios y actividades con IA
- **Audita al solucionador.** Objetivo: razonamiento y verificación. El estudiante pide a la IA que derive una función con regla de la cadena paso a paso, rehace cada paso a mano y marca dónde (si) la IA se equivocó. Rol de la IA: tutor falible que el estudiante corrige.
- **De la situación a la derivada.** Objetivo: modelar el cambio. El estudiante describe un fenómeno (usuarios que crecen con el tiempo), pide a la IA una función que lo represente, la deriva él mismo e interpreta qué dice la razón de cambio. Rol de la IA: proponer el modelo, no resolverlo.
- **Inventa un problema de optimización.** Objetivo: transferir. El estudiante crea un problema sobre un negocio de Dajabón, lo resuelve y luego pide a la IA su solución para compararla y explicar diferencias. Rol de la IA: contraste, no fuente.

## Evaluaciones auténticas
- **Bitácora de problemas con interpretación (AIAS Nivel 1 — sin IA en la resolución; IA solo para verificar después, declarado).** El estudiante entrega problemas con todo el procedimiento y explica qué significa cada resultado (la derivada, el punto crítico) en el contexto. Mini-rúbrica: (1) planteamiento, (2) procedimiento de derivación, (3) interpretación contextual, (4) claridad de la explicación.
- **Defensa en pizarra (AIAS Nivel 1 — sin IA).** El estudiante resuelve un problema de límite u optimización frente al grupo y responde una variación pedida en el momento. Mini-rúbrica: (1) dominio del procedimiento, (2) exactitud, (3) capacidad de adaptar ante el cambio, (4) claridad al explicar.

## Recurso interactivo en HTML
Visualizador de la recta tangente: el estudiante mueve un punto sobre una curva y ve cómo la pendiente de la tangente coincide con el valor de la derivada.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, usando canvas, sin librerías)
que grafique una función a elegir entre 3 opciones y dibuje la recta tangente en un punto
controlado por un deslizador. Al mover el punto, muestra en pantalla el valor de la
derivada (la pendiente) en ese punto. Interfaz en español, abre directo en el navegador.
```

## Notas
Verifica SIEMPRE el procedimiento de la IA: falla con signos, regla de la cadena y simplificación algebraica, justo lo que conviene que el estudiante detecte. No es necesario compartir datos de estudiantes con las herramientas. Usa contextos de Dajabón e informática (almacenamiento, usuarios, precios del mercado) para que el cálculo se sienta útil y no abstracto.
