# Estadística II

**Carrera:** Contaduría Pública · **Cuatrimestre:** 7 · **Código:** MAT-140

## Sobre la materia
Estadística inferencial aplicada a la contaduría: distribuciones de probabilidad, muestreo, estimación por intervalos de confianza, pruebas de hipótesis, correlación y regresión lineal simple. Competencias clave: pasar de una muestra a una conclusión sobre la población, cuantificar la incertidumbre, y usar la inferencia para decisiones contables (muestreo de auditoría, control de calidad, proyección de ingresos).

## Enfoque IA (taller)
La IA explica el porqué de cada prueba, genera datos de práctica y ayuda a interpretar salidas, mientras el estudiante decide qué prueba aplica, valida supuestos y concluye. Integridad por diseño: se evalúa con muestras propias, decisiones justificadas e interpretación oral; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre pruebas de hipótesis para estudiantes de Contaduría. Usa el caso de un auditor que revisa una muestra de facturas para decidir si el porcentaje de errores excede el límite tolerable. Incluye objetivo, planteamiento de H0/H1, el procedimiento paso a paso y preguntas de cierre sobre los errores tipo I y tipo II en auditoría.
```

```
Genera un dataset realista de 40 cuentas por cobrar de una empresa dominicana (monto facturado y días de atraso) para que el estudiante calcule un intervalo de confianza del saldo promedio y una regresión entre monto y atraso. Incluye la solución y la interpretación para el docente.
```

```
Crea una rúbrica para un informe de inferencia estadística de pregrado, con criterios: justificación de la prueba elegida, verificación de supuestos, corrección del cálculo (estadístico, valor-p, intervalo) e interpretación de la decisión en el contexto contable. Define niveles de logro.
```

```
Toma este problema de prueba de hipótesis para una media y genera tres versiones por nivel (básico con sigma conocida, intermedio con t de Student, avanzado comparando dos muestras) para diferenciar dentro del mismo curso.
```

```
Formula 6 preguntas socráticas que lleven al estudiante a entender por qué "no rechazar H0" no significa "probar que H0 es verdadera", usando el ejemplo de un control interno que parece adecuado.
```

## Ejercicios y actividades con IA
- **Audita el valor-p.** Objetivo: interpretar correctamente. La IA resuelve una prueba de hipótesis y redacta una conclusión (a veces confundiendo significancia con relevancia práctica); el estudiante rehace el cálculo y corrige la interpretación. Rol de la IA: producir una conclusión a auditar.
- **Muestreo de auditoría con datos propios.** Objetivo: aplicar inferencia. El estudiante toma una muestra de un conjunto de transacciones (real o simulado de un comercio local), estima el error y pide a la IA un borrador de informe que luego ajusta con sus propios números y supuestos. Rol de la IA: redactar el primer borrador, no decidir la muestra.

## Evaluaciones auténticas
- **Estudio inferencial con muestra propia (AIAS Nivel 2: IA para planificar/idear).** El estudiante recoge o recibe un conjunto de transacciones, extrae una muestra, aplica una prueba o intervalo y justifica su decisión; la IA solo apoya conceptos. Rúbrica: (1) muestreo válido, (2) prueba adecuada y supuestos, (3) cálculo correcto, (4) decisión interpretada.
- **Defensa oral de la conclusión (AIAS Nivel 1: sin IA).** Explica por qué eligió esa prueba, qué riesgo de error asumió y qué decidiría la gerencia. Rúbrica: (1) dominio de H0/H1, (2) lectura del valor-p e intervalo, (3) manejo de errores tipo I/II, (4) claridad.

## Recurso interactivo en HTML
Idea: simulador que muestra cómo cambia el intervalo de confianza al variar tamaño de muestra y nivel de confianza.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS sin librerías externas) titulado "Simulador de Intervalos de Confianza". El usuario ajusta con deslizadores el tamaño de muestra, la media, la desviación estándar y el nivel de confianza (90/95/99%), y la página dibuja en canvas la distribución y el intervalo resultante, mostrando cómo se estrecha al crecer la muestra. En español, funciona sin internet.
```

## Notas
Verificación: la IA confunde con frecuencia significancia estadística con relevancia práctica y se equivoca al elegir la prueba o leer tablas; todo resultado debe recalcularse y justificarse. Privacidad: anonimizar montos y clientes si los datos provienen de una empresa real; nunca subir información financiera identificable. Contexto Dajabón: usar muestras de comercios fronterizos, cooperativas o remesas para que la inferencia sea verificable y pertinente.
