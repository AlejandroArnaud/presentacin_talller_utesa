# Métodos Numéricos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 7 · **Código:** INF-705

## Sobre la materia
Técnicas para resolver problemas matemáticos de forma aproximada con el computador: error y precisión, raíces de ecuaciones (bisección, Newton-Raphson), sistemas lineales (Gauss, iterativos), interpolación, ajuste de curvas, integración y derivación numérica, y solución de ecuaciones diferenciales (Euler, Runge-Kutta). Competencias clave: elegir el método adecuado, controlar el error y validar la convergencia de una solución numérica.

## Enfoque IA (taller)
La IA implementa métodos y calcula iteraciones, pero arrastra errores de redondeo, criterios de parada mal puestos y métodos que no convergen sin avisar: el estudiante verifica convergencia, error y supuestos. Integridad por diseño evaluando el razonamiento numérico, la implementación propia y la defensa oral, no con detectores.

## Prompts para el docente
```
Eres profesor de Métodos Numéricos (7.º cuatrimestre, Ingeniería en Sistemas). Planifica una clase de 90 min sobre el método de Newton-Raphson, con objetivos, derivación intuitiva, un ejemplo numérico con tabla de iteraciones, criterios de parada y 3 ejercicios graduados.
```
```
Genera 5 problemas de ingeniería que se resuelvan con métodos numéricos (hallar la raíz de una ecuación de diseño, ajustar una curva a datos de sensores, integrar un área irregular, resolver un sistema de ecuaciones de una red, modelar enfriamiento con Euler). Da el enunciado y los datos, sin la solución.
```
```
Crea una rúbrica de 4 criterios para evaluar la solución de un problema numérico: elección y justificación del método, correctitud de la implementación/iteraciones, análisis del error y la convergencia, e interpretación del resultado. En español, escala 1 a 4.
```
```
Toma el tema "raíces de ecuaciones" y propón tres niveles: básico (aplicar bisección con tabla a mano), intermedio (comparar bisección vs Newton en velocidad de convergencia), avanzado (analizar cuándo Newton diverge y por qué).
```
```
Dame 8 preguntas socráticas que lleven al estudiante a explicar POR QUÉ un método numérico puede no converger o dar un resultado erróneo (mala estimación inicial, error de redondeo, criterio de parada flojo), en vez de confiar ciegamente en el número final.
```

## Ejercicios y actividades con IA
- **Audita las iteraciones.** Objetivo: rigor numérico. El estudiante pide a la IA que resuelva con un método (p. ej. Newton) y revisa la tabla de iteraciones, el criterio de parada y el error final, corrigiendo si la IA paró antes de tiempo o eligió mal el método. Rol de la IA: calculadora falible a auditar.
- **Compara métodos sobre tus datos.** Objetivo: criterio de selección. El estudiante implementa un método, pide a la IA otro para el mismo problema y compara convergencia y exactitud, justificando cuál conviene. Rol de la IA: fuente de una solución alternativa a contrastar.
- **Provoca la divergencia.** Objetivo: entender límites. El estudiante busca una estimación inicial que haga divergir a Newton-Raphson, lo verifica ejecutando y explica con apoyo de la IA por qué ocurre. Rol de la IA: asistente para razonar el fallo, no para ocultarlo.

## Evaluaciones auténticas
- **Resolución y reporte de un problema numérico (AIAS Nivel 3 — IA asistida y declarada para codear/calcular; método, análisis de error y conclusión propios).** El estudiante resuelve un problema de ingeniería, reporta iteraciones, error y convergencia. Mini-rúbrica: (1) método justificado, (2) implementación correcta, (3) análisis de error/convergencia, (4) interpretación.
- **Defensa oral con trazado a mano (AIAS Nivel 1 — sin IA).** El estudiante ejecuta una o dos iteraciones de un método en pizarra y responde "¿qué pasa si cambiamos la estimación inicial o la tolerancia?". Mini-rúbrica: (1) dominio del método, (2) cálculo correcto, (3) razonamiento sobre convergencia, (4) claridad.

## Recurso interactivo en HTML
Visualizador de Newton-Raphson: el estudiante ve las tangentes acercándose a la raíz iteración por iteración.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS con Canvas, sin librerías externas) que visualice el método de Newton-Raphson: el usuario elige una función simple de una lista y una estimación inicial, y la app dibuja la curva y las rectas tangentes acercándose a la raíz, mostrando una tabla de iteraciones con el valor y el error en cada paso. En español, abrible offline en el navegador.
```

## Notas
La IA introduce con frecuencia errores numéricos sutiles (redondeo, criterios de parada laxos, métodos que no convergen) y los presenta con seguridad: exige verificar iteraciones, error y convergencia, justo lo que entrena la materia. No subas datos identificables de estudiantes. Adapta los problemas a Dajabón (datos de sensores agrícolas, mediciones de la zona, diseño de un comercio local) y considera máquinas modestas: prioriza implementaciones ligeras (Python, hoja de cálculo o JavaScript) que corran offline.
