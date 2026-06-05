# Taller de Circuitos Eléctricos I (electiva optativa)

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** IEL-205

## Sobre la materia
Componente práctico de Circuitos Eléctricos I: montaje de circuitos DC en protoboard, uso del multímetro (medición de voltaje, corriente y resistencia), verificación experimental de la Ley de Ohm y las leyes de Kirchhoff, y contraste entre valores teóricos y medidos. Competencias clave: montar y medir circuitos con seguridad, interpretar mediciones y explicar las diferencias entre teoría y práctica.

## Enfoque IA (taller)
La IA guía procedimientos y ayuda a interpretar mediciones, pero no toca el protoboard ni mide: el aprendizaje real ocurre en la mesa de trabajo y en explicar por qué lo medido difiere de lo calculado. La integridad se diseña con desempeño práctico observado y defensa del montaje, sin detectores.

## Prompts para el docente

```
Diseña una práctica de laboratorio de 2 horas para verificar la Ley de Ohm con protoboard y multímetro, dirigida a estudiantes de Ingeniería en Sistemas. Incluye objetivos, materiales, pasos de montaje seguro, tabla de datos a llenar (V, I, R) y preguntas de análisis para el reporte.
```

```
Genera 4 escenarios de laboratorio donde la medición NO coincide con la teoría (resistencia con tolerancia, mala conexión en el protoboard, batería descargada, instrumento mal configurado). Para cada uno: qué observaría el estudiante y a qué causa debe atribuirlo.
```

```
Crea una rúbrica (1-4) para evaluar el desempeño en el taller: montaje correcto y seguro del circuito, uso adecuado del multímetro, registro ordenado de datos, análisis de la diferencia teoría-práctica y trabajo en equipo. Formato tabla, en español.
```

```
Diferencia la práctica "medir un circuito en serie" en tres niveles: básico (montar y medir un circuito dado), intermedio (medir y comparar con el cálculo teórico) y avanzado (diagnosticar por qué difieren y proponer corrección). Mantén el objetivo de verificar las leyes experimentalmente.
```

```
Dame 6 preguntas socráticas para que el estudiante explique por qué su medición difiere del valor teórico, cómo verifica que conectó bien el multímetro (serie para corriente, paralelo para voltaje) y qué haría si la lectura es cero o absurda.
```

## Ejercicios y actividades con IA
- **Diagnóstico de la medición rara.** Objetivo: interpretar datos reales. Tras medir, el estudiante describe a la IA una lectura inesperada y pide hipótesis de causa, luego las verifica en la mesa. Rol de la IA: generadora de hipótesis a comprobar experimentalmente.
- **Guía de montaje contrastada.** Objetivo: montar con criterio. El estudiante pide a la IA los pasos para armar un circuito, los sigue y anota dónde la guía falló o fue ambigua frente al protoboard real. Rol de la IA: borrador de procedimiento a validar en la práctica.
- **Reporte teoría vs práctica.** Objetivo: explicar diferencias. El estudiante calcula el valor teórico, lo compara con su medición y pide a la IA ayuda para redactar el análisis, verificando que la explicación física sea correcta. Rol de la IA: apoyo de redacción a verificar.

## Evaluaciones auténticas
- **Examen práctico de montaje y medición (AIAS Nivel 1 — sin IA).** El estudiante monta un circuito, mide V, I y R y explica sus lecturas en vivo ante el docente. Mini-rúbrica: (1) montaje correcto y seguro, (2) uso correcto del multímetro, (3) exactitud de las mediciones, (4) explicación de los resultados.
- **Reporte de laboratorio con análisis de error (AIAS Nivel 2 — IA solo para explorar).** Documento con datos medidos, comparación teoría-práctica y discusión de las causas de la diferencia, más nota de qué consultó a la IA. Mini-rúbrica: (1) registro ordenado de datos, (2) comparación teoría-práctica, (3) análisis de las causas de error, (4) reflexión sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un simulador de multímetro que enseña a conectarlo correctamente antes de la práctica real.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado "Multímetro Virtual". Muestra un circuito simple y un multímetro; el usuario elige el modo (voltaje, corriente, resistencia) y dónde conectar las puntas, y la app indica si la conexión es correcta (paralelo para voltaje, serie para corriente) y qué lectura mostraría, con retroalimentación. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica con la medición real: la IA puede sugerir procedimientos genéricos que no consideran el instrumento o los componentes disponibles; la mesa de trabajo manda. Recuerda la seguridad eléctrica básica y el cuidado de los instrumentos por encima de cualquier instrucción de la IA. Adapta la práctica a los recursos del laboratorio del recinto de Dajabón (componentes disponibles, número de multímetros) y a su realidad eléctrica para que el taller sea factible y pertinente.
