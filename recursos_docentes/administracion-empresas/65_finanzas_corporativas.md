# Finanzas Corporativas

**Carrera:** Administración de Empresas · **Cuatrimestre:** 10 · **Código:** ADM-319

## Sobre la materia
Aborda las grandes decisiones financieras de la corporación con el objetivo de maximizar su valor: presupuesto de capital, valoración de empresas y activos, riesgo y rendimiento (CAPM), creación de valor para el accionista y políticas de inversión y financiamiento. Competencias clave: valorar proyectos y empresas, relacionar riesgo con rendimiento esperado y fundamentar decisiones que aumenten el valor.

## Enfoque IA (taller)
La IA es un banquero de inversión asistente: arma valoraciones y escenarios de riesgo que el estudiante debe revisar supuesto por supuesto y defender ante un comité. La integridad se diseña con valoraciones aplicadas y sustentación oral; no se usan detectores de IA.

## Prompts para el docente

```
Actúa como profesor de Finanzas Corporativas. Planifica una clase de 90 minutos sobre la relación riesgo-rendimiento y el CAPM aplicada a una empresa dominicana que cotiza o que busca inversión. Incluye objetivos, un gancho con noticias de mercado, un ejercicio guiado de cálculo del rendimiento esperado y un cierre sobre cómo el riesgo afecta el costo de capital.
```

```
Genera 3 casos de decisión corporativa realistas para empresas medianas o grandes con presencia en el norte de RD (expansión de una agroindustria, adquisición de un competidor, emisión de deuda). Para cada uno, da cifras de partida y deja 3 preguntas de valoración o decisión sin la respuesta.
```

```
Crea una rúbrica de 5 criterios para evaluar una valoración de empresa o proyecto: coherencia de los supuestos, corrección del flujo de caja descontado, cálculo del costo de capital, análisis de riesgo y claridad de la recomendación de inversión. Escala 1-4 con descriptores observables.
```

```
Adapta una explicación del CAPM en tres niveles: básico (más riesgo exige más rendimiento, con una analogía), intermedio (la fórmula con beta, tasa libre de riesgo y prima de mercado) y avanzado (supuestos y limitaciones del modelo en mercados poco desarrollados como el dominicano).
```

```
Formula 6 preguntas socráticas para debatir si maximizar el valor para el accionista debe ser el único objetivo de una empresa, obligando al estudiante a sopesar accionistas, empleados y comunidad fronteriza.
```

## Ejercicios y actividades con IA
- **Valoración auditada.** Objetivo: dominar el flujo de caja descontado. El estudiante pide a la IA una valoración preliminar de un proyecto o empresa, luego revisa cada supuesto (crecimiento, tasa de descuento, beta) y lo ajusta a la realidad del mercado dominicano, recalculando para verificar. La IA aporta el borrador; el estudiante lo hace defendible.
- **Riesgo y rendimiento confrontados.** Objetivo: aplicar el CAPM con criterio. El estudiante calcula a mano el rendimiento esperado de una inversión, pide a la IA que lo resuelva con otros parámetros y discute por qué difieren los resultados y qué beta es razonable. La IA es un analista a cuestionar, no la respuesta final.

## Evaluaciones autenticas
- **Valoración de un proyecto o empresa (aplicada/de proceso).** El estudiante valora un proyecto o empresa con flujo de caja descontado, estima el costo de capital, analiza el riesgo y recomienda invertir o no; declara el aporte de la IA. **AIAS: Nivel 3 (IA para asistencia, uso declarado).** Mini-rúbrica: (1) realismo de los supuestos; (2) corrección de la valoración y del costo de capital; (3) análisis de riesgo; (4) transparencia del uso de IA.
- **Defensa ante el comité de inversión (oral).** Sustentación de 7 minutos donde el docente cambia un supuesto clave (tasa, crecimiento) y el estudiante explica el efecto en el valor. **AIAS: Nivel 1 (Sin IA en la defensa).** Mini-rúbrica: dominio del modelo, interpretación del riesgo, manejo de preguntas.

## Recurso interactivo en HTML
Idea: una herramienta que combine CAPM y valoración por flujos descontados y muestre cómo el riesgo cambia el valor de un proyecto.

```
Crea UN archivo .html autocontenido (HTML, CSS y JavaScript en el mismo archivo, sin librerías externas) con una herramienta de finanzas corporativas. Sección 1: calcula el rendimiento esperado con el CAPM a partir de tasa libre de riesgo, beta y prima de mercado. Sección 2: usa ese rendimiento como tasa de descuento para valorar un proyecto con inversión inicial y hasta 5 flujos, mostrando el VAN. Que el VAN se actualice si cambia el beta, e incluye texto explicativo y un botón "Reiniciar". Español, listo para abrir en el navegador.
```

## Notas
Verificar los parámetros que use la IA, especialmente beta, primas de mercado y tasa libre de riesgo: tiende a usar valores de mercados estadounidenses que no aplican a República Dominicana. No subir información financiera confidencial de empresas reales; anonimizar. Discutir explícitamente las limitaciones de aplicar modelos diseñados para mercados desarrollados al contexto dominicano y a las empresas de la zona de Dajabón.
