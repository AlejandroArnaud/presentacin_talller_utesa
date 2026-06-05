# Laboratorio de Física I

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 2 · **Código:** MAT-191

## Sobre la materia
Componente práctico de Física I: medición con instrumentos, registro de datos, cálculo de incertidumbre y error, construcción y análisis de gráficas, y redacción de informes de laboratorio sobre cinemática, dinámica y energía. Competencias clave: medir con rigor, analizar datos experimentales y comunicar resultados contrastándolos con la teoría.

## Enfoque IA (taller)
La IA ayuda a estructurar el informe y a sugerir el análisis, pero no estuvo en el laboratorio: el valor está en los datos reales que tomó el estudiante y en su interpretación del error. Integridad por diseño porque el informe se ancla a la medición propia y a la defensa del experimento, no a la detección.

## Prompts para el docente

```
Diseña una práctica de laboratorio de 2 horas sobre movimiento rectilíneo uniformemente
acelerado usando materiales sencillos y económicos (rampa, canica, cronómetro del
celular, cinta métrica), pensada para un laboratorio con recursos limitados en Dajabón.
Incluye objetivo, procedimiento, tabla de datos a llenar y preguntas de análisis.
```

```
Genera 5 ejemplos de fuentes de error experimental y cómo reducirlas, aplicados a una
práctica de caída libre o plano inclinado medida con cronómetro de celular. Explica cada
una en lenguaje sencillo para estudiantes que recién empiezan a medir.
```

```
Crea una rúbrica de 4 criterios (escala 1 a 4, en español, formato tabla) para evaluar
un informe de laboratorio: calidad de la toma de datos, análisis y cálculo de error,
gráficas correctas con sus ejes y unidades, y discusión que compara el resultado con la
teoría.
```

```
Toma la práctica de "plano inclinado" y propón tres niveles de análisis: básico (calcular
la aceleración promedio), intermedio (estimar la incertidumbre de la medición) y avanzado
(comparar el valor experimental con el teórico y discutir las diferencias).
```

```
Dame 8 preguntas de discusión que lleven al estudiante a explicar POR QUÉ sus datos
experimentales difieren del valor teórico y QUÉ factores del montaje introdujeron error.
```

## Ejercicios y actividades con IA
- **Asesor de informe, datos míos.** Objetivo: comunicar resultados. El estudiante toma sus datos reales, pide a la IA que sugiera la estructura del informe y el tipo de gráfica, y redacta él la discusión sobre su propio error. Rol de la IA: andamiaje, nunca fuente de los datos.
- **Interroga tu incertidumbre.** Objetivo: análisis de error. El estudiante describe a la IA cómo midió y le pide que liste posibles fuentes de error; luego decide cuáles aplicaron realmente y las justifica. Rol de la IA: lista de hipótesis que el estudiante filtra.
- **Predice antes de medir.** Objetivo: conectar teoría y práctica. Antes del experimento, el estudiante pide a la IA el resultado teórico esperado y, tras medir, explica la diferencia. Rol de la IA: referencia teórica para contrastar.

## Evaluaciones auténticas
- **Informe de laboratorio con datos propios (AIAS Nivel 2 — IA para edición y estructura, declarada; datos y análisis del estudiante).** Entrega del informe completo basado en la medición realizada en clase. Mini-rúbrica: (1) toma y registro de datos, (2) análisis de error, (3) gráficas correctas, (4) discusión teoría–experimento.
- **Defensa del experimento (AIAS Nivel 1 — sin IA).** El estudiante explica frente al docente cómo midió, qué error obtuvo y por qué, respondiendo preguntas sobre su montaje. Mini-rúbrica: (1) dominio del procedimiento, (2) comprensión del error, (3) lectura de su gráfica, (4) honestidad y claridad.

## Recurso interactivo en HTML
Calculadora de incertidumbre y graficador: el estudiante ingresa sus medidas y obtiene promedio, error y una gráfica de los puntos.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, usando canvas, sin librerías)
donde el estudiante ingrese varias mediciones de tiempo y distancia en una tabla editable.
Calcula el promedio, la desviación y grafica los puntos con sus ejes y unidades. Interfaz
en español, abre directo en el navegador y funciona offline.
```

## Notas
Verifica que la IA no "invente" datos: los números deben ser SIEMPRE los medidos en clase, no los sugeridos por la herramienta. No subir datos identificables de estudiantes. Adapta las prácticas a materiales accesibles en Dajabón (celular como cronómetro, cinta métrica, objetos comunes) para que el laboratorio funcione con recursos limitados.
