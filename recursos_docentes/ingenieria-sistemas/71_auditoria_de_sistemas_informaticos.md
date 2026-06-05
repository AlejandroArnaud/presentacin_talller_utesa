# Auditoría de Sistemas Informáticos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 8 · **Código:** INF-810

## Sobre la materia
Aborda la evaluación de controles de TI: marcos de referencia (COBIT, ISO 27001), auditoría de seguridad, controles de acceso, respaldos, continuidad, evidencia de auditoría, hallazgos y elaboración de informes con recomendaciones. Competencias clave: planificar una auditoría, recolectar evidencia, valorar riesgos y comunicar hallazgos a la gerencia con criterio profesional.

## Enfoque IA (taller)
La IA ayuda a redactar checklists, papeles de trabajo y borradores de informe que el estudiante debe ajustar a la organización auditada, sustentar con evidencia y defender; el juicio sobre riesgos no se delega. La integridad se diseña con auditorías sobre casos concretos y defensa de hallazgos, sin detectores de IA.

## Prompts para el docente
```
Eres profesor de Auditoría de Sistemas Informáticos. Planifica una unidad de 2 sesiones sobre controles de acceso y gestión de respaldos: conceptos, riesgos típicos, pruebas de auditoría y cómo documentar evidencia. Incluye un ejercicio de revisión de una política real.
```
```
Genera un caso REAL de auditoría para una organización de Dajabón (cooperativa de ahorro, clínica, alcaldía o comercio fronterizo): describe su infraestructura, 6 debilidades de control plausibles y la evidencia disponible, para que los estudiantes identifiquen hallazgos y riesgos.
```
```
Crea una rúbrica (1-4) para evaluar un informe de auditoría estudiantil: pertinencia de los hallazgos, evidencia que los sustenta, valoración del riesgo, claridad de las recomendaciones y alineación con un marco (COBIT/ISO 27001). Formato tabla.
```
```
Diferencia el ejercicio "auditar la política de contraseñas" en tres niveles: con la política dada y debilidades evidentes, con pistas, y abierto exigiendo mapear cada hallazgo a un control de ISO 27001. Mantén el mismo objetivo.
```
```
Dame 6 preguntas socráticas para discutir por qué un control puede existir en papel pero fallar en la práctica, y cómo priorizar hallazgos según riesgo e impacto al negocio.
```

## Ejercicios y actividades con IA
- **Verifica el hallazgo de la IA.** Objetivo: sustentar con evidencia. El docente pide a la IA un informe con hallazgos sin respaldo; el estudiante distingue los sustentables de los no sustentables y exige la evidencia. Rol de la IA: generar el borrador débil a auditar.
- **Checklist a la medida.** Objetivo: planificar. El estudiante pide a la IA un checklist genérico de seguridad y lo adapta a la organización del caso, eliminando lo que no aplica y añadiendo controles propios. Rol de la IA: plantilla a refinar.
- **Redacta y endurece el informe.** Objetivo: comunicar. El estudiante hace un borrador de recomendación con la IA y luego lo reescribe en lenguaje gerencial, ligando cada recomendación a un riesgo concreto. Rol de la IA: borrador a mejorar.

## Evaluaciones auténticas
- **Auditoría aplicada con defensa de hallazgos (situada + oral).** El estudiante audita una organización (real o caso) y presenta hallazgos; el docente cuestiona la evidencia y plantea un escenario nuevo en vivo. *AIAS Nivel 2 (IA solo para estudio previo, declarado).* Rúbrica: validez del hallazgo, fuerza de la evidencia, valoración del riesgo, defensa ante el cuestionamiento.
- **Informe de auditoría con papeles de trabajo (proceso + aplicada).** Informe completo más bitácora de qué aportó la IA y cómo se verificó cada punto. *AIAS Nivel 3 (IA asistida declarada).* Rúbrica: alineación al marco, trazabilidad evidencia-hallazgo, calidad de recomendaciones, honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Idea: una matriz de riesgo interactiva que clasifica hallazgos por probabilidad e impacto.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS, sin librerías) llamado "Matriz de Riesgo de Auditoría". El usuario ingresa hallazgos y asigna probabilidad e impacto (bajo/medio/alto); el programa los ubica en una matriz coloreada 3x3 y genera una lista priorizada de recomendaciones. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica todo dato técnico y normativo: la IA puede citar cláusulas inexistentes de ISO/COBIT o inventar controles. No subir información real de seguridad, credenciales ni datos de organizaciones o estudiantes. Adapta a Dajabón con casos de cooperativas, clínicas, alcaldía y comercios fronterizos; enfatiza que un hallazgo sin evidencia verificable no es válido.
