# Ofimática

**Carrera:** Licenciatura en Educación (mención Básica / Primaria) · **Cuatrimestre:** 4 · **Código:** INF-103

## Sobre la materia
Desarrolla competencias en herramientas ofimáticas (procesador de textos, hoja de cálculo, presentaciones y servicios en la nube) aplicadas a la labor docente: documentos didácticos, registros de calificaciones, gráficos y materiales de clase. Competencias clave: producir documentos profesionales, automatizar cálculos y comunicar información con claridad.

## Enfoque IA (taller)
La IA sugiere fórmulas, estructuras de documento y mejoras de diseño; el estudiante las implementa, prueba y verifica que funcionen. La integridad se logra evaluando archivos producidos en vivo y la explicación del procedimiento, no con detectores de IA.

## Prompts para el docente

```
Eres instructor de ofimática para docentes. Dame el paso a paso para crear en una hoja de cálculo un registro de calificaciones del Nivel Primario con promedio automático, condición (aprobado/reprobado con SI) y formato condicional por color.
```

```
Genera 4 escenarios reales de la labor docente que requieran ofimática (acta de notas, circular a padres, presentación de una clase, gráfico de asistencia) con los pasos para resolver cada uno.
```

```
Crea una rúbrica (1-4) para evaluar un documento ofimático docente, con criterios: corrección funcional (fórmulas/estilos), diseño y legibilidad, uso de funciones avanzadas y adecuación al propósito.
```

```
Diferencia tres niveles de un ejercicio de hoja de cálculo: básico (suma y promedio), intermedio (SI y formato condicional) y avanzado (BUSCARV y gráfico dinámico).
```

```
Plantea 5 preguntas de discusión sobre buenas prácticas y riesgos al usar la nube para guardar datos de calificaciones de menores.
```

## Ejercicios y actividades con IA
- **Fórmula explicada.** Objetivo: entender, no copiar. El estudiante pide a la IA una fórmula para un cálculo de notas, la implementa y luego explica con sus palabras qué hace cada parte. Rol de la IA: proponer la fórmula a comprender.
- **Plantilla mejorada.** Objetivo: criterio de diseño. La IA sugiere una estructura de circular o presentación; el estudiante la aplica y justifica qué cambios de legibilidad hizo. Rol de la IA: borrador de plantilla.

## Evaluaciones auténticas
- **Reto ofimático cronometrado (en máquina).** Resolver una tarea real (registro de notas con fórmulas + un gráfico) en clase y explicar el procedimiento. *AIAS: Nivel 1 (Sin IA durante el reto).* Mini-rúbrica: fórmulas correctas · diseño/legibilidad · gráfico adecuado · explicación.
- **Kit docente digital (proyecto).** Entregar un paquete real (acta, circular y presentación de una clase) con bitácora de cómo usó la IA. *AIAS: Nivel 4 (IA integrada y declarada).* Mini-rúbrica: funcionalidad · profesionalismo · pertinencia didáctica · documentación del proceso.

## Recurso interactivo en HTML
Una calculadora de calificaciones que el docente usa y que enseña las fórmulas detrás.

```
Crea UN archivo .html autocontenido (HTML+CSS+JS, sin librerías externas) llamado calculadora_notas.html: una tabla editable donde el docente ingresa notas de varias evaluaciones con sus pesos, calcula el promedio ponderado, muestra "Aprobado/Reprobado" según un umbral y, al pasar el cursor por cada resultado, explica la fórmula usada. Permite agregar/quitar estudiantes y exportar a CSV. En español.
```

## Notas
La IA puede dar fórmulas con sintaxis de otra suite (Excel vs Google Sheets vs LibreOffice): verifica que funcione en la herramienta real del aula. Trata los datos de calificaciones de menores como sensibles: usa nombres ficticios en clase y cuida los permisos de los archivos en la nube. Considera la conectividad variable en Dajabón: ofrece alternativas offline (LibreOffice) además de la nube.
