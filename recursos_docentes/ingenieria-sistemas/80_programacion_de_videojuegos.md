# Programación de Videojuegos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** INF-910

## Sobre la materia

Introduce el desarrollo de videojuegos: bucle de juego, manejo de entrada, física básica y colisiones, sprites y animación, máquinas de estado, audio y diseño de niveles, usando un motor (Unity, Godot) o librerías 2D. Competencias clave: estructurar la lógica de un juego, aplicar matemáticas y física al movimiento, e iterar sobre la jugabilidad.

## Enfoque IA (taller)

La IA genera mecánicas, código de movimiento e ideas de diseño, pero el estudiante debe integrarlas, depurar el comportamiento en pantalla y ajustar la jugabilidad con criterio. La integridad se diseña con demostración jugable en vivo y defensa de las decisiones de diseño, no con detección de IA.

## Prompts para el docente

```
Eres profesor de Programación de Videojuegos. Planifica una clase de 2 horas sobre el bucle de juego y el manejo de entrada en Godot (o Unity). Incluye objetivos, el ciclo update/render explicado, un ejemplo de movimiento de un personaje y 3 ejercicios graduados.
```
```
Genera 4 ideas de minijuegos 2D con identidad dominicana para principiantes: esquivar mangos que caen, un vendedor que atrapa monedas en el mercado, un juego de preguntas sobre historia de la frontera, y un laberinto por las calles de Dajabón. Da mecánica central y alcance realista por separado.
```
```
Crea una rúbrica (1-4) para evaluar un prototipo de videojuego: funcionamiento de la mecánica central, calidad del código (organización, estados), jugabilidad y retroalimentación al jugador, y originalidad del diseño.
```
```
Diferencia un ejercicio de "implementar salto con gravedad" en tres niveles: con el script casi completo, con la fórmula de física a completar, y abierto añadiendo doble salto y coyote time. Mantén el objetivo.
```
```
Dame 6 preguntas socráticas para discutir qué hace divertido a un juego, llevando al estudiante a razonar sobre dificultad, retroalimentación, ritmo y recompensa, más allá de los gráficos.
```

## Ejercicios y actividades con IA

- **Depura la mecánica de la IA.** Objetivo: integrar y corregir. El estudiante pide a la IA un script de movimiento o colisión, lo integra en el motor, observa el bug en pantalla (atraviesa paredes, salto infinito) y lo arregla. Rol de la IA: borrador de código a depurar.
- **Diseña con la IA, decide tú.** Objetivo: criterio de diseño. La IA propone varias mecánicas para un minijuego; el estudiante elige una, la prototipa y justifica por qué es más divertida o factible. Rol de la IA: lluvia de ideas.
- **Balancea la dificultad.** Objetivo: iterar sobre jugabilidad. El estudiante pide a la IA parámetros (velocidad, frecuencia de enemigos), los prueba jugando y los ajusta explicando el efecto en la experiencia. Rol de la IA: punto de partida a afinar.

## Evaluaciones auténticas

- **Prototipo jugable con bitácora (aplicada + proceso, AIAS Nivel 3 – IA asistida declarada).** El estudiante entrega un minijuego funcional más un registro de qué pidió a la IA, qué cambió y por qué. Rúbrica: mecánica funcional, calidad del código, jugabilidad, honestidad sobre el uso de IA.
- **Demo y defensa en vivo (oral + aplicada, AIAS Nivel 2 – IA solo para estudio previo).** El estudiante juega su prototipo, explica cómo funciona una mecánica y añade o ajusta un parámetro en el momento. Rúbrica: comprensión del código, capacidad de modificar en vivo, decisiones de diseño justificadas, claridad.

## Recurso interactivo en HTML

Idea: un minijuego 2D jugable en el navegador (esquivar objetos que caen) como base para que los estudiantes lo extiendan.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS con canvas, sin librerías) que sea un minijuego 2D simple: un personaje en la base se mueve con las flechas y debe esquivar objetos que caen desde arriba; lleva puntaje y muestra "Game Over" al chocar. Comenta el bucle de juego y la detección de colisión para poder extenderlo. En español, abrible offline en el navegador.
```

## Notas

Verifica jugando: la IA puede dar código que compila pero con física rara o colisiones que fallan; el comportamiento en pantalla es la prueba real. No subas arte, música o assets con derechos sin licencia, ni datos personales. Adapta los temas a Dajabón (mercado, frontera, cultura local) y, dado el acceso desigual a equipos potentes, prioriza motores ligeros como Godot o juegos 2D en navegador.
