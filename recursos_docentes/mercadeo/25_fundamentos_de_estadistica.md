# Fundamentos de Estadística

**Carrera:** Mercadeo · **Cuatrimestre:** 4 · **Código:** MAT-134

## Sobre la materia
Introduce la estadística descriptiva aplicada a las decisiones de mercadeo: tipos de variables y escalas, distribuciones de frecuencias, medidas de tendencia central y dispersión, posición (percentiles, puntuaciones z) y nociones de probabilidad. Competencias clave: organizar y resumir datos de ventas y encuestas, interpretar gráficos de mercado con sentido crítico y traducir números en recomendaciones comerciales.

## Enfoque IA (taller)
La IA calcula y explica un procedimiento, pero el estudiante debe interpretar el dato en clave de negocio (qué decide un gerente con esa media) y detectar cuándo el cálculo o la conclusión están mal. Evaluamos la interpretación y el razonamiento aplicado, no solo el número, lo que vuelve innecesario cualquier detector.

## Prompts para el docente

```
Eres docente de Fundamentos de Estadística para Mercadeo, cuatrimestre 4, UTESA Dajabón. Diseña una clase de 2 horas sobre medidas de tendencia central usando un set realista de ventas diarias de un colmado fronterizo durante un mes. Incluye cálculo a mano, una discusión sobre cuándo la mediana representa mejor que la media (días con ventas atípicas) e indica tiempos.
```

```
Genera un conjunto de datos realista (30 clientes) con tres variables: edad, gasto promedio mensual en una tienda de Dajabón (RD$) y canal de compra (físico/online). Incluye un valor atípico. Entrégalo como tabla y propón 4 preguntas de análisis descriptivo orientadas a segmentar el mercado.
```

```
Crea una rúbrica de 4 niveles (Inicial, En desarrollo, Logrado, Destacado) para evaluar un informe descriptivo de datos de mercadeo: corrección de los cálculos, elección apropiada de medidas y gráficos, interpretación comercial de los resultados y claridad de la comunicación.
```

```
Toma este ejercicio de desviación estándar sobre tickets de venta y genera tres versiones diferenciadas: una guiada paso a paso, una con datos dados y procedimiento parcial, y una de aplicación abierta donde el estudiante elige el estadístico adecuado para comparar dos sucursales y lo justifica.
```

```
Plantea 6 preguntas socráticas para que el estudiante cuestione una media de gasto: ¿representa al cliente típico si hay un comprador mayorista? ¿qué oculta sobre la dispersión del gasto? ¿qué escala permite calcularla? Orienta a la comprensión, no a la respuesta directa.
```

## Ejercicios y actividades con IA
- **Verificador de cálculos.** Objetivo: dominar el procedimiento. El estudiante calcula a mano la media y la desviación de un set de ventas, pide a la IA que lo resuelva y compara; si difieren, debe hallar quién se equivocó y por qué. Rol de la IA: segundo solucionador a contrastar.
- **Interpretación que la IA no ve.** Objetivo: leer datos en clave comercial. La IA entrega los estadísticos de un set de encuestas; el estudiante redacta qué decisión de mercadeo tomaría (ajustar precio, cambiar canal). Rol de la IA: hacer los cálculos para liberar tiempo de interpretación.
- **Caza del error estadístico.** Objetivo: pensamiento crítico. El estudiante pide a la IA una conclusión a partir de datos de mercado y evalúa si comete errores comunes (confundir media con mediana, ignorar dispersión, sobreinterpretar una muestra). La IA produce la afirmación; el estudiante la audita.

## Evaluaciones auténticas
- **Mini-estudio con datos propios (AIAS Nivel 3 – IA asistida).** El estudiante encuesta a 20 clientes de un negocio local sobre hábitos de compra, describe los datos estadísticamente y redacta recomendaciones; puede usar IA para cálculos pero documenta cuáles. Mini-rúbrica: (1) corrección estadística, (2) gráfico apropiado, (3) interpretación comercial, (4) honestidad sobre el uso de la IA.
- **Pizarra en vivo (AIAS Nivel 1 – Sin IA).** El estudiante resuelve un ejercicio nuevo en la pizarra y explica cada paso oralmente. Mini-rúbrica: (1) procedimiento correcto, (2) elección de la medida adecuada, (3) explicación del razonamiento, (4) interpretación del resultado.

## Recurso interactivo en HTML
Idea: una calculadora descriptiva que muestra el procedimiento paso a paso sobre datos de ventas, no solo el resultado.

```
Crea UN archivo .html autocontenido (HTML, CSS y JavaScript, sin librerías externas) titulado "Calculadora descriptiva de ventas paso a paso". El usuario pega una lista de montos en RD$ y la app muestra media, mediana, moda, rango y desviación estándar DETALLANDO cada paso (sumatorias, fórmulas) con fines didácticos, más un histograma simple dibujado con canvas. En español, funciona offline y abre con doble clic.
```

## Notas
Pide siempre que el estudiante verifique los cálculos de la IA con un ejemplo conocido; los modelos cometen errores aritméticos aun en operaciones simples. Si se recolectan datos de clientes reales, deben ser anónimos y con consentimiento del negocio. Usa contextos de Dajabón (ventas de colmados, comercio fronterizo, ferias agropecuarias) para que los números tengan significado comercial para el estudiante.
