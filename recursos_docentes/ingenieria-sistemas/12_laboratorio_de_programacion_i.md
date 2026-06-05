# Laboratorio de Programación I

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 2 · **Código:** INF-165

## Sobre la materia

Componente práctico que acompaña a Programación I: el estudiante implementa, compila, ejecuta y depura programas en el computador, dominando el entorno de desarrollo y el ciclo prueba-error. Competencias clave: programar de forma autónoma, diagnosticar errores de compilación y ejecución, y validar resultados con casos de prueba.

## Enfoque IA (taller)

La IA es un asistente de laboratorio que sugiere correcciones y explica mensajes de error; el estudiante decide qué aplicar y confirma ejecutando. La integridad se diseña observando el trabajo en máquina y exigiendo demostraciones en vivo, no con detectores de IA.

## Prompts para el docente

```
Diseña una guía de laboratorio de 2 horas sobre "depuración de errores comunes" para principiantes: 4 programas con errores típicos (punto y coma, índice fuera de rango, condición invertida), pasos para diagnosticar y resultado esperado tras la corrección.
```

```
Genera 5 mensajes de error REALES de compilador/intérprete que enfrentan estudiantes nuevos, con su causa probable y cómo guiar al alumno a resolverlos sin darle la respuesta directa.
```

```
Crea una rúbrica (1-4) para evaluar una práctica de laboratorio: el programa compila, produce la salida correcta, pasa casos de prueba dados, el estudiante explica su corrección y entrega evidencia de ejecución. Formato tabla.
```

```
Convierte esta práctica de "validar una entrada del usuario" en tres niveles (con esqueleto, con pistas, abierta con casos límite extra) para diferenciar por ritmo de aprendizaje.
```

```
Dame 6 preguntas para que, durante el laboratorio, el estudiante explique POR QUÉ falló su programa y QUÉ probó antes de pedir ayuda.
```

## Ejercicios y actividades con IA

- **Interpreta el error.** Objetivo: leer mensajes. El estudiante copia un error de su consola a la IA, le pide que lo explique en español sencillo y aplica la corrección verificando que el programa corra. Rol de la IA: traducir el diagnóstico.
- **Casos de prueba con IA.** Objetivo: validar. El estudiante pide a la IA que sugiera casos de prueba (incluidos límites) para su programa y comprueba cuáles fallan. Rol de la IA: generar pruebas, el estudiante las ejecuta.
- **Refactor guiado.** Objetivo: mejorar código que ya funciona. El estudiante pide sugerencias de claridad, las aplica una a una y confirma que la salida no cambió. Rol de la IA: proponer mejoras a verificar.

## Evaluaciones auténticas

- **Examen práctico en máquina (AIAS Nivel 1 – Sin IA en la prueba).** El estudiante implementa y hace correr un programa en el laboratorio, con un cambio pedido en vivo. Rúbrica: compila y ejecuta, salida correcta, manejo de un caso nuevo, explicación del proceso de depuración.
- **Cuaderno de laboratorio con evidencias (AIAS Nivel 3 – IA asistida declarada).** Entrega capturas de ejecución, casos de prueba y notas de qué consultó a la IA y por qué. Rúbrica: evidencia de funcionamiento, cobertura de casos, autonomía depurando, reflexión sobre el uso de IA.

## Recurso interactivo en HTML

Idea: un simulador de "consola de errores" donde el estudiante asocia cada mensaje con su causa y solución.

```
Crea UN archivo .html autocontenido (sin librerías externas) llamado "Diagnóstico de Errores". Muestra 6 mensajes de error de programación; el usuario arrastra o selecciona la causa correcta y la solución, y recibe retroalimentación inmediata con explicación. En español, diseño claro, funciona offline al abrir en el navegador.
```

## Notas

Verifica siempre ejecutando en el equipo: la IA puede sugerir sintaxis de otra versión o lenguaje y "alucinar" funciones. No subir código identificable de estudiantes a las herramientas. Considera que en Dajabón puede haber conexión intermitente: prioriza prácticas que corran offline y herramientas livianas en español.
