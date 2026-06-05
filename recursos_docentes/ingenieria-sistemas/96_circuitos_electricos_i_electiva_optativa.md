# Circuitos Eléctricos I (electiva optativa)

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** IEL-200

## Sobre la materia
Electiva optativa de fundamentos de circuitos de corriente continua: magnitudes eléctricas (voltaje, corriente, resistencia, potencia), Ley de Ohm, leyes de Kirchhoff (de corrientes y de voltajes), circuitos serie y paralelo, y métodos de análisis (divisores, mallas y nodos). Competencias clave: analizar un circuito DC y calcular sus variables, aplicar las leyes fundamentales y razonar sobre el comportamiento eléctrico antes de medir.

## Enfoque IA (taller)
La IA plantea ecuaciones y resuelve circuitos paso a paso, pero confunde signos, nodos y unidades: el estudiante debe verificar que las leyes de Kirchhoff se cumplan y que el resultado tenga sentido físico. La integridad se diseña con resolución a mano, problemas con datos cambiados y defensa del procedimiento, sin detectores.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre las leyes de Kirchhoff (corrientes y voltajes) para estudiantes de Ingeniería en Sistemas. Incluye la intuición física de cada ley, un circuito de ejemplo resuelto paso a paso con análisis de mallas y un ejercicio guiado con su solución comentada.
```

```
Genera 5 problemas REALES y cotidianos de circuitos DC contextualizados (cargador de celular, panel solar pequeño para una casa en zona rural de Dajabón con cortes de luz, batería de un inversor, sistema de iluminación LED). Para cada uno: el esquema descrito en palabras, los datos y qué se pide calcular.
```

```
Crea una rúbrica (1-4) para evaluar la resolución de un problema de circuitos: planteamiento correcto de las leyes, álgebra y cálculo, uso correcto de unidades, verificación del resultado (cumplimiento de Kirchhoff) y claridad del procedimiento. Formato tabla, en español.
```

```
Diferencia el problema "analiza este circuito en paralelo" en tres niveles: básico (un solo lazo con Ley de Ohm), intermedio (serie-paralelo combinado) y avanzado (dos mallas con análisis de mallas). Mantén el mismo objetivo de aplicar las leyes fundamentales.
```

```
Dame 6 preguntas socráticas para que el estudiante razone qué pasa con la corriente y el voltaje al añadir una resistencia en serie o en paralelo, por qué la suma de corrientes en un nodo es cero y cómo verificar si su resultado es físicamente posible.
```

## Ejercicios y actividades con IA
- **Verifica la solución de la IA.** Objetivo: comprobar las leyes. El estudiante pide a la IA un circuito resuelto y comprueba a mano que se cumplan las leyes de Kirchhoff y la conservación de potencia; reporta cualquier inconsistencia. Rol de la IA: solución a auditar, no respuesta final.
- **Predice y contrasta.** Objetivo: razonar antes de calcular. El estudiante predice cualitativamente qué pasa al modificar una resistencia, luego pide a la IA el cálculo y compara con su intuición. Rol de la IA: calculadora a contrastar con el razonamiento.
- **Del problema cotidiano al modelo.** Objetivo: modelar. El estudiante traduce una situación real (panel solar, inversor) a un esquema de circuito, pide a la IA su planteamiento y discute si capturó bien el problema. Rol de la IA: borrador de modelo a criticar.

## Evaluaciones auténticas
- **Resolución comentada en clase con datos cambiados (AIAS Nivel 1 — sin IA).** El estudiante resuelve un circuito a mano y debe rehacerlo cuando el docente cambia un valor en vivo, explicando cada paso. Mini-rúbrica: (1) planteamiento de las leyes, (2) exactitud del cálculo, (3) verificación del resultado, (4) explicación del procedimiento.
- **Portafolio de problemas con bitácora (AIAS Nivel 2 — IA solo para explorar).** Conjunto de circuitos resueltos a mano más una nota de qué le pidió a la IA para entender un concepto y qué error de la IA detectó. Mini-rúbrica: (1) corrección de las soluciones, (2) uso de unidades, (3) verificación con Kirchhoff, (4) reflexión sobre el uso de IA.

## Recurso interactivo en HTML
Idea: una calculadora visual de circuitos serie y paralelo que muestra cómo cambian corriente y voltaje.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado "Circuitos DC Interactivo". El usuario ingresa el voltaje de la fuente y 2-3 resistencias y elige conexión serie o paralelo; la app calcula resistencia equivalente, corriente total y la caída de voltaje en cada resistencia, mostrando un esquema simple. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica los resultados: la IA equivoca signos en las mallas, confunde serie con paralelo y a veces da resultados que violan las leyes de Kirchhoff; exigir la comprobación numérica. No es necesario subir datos personales, pero evita compartir información sensible al usar las herramientas. Contextualiza con la realidad eléctrica de Dajabón (cortes de energía, uso de inversores y paneles solares en zonas rurales) para que el análisis de circuitos tenga sentido práctico.
