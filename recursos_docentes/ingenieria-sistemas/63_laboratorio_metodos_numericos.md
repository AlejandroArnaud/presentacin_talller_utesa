# Laboratorio Métodos Numéricos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 7 · **Código:** INF-706

## Sobre la materia
Componente práctico de Métodos Numéricos: implementación en código de algoritmos de solución aproximada (bisección, Newton-Raphson, eliminación gaussiana, interpolación, integración numérica, ajuste de curvas) y análisis de error, convergencia y estabilidad. Desarrolla competencias de programación científica, validación numérica y traducción de la teoría matemática a soluciones computacionales verificables.

## Enfoque IA (taller)
La IA genera implementaciones de referencia y explica el comportamiento del error, pero el estudiante debe verificar cada resultado contra la solución analítica, comparar métodos y justificar cuál converge mejor. La integridad se evalúa en la práctica viva: ejecutar, perturbar entradas y explicar el porqué del error, no en entregar código que cualquiera pudo pedir.

## Prompts para el docente
```
Eres profesor de Laboratorio de Métodos Numéricos. Planifica una práctica de 2 horas sobre el método de Newton-Raphson en Python: objetivos, función de prueba con raíz conocida, código base comentado, criterio de paro por tolerancia, y 3 retos donde el estudiante observe divergencia y la explique.
```
```
Genera 5 casos reales de ingeniería de sistemas que se resuelvan numéricamente: balanceo de carga (raíz de una ecuación), interpolación de latencias medidas, ajuste de curva a datos de crecimiento de usuarios, integración de un área bajo curva de tráfico, y solución de un sistema lineal de rutas. Da datos y resultado esperado por separado.
```
```
Crea una rúbrica de 4 criterios para una práctica de laboratorio numérico: correctitud del algoritmo implementado, análisis y reporte del error/convergencia, comparación entre métodos y calidad de la documentación del código. Escala 1-4.
```
```
Diferencia una guía sobre estabilidad numérica en tres niveles: estudiante que apenas implementa el método, estudiante que ya entiende iteración, y estudiante adelantado que puede analizar condicionamiento de matrices. Ajusta ejemplos y exigencia.
```
```
Genera 8 preguntas socráticas que lleven al estudiante a razonar por qué un método correcto en papel puede fallar en la computadora (error de redondeo, mal condicionamiento, criterio de paro inadecuado).
```

## Ejercicios y actividades con IA
- **Verifica la implementación de la IA.** Objetivo: validar código numérico. El estudiante pide a la IA un método (p. ej. bisección), lo prueba con una función de raíz conocida, mide el error en cada iteración y detecta supuestos ocultos o un criterio de paro mal puesto. Rol de la IA: producir la implementación a auditar.
- **Duelo de métodos.** Objetivo: comparar convergencia. El estudiante resuelve la misma raíz con bisección y Newton, grafica el error y argumenta cuál conviene según el caso; usa la IA solo para explicar discrepancias. Rol de la IA: aclarar el comportamiento observado, no decidir.
- **Rompe el algoritmo.** Objetivo: entender estabilidad. El estudiante introduce una entrada mal condicionada y explica por qué el resultado se degrada. Rol de la IA: sugerir entradas críticas a probar.

## Evaluaciones auténticas
- **Práctica de laboratorio cronometrada (aplicada, en máquina).** El estudiante implementa y valida un método sobre datos dados, reportando error y convergencia en un cuaderno. *AIAS Nivel 2 (IA para consulta/estudio previo, declarado).* Rúbrica: correctitud del método, análisis del error, manejo de casos límite, claridad del reporte.
- **Defensa oral del cuaderno numérico (oral + proceso).** El estudiante explica su implementación y la modifica ante una nueva tolerancia o función en vivo. *AIAS Nivel 1-2.* Rúbrica: comprensión del algoritmo, capacidad de modificar, justificación de decisiones, interpretación del error.

## Recurso interactivo en HTML
Un visualizador de convergencia: el usuario fija una función y una tolerancia y ve, iteración por iteración, cómo Newton-Raphson o bisección se acerca a la raíz, con el error graficado.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin librerías externas) que muestre la convergencia de un método numérico (bisección o Newton-Raphson) sobre una función simple. El usuario avanza iteración por iteración con un botón, ve el valor aproximado, el error y un gráfico que se actualiza. En español, abrible offline en el navegador.
```

## Notas
Verifica numéricamente: la IA a veces entrega código plausible con errores de signo, índices o criterios de paro mal definidos, ideales como ejercicio de detección. No subas datos identificables de estudiantes a las herramientas. Adapta a Dajabón con datasets pequeños y reproducibles, y contempla el acceso desigual a equipos: ofrece prácticas que corran en máquinas modestas o en intérpretes en línea, y permite trabajo por parejas cuando falte hardware.
