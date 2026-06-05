# Laboratorio de Programación II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 3 · **Código:** INF-168

## Sobre la materia

Componente práctico que acompaña a Programación II: el estudiante implementa programas más complejos con estructuras de datos (arreglos, listas, registros), funciones, modularización y manejo de archivos, depurando y validando en el computador. Competencias clave: descomponer un problema en funciones, organizar datos en estructuras adecuadas y verificar la correctitud con casos de prueba.

## Enfoque IA (taller)

La IA es un par de programación que sugiere implementaciones y explica fallos, pero el estudiante decide el diseño, integra el código y lo defiende ejecutándolo. La integridad se diseña observando el trabajo en máquina y pidiendo demostraciones en vivo, nunca con detectores de IA.

## Prompts para el docente

```
Diseña una guía de laboratorio de 2 horas sobre "manejo de arreglos y funciones" para nivel intermedio: un problema base (calcular estadísticas de una lista de notas), 3 funciones a implementar por separado, casos de prueba esperados y un reto opcional con archivos.
```

```
Genera 5 problemas de laboratorio que usen estructuras de datos (arreglo de registros de estudiantes, lista de productos, matriz de inventario) con contexto dominicano. Da el enunciado, la entrada de ejemplo y la salida esperada de cada uno.
```

```
Crea una rúbrica (1-4) para evaluar una práctica modular: cada función cumple su tarea, el programa integra las funciones correctamente, pasa los casos de prueba dados, maneja un caso límite y el estudiante explica su diseño. Formato tabla.
```

```
Convierte esta práctica de "ordenar una lista de datos" en tres niveles (con esqueleto y firma de funciones dadas, con pistas del algoritmo, abierta con casos límite y datos grandes) para diferenciar por ritmo.
```

```
Dame 6 preguntas para que el estudiante explique POR QUÉ eligió esa estructura de datos, cómo dividió el problema en funciones y qué caso límite probó antes de pedir ayuda.
```

## Ejercicios y actividades con IA

- **Diseño antes de código.** Objetivo: planificar. El estudiante describe el problema a la IA, le pide pseudocódigo o un plan de funciones, lo critica y luego codifica él mismo verificando que corra. Rol de la IA: proponer un diseño a evaluar.
- **Casos de prueba con IA.** Objetivo: validar estructuras. El estudiante pide a la IA casos de prueba (vacío, un elemento, duplicados, límites) para su programa y comprueba cuáles fallan. Rol de la IA: generar pruebas que el estudiante ejecuta.
- **Refactor por funciones.** Objetivo: modularizar código que ya funciona. El estudiante pide sugerencias para separar en funciones, las aplica una a una y confirma que la salida no cambia. Rol de la IA: proponer mejoras a verificar.

## Evaluaciones auténticas

- **Examen práctico en máquina (AIAS Nivel 1 – Sin IA en la prueba).** El estudiante implementa un programa con estructuras de datos y agrega una función pedida en vivo. Rúbrica: compila y ejecuta, salida correcta, estructura de datos adecuada, manejo de un caso nuevo.
- **Proyecto modular con bitácora (AIAS Nivel 3 – IA asistida declarada).** Entrega un programa dividido en funciones, capturas de ejecución, casos de prueba y notas de qué consultó a la IA y por qué. Rúbrica: funcionamiento, modularización, cobertura de casos, reflexión sobre el uso de IA.

## Recurso interactivo en HTML

Idea: un visualizador de un arreglo donde el usuario aplica operaciones (insertar, buscar, ordenar) y ve los pasos.

```
Crea UN archivo .html autocontenido (sin librerías externas) llamado "Visualizador de Arreglos". Muestra un arreglo de números; el usuario puede insertar, buscar y ordenar paso a paso, viendo qué posición se compara o mueve en cada paso con resaltado de color. En español, funciona offline al abrir en el navegador.
```

## Notas

Verifica siempre ejecutando en el equipo: la IA puede sugerir funciones inexistentes o sintaxis de otra versión del lenguaje. No subir código identificable de estudiantes a las herramientas. En Dajabón la conexión puede ser intermitente: prioriza prácticas que corran offline y herramientas livianas en español.
