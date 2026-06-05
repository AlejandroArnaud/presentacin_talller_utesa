# Física II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 3 · **Código:** MAT-500

## Sobre la materia

Electromagnetismo y temas afines: carga y campo eléctrico, potencial, capacitancia, corriente, resistencia y circuitos de corriente continua, campo magnético e inducción. Competencias clave: modelar fenómenos eléctricos con leyes físicas, analizar circuitos básicos y aplicar el razonamiento cuantitativo a sistemas electrónicos, base del hardware computacional.

## Enfoque IA (taller)

La IA explica conceptos y plantea soluciones, pero el estudiante interpreta el fenómeno físico, verifica unidades y resultados, y detecta errores; comprender el porqué importa más que el número. Integridad por diseño: resolución en pizarra y explicación oral del razonamiento físico, sin detectores.

## Prompts para el docente

```
Planifica una clase de 90 min de Física II sobre la ley de Ohm y circuitos en serie y paralelo. Incluye objetivo, conceptos clave, un ejemplo resuelto paso a paso con un circuito sencillo, 4 ejercicios graduados con respuestas y un cierre conceptual.
```

```
Genera 5 problemas de circuitos de corriente continua (ley de Ohm, resistencias en serie/paralelo, potencia) con contexto cotidiano y de informática (fuente de poder de un PC, cargador de móvil). Da el planteamiento, el diagrama descrito en texto y la solución con unidades.
```

```
Crea una rúbrica (1-4) para evaluar la resolución de un problema de física: identificación de datos y ley aplicable, planteamiento con diagrama, cálculo con unidades correctas e interpretación física del resultado. Formato tabla.
```

```
Diferencia un ejercicio de circuitos en tres niveles: básico (una resistencia, ley de Ohm directa), intermedio (dos o tres resistencias en serie o paralelo), avanzado (circuito mixto con cálculo de potencia). Da 2 ejercicios por nivel con respuestas.
```

```
Dame 8 preguntas socráticas para que el estudiante explique conceptos de electromagnetismo: qué es la diferencia de potencial, por qué la corriente se reparte distinto en serie y en paralelo, cómo se relaciona la potencia con el consumo de un dispositivo.
```

## Ejercicios y actividades con IA

- **Caza de errores en una solución de IA.** Objetivo: dominar el análisis de circuitos. El estudiante recibe una resolución de la IA con un error (unidades, resistencia equivalente mal calculada, ley aplicada erróneamente) y debe encontrarlo y corregirlo. Rol de la IA: generar la solución con el error sembrado.
- **Explica el fenómeno.** Objetivo: comprensión conceptual. El estudiante pide a la IA una explicación de un concepto (inducción, capacitancia), la contrasta con el libro y reescribe una versión propia corrigiendo imprecisiones. Rol de la IA: dar un borrador a verificar.
- **Verificación de unidades y orden de magnitud.** Objetivo: validar resultados. El estudiante resuelve un problema, pide a la IA que revise unidades y si el resultado es razonable, y juzga si la observación es correcta. Rol de la IA: revisor a auditar.

## Evaluaciones auténticas

- **Defensa en pizarra de un problema de circuitos (AIAS Nivel 1-2 — preparación con IA permitida, examen sin IA).** El estudiante resuelve y explica un circuito frente al grupo, justificando cada paso físico. Rúbrica: ley aplicada correctamente, planteamiento con diagrama, cálculo con unidades, interpretación física.
- **Informe de un problema modelado con bitácora (AIAS Nivel 2 — IA como tutor consultado, declarado).** Documenta el planteamiento, intentos, solución y una reflexión sobre el fenómeno, declarando consultas a la IA. Rúbrica: corrección física, razonamiento mostrado, manejo de unidades, uso crítico de la ayuda recibida.

## Recurso interactivo en HTML

Simulador de un circuito simple: el usuario ajusta voltaje y resistencias y ve corriente y potencia en serie y en paralelo.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS puro, sin librerías) llamado "Circuito de Corriente Continua". El usuario ajusta el voltaje de la fuente y los valores de 2-3 resistencias con deslizadores, elige conexión en serie o paralelo, y se muestran la resistencia equivalente, la corriente y la potencia con sus unidades, junto a un diagrama dibujado. En español, funciona offline.
```

## Notas

Verifica los resultados y unidades de la IA: confunde fórmulas y comete errores de magnitud con frecuencia. No hay datos sensibles de estudiantes en esta materia, pero evita pegar trabajos identificables. Relaciona los ejemplos con hardware y dispositivos cotidianos en Dajabón (cargadores, fuentes de PC, instalaciones eléctricas) para anclar la física en lo aplicado.
