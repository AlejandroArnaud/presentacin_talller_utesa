# Electricidad Básica

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 4 · **Código:** IEL-100

## Sobre la materia
Fundamentos de electricidad para ingeniería: carga, corriente, voltaje, resistencia, ley de Ohm, potencia y energía, circuitos en serie y paralelo, leyes de Kirchhoff y conceptos de corriente alterna. Competencias clave: analizar circuitos simples, aplicar leyes fundamentales con unidades correctas y razonar sobre seguridad eléctrica.

## Enfoque IA (taller)
La IA explica conceptos y resuelve circuitos, pero comete errores de signo, unidades y aplicación de Kirchhoff: el estudiante verifica con cálculo y dimensiones. La integridad se diseña con resolución en pizarra y problemas con datos cambiados en vivo, no con detectores.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre la ley de Ohm y potencia eléctrica para
estudiantes de Ingeniería en Sistemas sin formación física previa. Incluye una
analogía cotidiana (agua en tuberías), 3 ejemplos numéricos con unidades y un
ejercicio guiado paso a paso.
```

```
Genera 6 problemas REALES de circuitos en serie y paralelo con contexto cotidiano
dominicano (consumo de un abanico y bombillos en una casa, cálculo de la factura
eléctrica en pesos, capacidad de un breaker). Da enunciado y datos; sin soluciones.
```

```
Crea una rúbrica de 4 criterios para evaluar la resolución de un problema de circuitos:
planteamiento correcto (ley aplicada), procedimiento, uso correcto de unidades y
verificación del resultado. En español, escala 1 a 4, formato tabla.
```

```
Toma el tema "ley de Ohm" y propón tres niveles de ejercicio: básico (despejar una
variable), intermedio (circuito mixto serie-paralelo) y avanzado (calcular potencia
disipada y costo mensual de energía). Mantén el mismo objetivo.
```

```
Dame 8 preguntas socráticas que lleven al estudiante a explicar POR QUÉ la corriente
es igual en un circuito serie pero el voltaje se reparte, y a predecir qué pasa si se
abre o se agrega una resistencia, antes de calcular.
```

## Ejercicios y actividades con IA
- **Verifica el circuito de la IA.** Objetivo: rigor numérico. El estudiante pide a la IA que resuelva un circuito serie-paralelo y luego comprueba cada paso con la ley de Ohm y un análisis de unidades, marcando cualquier error. Rol de la IA: solucionador falible que se audita.
- **Del fenómeno a la fórmula.** Objetivo: conectar concepto y cálculo. El estudiante describe una situación real (un bombillo que alumbra menos al agregar otro en serie) y pide a la IA la explicación física; luego la valida con sus propios cálculos. Rol de la IA: puente concepto-fórmula a confirmar.
- **Estima tu factura.** Objetivo: aplicación. El estudiante lista los aparatos de su casa, pide a la IA un método para estimar el consumo en kWh y verifica el cálculo del costo en pesos con la tarifa real. Rol de la IA: borrador de método a comprobar.

## Evaluaciones auténticas
- **Resolución en pizarra con variación (AIAS Nivel 1 — sin IA durante la prueba).** El estudiante resuelve un circuito y el docente cambia un valor o agrega un componente en el momento. Mini-rúbrica: (1) ley correcta, (2) procedimiento, (3) unidades, (4) capacidad de adaptar el cálculo al cambio.
- **Informe aplicado de consumo del hogar (AIAS Nivel 3 — IA asistida declarada).** El estudiante mide/estima el consumo eléctrico de su vivienda y entrega cálculos y conclusiones, declarando el uso de IA. Mini-rúbrica: (1) datos y supuestos razonables, (2) cálculos correctos con unidades, (3) interpretación realista, (4) honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Idea: una calculadora de circuitos serie/paralelo que muestra corriente, voltaje y potencia en cada resistencia.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado
"Laboratorio de Ohm". El usuario ingresa el voltaje de la fuente y hasta 3 resistencias,
elige serie o paralelo, y la app calcula y muestra en una tabla la resistencia total,
la corriente, el voltaje y la potencia en cada resistencia. Interfaz en español, abre
directo en el navegador.
```

## Notas
Verifica con unidades y orden de magnitud: la IA confunde watts con voltios y comete errores de signo en Kirchhoff. No se requieren datos de estudiantes. Recuerda la seguridad eléctrica real (no manipular instalaciones energizadas). Adapta los ejemplos al contexto de Dajabón (tarifas locales, cortes de energía, uso de inversores y plantas eléctricas) para anclar el cálculo en la vida diaria.
