# Dibujo Técnico

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 5 · **Código:** DIB-520

## Sobre la materia

Fundamentos del dibujo técnico para ingeniería: normalización de líneas y formatos, acotación, proyecciones ortogonales (vistas múltiples), perspectiva isométrica, escalas y croquis. Competencias clave: leer e interpretar planos, comunicar diseños de forma normalizada y visualizar objetos en 2D y 3D, base para diagramas de hardware, racks y layouts de redes.

## Enfoque IA (taller)

La IA explica normas, genera ejercicios de proyección y describe pasos, pero el trazado y la interpretación correcta son del estudiante; la IA no "ve" bien un dibujo a mano. Integridad por diseño: se evalúan láminas hechas en clase, defensas orales del plano y croquis a mano alzada; sin detectores de IA.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre proyección ortogonal (vistas frontal, superior y lateral) para principiantes. Incluye una analogía, un objeto simple de ejemplo (ej. una pieza en L), pasos para obtener las tres vistas y un ejercicio guiado con su solución descrita.
```

```
Genera 5 ejercicios de acotación con piezas mecánicas o de mobiliario reales (un soporte de monitor, un gabinete de servidor, una mesa de laboratorio). Describe cada pieza con medidas y pide al estudiante acotarla según normas, indicando errores comunes a evitar.
```

```
Crea una rúbrica (1-4) para evaluar una lámina de dibujo técnico: uso correcto de tipos de línea, acotación normalizada, exactitud de las proyecciones, escala y limpieza/presentación. Formato tabla con descriptores por nivel.
```

```
Toma el ejercicio "dibujar las tres vistas de un bloque escalonado" y diferéncialo en tres niveles: con la vista frontal ya dada, con pistas sobre líneas ocultas, y abierto con una pieza más compleja. Mantén el mismo objetivo.
```

```
Dame 6 preguntas de discusión para que los estudiantes justifiquen por qué eligieron cierta vista como principal y cómo dedujeron las líneas ocultas, antes de mostrar la solución.
```

## Ejercicios y actividades con IA

- **Describe para dibujar.** Objetivo: traducir lenguaje a plano. La IA describe una pieza en palabras (sin imagen); el estudiante la dibuja en sus tres vistas y luego pide a la IA que verifique su razonamiento textual. Rol de la IA: generar la descripción y discutir el procedimiento.
- **Cazador de errores de norma.** Objetivo: aplicar normas. El docente pide a la IA un listado de acotaciones con errores (cotas redundantes, líneas mal usadas); el estudiante los identifica y corrige sobre papel. Rol de la IA: producir el caso con errores.

## Evaluaciones auténticas

- **Lámina en clase con defensa oral (AIAS Nivel 1: sin IA durante la prueba).** El estudiante dibuja a mano las vistas de una pieza dada y explica sus decisiones al docente. Rúbrica: (1) exactitud de proyecciones, (2) acotación normalizada, (3) tipos de línea, (4) claridad de la explicación.
- **Croquis de campo de un objeto real (AIAS Nivel 2: IA para idear/organizar).** El estudiante mide y croquiza un objeto de su entorno (un equipo, un mueble) y elabora el plano; la IA solo ayuda a planear pasos, no a dibujar. Rúbrica: (1) fidelidad a las medidas, (2) normalización, (3) escala adecuada, (4) presentación.

## Recurso interactivo en HTML

Idea: un cuestionario visual donde se muestra una pieza isométrica y el estudiante elige cuál es su vista frontal correcta.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS puro, sin librerías) llamado "Adivina la Vista". Muestra 5 piezas dibujadas con SVG simple en isométrico; para cada una ofrece 3 opciones de vista frontal y marca si la elección es correcta, con explicación breve. En español, funciona offline.
```

## Notas

Verificación: la IA puede confundir vistas o inventar normas; contrasta siempre con el texto y las normas del curso. La IA no interpreta con fiabilidad fotos de dibujos a mano, así que la evaluación del trazo es presencial. Privacidad: no subir trabajos identificables. Contexto Dajabón: usar objetos cercanos (equipos del laboratorio, mobiliario del recinto) como modelos para croquizar.
