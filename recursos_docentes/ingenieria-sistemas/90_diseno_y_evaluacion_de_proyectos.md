# Diseño y Evaluación de Proyectos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 11 · **Código:** IID-025

## Sobre la materia
Aborda el ciclo de vida de proyectos de ingeniería: formulación, estudio de viabilidad (técnica, económica, operativa), análisis costo-beneficio, evaluación financiera (VAN, TIR, periodo de recuperación), gestión de riesgos y cronograma. Desarrolla competencias de planificación, toma de decisiones basada en datos y evaluación de la rentabilidad de iniciativas tecnológicas.

## Enfoque IA (taller)
La IA agiliza cálculos, plantea escenarios y borradores de plan de proyecto que el estudiante debe validar con criterio financiero y de ingeniería: el reto es interpretar resultados y defender supuestos, no obtener tablas. La integridad se logra evaluando el análisis de viabilidad, la justificación de supuestos y la defensa de decisiones, no la entrega de cálculos generados.

## Prompts para el docente
```
Eres profesor de Diseño y Evaluación de Proyectos en Ingeniería en Sistemas. Planifica una clase de 90 min sobre evaluación financiera (VAN y TIR): objetivos, intuición del valor del dinero en el tiempo, un caso resuelto paso a paso y un ejercicio de decisión entre dos proyectos.
```
```
Genera 4 casos de proyectos tecnológicos con cifras realistas para evaluar viabilidad (montar un cibercafé, desarrollar una app de delivery local, digitalizar una pyme, instalar red WiFi comunitaria). Para cada uno da inversión, flujos estimados y horizonte, con los datos en pesos dominicanos.
```
```
Crea una rúbrica de 4 criterios para evaluar un estudio de viabilidad de proyecto: calidad del análisis técnico, solidez de la evaluación económico-financiera, identificación de riesgos y realismo de los supuestos. Escala 1-4.
```
```
Diferencia la explicación de "flujo de caja del proyecto" en tres niveles: estudiante que confunde costo con inversión, estudiante que ya calcula VAN básico y estudiante que incorpora escenarios y sensibilidad.
```
```
Genera 8 preguntas socráticas para discutir por qué un proyecto con VAN positivo puede igual rechazarse (riesgo, liquidez, factores no financieros, contexto local) y cómo pesar lo cuantitativo frente a lo cualitativo.
```

## Ejercicios y actividades con IA
- **Audita los supuestos del proyecto.** Objetivo: pensar críticamente la viabilidad. El estudiante pide a la IA un estudio de viabilidad de un proyecto, luego cuestiona cada supuesto (costos, demanda, tasas) y lo ajusta con datos reales del mercado local, justificando los cambios. Rol de la IA: producir un borrador optimista a someter a crítica.
- **Análisis de sensibilidad asistido.** Objetivo: medir el riesgo. El estudiante define variables clave, usa la IA para recalcular VAN/TIR bajo escenarios pesimista/optimista y verifica los cálculos a mano en los casos límite. Rol de la IA: acelerar el cálculo repetitivo a verificar.

## Evaluaciones auténticas
- **Estudio de viabilidad de un proyecto real local (aplicada + proceso).** El estudiante formula y evalúa un proyecto tecnológico para una necesidad de Dajabón, con análisis técnico, financiero y de riesgos documentado. *AIAS Nivel 4 (IA integrada con bitácora de uso).* Rúbrica: rigor técnico, solidez financiera, gestión de riesgos, realismo de supuestos.
- **Defensa de la decisión de inversión (oral).** Ante cambios en los supuestos planteados en vivo, el estudiante recalcula o argumenta si el proyecto sigue siendo viable. *AIAS Nivel 2 (IA solo para preparación, declarada).* Rúbrica: dominio de los indicadores, capacidad de reaccionar a cambios, justificación, claridad.

## Recurso interactivo en HTML
Una calculadora de evaluación de proyectos: el usuario ingresa inversión y flujos y obtiene VAN, TIR y periodo de recuperación, con una tabla de sensibilidad.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que calcule la evaluación financiera de un proyecto: el usuario ingresa la inversión inicial, los flujos de caja por periodo y la tasa de descuento, y obtiene VAN, TIR (aproximada) y periodo de recuperación, mostrando los flujos descontados en una tabla. En español, abrible offline.
```

## Notas
Verifica fórmulas y resultados de la IA: confunde VAN con TIR, aplica mal la tasa o arrastra errores de signo en los flujos; recalcular a mano los casos clave es el mejor control. No subas datos financieros reales de empresas o personas sin autorización. Adapta a Dajabón usando pesos dominicanos, costos y tasas locales, y proyectos pertinentes a la economía fronteriza (comercio, agro, servicios, turismo).
