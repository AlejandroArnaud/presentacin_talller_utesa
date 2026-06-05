# Taller de Electricidad Básica

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 4 · **Código:** IEL-105

## Sobre la materia
Componente práctico de Electricidad Básica: montaje de circuitos en protoboard, uso del multímetro (voltaje, corriente, resistencia, continuidad), comprobación experimental de la ley de Ohm y de circuitos serie/paralelo, y normas de seguridad en el laboratorio. Competencias clave: medir correctamente, contrastar teoría con medición real y documentar resultados.

## Enfoque IA (taller)
La IA guía procedimientos y ayuda a interpretar mediciones, pero no toca el protoboard ni mide: el valor está en la destreza manual y en explicar por qué la medición difiere de lo calculado. La integridad se diseña con desempeño observado en el laboratorio y bitácora con fotos, no con detección.

## Prompts para el docente

```
Planifica una práctica de laboratorio de 2 horas sobre "comprobación de la ley de Ohm
con multímetro y protoboard" para estudiantes principiantes. Incluye materiales,
pasos de montaje, tabla de datos a llenar y preguntas de análisis al final.
```

```
Genera 4 guías de práctica REALES con materiales accesibles en Dajabón (resistencias,
LED, batería de 9V, protoboard): medir resistencias por código de colores, armar un
circuito serie, uno paralelo y comparar voltajes medidos vs calculados. Da objetivo y
pasos numerados.
```

```
Crea una rúbrica de 4 criterios para evaluar el desempeño en una práctica de
laboratorio: montaje correcto del circuito, uso adecuado del multímetro, registro de
datos en tabla y seguridad. En español, escala 1 a 4, formato tabla.
```

```
Toma la práctica "medición de voltaje en serie" y propón tres niveles: básico (medir
con circuito ya armado), intermedio (armarlo desde el esquema) y avanzado (diagnosticar
por qué una medición no coincide con lo calculado). Mantén el objetivo.
```

```
Dame 8 preguntas de discusión para que el estudiante explique POR QUÉ el valor medido
de voltaje difiere del teórico (tolerancia de la resistencia, resistencia interna de
la batería, error del instrumento) y cómo lo comprobaría.
```

## Ejercicios y actividades con IA
- **Interpreta tu medición.** Objetivo: análisis experimental. El estudiante mide un circuito, anota los valores y pide a la IA posibles causas de la diferencia con la teoría; luego comprueba cuáles aplican a su montaje real. Rol de la IA: lista de hipótesis a verificar en el banco.
- **Guía generada, práctica validada.** Objetivo: lectura crítica de procedimientos. El estudiante pide a la IA los pasos para una medición, los sigue y corrige en su bitácora cualquier paso impreciso o inseguro que detecte al ejecutarlo. Rol de la IA: borrador de procedimiento a depurar.
- **Diagnóstico de fallas.** Objetivo: resolución de problemas. Ante un circuito que no enciende, el estudiante pide a la IA una lista de chequeo y la aplica con el multímetro hasta hallar la causa real (cable suelto, polaridad, LED quemado). Rol de la IA: checklist a contrastar con la realidad.

## Evaluaciones auténticas
- **Práctica observada con multímetro (AIAS Nivel 1 — sin IA durante la ejecución).** El estudiante arma y mide un circuito frente al docente y explica cada lectura. Mini-rúbrica: (1) montaje correcto, (2) uso del multímetro, (3) registro y unidades, (4) seguridad y orden.
- **Bitácora de laboratorio con análisis (AIAS Nivel 2 — IA solo para apoyo de redacción/análisis, declarado).** Entrega tablas de datos, fotos del montaje y conclusiones sobre teoría vs medición. Mini-rúbrica: (1) datos completos y consistentes, (2) comparación teoría-medición, (3) explicación de discrepancias, (4) claridad y honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un lector de código de colores de resistencias para preparar y verificar las prácticas.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado
"Código de Colores". El usuario selecciona las 4 bandas de color de una resistencia
mediante menús desplegables y la app muestra el valor en ohmios y la tolerancia, con
una resistencia dibujada en pantalla. Interfaz en español, funciona offline.
```

## Notas
La IA puede dar procedimientos genéricos o inseguros: prioriza la observación directa y la seguridad (no energizar circuitos mal montados, cuidado con cortocircuitos). No se necesitan datos de estudiantes. Adapta materiales y ejemplos a lo disponible en Dajabón (componentes de ferretería/electrónica local, baterías comunes) para que la práctica sea realizable con recursos reales del recinto.
