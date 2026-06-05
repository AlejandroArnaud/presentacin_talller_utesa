# Laboratorio Inteligencia Artificial

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 7 · **Código:** INF-503

## Sobre la materia
Componente práctico de Inteligencia Artificial: el estudiante implementa y experimenta con algoritmos de búsqueda y modelos de aprendizaje (en Python con scikit-learn u similar), prepara datos, entrena, evalúa con métricas y compara resultados. Competencias clave: programar soluciones de IA, manejar el flujo dato-modelo-evaluación y validar resultados de forma reproducible.

## Enfoque IA (taller)
La IA es un asistente de laboratorio que sugiere código y explica errores; el estudiante decide qué aplicar y confirma ejecutando y midiendo. La integridad se diseña observando el trabajo en máquina, exigiendo evidencia de ejecución y demostraciones en vivo, no con detectores de IA.

## Prompts para el docente
```
Eres instructor del Laboratorio de Inteligencia Artificial (7.º cuatrimestre). Diseña una guía de práctica de 2 horas para entrenar y evaluar un clasificador simple (k-NN o árbol de decisión) en Python: objetivos, dataset sugerido pequeño, pasos, métricas (exactitud, matriz de confusión) y resultado esperado.
```
```
Genera 5 mensajes de error REALES que aparecen al usar scikit-learn/numpy/pandas (datos con NaN, formas incompatibles, etiquetas no numéricas, división de datos mal hecha), con su causa probable y cómo guiar al alumno a resolverlos sin dar la respuesta directa.
```
```
Crea una rúbrica (1-4) para evaluar una práctica de laboratorio de IA: el código corre y es reproducible, el preprocesamiento de datos es correcto, la evaluación usa métricas adecuadas, y el estudiante explica e interpreta los resultados. Formato tabla.
```
```
Convierte la práctica "entrenar un clasificador" en tres niveles: con esqueleto de código y dataset dado, con pistas y dataset a limpiar, y abierta (el estudiante elige modelo y justifica métricas). Para diferenciar por ritmo.
```
```
Dame 6 preguntas para que, durante el laboratorio, el estudiante explique POR QUÉ su modelo obtuvo cierta exactitud, si hay sobreajuste y QUÉ probó antes de pedir ayuda.
```

## Ejercicios y actividades con IA
- **Interpreta el error de entrenamiento.** Objetivo: depurar pipelines de ML. El estudiante copia un error de scikit-learn a la IA, le pide explicarlo en español y aplica la corrección verificando que el modelo entrene. Rol de la IA: traductora del diagnóstico.
- **Mejora la evaluación.** Objetivo: medir bien. El estudiante pide a la IA que sugiera métricas y validación cruzada adecuadas para su problema, las implementa y compara contra su evaluación inicial, justificando cuál refleja mejor el desempeño. Rol de la IA: asesora cuyas sugerencias se prueban.
- **Caza el sobreajuste.** Objetivo: criterio experimental. El estudiante entrena un modelo, observa una exactitud sospechosamente alta y, con apoyo de la IA, formula hipótesis (fuga de datos, dataset pequeño) que verifica en máquina. Rol de la IA: generadora de hipótesis a filtrar.

## Evaluaciones auténticas
- **Examen práctico en máquina (AIAS Nivel 2 — IA solo para consulta puntual declarada; el estudiante implementa y evalúa).** Entrena, evalúa y modifica un modelo en vivo (cambiar parámetro, re-medir) y explica el efecto. Rúbrica: el código corre, preprocesamiento correcto, métrica adecuada, interpretación del cambio.
- **Cuaderno de laboratorio con evidencias (AIAS Nivel 3 — IA asistida y declarada).** Entrega notebook con resultados, métricas, gráficos y notas de qué consultó a la IA y por qué. Rúbrica: reproducibilidad, cobertura de evaluación, autonomía depurando, reflexión sobre el uso de IA.

## Recurso interactivo en HTML
Playground de un clasificador: el estudiante coloca puntos de dos clases y ve cómo cambia la frontera de decisión.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin librerías externas) que sea un "playground de clasificación": el usuario hace clic para colocar puntos de dos colores (clases) en un plano, ajusta un parámetro simple (p. ej. k de k-NN simulado), y la app dibuja la frontera de decisión y muestra cuántos puntos quedan bien clasificados. En español, abrible offline en el navegador.
```

## Notas
Verifica siempre ejecutando: la IA "alucina" funciones de librerías o usa una API de otra versión de scikit-learn, y puede sugerir evaluaciones engañosas. No subas datasets con datos personales sin anonimizar ni código identificable de estudiantes. Considera la conexión intermitente y máquinas modestas de Dajabón: prioriza datasets pequeños, modelos ligeros y entornos que corran offline (instalación local de Python).
