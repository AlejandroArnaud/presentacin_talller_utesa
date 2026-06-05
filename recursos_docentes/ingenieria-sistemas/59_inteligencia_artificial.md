# Inteligencia Artificial

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 7 · **Código:** INF-502

## Sobre la materia
Fundamentos de la IA: agentes inteligentes, búsqueda (no informada e informada, A*), representación del conocimiento, razonamiento, introducción al aprendizaje automático (supervisado y no supervisado), redes neuronales básicas y nociones de IA generativa y sus límites. Competencias clave: modelar problemas como búsqueda o aprendizaje, elegir técnicas adecuadas y evaluar críticamente los resultados y riesgos de un sistema de IA.

## Enfoque IA (taller)
Materia ideal para usar la IA como objeto de estudio: el estudiante no solo la usa, sino que entiende y explica cómo funciona y dónde falla (alucinaciones, sesgos, sobreajuste). Integridad por diseño evaluando comprensión conceptual, implementación propia y defensa oral, no con detectores.

## Prompts para el docente
```
Eres profesor de Inteligencia Artificial (7.º cuatrimestre, Ingeniería en Sistemas). Planifica una clase de 90 min sobre algoritmos de búsqueda informada (heurísticas y A*), con objetivos, una analogía de mapas/rutas en RD, un ejemplo guiado paso a paso y 3 ejercicios graduados.
```
```
Genera 5 casos de aplicación de IA con datos del contexto dominicano (recomendar cultivos por clima, detectar spam en español, clasificar reclamos de un ayuntamiento, predecir demanda en un comercio, asistir diagnóstico básico) indicando qué técnica de IA encaja en cada uno y por qué. Sin la solución completa.
```
```
Crea una rúbrica de 4 criterios para evaluar un proyecto de IA: definición clara del problema y los datos, elección justificada de la técnica, evaluación con métricas adecuadas, y discusión de limitaciones y sesgos. En español, escala 1 a 4.
```
```
Toma el tema "aprendizaje supervisado" y propón tres niveles: básico (explicar clasificación vs regresión con ejemplos), intermedio (entrenar y evaluar un clasificador simple), avanzado (diagnosticar sobreajuste y proponer mejoras).
```
```
Dame 8 preguntas socráticas que lleven al estudiante a explicar POR QUÉ un modelo con alta exactitud puede ser inútil o injusto (datos sesgados, clases desbalanceadas) y a cuestionar las afirmaciones de marketing sobre "IA que piensa".
```

## Ejercicios y actividades con IA
- **Explica la caja negra.** Objetivo: comprensión conceptual. El estudiante pide a la IA que describa cómo funciona un algoritmo (p. ej. k-NN o A*), lo verifica contra el material del curso y corrige u completa lo que la IA simplificó o erró. Rol de la IA: explicadora a auditar.
- **Provoca y analiza una alucinación.** Objetivo: entender límites de la IA generativa. El estudiante diseña preguntas que hagan "alucinar" a un chatbot, documenta el error y explica por qué ocurre según lo visto en clase. Rol de la IA: sistema bajo estudio.
- **Diseña antes de implementar.** Objetivo: criterio de ingeniería. El estudiante define problema, datos y métrica por su cuenta, luego pide a la IA una propuesta de solución y la critica (¿es realista?, ¿los datos existen?, ¿la métrica es la correcta?). Rol de la IA: consultora cuyo plan se evalúa.

## Evaluaciones auténticas
- **Proyecto de IA aplicado y sustentado (AIAS Nivel 4 — IA integrada y declarada: puede ayudar a codear y depurar; el estudiante diseña, evalúa y defiende).** Resuelve un problema local con una técnica de IA y sustenta decisiones. Mini-rúbrica: (1) problema y datos bien definidos, (2) técnica justificada, (3) evaluación con métricas, (4) discusión de límites y sesgos.
- **Examen oral conceptual (AIAS Nivel 1 — sin IA).** El estudiante explica un algoritmo, lo traza con un ejemplo y responde "¿qué pasa si cambiamos la heurística/los datos?". Mini-rúbrica: (1) dominio del concepto, (2) trazado correcto, (3) razonamiento ante variaciones, (4) claridad.

## Recurso interactivo en HTML
Visualizador de búsqueda en una cuadrícula: el estudiante ve cómo BFS, Dijkstra o A* exploran y encuentran el camino.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin librerías externas) que visualice algoritmos de búsqueda de ruta en una cuadrícula: el usuario coloca origen, destino y obstáculos, elige BFS, Dijkstra o A*, y ve paso a paso los nodos explorados y el camino final, con un contador de nodos visitados para comparar. En español, abrible offline en el navegador.
```

## Notas
La IA explica conceptos de IA con errores sutiles y exceso de confianza: verifica definiciones, fórmulas y código contra fuentes del curso. No subas datasets con datos personales sin anonimizar. Adapta los proyectos a Dajabón (datos agrícolas y fronterizos, servicios municipales, comercios) y considera recursos limitados: prioriza modelos ligeros y datasets pequeños que corran en las máquinas del recinto.
