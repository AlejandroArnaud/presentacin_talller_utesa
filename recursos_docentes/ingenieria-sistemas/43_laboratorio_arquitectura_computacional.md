# Laboratorio Arquitectura Computacional

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 5 · **Código:** INF-445

## Sobre la materia

Componente práctico de Arquitectura Computacional: simuladores de circuitos lógicos (compuertas, sumadores), simuladores de CPU/ensamblador, prácticas de memoria y caché, y montaje/identificación de componentes de hardware. Competencias clave: construir y probar circuitos digitales, escribir y ejecutar programas en ensamblador básico, y verificar experimentalmente los conceptos teóricos.

## Enfoque IA (taller)

La IA ayuda a entender el simulador, depurar un circuito o un programa en ensamblador y documentar la práctica, pero la construcción y la evidencia de funcionamiento son del estudiante. Integridad por diseño: se evalúan bitácoras de laboratorio, demostraciones en vivo del circuito y defensa del montaje, no reportes copiables; sin detectores de IA.

## Prompts para el docente

```
Planifica una práctica de laboratorio de 2 horas para construir un sumador de un bit (half adder) en un simulador de lógica digital (ej. Logisim). Incluye objetivo, materiales/simulador, pasos numerados, tabla de verdad esperada y criterios de éxito.
```

```
Genera 4 prácticas de laboratorio con casos reales y verificables: construir compuertas básicas, un multiplexor, un sumador de 4 bits y trazar un programa simple en ensamblador. Para cada una indica entradas de prueba y salida esperada para validar.
```

```
Crea una rúbrica (1-4) para evaluar una bitácora de laboratorio de arquitectura: objetivo claro, descripción del montaje, evidencia de funcionamiento (tablas/capturas), análisis de resultados y conclusiones. Formato tabla con descriptores.
```

```
Toma la práctica "sumador de 4 bits" y diferéncialo en tres niveles: con el esquema parcial dado, con pistas sobre el acarreo, y abierto pidiendo extenderlo a un sumador-restador. Mantén el objetivo de aprendizaje.
```

```
Dame 6 preguntas para la defensa oral del laboratorio que obliguen al estudiante a explicar por qué su circuito funciona y qué pasaría si cambiara una entrada o una compuerta, sin adelantar la respuesta.
```

## Ejercicios y actividades con IA

- **Depura el circuito con ayuda de la IA.** Objetivo: razonar la lógica. El estudiante describe a la IA un circuito que no da la salida esperada; la IA sugiere hipótesis y el estudiante las prueba en el simulador hasta corregirlo. Rol de la IA: asistente de depuración, no constructor.
- **Comenta el ensamblador.** Objetivo: comprender instrucciones. El estudiante ejecuta un programa en ensamblador, pide a la IA que explique cada instrucción, verifica esa explicación en el simulador y la documenta con sus palabras. Rol de la IA: borrador explicativo a verificar.

## Evaluaciones auténticas

- **Demostración en vivo del montaje (AIAS Nivel 1: sin IA durante la prueba).** El estudiante construye o modifica un circuito en el simulador frente al docente y explica su funcionamiento, respondiendo a un cambio pedido en el momento. Rúbrica: (1) circuito funcional, (2) capacidad de modificarlo, (3) explicación de la lógica, (4) manejo de errores.
- **Bitácora de laboratorio con evidencia (AIAS Nivel 3: IA asistida declarada).** Entrega de la práctica con capturas, tablas de verdad y análisis, declarando en qué ayudó la IA. Rúbrica: (1) evidencia real de funcionamiento, (2) análisis de resultados, (3) calidad de la documentación, (4) honestidad sobre el uso de IA.

## Recurso interactivo en HTML

Idea: un simulador minimalista de compuertas lógicas con su tabla de verdad en vivo.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS puro, sin librerías) llamado "Compuertas Lógicas en Vivo". El usuario activa o desactiva dos entradas (A y B) con interruptores y la página muestra la salida de AND, OR, XOR, NAND y NOR simultáneamente, además de generar la tabla de verdad completa. En español, funciona offline.
```

## Notas

Verificación: la IA puede sugerir conexiones incorrectas o instrucciones inexistentes del simulador; siempre comprueba en el entorno real (Logisim, simulador de CPU) antes de aceptar una solución. Privacidad: no subir capturas con datos identificables. Contexto Dajabón: usar simuladores gratuitos que corran en los equipos del laboratorio del recinto, sin requerir hardware costoso ni conexión permanente.
