# Algoritmos y Estructuras de Datos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 6 · **Código:** INF-217

## Sobre la materia
Estudia las estructuras de datos fundamentales (arreglos, listas enlazadas, pilas, colas, árboles, grafos y tablas hash) y los algoritmos que operan sobre ellas: búsqueda, ordenamiento, recorridos y análisis de complejidad (notación Big-O). Desarrolla competencias de diseño eficiente de soluciones, selección justificada de la estructura adecuada al problema y razonamiento sobre costo en tiempo y espacio.

## Enfoque IA (taller)
La IA propone implementaciones y análisis de complejidad que el estudiante debe verificar, trazar y optimizar: el reto es justificar *por qué* una estructura es la correcta, no obtener el código. La integridad se diseña evaluando el razonamiento sobre eficiencia (trazado, defensa oral, análisis comparativo), nunca con detectores.

## Prompts para el docente
```
Eres profesor de Algoritmos y Estructuras de Datos (6to cuatrimestre). Planifica una clase de 2 horas sobre árboles binarios de búsqueda: objetivos, una analogía cotidiana, inserción y recorridos (inorden/preorden/postorden) con ejemplo trazado, y 3 ejercicios graduados con solución aparte.
```
```
Genera 5 casos reales donde elegir la estructura de datos correcta cambia el rendimiento: agenda de contactos (tabla hash vs lista), cola de atención en un banco de Dajabón (cola vs arreglo), historial de "deshacer" (pila), rutas entre pueblos fronterizos (grafo). Para cada uno da el problema y la estructura óptima justificada.
```
```
Crea una rúbrica de 4 criterios (escala 1-4) para evaluar la implementación de una estructura de datos: corrección de las operaciones, eficiencia (complejidad Big-O lograda), elección justificada de la estructura y manejo de casos límite (vacío, duplicados, desbordamiento).
```
```
Diferencia el ejercicio "implementar una lista enlazada" en tres niveles: con esqueleto de clase casi completo, con solo las firmas de métodos, y abierto exigiendo además una lista doblemente enlazada con análisis de complejidad. Mantén el mismo objetivo.
```
```
Genera 8 preguntas socráticas que lleven al estudiante a razonar por qué un algoritmo O(n log n) puede ser preferible a uno O(n) según el contexto, y cuándo la estructura más simple gana a la más sofisticada.
```

## Ejercicios y actividades con IA
- **Audita la complejidad de la IA.** Objetivo: analizar costo. El estudiante pide a la IA una implementación con su análisis Big-O, lo verifica contando operaciones reales y corrige el análisis si la IA se equivoca. Rol de la IA: generar código + análisis (a veces incorrecto) para auditar.
- **Compara dos estructuras para el mismo problema.** Objetivo: decidir con criterio. El estudiante plantea un problema, pide a la IA dos soluciones (p. ej. búsqueda lineal vs tabla hash), las traza con datos de prueba y argumenta cuál conviene y por qué. Rol de la IA: ofrecer alternativas a contrastar.

## Evaluaciones auténticas
- **Trazado y análisis en papel (proceso, sin IA).** Dado un algoritmo sobre un árbol o grafo, el estudiante simula su ejecución paso a paso y deduce su complejidad. *AIAS Nivel 1 (Sin IA).* Rúbrica: exactitud del trazado, corrección del análisis Big-O, manejo de casos límite, claridad.
- **Defensa oral de una implementación propia (oral + aplicada).** El estudiante explica su estructura y la adapta en vivo ante una variación (agregar una operación, cambiar la restricción). *AIAS Nivel 2 (IA solo para estudio previo, declarado).* Rúbrica: comprensión de la estructura, capacidad de modificar, justificación de la elección, claridad.

## Recurso interactivo en HTML
Un visualizador donde el usuario inserta y elimina nodos en un árbol o una lista enlazada y observa cómo cambia la estructura paso a paso.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que visualice un árbol binario de búsqueda: el usuario inserta y elimina valores con un campo de texto y ve el árbol dibujado actualizarse, resaltando el camino recorrido en cada inserción. Incluye botones para recorridos inorden/preorden. En español, abrible offline en el navegador.
```

## Notas
Verifica el análisis de complejidad de la IA: suele dar Big-O plausibles pero incorrectos, y código que compila pero falla en casos límite (lista vacía, duplicados) — ideal como ejercicio de detección. No subas datos personales ni trabajos identificables de estudiantes. Adapta a Dajabón con ejemplos del entorno (colas en comercios, rutas entre pueblos fronterizos) y, ante acceso desigual a equipos, permite diseño y trazado en papel.
