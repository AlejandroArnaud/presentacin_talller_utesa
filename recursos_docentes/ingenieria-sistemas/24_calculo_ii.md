# Cálculo II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 3 · **Código:** MAT-340

## Sobre la materia

Cálculo integral y sus aplicaciones: antiderivadas, integral definida y el teorema fundamental, técnicas de integración (sustitución, por partes) y aplicaciones (áreas, volúmenes, acumulación, valor promedio). Competencias clave: razonamiento matemático riguroso, dominio de técnicas de integración y modelado de problemas de acumulación aplicables a sistemas e ingeniería.

## Enfoque IA (taller)

La IA resuelve y explica pasos, pero el estudiante debe interpretar, verificar y detectar errores; un resultado correcto sin comprensión no vale. Integridad por diseño: se evalúa con resolución en pizarra y explicación oral del procedimiento, sin detectores.

## Prompts para el docente

```
Planifica una clase de 90 min de Cálculo II sobre integración por partes. Incluye objetivo, la regla LIATE explicada, un ejemplo resuelto paso a paso, 4 ejercicios graduados con respuestas y un cierre donde el estudiante explique cuándo conviene este método.
```

```
Genera 5 problemas de aplicación de la integral definida con contexto de ingeniería/sistemas (área bajo una curva de uso de CPU, acumulación de datos en el tiempo, trabajo, valor promedio de una señal). Da el planteamiento, la integral a resolver y la solución detallada.
```

```
Crea una rúbrica (1-4) para evaluar la resolución de un problema de integración: elección correcta de la técnica, ejecución del procedimiento sin errores, evaluación de límites en la integral definida e interpretación del resultado en el contexto. Formato tabla.
```

```
Diferencia un ejercicio de integración en tres niveles: básico (integral inmediata/sustitución simple), intermedio (sustitución con ajuste de constante), avanzado (integración por partes o combinación). Da 2 ejercicios por nivel con respuestas.
```

```
Dame 8 preguntas socráticas para que el estudiante explique el concepto de integral como acumulación y área: qué representa la integral definida, por qué el teorema fundamental conecta derivada e integral, cómo interpretar el resultado en un problema de acumulación de datos.
```

## Ejercicios y actividades con IA

- **Caza de errores en una solución de IA.** Objetivo: dominar las técnicas de integración. El estudiante recibe una resolución de la IA con un error (constante olvidada, límites mal evaluados, técnica equivocada) y debe encontrarlo y corregirlo. Rol de la IA: generar la solución con el error sembrado.
- **Verificación cruzada.** Objetivo: validar resultados. El estudiante resuelve a mano, pide a la IA otra vía (o el valor numérico) y reconcilia ambas explicando discrepancias. Rol de la IA: ofrecer un método o verificación alternativa.
- **Elección de técnica.** Objetivo: razonar la estrategia. El estudiante presenta varias integrales y pide a la IA que sugiera qué técnica usar; evalúa si la sugerencia es correcta antes de resolver. Rol de la IA: proponer una estrategia a auditar.

## Evaluaciones auténticas

- **Defensa en pizarra de un problema de integración aplicado (AIAS Nivel 1-2 — preparación con IA permitida, examen sin IA).** El estudiante resuelve y explica un problema de acumulación o área frente al grupo. Rúbrica: elección de técnica, procedimiento sin errores, evaluación correcta de la integral, interpretación contextual.
- **Diario de resolución de un problema modelado (AIAS Nivel 2 — IA como tutor consultado, declarado).** Documenta intentos, callejones sin salida y la solución, con reflexión. Rúbrica: corrección matemática, calidad del razonamiento mostrado, uso crítico de la ayuda recibida, claridad.

## Recurso interactivo en HTML

Visualizador del área bajo la curva: una función y el área de su integral definida entre dos límites ajustables, con aproximación por rectángulos.

```
Crea UN archivo .html autocontenido (canvas + JS puro, sin librerías) que grafique una función configurable y sombree el área bajo la curva entre dos límites controlados por deslizadores, mostrando el valor aproximado de la integral con rectángulos (suma de Riemann) cuyo número también se ajusta. Incluye 3 funciones predefinidas. En español.
```

## Notas

Verifica cada paso que da la IA: olvida constantes de integración y comete errores algebraicos sutiles con frecuencia. No hay datos sensibles de estudiantes en esta materia, pero evita pegar trabajos identificables. Ancla las aplicaciones en problemas afines a la carrera (uso de recursos, datos acumulados) y, cuando sea posible, en contextos de Dajabón para dar sentido al cálculo.
