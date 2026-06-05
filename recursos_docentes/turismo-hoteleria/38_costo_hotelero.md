# Costo Hotelero

**Carrera:** Administración de Empresas Turísticas y Hoteleras · **Cuatrimestre:** 5 · **Código:** TUR-500

## Sobre la materia
Aplica la contabilidad de costos a la operación hotelera: costeo por departamentos (habitaciones, A&B, lavandería), costos fijos vs. variables, costo por habitación ocupada, food cost, punto de equilibrio y fijación de tarifas. Competencias clave: calcular el costo real de un servicio hotelero y tomar decisiones de precio que protejan el margen.

## Enfoque IA (taller)
La IA funciona como tutor de costos que explica fórmulas, arma planillas de ejemplo y genera datasets de práctica; el estudiante calcula, interpreta y decide. La integridad se garantiza con ejercicios de datos cambiantes, defensa del cálculo y análisis de un hotel real, no con detección automática.

## Prompts para el docente

```
Actúa como contador de costos hoteleros. Planifica una clase de 90 min sobre cálculo de food cost y costo por habitación ocupada para 5to cuatrimestre. Incluye explicación de la fórmula, un ejemplo numérico resuelto paso a paso y un ejercicio para los estudiantes con datos de un hotel pequeño de Dajabón.
```

```
Genera un set de datos realista de un hotel de 30 habitaciones en la frontera RD-Haití: ocupación mensual, costos fijos (nómina, energía, depreciación) y costos variables (amenities, lavandería). Pídeme que calcule el costo por habitación ocupada y el punto de equilibrio.
```

```
Crea una rúbrica de 4 criterios para evaluar un informe de análisis de costos hoteleros (exactitud de cálculos, clasificación fijo/variable correcta, interpretación de resultados y recomendación de tarifa). Niveles con descriptores claros.
```

```
Toma este ejercicio de punto de equilibrio y genera tres niveles: básico (solo habitaciones), intermedio (habitaciones + A&B) y avanzado (varios departamentos con costos compartidos prorrateados). Mantén consistencia en los datos.
```

```
Dame 8 preguntas socráticas para que la clase discuta: ¿conviene bajar la tarifa para subir la ocupación en temporada baja? Que las preguntas obliguen a razonar sobre costos variables, marginales y punto de equilibrio.
```

## Ejercicios y actividades con IA
- **Hoja de costos verificada.** Objetivo: dominar la clasificación de costos. El estudiante pide a la IA una planilla de costeo de habitaciones y verifica fórmula por fórmula, corrigiendo errores de clasificación (la IA suele mezclar fijos y variables). La IA da la plantilla; el estudiante valida la lógica.
- **Interpretación de resultados.** Objetivo: pasar del número a la decisión. Con un resultado de costo dado, el estudiante pide a la IA tres interpretaciones posibles y elige/justifica cuál aplica al caso, descartando las erróneas. La IA propone lecturas; el estudiante decide con criterio.
- **Food cost de un menú.** Objetivo: costear A&B. El estudiante genera con IA un menú de desayuno y calcula su food cost real con precios locales, ajustando lo que la IA estimó mal. La IA aporta el menú; el estudiante hace y verifica los números.

## Evaluaciones auténticas
- **Análisis de costos de un hotel real (proyecto de proceso).** El estudiante levanta datos de un hostal/hotel local (con permiso) o un caso asignado, calcula costos y propone una tarifa, entregando borradores intermedios. **AIAS Nivel 2 (IA para asistencia/planeación, no para el cálculo final).** Rúbrica: exactitud de cálculos · clasificación correcta de costos · calidad de la interpretación · viabilidad de la tarifa propuesta.
- **Defensa oral de la planilla.** El estudiante explica su hoja de costos ante el docente y responde "¿qué pasa si sube la energía 20%?" en vivo. **AIAS Nivel 1 (Sin IA en el examen).** Rúbrica: comprensión de fórmulas · respuesta correcta al escenario · interpretación · claridad.

## Recurso interactivo en HTML
Idea: simulador de punto de equilibrio hotelero que muestre cuántas habitaciones hay que vender para no perder, según costos fijos, costo variable por habitación y tarifa.

```
Crea un único archivo .html autocontenido (sin librerías externas) llamado "punto-equilibrio-hotel.html": inputs para costos fijos mensuales, costo variable por habitación ocupada y tarifa promedio; calcula y muestra el punto de equilibrio en habitaciones/mes y los ingresos necesarios, con una tabla de utilidad a 50%, 70% y 90% de ocupación. Todo en español, listo para el navegador.
```

## Notas
Verificar que los precios y tarifas que sugiere la IA correspondan al mercado dominicano (la IA usa cifras genéricas o en dólares de otros países). No subir datos financieros reales de un hotel sin autorización; anonimizar nombres y montos. Adaptar al contexto de Dajabón: hoteles pequeños, estacionalidad ligada al comercio binacional y costos de energía variables.
