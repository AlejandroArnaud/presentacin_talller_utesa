# Estadística para Ingenieros II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 7 · **Código:** MAT-145

## Sobre la materia
Continuación de la estadística aplicada a la ingeniería: estimación por intervalos, pruebas de hipótesis, ANOVA, regresión lineal y múltiple, correlación y diseño básico de experimentos. Desarrolla competencias de inferencia, interpretación de resultados, modelado de datos y toma de decisiones bajo incertidumbre con base en evidencia.

## Enfoque IA (taller)
La IA ayuda a plantear el análisis, generar código (R/Python) y redactar interpretaciones, pero el estudiante debe validar los supuestos del modelo, leer correctamente el p-valor y desconfiar de conclusiones automáticas. La integridad se evalúa en la interpretación situada de datos reales y en la defensa oral del análisis, no en quién corrió el cálculo.

## Prompts para el docente
```
Eres profesor de Estadística para Ingenieros II. Planifica una clase de 90 min sobre pruebas de hipótesis para la media (t de Student): objetivos, planteamiento de H0 y H1 con un caso de ingeniería, pasos de la prueba, interpretación del p-valor y 3 ejercicios con datos pequeños.
```
```
Genera 5 conjuntos de datos realistas del área de sistemas para análisis estadístico: tiempos de respuesta de un servidor antes/después de una optimización (comparación de medias), relación entre número de usuarios y latencia (regresión), defectos por módulo (ANOVA), uso de CPU por turno y satisfacción vs tiempo de carga. Da los datos y la pregunta de investigación por separado.
```
```
Crea una rúbrica de 4 criterios para evaluar un mini-informe estadístico: formulación correcta de hipótesis/modelo, verificación de supuestos, interpretación adecuada de los resultados (p-valor, R², intervalos) y conclusión basada en evidencia. Escala 1-4.
```
```
Diferencia la explicación de "regresión lineal e interpretación de R²" en tres niveles: estudiante que aún confunde correlación y causalidad, estudiante que ya ajusta un modelo simple, y estudiante adelantado listo para regresión múltiple. Ajusta ejemplos y exigencia.
```
```
Genera 8 preguntas socráticas que lleven al estudiante a cuestionar conclusiones estadísticas mal hechas: confundir significancia con relevancia práctica, ignorar supuestos, p-hacking y correlación tomada como causa.
```

## Ejercicios y actividades con IA
- **Audita el análisis de la IA.** Objetivo: validar inferencia. El estudiante pide a la IA un análisis completo de un dataset, verifica si los supuestos (normalidad, homocedasticidad) se cumplen y detecta interpretaciones erróneas del p-valor. Rol de la IA: producir el análisis a revisar críticamente.
- **De los datos a la decisión.** Objetivo: interpretar para decidir. El estudiante recolecta datos reales pequeños (tiempos, encuestas en clase), corre la prueba con apoyo de la IA y redacta su propia conclusión de ingeniería; la IA solo aclara el método. Rol de la IA: asistente de cálculo y explicación.
- **Caza la falacia estadística.** Objetivo: pensamiento crítico. El estudiante pide a la IA una conclusión "convincente pero tramposa" sobre un dataset y la desmonta señalando el error. Rol de la IA: generar el caso falaz a refutar.

## Evaluaciones auténticas
- **Análisis de un dataset real con informe interpretativo (aplicada).** El estudiante elige una pregunta, recoge o recibe datos del entorno y entrega un informe con su análisis e interpretación. *AIAS Nivel 3 (IA integrada para cálculo y redacción, con uso declarado).* Rúbrica: hipótesis/modelo correctos, verificación de supuestos, interpretación de resultados, conclusión justificada.
- **Defensa oral del informe (oral + proceso).** El estudiante explica por qué eligió la prueba y reinterpreta el resultado ante un cambio de datos o de nivel de significancia en vivo. *AIAS Nivel 2.* Rúbrica: comprensión del método, lectura correcta del p-valor/IC, adaptación al cambio, claridad.

## Recurso interactivo en HTML
Un explorador de regresión: el usuario ingresa o arrastra puntos en un plano y ve la recta ajustada, la ecuación, R² y cómo cambian al mover un dato.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin librerías externas) que permita ingresar puntos (x, y) en un plano y calcule en vivo la regresión lineal: dibuja la recta ajustada, muestra la ecuación, el coeficiente R² y la correlación. Al mover o agregar un punto, todo se actualiza. En español, abrible offline en el navegador.
```

## Notas
Verifica los resultados de la IA: puede ejecutar pruebas inadecuadas para los datos o interpretar mal la significancia, casos muy útiles como ejercicio de auditoría. No subas datos personales o encuestas identificables de estudiantes a las herramientas; anonimiza antes. Adapta a Dajabón con datos del entorno (comercios, clima fronterizo, tiempos de transporte) y, ante acceso desigual a software, prioriza calculadora estadística y planillas livianas además del código.
