# Presupuesto Empresarial

**Carrera:** Administración de Empresas · **Cuatrimestre:** 7 · **Código:** ADM-260

## Sobre la materia

Aborda la elaboración, ejecución y control del presupuesto maestro de la empresa: presupuestos de ventas, producción, compras, gastos, efectivo y estados financieros proyectados. Desarrolla competencias de planificación financiera, análisis de variaciones (real vs. presupuestado) y toma de decisiones basada en proyecciones cuantitativas.

## Enfoque IA (taller)

La IA ayuda a estructurar plantillas, explicar partidas y generar escenarios, pero el estudiante construye los números, valida fórmulas y justifica supuestos. La integridad se asegura por diseño con presupuestos de empresas/proyectos locales, defensa de supuestos y bitácora de cálculo, no con detección de IA.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre la elaboración del presupuesto de efectivo (flujo de caja proyectado) para 7mo cuatrimestre. Incluye un ejemplo paso a paso de una pyme dominicana con ventas estacionales, entradas y salidas de efectivo mensuales, y una actividad guiada.
```

```
Genera un caso real de presupuesto maestro para una pequeña empresa dominicana (ej. una panadería o una ferretería de Dajabón): incluye datos de ventas proyectadas, costos, gastos y políticas de cobro/pago. Plantea la consigna de armar el presupuesto de efectivo a 3 meses. Indica qué cifras debo revisar.
```

```
Crea una rúbrica de 4 criterios para evaluar un presupuesto maestro elaborado por el estudiante: corrección de los cálculos, coherencia entre presupuestos (ventas→producción→efectivo), realismo de los supuestos y análisis de variaciones. Escala de 4 niveles.
```

```
Adapta un ejercicio de análisis de variaciones presupuestarias a tres niveles para diferenciar por nivel: básico (solo ventas), intermedio (ventas y costos) y avanzado (con descomposición precio/cantidad y plan de acción correctivo).
```

```
Formula 8 preguntas socráticas para que el estudiante cuestione supuestos optimistas en un presupuesto de ventas (ej. "asumimos 20% de crecimiento"), conectando proyección financiera con riesgo y prudencia.
```

## Ejercicios y actividades con IA

- **Supuestos bajo escrutinio.** Objetivo: evaluar la calidad de las proyecciones. El estudiante pide a la IA un presupuesto de ventas con sus supuestos, luego critica por escrito cuáles son realistas para el mercado local y los ajusta. Rol de la IA: borrador con supuestos a cuestionar.
- **Plantilla explicada.** Objetivo: comprender la estructura. El estudiante solicita a la IA una explicación de cada partida del presupuesto maestro, luego construye su propia plantilla en Excel verificando fórmulas. Rol de la IA: tutor conceptual, no calculadora final.
- **Análisis de variaciones comentado.** Objetivo: interpretar desviaciones. El estudiante da cifras reales vs. presupuestadas a la IA y le pide posibles causas de la variación; luego valida cuáles aplican al caso y propone correctivos. Rol de la IA: generadora de hipótesis a filtrar.

## Evaluaciones autenticas

- **Presupuesto maestro de un proyecto real (AIAS Nivel 3 – IA para tareas específicas).** El estudiante elabora el presupuesto de un emprendimiento o pyme local, con defensa de supuestos y declaración de uso de IA. Rúbrica: corrección de cálculos (30%), coherencia entre presupuestos (25%), realismo de supuestos (25%), claridad de la presentación (20%).
- **Defensa oral del flujo de caja (AIAS Nivel 1 – Sin IA en la sesión).** El estudiante explica en vivo su presupuesto de efectivo y responde preguntas sobre cómo lo construyó. Rúbrica: dominio de los números (35%), justificación de supuestos (30%), respuesta a escenarios "qué pasaría si" (25%), claridad (10%).

## Recurso interactivo en HTML

Idea: una calculadora de flujo de caja proyectado a 6 meses con alerta de saldo negativo.

```
Crea un archivo .html autocontenido (HTML/CSS/JS en un solo archivo, sin dependencias externas) que sea una calculadora de presupuesto de efectivo a 6 meses. El usuario ingresa saldo inicial, ventas e ingresos por mes y gastos/salidas por mes; la página calcula el flujo neto y el saldo acumulado mensual, resaltando en rojo los meses con saldo negativo. En español, con una gráfica simple de barras hecha en JS puro, listo para abrir en el navegador.
```

## Notas

- **Verificación:** la IA falla en aritmética y arrastra errores entre celdas; recalcula todo presupuesto manualmente o en Excel antes de darlo por válido.
- **Privacidad:** no subas estados financieros reales con nombres o datos confidenciales de empresas o personas.
- **Contexto Dajabón:** usa proyectos de la zona (comercio fronterizo, agroindustria, servicios) con estacionalidad real para que los supuestos sean defendibles.
