# Laboratorio de Física II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 3 · **Código:** MAT-501

## Sobre la materia

Componente práctico de Física II: el estudiante monta y mide circuitos eléctricos, usa el multímetro, comprueba experimentalmente las leyes de Ohm y de Kirchhoff, toma datos y estima errores de medición. Competencias clave: medir magnitudes eléctricas con instrumentos, contrastar la predicción teórica con el dato experimental y reportar resultados con análisis de error.

## Enfoque IA (taller)

La IA ayuda a planificar la práctica, interpretar mediciones y analizar errores, pero el dato y la conclusión nacen del experimento real del estudiante; la IA no reemplaza la medición. La integridad se diseña observando el montaje en vivo y exigiendo datos propios, no con detectores de IA.

## Prompts para el docente

```
Diseña una guía de laboratorio de 2 horas para verificar la ley de Ohm con un multímetro: materiales, montaje paso a paso, tabla de datos a llenar (voltaje vs corriente para 5 valores), gráfica esperada y preguntas de análisis. Incluye precauciones de seguridad.
```

```
Genera 4 prácticas de laboratorio de circuitos de corriente continua (ley de Ohm, resistencias en serie, en paralelo, divisor de voltaje) con objetivo, lista de materiales accesibles, procedimiento y resultados esperados aproximados.
```

```
Crea una rúbrica (1-4) para evaluar un informe de laboratorio de física: montaje y procedimiento correctos, toma de datos organizada, gráfica/cálculo bien hecho, análisis de error e interpretación que compara teoría y experimento. Formato tabla.
```

```
Toma esta práctica de medición de resistencias y crea tres niveles: con tabla y pasos dados, con procedimiento parcial a completar, y abierta donde el estudiante diseña cómo verificar una predicción. Indica qué se evalúa en cada nivel.
```

```
Dame 6 preguntas para que el estudiante explique por qué su medición difiere del valor teórico, qué fuentes de error identificó (tolerancia de resistencias, precisión del instrumento) y cómo las mitigaría.
```

## Ejercicios y actividades con IA

- **Interpreta tus datos.** Objetivo: analizar mediciones reales. El estudiante mide en el laboratorio, da sus datos a la IA y le pide ayuda para calcular el error porcentual respecto al valor teórico; juzga si el cálculo y la interpretación son correctos. Rol de la IA: asistente de análisis a verificar.
- **Predice antes de medir.** Objetivo: contrastar teoría y experimento. El estudiante pide a la IA el valor teórico esperado del circuito, lo mide y explica las discrepancias por fuentes de error. Rol de la IA: dar la predicción a contrastar con el dato real.
- **Plan de práctica.** Objetivo: diseñar el montaje. El estudiante describe el objetivo y pide a la IA un procedimiento de medición, lo critica y lo ajusta a los materiales disponibles antes de ejecutarlo. Rol de la IA: proponer un plan a evaluar.

## Evaluaciones auténticas

- **Práctica de medición en vivo (AIAS Nivel 1 – Sin IA durante la prueba).** El estudiante monta un circuito, mide con el multímetro y reporta el valor con su unidad y un cambio pedido en el momento. Rúbrica: montaje correcto, uso del instrumento, dato razonable, explicación del procedimiento.
- **Informe de laboratorio con bitácora (AIAS Nivel 3 – IA asistida declarada).** Entrega datos propios, tabla, gráfica, análisis de error y notas de qué consultó a la IA y por qué. Rúbrica: calidad de los datos propios, análisis de error, comparación teoría-experimento, reflexión sobre el uso de IA.

## Recurso interactivo en HTML

Idea: una hoja interactiva donde el estudiante ingresa pares voltaje-corriente, ve la gráfica y obtiene la resistencia por la pendiente.

```
Crea UN archivo .html autocontenido (canvas + JS puro, sin librerías) llamado "Laboratorio Ley de Ohm". El usuario ingresa varios pares de voltaje y corriente medidos; el archivo grafica los puntos, traza la línea de ajuste y calcula la resistencia a partir de la pendiente, mostrando también el error porcentual frente a un valor teórico que el usuario escribe. En español, funciona offline.
```

## Notas

Verifica los cálculos de la IA y nunca dejes que sustituya la medición real: el dato debe salir del experimento del estudiante. Incluye siempre precauciones de seguridad eléctrica. No subir datos identificables de estudiantes. Adapta las prácticas a los materiales realmente disponibles en el recinto de Dajabón (resistencias, multímetros, fuentes) y prioriza montajes simples y seguros.
