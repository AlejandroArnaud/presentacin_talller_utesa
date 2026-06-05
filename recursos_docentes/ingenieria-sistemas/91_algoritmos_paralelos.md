# Algoritmos Paralelos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 11 · **Código:** INF-025

## Sobre la materia
Estudia el diseño de algoritmos que ejecutan tareas simultáneamente: modelos de paralelismo, descomposición de problemas, sincronización, condiciones de carrera, deadlocks, y métricas de rendimiento (speedup, eficiencia, ley de Amdahl). Desarrolla competencias de razonamiento concurrente, optimización y aprovechamiento de arquitecturas multinúcleo y distribuidas.

## Enfoque IA (taller)
La IA explica conceptos sutiles de concurrencia y genera código paralelo que el estudiante debe analizar en busca de condiciones de carrera y medir empíricamente: el reto es razonar sobre el comportamiento no determinista, no obtener el código. La integridad se logra evaluando el análisis de correctitud, la medición de speedup real y la defensa del diseño, no la entrega de código generado.

## Prompts para el docente
```
Eres profesor de Algoritmos Paralelos de undécimo cuatrimestre. Planifica una clase de 90 min sobre la ley de Amdahl: objetivos, intuición del límite del speedup, un cálculo paso a paso y un ejercicio donde el estudiante decida si vale la pena paralelizar cierto algoritmo.
```
```
Genera 4 ejemplos de algoritmos clásicos con su versión secuencial y la oportunidad de paralelización (suma de un arreglo grande, multiplicación de matrices, búsqueda, ordenamiento por fusión). Para cada uno indica el patrón de paralelismo y dónde aparece sincronización.
```
```
Crea una rúbrica de 4 criterios para evaluar un programa paralelo del estudiante: correctitud (ausencia de condiciones de carrera), speedup logrado y su medición, uso adecuado de sincronización, y claridad del análisis de rendimiento. Escala 1-4.
```
```
Diferencia la explicación de "condición de carrera" en tres niveles: estudiante que recién entiende hilos, estudiante que ya usa mutex básicos y estudiante adelantado que diseña con estructuras lock-free.
```
```
Genera 8 preguntas socráticas para discutir por qué más hilos no siempre significa más velocidad (overhead, contención, fracción secuencial, memoria) y cómo identificar el cuello de botella real.
```

## Ejercicios y actividades con IA
- **Caza la condición de carrera.** Objetivo: razonar sobre concurrencia. El estudiante pide a la IA un programa paralelo con un bug de sincronización (o uno real intermitente), lo analiza, reproduce el fallo y lo corrige explicando por qué ocurría. Rol de la IA: generar código concurrente sutilmente incorrecto a diagnosticar.
- **Mide el speedup real.** Objetivo: contrastar teoría y práctica. El estudiante paraleliza un algoritmo con apoyo de la IA, mide tiempos con distinto número de hilos y compara el speedup obtenido con el predicho por Amdahl, explicando la brecha. Rol de la IA: aportar una versión paralela a verificar empíricamente.

## Evaluaciones auténticas
- **Paralelización y reporte de rendimiento (aplicada + proceso).** El estudiante toma un algoritmo secuencial, lo paraleliza, mide speedup/eficiencia y documenta el análisis. *AIAS Nivel 3 (IA para apoyo, contribución declarada).* Rúbrica: correctitud sin carreras, calidad de la medición, análisis de rendimiento, justificación del diseño.
- **Defensa del diseño concurrente (oral).** Ante un escenario nuevo (más núcleos, más datos), el estudiante predice y argumenta cómo cambiaría el rendimiento. *AIAS Nivel 2 (IA solo para estudio previo, declarada).* Rúbrica: comprensión del paralelismo, razonamiento sobre escalabilidad, manejo de sincronización, claridad.

## Recurso interactivo en HTML
Un visualizador del speedup según la ley de Amdahl: el usuario varía la fracción paralelizable y el número de procesadores y ve la curva de ganancia.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que ilustre la ley de Amdahl: el usuario ajusta con deslizadores la fracción paralelizable de un programa y el número de procesadores, y ve en una gráfica el speedup máximo alcanzable y el límite teórico. En español, abrible offline en el navegador.
```

## Notas
Verifica el código concurrente de la IA: genera soluciones que "parecen" correctas pero tienen condiciones de carrera o deadlocks que solo aparecen bajo carga, ideales como ejercicio de detección. No subas trabajos identificables de estudiantes. Adapta a Dajabón considerando el acceso a hardware: usa ejemplos que corran en laptops de pocos núcleos (paralelismo con hilos o multiprocessing) y permite análisis teórico cuando no haya equipo multinúcleo disponible.
