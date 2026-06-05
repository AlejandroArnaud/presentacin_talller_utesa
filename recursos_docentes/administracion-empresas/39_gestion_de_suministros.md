# Gestión de Suministros

**Carrera:** Administración de Empresas · **Cuatrimestre:** 6 · **Código:** ADM-680

## Sobre la materia
Cubre la cadena de suministro de extremo a extremo: compras, gestión de inventarios, almacenamiento, logística y relación con proveedores. Competencias clave: calcular niveles óptimos de inventario, evaluar proveedores y diseñar un flujo logístico eficiente y trazable.

## Enfoque IA (taller)
La IA es una asistente de análisis que genera escenarios logísticos y compara proveedores; el estudiante valida los supuestos con datos reales y decide. La integridad se logra anclando los ejercicios a cadenas de suministro concretas y observables de la frontera.

## Prompts para el docente
```
Eres profesor de gestión de suministros. Planifica una clase de 90 minutos sobre el modelo EOQ (cantidad económica de pedido) con un ejemplo aplicado a un colmado de Dajabón que vende arroz. Incluye objetivo, ejercicio guiado paso a paso y preguntas de cierre.
```
```
Genera un caso realista de cadena de suministro: una agroindustria de queso en Dajabón que importa insumos y exporta a Haití. Describe sus proveedores, tiempos de entrega (lead time), riesgos de frontera y dos quiebres de stock recientes con datos verosímiles.
```
```
Crea una rúbrica de 4 criterios para evaluar un análisis de selección de proveedores hecho por estudiantes (criterios de evaluación definidos, ponderación justificada, calidad de datos, recomendación final). Tabla markdown, 4 niveles.
```
```
Adapta una explicación de "punto de reorden y stock de seguridad" a tres niveles: estudiante que no domina promedios, nivel intermedio, y estudiante que ya usa desviación estándar. Un ejemplo numérico distinto por nivel.
```
```
Genera 8 preguntas socráticas para que el estudiante cuestione si reducir inventario al mínimo (just-in-time) es viable en una zona fronteriza con cierres aduaneros impredecibles.
```

## Ejercicios y actividades con IA
- **Matriz de proveedores asistida.** Objetivo: decidir con criterios. El estudiante define los criterios de selección, le pide a la IA que arme la matriz de ponderación y luego ajusta los pesos según la realidad de Dajabón, justificando cada cambio. Rol de la IA: estructurar la matriz, no decidir.
- **Simulación de quiebre de stock.** Objetivo: gestionar el riesgo. La IA plantea un escenario donde un proveedor falla; el estudiante propone un plan de contingencia y la IA lo "rompe" con un imprevisto adicional que el estudiante debe resolver. Rol de la IA: generar el escenario adversario.

## Evaluaciones auténticas
- **Diagnóstico logístico de un negocio local (proceso).** El estudiante mapea la cadena de suministro de una empresa real de Dajabón y detecta tres ineficiencias. AIAS Nivel 3 (IA declarada para análisis y visualización). Rúbrica: precisión del mapeo, identificación de cuellos de botella, viabilidad de mejoras, uso crítico de la IA.
- **Sustentación oral de decisión de compra.** Defensa de una recomendación de proveedor ante preguntas en vivo. AIAS Nivel 2 (IA solo para preparar). Rúbrica: solidez del criterio, manejo de los números, respuesta a objeciones.

## Recurso interactivo en HTML
Calculadora EOQ y de punto de reorden con gráfico del nivel de inventario en el tiempo.
```
Genera UN archivo .html autocontenido (sin librerías externas) que calcule la cantidad económica de pedido (EOQ). Campos: demanda anual, costo de pedido, costo de mantener inventario. Que muestre el EOQ, el número de pedidos al año y un gráfico tipo "diente de sierra" del inventario en canvas. Texto y etiquetas en español.
```

## Notas
Verificar fórmulas (EOQ, stock de seguridad) y normativa aduanera dominicano-haitiana en fuentes oficiales; la IA confunde supuestos. No subir listas reales de proveedores ni precios confidenciales a chatbots. Adaptar al contexto fronterizo de Dajabón: tiempos de entrega largos, cierres de frontera, logística binacional e informalidad.
