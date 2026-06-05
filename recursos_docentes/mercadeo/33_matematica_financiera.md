# Matemática Financiera

**Carrera:** Mercadeo · **Cuatrimestre:** 5 · **Código:** MAT-180

## Sobre la materia
Valor del dinero en el tiempo aplicado a decisiones comerciales y de consumo. Cubre interés simple y compuesto, descuento, anualidades, amortización de préstamos, y evaluación básica de inversiones. Competencias clave: calcular cuotas y rendimientos, comparar opciones de financiamiento y justificar decisiones de precio o crédito con números.

## Enfoque IA (taller)
La IA es una calculadora financiera explicada: arma tablas de amortización, despeja fórmulas y simula escenarios, mientras el estudiante verifica la lógica y detecta supuestos ocultos (tasas, periodos). Integridad por diseño con casos personalizados y sustentación; sin detectores de IA.

## Prompts para el docente
```
Planifica una clase de 90 minutos sobre interés compuesto para estudiantes de
Mercadeo. Incluye una analogía cotidiana, la fórmula explicada término por
término, dos ejemplos resueltos (ahorro y préstamo) y 5 ejercicios.
```
```
Genera un caso realista: un comerciante de Dajabón pide RD$200,000 a 24 meses.
Crea tres ofertas de financiamiento con tasas distintas y pídeme comparar la
cuota y el costo total. Incluye la tabla de amortización de la opción 1 y las
respuestas correctas.
```
```
Crea una rúbrica (escala 1-4) para evaluar un análisis de financiamiento de los
estudiantes, con criterios: fórmula correcta, supuestos explícitos,
comparación de opciones y recomendación justificada.
```
```
Explica "valor presente" en tres niveles: una frase intuitiva, un ejemplo
numérico con RD$, y la fórmula con cuándo aplicarla. Para diferenciar a
estudiantes avanzados y a quienes recién empiezan.
```
```
Dame 8 preguntas de discusión sobre decisiones financieras reales: "¿Conviene
pagar a cuotas sin interés o de contado con descuento?", para debate en grupo.
```

## Ejercicios y actividades con IA
- **Verifica la tabla de amortización.** Objetivo: dominar la mecánica. La IA genera una tabla de amortización (con un error sembrado); el estudiante recalcula una fila a mano y halla la inconsistencia. Rol de la IA: generadora de material a auditar.
- **Simulador de decisiones.** Objetivo: comparar opciones. El estudiante pide a la IA simular comprar de contado vs. a 12 meses, y luego escribe su recomendación con criterio propio. Rol de la IA: motor de simulación de escenarios.
- **Cazasupuestos.** Objetivo: leer la letra pequeña. La IA resuelve un problema sin aclarar si la tasa es anual o mensual; el estudiante exige los supuestos y rehace el cálculo. Rol de la IA: fuente de un problema ambiguo.

## Evaluaciones auténticas
- **Plan financiero personalizado (AIAS Nivel 2 – IA para apoyo, declarada).** Cada estudiante evalúa una compra/crédito real de su entorno y entrega cálculos + recomendación, con sustentación oral de cómo verificó la IA. Mini-rúbrica: corrección de cálculos / supuestos explícitos / comparación / recomendación defendible.
- **Examen de cálculo a mano (AIAS Nivel 1 – Sin IA).** Resolver interés compuesto y una cuota de préstamo con calculadora básica. Mini-rúbrica: planteo correcto / aplicación de fórmula / resultado / unidades y redondeo.

## Recurso interactivo en HTML
Idea: simulador de préstamo que genera la tabla de amortización al instante.
```
Crea UN archivo .html autocontenido (sin internet) con campos: monto, tasa
anual y número de meses. Al pulsar "Calcular", muestra la cuota mensual (sistema
francés) y una tabla de amortización completa (cuota, interés, capital, saldo).
Formatea en pesos dominicanos. Todo HTML, CSS y JS en el mismo archivo.
```

## Notas
- Verifica las fórmulas y la convención de la tasa (anual vs. mensual); la IA a veces mezcla periodos.
- No introducir datos financieros reales y sensibles de personas identificables; usar montos genéricos.
- Ancla los casos en la realidad de Dajabón: crédito de colmados, financiamiento de motores, ahorro de remesas, comercio binacional.
