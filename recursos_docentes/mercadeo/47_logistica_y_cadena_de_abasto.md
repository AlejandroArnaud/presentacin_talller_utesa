# Logística y Cadena de Abasto

**Carrera:** Mercadeo · **Cuatrimestre:** 7 · **Código:** MER-810

## Sobre la materia
Estudia el flujo de productos desde el proveedor hasta el cliente: gestión de inventarios, almacenamiento, transporte, distribución, compras, indicadores logísticos (rotación, fill rate, lead time, costo de almacenamiento) y la cadena de suministro como ventaja competitiva. Competencias clave: diseñar un canal de distribución eficiente, gestionar inventarios con criterio de costo-servicio y diagnosticar cuellos de botella en la cadena.

## Enfoque IA (taller)
La IA modela escenarios logísticos, calcula indicadores y propone mejoras de distribución; el estudiante valida los supuestos, recalcula los costos y decide qué aplica a la realidad fronteriza. La integridad se logra evaluando diagnósticos sobre cadenas reales y la justificación de cada decisión, sin detectores de IA.

## Prompts para el docente

```
Eres docente de Logística y Cadena de Abasto, 7mo cuatrimestre de Mercadeo, UTESA Dajabón. Planifica una clase de 2 horas sobre gestión de inventarios (rotación, stock de seguridad, punto de reorden). Incluye objetivo, el cálculo con un producto perecedero local, una actividad de diagnóstico y preguntas de cierre. Indica tiempos.
```

```
Genera 4 casos reales de cadena de abasto en Dajabón (exportación de plátano a Haití, abastecimiento de una farmacia, distribución de bebidas a colmados rurales, importación de mercancía por la frontera). Para cada uno describe el flujo, un cuello de botella y los actores. Sin la solución, solo el caso.
```

```
Crea una rúbrica analítica (escala 1-4) para evaluar un diagnóstico logístico estudiantil con criterios: comprensión del flujo de la cadena, identificación de cuellos de botella, corrección de los indicadores calculados y viabilidad de las mejoras propuestas.
```

```
Reescribe esta actividad en tres niveles: básico (calcular rotación de inventario de un producto), intermedio (definir punto de reorden y stock de seguridad), avanzado (rediseñar un canal de distribución optimizando costo y nivel de servicio). [pega tu actividad]
```

```
Formula 8 preguntas socráticas para debatir el dilema costo vs. nivel de servicio en una cadena fronteriza: ¿más inventario o más quiebres de stock?, ¿centralizar o acercar al cliente?, ¿cómo afecta la informalidad aduanal el lead time? Que obliguen a tomar postura con datos.
```

## Ejercicios y actividades con IA
- **Auditoría de indicadores logísticos.** Objetivo: dominar las métricas. El estudiante pide a la IA que calcule rotación, fill rate y punto de reorden de un caso; luego rehace los números y detecta dónde la IA asumió o se equivocó. Rol de la IA: producir cálculos a auditar.
- **Mapa de la cadena, verificado.** Objetivo: visualizar el flujo. La IA propone el mapa de una cadena de abasto con sus eslabones; el estudiante valida cuáles actores y tiempos son reales para su caso y corrige lo que no aplica al contexto fronterizo. Rol de la IA: borrador a verificar.
- **Diagnóstico de cuello de botella.** Objetivo: pensamiento crítico. La IA propone soluciones a un problema de distribución; el estudiante evalúa cuáles son viables con los recursos locales y descarta las que ignoran la realidad de Dajabón. Rol de la IA: borrador de soluciones a filtrar.

## Evaluaciones auténticas
- **Diagnóstico logístico de una cadena real de Dajabón (aplicada + de proceso).** El estudiante mapea la cadena de un negocio real, calcula indicadores, identifica cuellos de botella y propone mejoras con bitácora de prompts. **AIAS Nivel 2 (IA para asistir/calcular, con verificación):** declara qué generó. Mini-rúbrica: (1) mapa correcto de la cadena, (2) indicadores bien calculados, (3) diagnóstico del cuello de botella, (4) viabilidad de las mejoras.
- **Defensa oral del diagnóstico (oral).** Justifica los indicadores y qué pasaría si cambia la demanda o el lead time. **AIAS Nivel 1 (sin IA).** Mini-rúbrica: (1) domina sus números, (2) explica el flujo, (3) responde escenarios sorpresa, (4) claridad.

## Recurso interactivo en HTML
Idea: calculadora de inventario que muestra punto de reorden y alerta de quiebre de stock.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS sin librerías externas) titulado "Gestor de Inventario y Punto de Reorden". El usuario ingresa demanda diaria, lead time y stock de seguridad; la app calcula el punto de reorden y la rotación, y simula con un deslizador de inventario actual cuándo alertar para reordenar y cuándo hay riesgo de quiebre. Ejemplo de un producto perecedero dominicano, en español, funciona sin internet.
```

## Notas
Verifica los datos, "tiempos de tránsito" y costos que invente la IA: deben basarse en la operación real, no en supuestos; recalcula siempre. No subas a la IA datos sensibles de proveedores, precios de compra o rutas de un negocio sin permiso. Adapta los casos al contexto de Dajabón: logística fronteriza, trámites aduanales con Haití, perecibilidad del plátano, caminos rurales y doble moneda RD$/peso, factores que la IA suele desconocer.
