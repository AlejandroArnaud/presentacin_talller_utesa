# Excel para Finanzas

**Carrera:** Contaduría Pública · **Cuatrimestre:** 5 · **Código:** CON-500

## Sobre la materia
Construye competencia en hojas de cálculo aplicadas a finanzas: funciones financieras (VNA, TIR, PAGO), tablas de amortización, presupuestos, estados financieros dinámicos, tablas dinámicas y modelado con escenarios. Competencias clave: rigor numérico, automatización de cálculos contables y comunicación de resultados financieros a partir de datos.

## Enfoque IA (taller)
La IA explica fórmulas, sugiere estructuras de modelo y genera datos de práctica, pero el estudiante debe construir y validar el archivo. Integridad por diseño: se evalúa el proceso de modelado y la defensa del libro, no se vigila con detectores.

## Prompts para el docente

```
Planifica una clase de 90 min para Excel para Finanzas (5to cuatri, Contaduría) sobre tablas de amortización con la función PAGO. Incluye: objetivo, demo guiada paso a paso, dataset de un préstamo PYME de Dajabon en pesos dominicanos, y un reto final. Lista las fórmulas exactas de cada celda.
```

```
Genera 3 casos realistas de una ferretería o colmado de Dajabon: flujo de caja mensual, evaluación de un préstamo con TIR, y un presupuesto anual. Da las cifras en RD$ y una pregunta de análisis por caso.
```

```
Crea una rúbrica de 100 puntos para evaluar un modelo financiero en Excel: corrección de fórmulas, uso de referencias absolutas/relativas, formato y legibilidad, y análisis de sensibilidad. Define niveles excelente/aceptable/insuficiente.
```

```
Adapta un ejercicio de presupuesto de caja a tres niveles: básico (presupuesto dado, completar fórmulas), intermedio (construir desde extractos), avanzado (modelo con escenarios y tabla de datos de 2 variables).
```

```
Dame 8 preguntas socráticas para que el estudiante justifique decisiones en su modelo: por qué eligió esa función, qué pasa si cambia la tasa, cómo sabe que la TIR es confiable, qué supuestos esconde el presupuesto.
```

## Ejercicios y actividades con IA
- **Auditoría de fórmulas:** *Objetivo:* detectar errores en modelos. *Estudiante:* recibe un libro con fallos sembrados, los corrige y documenta cada arreglo. *IA:* genera el libro con errores y explica funciones cuando el estudiante pregunta.
- **Del enunciado al modelo:** *Objetivo:* traducir un problema a estructura de hoja. *Estudiante:* diseña el modelo de un préstamo local y lo prueba con cifras reales. *IA:* propone una estructura inicial que el estudiante critica y mejora.

## Evaluaciones auténticas
- **Modelo financiero de un negocio de Dajabon (entrega + defensa oral).** AIAS Nivel 3 (IA para ideación y verificación, no para construir el archivo). *Rúbrica:* (1) fórmulas correctas y auditables, (2) supuestos justificados, (3) análisis de sensibilidad, (4) defensa oral clara de decisiones.
- **Reto cronometrado en aula sin IA:** construir una tabla de amortización desde cero. AIAS Nivel 1 (Sin IA). *Rúbrica:* exactitud, uso de referencias, formato, tiempo.

## Recurso interactivo en HTML
Calculadora de préstamo que muestre la tabla de amortización celda por celda y compare cuota fija vs. capital constante.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS, sin librerías externas) con una calculadora de amortización de préstamos: inputs de monto, tasa anual y plazo en meses; genera la tabla completa (cuota, interés, capital, saldo) y un gráfico simple. Muestra la fórmula PAGO usada. Comentado y en español.
```

## Notas
Verifica que las tasas y montos reflejen el mercado local dominicano; la IA inventa cifras. Nunca subas datos financieros reales de estudiantes o de negocios identificables a chatbots. Usa ejemplos de comercios de Dajabon (colmados, ferreterías, agronegocios fronterizos) para anclar la práctica.
