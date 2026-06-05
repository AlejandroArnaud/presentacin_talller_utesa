# Laboratorio de Sistemas Operativos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 6 · **Código:** INF-185

## Sobre la materia

Práctica de sistemas operativos sobre Linux: línea de comandos, gestión de procesos (ps, top, kill, prioridades), permisos y sistema de archivos, scripting en Bash, monitoreo de recursos y, según el programa, programación con hilos o procesos (fork, semáforos) en C. Competencias clave: operar y administrar un sistema real, automatizar tareas con scripts y observar el comportamiento del SO en vivo.

## Enfoque IA (taller)

La IA redacta comandos y scripts que el estudiante debe ejecutar en una terminal real, observar, depurar y mejorar; el aprendizaje está en interpretar la salida del sistema y arreglar lo que falla, no en pegar comandos. La integridad se diseña con tareas ejecutadas en vivo sobre la máquina y modificaciones imprevistas, sin recurrir a detectores de IA.

## Prompts para el docente

```
Eres docente de Laboratorio de Sistemas Operativos sobre Linux. Planifica una práctica de 3 horas sobre gestión de procesos y monitoreo (ps, top, kill, nice). Incluye objetivos, comandos demostrativos, 3 ejercicios graduados y errores frecuentes a anticipar.
```

```
Genera 5 ejercicios de scripting en Bash con utilidad real para un laboratorio o negocio local de Dajabón: respaldo de una carpeta, reporte de espacio en disco, conteo de archivos por tipo, limpieza de temporales y monitoreo de un proceso. Da enunciado y el script solución por separado.
```

```
Crea una rúbrica (1-4) para evaluar un script de Bash de un estudiante: cumple el objetivo, manejo de errores y casos límite, legibilidad (nombres, comentarios) y uso idiomático de comandos. Formato tabla.
```

```
Diferencia un ejercicio de "script de respaldo" en tres niveles: con el esqueleto casi completo, con pistas de qué comandos usar, y abierto exigiendo además validar argumentos y registrar un log. Mantén el mismo objetivo.
```

```
Dame 6 preguntas de discusión para que los estudiantes predigan la salida de una secuencia de comandos (permisos, pipes, redirecciones) antes de ejecutarla y expliquen QUÉ hace cada parte.
```

## Ejercicios y actividades con IA

- **Depura el script de la IA.** Objetivo: leer y corregir Bash. El estudiante pide a la IA un script con un fallo (variable sin comillas, ruta incorrecta), lo ejecuta en la terminal, reproduce el error, lo localiza y lo corrige explicando la causa. Rol de la IA: producir el script defectuoso.
- **Interpreta la salida real.** Objetivo: observar el sistema. El estudiante pide a la IA que explique qué muestran `top` o `ps aux`, ejecuta los comandos en su máquina y contrasta la explicación con lo que realmente ve, corrigiendo cualquier afirmación inexacta. Rol de la IA: borrador a verificar contra el sistema.
- **Del objetivo al comando, comparando.** Objetivo: construir antes de copiar. El estudiante escribe su propia secuencia de comandos para una tarea, luego pide a la IA otra versión y justifica cuál es más segura o eficiente. Rol de la IA: alternativa de contraste, no fuente.

## Evaluaciones auténticas

- **Reto en vivo en la terminal (AIAS Nivel 1 – Sin IA durante la prueba).** En el laboratorio, el estudiante resuelve 3 tareas en una terminal real (gestionar un proceso, ajustar permisos, escribir un script corto) y recibe una variación en el momento. Rúbrica: ejecución correcta, manejo de errores, interpretación de la salida del sistema, explicación verbal.
- **Proyecto de automatización con bitácora (AIAS Nivel 3 – IA asistida declarada).** Entrega un script útil para un caso real (respaldo, reporte, monitoreo) más un registro de qué pidió a la IA, qué corrigió y por qué, con una demostración de su ejecución. Rúbrica: funcionalidad, robustez ante errores, calidad del código, honestidad y reflexión sobre el uso de IA.

## Recurso interactivo en HTML

Idea: una terminal Linux simulada con retos guiados, donde el estudiante teclea comandos y recibe una respuesta y retroalimentación sin riesgo de dañar nada.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que simule una terminal Linux básica con un sistema de archivos ficticio en memoria. Debe reconocer ls, cd, pwd, cat, mkdir y rm, y proponer 4 retos guiados (p. ej. "crea una carpeta y un archivo dentro") con verificación y pistas. En español, funciona offline al abrir en el navegador.
```

## Notas

Verifica ejecutando en una terminal real: la IA puede sugerir comandos peligrosos (rm -rf mal usado), opciones inexistentes o sintaxis de otra shell. Nunca ejecutar comandos destructivos sin entenderlos; practicar en una carpeta de pruebas o máquina virtual. No subir datos personales ni rutas con información identificable. Adapta a Dajabón con tareas útiles para laboratorios y negocios locales, y prevé el acceso desigual a Linux: usa máquinas virtuales, una distribución live USB o la terminal simulada del recurso HTML cuando no haya equipos disponibles.
