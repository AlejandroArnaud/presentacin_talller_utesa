# Robótica (electiva optativa)

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** INF-026

## Sobre la materia
Fundamentos de robótica: cinemática y movimiento, sensores y actuadores, motores (DC, servo, paso a paso), control de lazo cerrado, microcontroladores y programación de comportamientos autónomos (seguidores de línea, evasión de obstáculos, brazos robóticos). Competencias clave: construir y programar un robot que cumpla una tarea, ajustar su control y diagnosticar fallas mecánicas y de software.

## Enfoque IA (taller)
La IA sugiere algoritmos de control y código de movimiento como punto de partida, pero el estudiante debe calibrarlo contra un robot físico que se desvía, derrapa y falla de formas que la IA no anticipa. La integridad se demuestra con el robot ejecutando la tarea en vivo, no con vigilancia de la entrega.

## Prompts para el docente
```
Eres profesor de Robótica de 9º cuatrimestre de Ingeniería en Sistemas. Planifica una práctica de 3 horas para construir y programar un robot seguidor de línea con Arduino y sensores IR. Incluye objetivos, componentes, montaje, código comentado con ajuste de velocidad en curvas y una falla intencional para depurar.
```
```
Genera 5 retos de robótica con contexto dominicano: un robot que clasifique granos de café, un brazo que ordene productos en un colmado, un seguidor de línea para una feria escolar en Dajabón, un robot evasor para una pista, y un sistema de riego móvil. Para cada uno, sensores, actuadores y el comportamiento esperado.
```
```
Crea una rúbrica (1-4) para evaluar un proyecto de robótica: cumplimiento de la tarea por el robot, calidad y eficiencia del código de control, robustez mecánica del montaje, calibración de sensores y documentación. En tabla.
```
```
Diferencia el reto "construye un robot evasor de obstáculos" en tres niveles: con el chasis y código base dados para solo calibrar, con los componentes definidos, y abierto exigiendo que también mapee la ruta y reporte por serial. Mantén el objetivo.
```
```
Dame 6 preguntas socráticas para que los estudiantes justifiquen su diseño robótico: por qué un PID y no control simple, qué pasa si el sensor lee mal por la luz, cómo decidieron la relación de engranajes, qué falla mecánica explicaría ese comportamiento.
```

## Ejercicios y actividades con IA
- **Calibra el control de la IA.** Objetivo: ajustar control real. El estudiante pide a la IA un controlador para el robot (p. ej. seguidor de línea), lo carga y comprueba que en la pista real oscila o se sale; ajusta los parámetros y explica por qué. Rol de la IA: borrador de control a calibrar.
- **Diagnóstico mecánico vs. software.** Objetivo: aislar la causa. Ante un robot que no avanza recto, el estudiante consulta a la IA posibles causas y verifica cuáles son mecánicas (ruedas, motores) y cuáles de código, descartando con evidencia. Rol de la IA: lista de hipótesis a comprobar.
- **Del comportamiento al algoritmo.** Objetivo: diseñar lógica. El estudiante describe el comportamiento deseado, redacta su propio pseudocódigo, luego compara con el de la IA y argumenta cuál es más eficiente. Rol de la IA: contraste, no fuente única.

## Evaluaciones auténticas
- **Reto cronometrado con cambio de pista (AIAS Nivel 2 – IA solo para explorar).** El robot ejecuta la tarea y el docente altera la pista (nueva curva, obstáculo extra) que el estudiante debe resolver recalibrando en el momento. Mini-rúbrica: cumplimiento de la tarea, capacidad de recalibrar, justificación de las decisiones de control, robustez del montaje.
- **Proyecto robótico con bitácora (AIAS Nivel 3 – IA asistida declarada).** Entrega el robot funcionando más un registro de qué código pidió a la IA, qué falló físicamente y cómo lo corrigió. Mini-rúbrica: desempeño del robot, calidad del control, comprensión demostrada, honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un simulador de robot seguidor de línea donde el usuario ajusta la velocidad y la sensibilidad y observa si sigue o se sale de la pista.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, usando canvas, sin librerías) llamado "Simulador de Robot Seguidor de Línea". Dibuja una pista con curvas y un robot que la sigue; con sliders para velocidad y sensibilidad de giro, el usuario ve si el robot mantiene la línea, oscila o se sale, mostrando el efecto de cada parámetro. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica en el robot físico: la IA da código para una placa, motor o librería que quizá no es la tuya, y supone un mundo ideal sin fricción ni ruido de sensores. No subas grabaciones ni datos identificables de personas a las herramientas. Adapta a Dajabón usando materiales y componentes realmente conseguibles localmente o en la frontera, y previendo el polvo, el calor y la luz que afectan los sensores.
