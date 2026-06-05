# Ingeniería de Software I

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 8 · **Código:** INF-241

## Sobre la materia
Cubre el ciclo de vida del software: levantamiento y análisis de requisitos, modelos de proceso (cascada, iterativo, ágil/Scrum), modelado UML (casos de uso, clases, secuencia), diseño y nociones de calidad y estimación. Competencias clave: convertir necesidades de un cliente en requisitos claros, modelar un sistema y comunicar decisiones de diseño en equipo.

## Enfoque IA (taller)
La IA redacta borradores de requisitos, diagramas y planes que el estudiante debe cuestionar contra un cliente real, completar y justificar; el juicio de ingeniería no se automatiza. La integridad se diseña con artefactos ligados a un proyecto propio y defensa del diseño, sin detectores de IA.

## Prompts para el docente
```
Eres profesor de Ingeniería de Software I. Planifica una unidad de 2 sesiones sobre levantamiento de requisitos: técnicas de entrevista, requisitos funcionales y no funcionales, y criterios de calidad de un buen requisito. Incluye una dinámica de rol cliente-analista y un ejercicio de redacción.
```
```
Genera un caso REAL de un sistema para Dajabón (gestión de inventario de un colmado, citas de una clínica, registro de una junta de vecinos o control de una cooperativa). Describe el cliente, su problema y 8 requisitos en lenguaje de negocio que los estudiantes deban formalizar.
```
```
Crea una rúbrica (1-4) para evaluar un documento de requisitos y un diagrama de casos de uso: claridad y verificabilidad de los requisitos, completitud, coherencia del modelo UML, separación funcional/no funcional y trazabilidad. Formato tabla.
```
```
Diferencia el ejercicio "modelar un sistema de biblioteca" en tres niveles: con la lista de actores y casos dada, con pistas, y abierto exigiendo modelar también un requisito no funcional de seguridad. Mantén el mismo objetivo.
```
```
Dame 6 preguntas socráticas para discutir cuándo conviene un proceso ágil frente a uno en cascada y cómo un requisito ambiguo genera defectos costosos más adelante.
```

## Ejercicios y actividades con IA
- **Critica los requisitos de la IA.** Objetivo: evaluar calidad. El docente pide a la IA una lista de requisitos con ambigüedades; el estudiante detecta los vagos o no verificables y los reescribe. Rol de la IA: generar el borrador defectuoso a auditar.
- **Borrador de UML para refinar.** Objetivo: modelar con criterio. El estudiante pide a la IA un primer diagrama de clases de su proyecto, lo corrige según las reglas del negocio y justifica los cambios. Rol de la IA: punto de partida, no versión final.
- **Entrevista simulada.** Objetivo: levantar requisitos. La IA juega un "cliente" con necesidades difusas; el estudiante lo entrevista, extrae requisitos y los formaliza. Rol de la IA: cliente a interrogar.

## Evaluaciones auténticas
- **Proyecto de equipo con defensa del diseño (situada + oral).** Cada equipo levanta requisitos de un cliente real o simulado de Dajabón y entrega documento + UML; defiende decisiones y responde a un cambio de requisito propuesto en vivo. *AIAS Nivel 3 (IA asistida declarada).* Rúbrica: calidad de requisitos, coherencia del modelo, justificación de decisiones, respuesta al cambio.
- **Bitácora de análisis con reflexión (proceso).** Registro de cómo evolucionaron los requisitos, qué aportó la IA y qué corrigió el equipo. *AIAS Nivel 3 (IA asistida declarada).* Rúbrica: trazabilidad de decisiones, pensamiento crítico sobre las salidas de IA, completitud, honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un generador de tarjetas de requisitos que clasifica funcionales vs no funcionales y verifica criterios de calidad.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS, sin librerías) llamado "Taller de Requisitos". El usuario escribe requisitos; el programa permite etiquetarlos como funcional/no funcional, marca con una lista de chequeo si son claros, verificables y atómicos, y muestra un puntaje de calidad. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica los artefactos: la IA puede inventar relaciones UML incoherentes o requisitos no alineados con el cliente real. No subir información sensible de clientes ni trabajos identificables de estudiantes. Adapta a Dajabón con sistemas para comercios, cooperativas y servicios locales; valora más el ajuste al cliente real que la prolijidad de un diagrama genérico.
