# Evaluación de Proyectos

**Carrera:** Contaduría Pública · **Cuatrimestre:** 11 · **Código:** ECO-250

## Sobre la materia
Estudia la formulación y evaluación de proyectos de inversión: estudio de mercado, técnico y financiero, construcción del flujo de caja y criterios de decisión (VAN, TIR, periodo de recuperación, relación beneficio-costo). Competencias clave: estimar flujos, aplicar criterios de rentabilidad con sentido y recomendar la viabilidad de un proyecto con sustento.

## Enfoque IA (taller)
La IA ayuda a estructurar el estudio, generar supuestos y redactar borradores que el estudiante debe recalcular y someter a análisis de sensibilidad. Integridad por diseño: se evalúa con proyectos propios, flujos verificables y defensa oral; no se usan detectores de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre VAN y TIR para Evaluación de Proyectos. Incluye objetivo, un proyecto de ejemplo (ej. un pequeño taller) con su flujo de caja a 5 años, el cálculo del VAN y la TIR paso a paso, y preguntas de cierre sobre qué pasa si cambia la tasa de descuento.
```

```
Genera un proyecto de inversión realista para el contexto de Dajabón (ej. centro de acopio agrícola, transporte de carga fronteriza, panadería): inversión inicial, ingresos y costos estimados a 5 años. Pide al estudiante construir el flujo de caja y evaluar con VAN, TIR y periodo de recuperación. Incluye la solución para el docente.
```

```
Crea una rúbrica para evaluar un estudio de viabilidad de proyecto, con criterios: razonabilidad de los supuestos, corrección del flujo de caja, aplicación correcta de los criterios de decisión, análisis de sensibilidad y claridad de la recomendación. Define niveles de logro.
```

```
Toma este caso de evaluación y genera tres versiones por nivel: básica (flujo dado, calcular VAN), intermedia (construir el flujo con datos sueltos) y avanzada (incluir financiamiento, valor de salvamento y un escenario pesimista).
```

```
Formula 6 preguntas socráticas que lleven al estudiante a razonar por qué un proyecto con TIR alta puede no ser el mejor, y por qué los supuestos importan más que la fórmula.
```

## Ejercicios y actividades con IA
- **Supuestos demasiado optimistas.** Objetivo: pensar críticamente los flujos. La IA genera un proyecto con ingresos inflados; el estudiante cuestiona cada supuesto, lo ajusta a la realidad local y recalcula el VAN. Rol de la IA: dar un caso con supuestos cuestionables.
- **Batalla de escenarios.** Objetivo: análisis de sensibilidad. El estudiante pide a la IA escenarios optimista y pesimista, verifica los cálculos y decide la viabilidad bajo cada uno. Rol de la IA: proponer variaciones, no la conclusión.

## Evaluaciones auténticas
- **Estudio de viabilidad de un proyecto local (AIAS Nivel 3: IA para tareas específicas, con declaración).** El estudiante formula y evalúa un proyecto real o realista de la zona y entrega el estudio declarando el uso de IA. Rúbrica: (1) supuestos razonables, (2) flujo de caja correcto, (3) criterios bien aplicados, (4) recomendación fundamentada.
- **Defensa oral de la viabilidad (AIAS Nivel 1: sin IA).** Sustenta su recomendación y responde a un cambio de supuestos en vivo. Rúbrica: (1) dominio del flujo, (2) interpretación de VAN/TIR, (3) reacción al análisis de sensibilidad, (4) claridad.

## Recurso interactivo en HTML
Idea: calculadora de VAN y TIR que toma un flujo de caja y la tasa de descuento.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS puro, sin librerías) titulado "Evaluador de Proyectos: VAN y TIR". El usuario ingresa la inversión inicial, los flujos de caja por año y la tasa de descuento; la página calcula VAN, TIR aproximada (por iteración), periodo de recuperación y relación beneficio-costo, indica si el proyecto es viable y dibuja una pequeña gráfica del flujo acumulado. En español, funciona sin internet.
```

## Notas
Verificación: la IA comete errores en el descuento de flujos y en la TIR; todo cálculo debe rehacerse en hoja y contrastarse. Privacidad: usar datos ficticios o públicos; no subir cifras confidenciales de empresas o emprendedores reales. Contexto Dajabón: anclar los proyectos en oportunidades reales de la frontera (agro, comercio, transporte, servicios) con cifras en pesos dominicanos.
