# Minería de Datos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 6 · **Código:** INF-640

## Sobre la materia
Introduce el descubrimiento de patrones y conocimiento en grandes volúmenes de datos: preparación y limpieza de datos, clasificación, agrupamiento (clustering), reglas de asociación, árboles de decisión y evaluación de modelos. Desarrolla competencias de análisis exploratorio, interpretación de resultados, evaluación crítica de modelos y comunicación de hallazgos a partir de datos reales.

## Enfoque IA (taller)
La IA genera código de análisis y resúmenes de resultados que el estudiante debe ejecutar, validar y, sobre todo, interpretar; el reto no es correr el modelo sino entender qué significan los patrones y si son confiables. La integridad se diseña evaluando la interpretación y la crítica metodológica, nunca con detectores.

## Prompts para el docente
```
Eres profesor de Minería de Datos (6to cuatrimestre). Planifica una clase de 2 horas sobre árboles de decisión: objetivos, intuición con un ejemplo cotidiano (aprobar o no un crédito), cómo se elige el atributo de partición (entropía/ganancia), un ejemplo trazado y un ejercicio con dataset pequeño.
```
```
Propón 5 datasets realistas y de contexto local para practicar minería de datos en Dajabón: ventas de un colmado (reglas de asociación), notas y deserción estudiantil (clasificación), consumo eléctrico por barrio (clustering), registros de una clínica. Para cada uno: qué patrón buscar y qué técnica aplicar.
```
```
Crea una rúbrica (1-4) para evaluar un mini-proyecto de minería de datos: preparación y limpieza de datos, elección y aplicación correcta de la técnica, evaluación del modelo (métricas adecuadas) e interpretación útil y honesta de los hallazgos. Formato tabla.
```
```
Diferencia la actividad "construir un clasificador" en tres niveles: con notebook casi completo y datos limpios, con el dataset crudo a preparar y solo pistas del flujo, y abierto exigiendo comparar dos algoritmos con sus métricas y discusión de overfitting.
```
```
Genera 8 preguntas socráticas que lleven al estudiante a cuestionar un modelo: ¿el patrón es causal o solo correlación?, ¿hay sesgo en los datos?, ¿la métrica elegida es la adecuada?, ¿qué pasaría con datos nuevos?
```

## Ejercicios y actividades con IA
- **Interpreta los resultados, no solo los generes.** Objetivo: dar sentido a los datos. El estudiante pide a la IA un análisis de clustering sobre su dataset, ejecuta el código y escribe qué significan los grupos en el mundo real, descartando interpretaciones que la IA exagera. Rol de la IA: producir el análisis técnico a interpretar.
- **Caza el sesgo y la fuga de datos.** Objetivo: criticar la metodología. El estudiante pide a la IA un flujo de modelado y revisa si hay errores típicos (data leakage, clases desbalanceadas, métrica engañosa), corrigiéndolos. Rol de la IA: generar un pipeline con posibles fallos a detectar.
- **Limpieza guiada, decisión propia.** Objetivo: preparar datos. El estudiante pide a la IA opciones para tratar valores faltantes y atípicos, decide cuál aplica según su dataset y justifica el efecto en el resultado. Rol de la IA: menú de técnicas a evaluar, no la decisión.

## Evaluaciones auténticas
- **Análisis de un dataset real con informe de hallazgos (aplicada + de proceso).** Sobre datos locales, el estudiante aplica una técnica y entrega un informe con sus decisiones, métricas e interpretación, declarando el uso de IA. *AIAS Nivel 3 (IA asistida declarada).* Rúbrica: preparación de datos, corrección técnica, evaluación con métricas adecuadas, calidad de la interpretación.
- **Defensa oral del modelo (oral).** El estudiante explica su modelo, sus métricas y responde a un cuestionamiento en vivo ("¿y si los datos estuvieran sesgados?", "interpreta este resultado"). *AIAS Nivel 2 (IA para desarrollo previo; defensa sin IA).* Rúbrica: comprensión del método, lectura correcta de métricas, postura crítica sobre limitaciones, claridad.

## Recurso interactivo en HTML
Un explorador visual de clustering donde el usuario coloca puntos y ve cómo se forman los grupos, para construir intuición.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que demuestre k-means de forma visual: el usuario agrega puntos en un lienzo, elige cuántos grupos (k) y, al pulsar "Iterar", ve cómo los centroides se mueven y los puntos cambian de color por grupo paso a paso. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica la interpretación de la IA: tiende a presentar correlaciones como causas y a sobrevender la "significancia" de patrones triviales; enseñar a dudar es el objetivo central. Cuida la privacidad de datos sensibles (salud, notas, finanzas): usa datasets anonimizados o ficticios y nunca subas datos personales reales a herramientas de IA. Adapta los ejemplos a datos del entorno de Dajabón para que los hallazgos sean significativos.
