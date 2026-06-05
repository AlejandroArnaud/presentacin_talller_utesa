# Estadística II

**Carrera:** Mercadeo · **Cuatrimestre:** 6 · **Código:** MAT-140

## Sobre la materia
Estadística inferencial aplicada al mercadeo: muestreo, estimación por intervalos de confianza, pruebas de hipótesis, correlación y regresión lineal simple. Competencias clave: pasar de una muestra de consumidores a una conclusión sobre el mercado, cuantificar la incertidumbre de una encuesta, y usar la inferencia para decisiones de mercadeo (test A/B, segmentación, proyección de ventas).

## Enfoque IA (taller)
La IA explica el porqué de cada prueba, genera datos de práctica e interpreta salidas, mientras el estudiante decide qué prueba aplica, valida supuestos y concluye para el negocio. Integridad por diseño: se evalúa con datos propios, decisiones justificadas e interpretación oral; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre pruebas de hipótesis para estudiantes de Mercadeo. Usa el caso de un test A/B de dos versiones de un anuncio en redes sociales para decidir cuál genera más clics. Incluye objetivo, planteamiento de H0/H1, el procedimiento paso a paso y preguntas de cierre sobre los errores tipo I y tipo II en decisiones de marketing.
```

```
Genera un dataset realista de 50 clientes de una tienda dominicana (gasto mensual en RD$, edad y frecuencia de visita) para que el estudiante calcule un intervalo de confianza del gasto promedio y una regresión entre frecuencia y gasto. Incluye la solución y la interpretación para el docente.
```

```
Crea una rúbrica para un informe de inferencia estadística aplicada al mercadeo, con criterios: justificación de la prueba elegida, verificación de supuestos, corrección del cálculo (estadístico, valor-p, intervalo) e interpretación de la decisión comercial. Define niveles de logro.
```

```
Toma este problema de prueba de hipótesis para una proporción (tasa de conversión) y genera tres versiones por nivel: básico (una proporción), intermedio (comparar dos campañas), avanzado (tamaño de muestra necesario). Para diferenciar dentro del mismo curso.
```

```
Formula 6 preguntas socráticas que lleven al estudiante a entender por qué "una encuesta dio 60%" no es lo mismo que "el 60% del mercado piensa así", usando el margen de error de un sondeo de satisfacción.
```

## Ejercicios y actividades con IA
- **Audita el valor-p.** Objetivo: interpretar correctamente. La IA resuelve un test A/B y redacta una conclusión (a veces confundiendo significancia con relevancia comercial); el estudiante rehace el cálculo y corrige la interpretación de negocio. Rol de la IA: producir una conclusión a auditar.
- **Encuesta con datos propios.** Objetivo: aplicar inferencia. El estudiante hace una mini-encuesta a 30 personas (real o simulada de un comercio local), estima una proporción con su margen de error y pide a la IA un borrador de informe que ajusta con sus números y supuestos. Rol de la IA: redactar el primer borrador, no diseñar la muestra.

## Evaluaciones auténticas
- **Estudio de mercado con muestra propia (AIAS Nivel 2: IA para planificar/idear).** El estudiante recoge datos de consumidores, extrae conclusiones con un intervalo o prueba y justifica una recomendación de mercadeo; la IA solo apoya conceptos. Rúbrica: (1) muestreo válido, (2) prueba adecuada y supuestos, (3) cálculo correcto, (4) decisión comercial interpretada.
- **Defensa oral de la conclusión (AIAS Nivel 1: sin IA).** Explica por qué eligió esa prueba, qué margen de error asumió y qué recomendaría a la gerencia. Rúbrica: (1) dominio de H0/H1, (2) lectura del valor-p e intervalo, (3) manejo de errores tipo I/II, (4) claridad.

## Recurso interactivo en HTML
Idea: simulador que muestra cómo cambia el margen de error de una encuesta al variar el tamaño de muestra y el nivel de confianza.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS sin librerías externas) titulado "Simulador de Margen de Error en Encuestas". El usuario ajusta con deslizadores el tamaño de muestra, la proporción observada y el nivel de confianza (90/95/99%), y la página muestra el margen de error y dibuja el intervalo, explicando cómo se estrecha al crecer la muestra. En español, ejemplo de un sondeo de marca, funciona sin internet.
```

## Notas
Verificación: la IA confunde con frecuencia significancia estadística con relevancia práctica y se equivoca al elegir la prueba o leer tablas; todo resultado debe recalcularse y justificarse. Privacidad: anonimizar a los encuestados; nunca subir datos personales de clientes reales. Contexto Dajabón: usar encuestas de consumidores de comercios fronterizos, hábitos de compra binacional o uso de remesas para que la inferencia sea verificable y pertinente.
