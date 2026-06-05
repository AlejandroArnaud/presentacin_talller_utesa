# Computación Gráfica

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 7 · **Código:** INF-700

## Sobre la materia
Fundamentos de gráficos por computadora: sistemas de coordenadas, primitivas de dibujo, transformaciones geométricas (traslación, rotación, escala, matrices), proyecciones 2D/3D, modelos de color, rasterización, e introducción a iluminación y a APIs gráficas (Canvas, WebGL/OpenGL). Competencias clave: representar y transformar objetos matemáticamente, e implementar visualizaciones interactivas con criterio.

## Enfoque IA (taller)
La IA genera código gráfico y deduce transformaciones, pero confunde ejes, órdenes de matrices y convenciones de coordenadas: el estudiante debe ejecutar, observar el resultado visual y corregir. Integridad por diseño evaluando la salida visual real, la comprensión matemática y la defensa en vivo, no con detectores.

## Prompts para el docente
```
Eres profesor de Computación Gráfica (7.º cuatrimestre, Ingeniería en Sistemas). Planifica una clase de 90 min sobre transformaciones 2D con matrices (traslación, rotación, escala y composición), con objetivos, ejemplo numérico paso a paso y 3 ejercicios graduados que terminen dibujando en Canvas.
```
```
Genera 5 ejercicios prácticos de computación gráfica con contexto visual claro (rotar el logo de UTESA, animar una bandera dominicana ondeando, escalar un mapa de la región, mover un sprite, dibujar un patrón con simetría). Da el enunciado y el resultado esperado, sin el código completo.
```
```
Crea una rúbrica de 4 criterios para evaluar un proyecto de computación gráfica: correctitud de las transformaciones aplicadas, calidad y fluidez del resultado visual, comprensión matemática demostrada, y limpieza/organización del código. En español, escala 1 a 4.
```
```
Toma el tema "transformaciones compuestas" y propón tres niveles: básico (aplicar una transformación a una figura), intermedio (componer dos o tres en el orden correcto), avanzado (rotar alrededor de un punto arbitrario y explicar el porqué del orden de matrices).
```
```
Dame 8 preguntas socráticas que lleven al estudiante a explicar POR QUÉ el orden de las transformaciones cambia el resultado y a predecir el efecto visual antes de ejecutar el código, en vez de solo probar y ver.
```

## Ejercicios y actividades con IA
- **Predice, luego ejecuta el código de la IA.** Objetivo: conectar matemática y visual. El estudiante pide a la IA una transformación, predice en papel cómo se verá, ejecuta y explica cualquier diferencia (a menudo por orden de matrices o eje invertido). Rol de la IA: generadora de código a verificar visualmente.
- **Depura el render roto.** Objetivo: diagnóstico visual. El estudiante pide a la IA un fragmento gráfico con un defecto (figura fuera de pantalla, rotación equivocada), lo ejecuta, identifica la causa y la corrige. Rol de la IA: fuente de un error a diagnosticar.
- **De la matriz al efecto.** Objetivo: comprensión profunda. El estudiante escribe una matriz de transformación a mano, pide a la IA que prediga el efecto y compara con la ejecución real, corrigiendo a quien se equivoque. Rol de la IA: par con quien contrastar.

## Evaluaciones auténticas
- **Proyecto gráfico interactivo sustentado (AIAS Nivel 4 — IA integrada y declarada para codear/depurar; diseño y matemática propios).** Crea una visualización o mini-animación y la modifica en vivo (cambiar centro de rotación, agregar escala). Mini-rúbrica: (1) transformaciones correctas, (2) resultado visual, (3) comprensión matemática, (4) capacidad de modificar en vivo.
- **Examen en máquina con cambio pedido (AIAS Nivel 1 — sin IA en la prueba).** El estudiante implementa una transformación y la ajusta según una variación dada por el docente. Mini-rúbrica: (1) implementación correcta, (2) salida visual esperada, (3) manejo del cambio, (4) explicación del razonamiento.

## Recurso interactivo en HTML
Laboratorio de transformaciones 2D: el estudiante mueve deslizadores y ve la figura transformarse en tiempo real.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS con Canvas, sin librerías externas) que sea un "laboratorio de transformaciones 2D": muestra una figura simple y deslizadores para traslación (x,y), rotación (grados) y escala; al moverlos, la figura se transforma en tiempo real y se muestra la matriz de transformación resultante. En español, abrible offline en el navegador.
```

## Notas
La IA confunde convenciones (eje Y hacia abajo en Canvas, orden fila/columna de matrices, radianes vs grados): verifica SIEMPRE ejecutando y mirando el resultado. No subas trabajos identificables de estudiantes. Adapta los ejercicios a Dajabón con elementos visuales cercanos (bandera y escudo dominicanos, mapa de la provincia, logo del recinto) y prioriza Canvas/JavaScript, que corre offline en cualquier navegador sin instalar nada.
