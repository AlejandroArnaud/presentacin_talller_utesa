# Estadística para Ingenieros I

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 6 · **Código:** MAT-135

## Sobre la materia
Estadística descriptiva e inferencial aplicada a la ingeniería: organización y visualización de datos, medidas de tendencia central y dispersión, probabilidad, distribuciones (binomial, Poisson, normal), muestreo, estimación por intervalos de confianza y prueba de hipótesis. Competencias clave: resumir datos correctamente, modelar la incertidumbre y sustentar decisiones técnicas con evidencia cuantitativa.

## Enfoque IA (taller)
La IA calcula, grafica e interpreta, pero confunde con facilidad el método (cuándo usar t vs z, cómo plantear H0/H1) y "alucina" conclusiones: el estudiante decide el procedimiento correcto y verifica cada cifra. Integridad por diseño con análisis sobre datos propios y sustentación oral del razonamiento, no con detectores.

## Prompts para el docente
```
Eres profesor de Estadística para Ingenieros I (6.º cuatrimestre, Ingeniería en Sistemas). Planifica una clase de 90 min sobre intervalos de confianza para la media, con objetivos, una analogía sencilla, un ejemplo guiado con datos de tiempos de respuesta de un servidor y 3 ejercicios graduados.
```
```
Genera 5 conjuntos de datos pequeños y realistas de ingeniería informática (tiempos de carga de una app, defectos por lote de software, latencia de red, uso de CPU, encuestas de usuarios) con su contexto, para practicar descripción e inferencia. Da solo los datos y el enunciado, sin las soluciones.
```
```
Crea una rúbrica de 4 criterios para evaluar un informe de prueba de hipótesis: planteamiento correcto de H0/H1, elección y justificación del estadístico, cálculo e interpretación del valor p, y conclusión en el contexto del problema. En español, escala 1 a 4.
```
```
Toma el tema "distribución normal" y propón tres niveles de ejercicio: básico (calcular probabilidades con tabla z), intermedio (estandarizar y comparar dos procesos) y avanzado (decidir si un tiempo de respuesta es atípico y argumentarlo).
```
```
Dame 8 preguntas socráticas que lleven al estudiante a explicar POR QUÉ "correlación no implica causalidad" y a detectar cuándo un valor p pequeño NO significa que el efecto sea importante, usando ejemplos de datos de software.
```

## Ejercicios y actividades con IA
- **Audita la conclusión estadística.** Objetivo: rigor inferencial. El estudiante pide a la IA que resuelva una prueba de hipótesis y revisa si eligió bien el estadístico, las hipótesis y la interpretación del valor p, corrigiendo lo que esté mal. Rol de la IA: analista falible que el estudiante audita.
- **Analiza tus propios datos.** Objetivo: estadística aplicada. El estudiante recolecta datos reales (tiempos, encuestas, mediciones) y pide a la IA apoyo para describirlos y graficarlos, pero interpreta y concluye con sus palabras. Rol de la IA: asistente de cálculo sobre datos propios.
- **Caza la falacia estadística.** Objetivo: pensamiento crítico. La IA afirma una conclusión a partir de un gráfico o un promedio engañoso; el estudiante detecta el sesgo (muestra pequeña, causalidad indebida, escala manipulada). Rol de la IA: generador de afirmaciones a cuestionar.

## Evaluaciones auténticas
- **Mini-estudio con datos propios (AIAS Nivel 3 — IA asistida y declarada para cálculo/gráficos; análisis e interpretación propios).** El estudiante plantea una pregunta, recolecta datos, aplica una técnica y sustenta la conclusión. Mini-rúbrica: (1) datos y muestreo adecuados, (2) técnica correcta, (3) interpretación en contexto, (4) honestidad sobre limitaciones.
- **Defensa oral de un análisis (AIAS Nivel 1 — sin IA).** El estudiante explica un resultado y responde "¿qué cambiaría si la muestra fuera el doble?" en vivo. Mini-rúbrica: (1) dominio del método, (2) lectura correcta de cifras, (3) razonamiento ante repreguntas, (4) claridad.

## Recurso interactivo en HTML
Simulador del teorema central del límite: el estudiante toma muestras y ve cómo la distribución de medias se vuelve normal.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin librerías externas) que simule el teorema central del límite: el usuario elige el tamaño de muestra y el número de muestras, la app toma muestras de una población sesgada y dibuja el histograma de las medias mostrando cómo se aproxima a una normal. Interfaz en español, abrible offline en el navegador.
```

## Notas
La IA suele confundir métodos y reportar valores p o intervalos sin advertir supuestos (normalidad, independencia): verifica cada cálculo y exige que se citen los supuestos. No subas datos personales identificables de estudiantes o encuestados. Adapta los ejemplos a Dajabón (tiempos de fila en un comercio local, encuestas en el recinto, conteos de la frontera) y considera el acceso desigual a internet: permite calcular a mano y con datos pequeños.
