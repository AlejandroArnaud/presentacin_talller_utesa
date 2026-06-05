# Metodología Ágil

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 7 · **Código:** INF-710

## Sobre la materia
Introduce los marcos ágiles de desarrollo de software (Scrum, Kanban, XP), sus roles, ceremonias y artefactos: historias de usuario, product backlog, sprints, daily, review y retrospectiva. Desarrolla competencias de planificación iterativa, trabajo en equipo, estimación, priorización de valor y mejora continua, esenciales para la práctica profesional y la pasantía.

## Enfoque IA (taller)
La IA actúa como facilitador que redacta borradores de historias, criterios de aceptación o tableros, pero el estudiante decide la prioridad, valida el valor para el usuario y critica las estimaciones. La integridad se cuida evaluando la dinámica viva del equipo (ceremonias simuladas, decisiones de backlog, retrospectivas), algo que la IA no puede entregar por el alumno.

## Prompts para el docente
```
Eres profesor de Metodología Ágil. Planifica una clase de 90 min sobre escritura de historias de usuario con el formato "Como… quiero… para…" y criterios de aceptación (Gherkin). Incluye objetivos, un caso de una app real, 4 historias de ejemplo y un ejercicio de refinamiento en equipo.
```
```
Genera un product backlog inicial de 12 historias de usuario para un proyecto real y local (app de citas de un consultorio en Dajabón, sistema de inventario de un colmado, plataforma de turnos de la junta municipal). Incluye prioridad sugerida y criterios de aceptación, en formato tabla.
```
```
Crea una rúbrica de 4 criterios para evaluar la ejecución de un sprint por un equipo estudiantil: calidad de las historias y criterios de aceptación, cumplimiento del incremento comprometido, evidencia de las ceremonias (planning/daily/review/retro) y mejora declarada en la retrospectiva. Escala 1-4.
```
```
Diferencia la explicación de "estimación con story points y planning poker" en tres niveles: equipo que nunca estimó, equipo que ya hizo un sprint, y equipo avanzado que quiere medir velocidad. Ajusta ejemplos y profundidad.
```
```
Genera 8 preguntas socráticas para una retrospectiva que lleven al equipo a distinguir entre estar ocupado y entregar valor, y a comprometer acciones concretas de mejora para el próximo sprint.
```

## Ejercicios y actividades con IA
- **Refina el backlog que propuso la IA.** Objetivo: priorizar por valor. El equipo pide a la IA un backlog crudo, descarta o reescribe historias mal planteadas, ajusta prioridades según un usuario real y justifica cada cambio. Rol de la IA: generar el material base a criticar.
- **Simulacro de planning con la IA como "stakeholder".** Objetivo: negociar alcance. La IA hace de cliente que pide de más; el equipo recorta el sprint a lo viable y explica el trade-off. Rol de la IA: representar al cliente, no decidir el plan.
- **Retrospectiva asistida.** Objetivo: mejora continua. El equipo describe su sprint a la IA, recibe posibles causas raíz y selecciona solo las que reconoce como reales, comprometiendo acciones. Rol de la IA: ampliar hipótesis, no dictar conclusiones.

## Evaluaciones auténticas
- **Sprint simulado en equipo con incremento entregable (aplicada + proceso).** Durante 2-3 semanas el equipo planifica, ejecuta ceremonias y entrega un incremento funcional con su tablero. *AIAS Nivel 3 (IA integrada para borradores, con uso declarado).* Rúbrica: calidad de historias, incremento entregado, evidencia de ceremonias, mejora en la retrospectiva.
- **Defensa oral del tablero y las decisiones (oral).** Cada miembro explica por qué se priorizó así y cómo cambiaría el plan ante un nuevo requerimiento en vivo. *AIAS Nivel 2.* Rúbrica: comprensión del marco ágil, justificación de prioridades, rol individual en el equipo, adaptación al cambio.

## Recurso interactivo en HTML
Un tablero Kanban de práctica: el usuario crea historias, las mueve entre "Por hacer / En curso / Hecho" y ve el conteo de cada columna y un límite WIP.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin librerías externas) que sea un tablero Kanban simple con tres columnas (Por hacer, En curso, Hecho). El usuario agrega tarjetas de historia de usuario y las mueve entre columnas; muestra el conteo por columna y avisa si se excede un límite WIP configurable. Datos en memoria, en español, abrible offline.
```

## Notas
Verifica las propuestas de la IA: backlogs y estimaciones pueden sonar profesionales pero ignorar el contexto o el valor real para el usuario. No subas datos de clientes, empresas o estudiantes reales sin consentimiento. Adapta a Dajabón usando proyectos del entorno (comercios fronterizos, junta municipal, consultorios) y considera equipos con acceso desigual a internet: los tableros pueden llevarse también en papel o pizarra y la evidencia documentarse por fotos.
