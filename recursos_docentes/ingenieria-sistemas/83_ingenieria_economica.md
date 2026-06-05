# Ingeniería Económica

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 10 · **Código:** IID-945

## Sobre la materia
Aplica el análisis económico a la toma de decisiones de ingeniería: valor del dinero en el tiempo, interés simple y compuesto, valor presente y futuro, anualidades, evaluación de alternativas con VAN (Valor Actual Neto), TIR (Tasa Interna de Retorno) y período de recuperación, y análisis costo-beneficio de proyectos tecnológicos. Competencias clave: modelar flujos de caja, comparar inversiones con criterios cuantitativos y justificar decisiones económicas en proyectos de TI.

## Enfoque IA (taller)
La IA explica fórmulas, plantea flujos de caja y verifica cálculos, pero el estudiante debe interpretar qué significan los resultados para una decisión real: el criterio económico no se delega. La integridad se asegura evaluando el razonamiento sobre escenarios y la defensa de la recomendación, no la entrega de un cálculo que la IA pudo producir.

## Prompts para el docente

```
Eres profesor de Ingeniería Económica para Ingeniería en Sistemas. Planifica una clase de
90 minutos sobre Valor Actual Neto (VAN) y Tasa Interna de Retorno (TIR), con la intuición
detrás de cada concepto, un ejemplo de inversión en un sistema de software resuelto paso a
paso y 3 ejercicios graduados.
```

```
Genera 5 problemas de evaluación de proyectos con contexto real de TI (comprar servidores
vs. usar la nube, desarrollar un software propio vs. comprar licencias, automatizar un
proceso manual), cada uno con su flujo de caja en pesos dominicanos. Da los enunciados y
las soluciones detalladas aparte.
```

```
Crea una rúbrica de 4 criterios para evaluar un análisis de viabilidad económica de un
proyecto tecnológico: corrección de los cálculos (VAN, TIR, recuperación), realismo de los
supuestos, interpretación de los resultados, y claridad de la recomendación. En español,
escala 1 a 4.
```

```
Diferencia la explicación del "valor del dinero en el tiempo" en tres niveles: estudiante
que aún confunde interés simple y compuesto, estudiante que ya calcula valor presente, y
estudiante avanzado que evalúa proyectos con flujos irregulares.
```

```
Dame 8 preguntas socráticas para discutir por qué un proyecto con mayor ganancia total
puede ser peor inversión que otro con menor ganancia pero recuperación más rápida,
llevando al estudiante a razonar sobre riesgo, liquidez y costo de oportunidad.
```

## Ejercicios y actividades con IA
- **Verifica el cálculo de la IA.** Objetivo: dominio del método. El estudiante pide a la IA que resuelva un flujo de caja (VAN/TIR) y luego rehace el cálculo a mano o en hoja de cálculo para confirmar o refutar el resultado, explicando cualquier diferencia. Rol de la IA: generar una solución a auditar (incluyendo errores plausibles).
- **Análisis de sensibilidad guiado.** Objetivo: interpretar escenarios. El estudiante define un proyecto y pide a la IA variaciones (tasa de interés alta/baja, costos +20%); luego interpreta cómo cambia la decisión y argumenta cuál escenario es más prudente. Rol de la IA: generar escenarios que el estudiante interpreta.

## Evaluaciones auténticas
- **Estudio de viabilidad económica de un proyecto de TI real (proceso + aplicada).** El estudiante evalúa una inversión tecnológica concreta (p. ej. digitalizar un comercio de Dajabón) con flujos de caja, VAN, TIR y una recomendación justificada. *AIAS Nivel 3 (IA para apoyo en cálculo y estructura, con supuestos propios y verificación, declarado).* Mini-rúbrica: (1) corrección de cálculos, (2) realismo de supuestos, (3) interpretación, (4) calidad de la recomendación.
- **Defensa oral de una decisión de inversión (oral).** El estudiante recomienda entre dos alternativas y responde a una variación en vivo (cambia la tasa o un costo). *AIAS Nivel 1 (sin IA durante la evaluación).* Mini-rúbrica: (1) comprensión de los criterios, (2) cálculo correcto bajo presión, (3) justificación, (4) claridad.

## Recurso interactivo en HTML
Una calculadora de VAN y TIR donde el estudiante ingresa flujos de caja por año y ve los indicadores y un gráfico de flujo.

```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que sea
una calculadora de evaluación de proyectos: el usuario ingresa la inversión inicial, los
flujos de caja por año y la tasa de descuento, y la app calcula VAN, TIR y período de
recuperación, mostrando un gráfico de barras de los flujos. En español, abrible offline en
el navegador.
```

## Notas
La IA comete errores aritméticos sutiles y confunde convenciones (signo de la inversión, momento del flujo): exige que el estudiante verifique todo cálculo y no acepte el número sin trazarlo. No subas datos financieros reales de terceros ni datos de estudiantes. Adapta los proyectos al contexto de Dajabón (pesos dominicanos, tasas y costos locales reales, inversiones a escala de pequeños comercios) en lugar de cifras desconectadas del entorno.
