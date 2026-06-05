# Sistemas Operativos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 6 · **Código:** INF-184

## Sobre la materia

Teoría de los sistemas operativos: procesos e hilos, planificación de CPU, sincronización y exclusión mutua, interbloqueos, gestión de memoria (paginación, segmentación, memoria virtual) y sistemas de archivos. Competencias clave: comprender cómo el SO administra recursos, aplicar y comparar algoritmos de planificación y memoria, y razonar sobre concurrencia y sus problemas.

## Enfoque IA (taller)

La IA explica conceptos y resuelve ejercicios de planificación o memoria que el estudiante debe verificar a mano, trazar y reinterpretar; el reto está en validar cada cálculo y entender el porqué, no en obtener la respuesta. La integridad se diseña evaluando el razonamiento (trazado paso a paso, explicación oral, comparación de algoritmos), no la entrega de un resultado que la IA pudo producir.

## Prompts para el docente

```
Eres docente de Sistemas Operativos. Planifica una clase de 2 horas sobre planificación de CPU (FCFS, SJF, Round Robin). Incluye objetivos, una analogía cotidiana (fila en un banco), un ejemplo resuelto con diagrama de Gantt y 3 ejercicios graduados con solución aparte.
```

```
Genera 5 ejercicios de planificación y sincronización con datos concretos (ráfagas, llegadas, quantum) y un problema clásico de concurrencia (productor-consumidor, lectores-escritores) contextualizado como un sistema real. Da enunciado y solución detallada por separado.
```

```
Crea una rúbrica (1-4) para evaluar la solución de un problema de planificación: corrección del diagrama de Gantt, cálculo de tiempos de espera y retorno, justificación del algoritmo elegido y comparación con una alternativa. Formato tabla.
```

```
Diferencia un ejercicio de "planificación Round Robin" en tres niveles: con el diagrama de Gantt iniciado, con solo los datos y el quantum, y abierto exigiendo comparar el rendimiento contra SJF y argumentar cuál conviene. Mantén el mismo objetivo.
```

```
Dame 6 preguntas socráticas para que los estudiantes razonen por qué un interbloqueo ocurre, qué condiciones de Coffman deben darse a la vez y cómo prevenirlo, llevándolos a pensar en compromisos de diseño del SO.
```

## Ejercicios y actividades con IA

- **Verifica el diagrama de la IA.** Objetivo: validar cálculos. El estudiante pide a la IA la solución de un problema de planificación, recalcula a mano los tiempos de espera y retorno, detecta cualquier error (a veces inducido) y corrige el diagrama de Gantt. Rol de la IA: producir la solución a auditar.
- **Concurrencia explicada con tus palabras.** Objetivo: comprender la sincronización. El estudiante pide a la IA una solución al problema productor-consumidor con semáforos, la explica paso a paso, predice qué pasaría si se quita un semáforo y lo razona. Rol de la IA: borrador a interpretar, no a copiar.
- **Compara algoritmos.** Objetivo: razonar compromisos. El estudiante pide a la IA una comparación entre dos algoritmos de reemplazo de páginas (FIFO vs LRU), la verifica con una cadena de referencias concreta contando fallos de página y juzga cuál conviene. Rol de la IA: insumo de contraste a comprobar.

## Evaluaciones auténticas

- **Resolución a mano con comparación (AIAS Nivel 1 – Sin IA durante la prueba).** El estudiante resuelve un problema de planificación o de memoria virtual en papel, muestra el diagrama y los cálculos, y compara el resultado con otro algoritmo. Rúbrica: corrección del trazado, exactitud de los cálculos, justificación del método, comparación válida.
- **Defensa oral de un problema de concurrencia (AIAS Nivel 2 – IA solo para estudio previo, declarado).** El estudiante explica una solución de sincronización y responde en vivo a una variación (otro número de procesos, quitar un recurso). Rúbrica: comprensión del mecanismo, capacidad de modificar, identificación de riesgos (interbloqueo, inanición), claridad.

## Recurso interactivo en HTML

Idea: un simulador de planificación de CPU que genera el diagrama de Gantt y los tiempos a partir de procesos que el usuario define.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que simule planificación de CPU: el usuario ingresa procesos (tiempo de llegada y ráfaga) y elige el algoritmo (FCFS, SJF o Round Robin con quantum); el programa dibuja el diagrama de Gantt y calcula tiempo de espera y de retorno promedio. En español, funciona offline al abrir en el navegador.
```

## Notas

Verifica los cálculos: la IA puede equivocarse en los tiempos, ignorar el tiempo de llegada o aplicar mal el quantum, lo que la vuelve útil como ejercicio de detección de errores. No subas datos personales ni trabajos identificables de estudiantes. Adapta a Dajabón con analogías del entorno (filas en negocios, turnos, recursos compartidos en un centro de cómputo) y considera el acceso desigual a equipos: la mayoría de estos ejercicios se resuelven en papel sin necesidad de máquinas.
