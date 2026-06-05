# Ingeniería de Software II

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** INF-450

## Sobre la materia

Avanza en el diseño y construcción de software de calidad: patrones de diseño, arquitectura de software, principios SOLID, refactorización, pruebas (unitarias, integración), control de versiones y aseguramiento de calidad. Competencias clave: diseñar arquitecturas mantenibles, aplicar patrones con criterio y evaluar la calidad de un sistema mediante pruebas.

## Enfoque IA (taller)

La IA genera diseños, código y pruebas que el estudiante debe evaluar críticamente: ¿es el patrón adecuado?, ¿las pruebas cubren los casos importantes? La integridad se diseña con defensa de decisiones de arquitectura y modificaciones en vivo, no con detección de IA.

## Prompts para el docente

```
Eres profesor de Ingeniería de Software II. Planifica una clase de 2 horas sobre los principios SOLID. Incluye objetivos, un ejemplo de código que VIOLA cada principio y su versión corregida, y 3 ejercicios de "detecta la violación".
```
```
Genera 4 casos de diseño con contexto dominicano: módulo de facturación con ITBIS, sistema de reservas para un consultorio en Dajabón, app de pedidos de un colmado, y registro de notas escolares. Para cada uno pide qué patrón de diseño encaja y por qué, con la solución aparte.
```
```
Crea una rúbrica (1-4) para evaluar el diseño de un módulo: idoneidad del patrón/arquitectura elegida, cumplimiento de SOLID, calidad y cobertura de las pruebas, y claridad del diagrama UML y la justificación.
```
```
Diferencia un ejercicio de "refactorizar una clase con código duplicado" en tres niveles: con el smell señalado, con pistas del patrón a aplicar, y abierto exigiendo pruebas antes y después. Mantén el objetivo.
```
```
Dame 6 preguntas socráticas para discutir cuándo aplicar un patrón de diseño es sobre-ingeniería, llevando al estudiante a razonar sobre simplicidad, mantenibilidad y costo del cambio.
```

## Ejercicios y actividades con IA

- **Critica el diseño de la IA.** Objetivo: evaluar arquitectura. El estudiante pide a la IA un diseño para un módulo, identifica violaciones de SOLID o un patrón mal aplicado y propone una mejora justificada. Rol de la IA: borrador de diseño a auditar.
- **Pruebas primero, IA después.** Objetivo: pensar en calidad. El estudiante escribe casos de prueba a mano, luego pide a la IA más casos y discute cuáles faltaban y por qué. Rol de la IA: complemento de cobertura.
- **Refactor asistido y verificado.** Objetivo: mejorar sin romper. El estudiante refactoriza código con ayuda de la IA, ejecuta las pruebas antes y después y explica qué smell eliminó. Rol de la IA: asistente del refactor.

## Evaluaciones auténticas

- **Proyecto de diseño con repositorio y bitácora (proceso, AIAS Nivel 3 – IA asistida declarada).** El estudiante diseña e implementa un módulo con patrones, pruebas y control de versiones, entregando historial de commits + registro de uso de IA. Rúbrica: calidad del diseño, cobertura de pruebas, uso correcto de Git, honestidad sobre el uso de IA.
- **Revisión de código oral (oral, AIAS Nivel 2 – IA solo para estudio previo).** El estudiante explica y modifica en vivo su diseño ante un nuevo requisito (agregar un tipo, cambiar una regla). Rúbrica: dominio del diseño, capacidad de extender, justificación de decisiones, claridad.

## Recurso interactivo en HTML

Idea: una guía visual de patrones de diseño donde el usuario elige un problema y ve el patrón recomendado con su diagrama.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que sea un explorador de patrones de diseño. El usuario elige un problema común (crear objetos sin acoplar, notificar cambios a varios objetos, intercambiar algoritmos) y la página muestra el patrón sugerido (Factory, Observer, Strategy), un diagrama simple y un mini-ejemplo. En español, abrible offline en el navegador.
```

## Notas

Verifica ejecutando y leyendo: la IA puede aplicar un patrón innecesario o escribir pruebas que no fallan nunca. No subas código propietario ni datos reales de sistemas en producción. Adapta los casos a Dajabón (facturación con ITBIS, comercios, salud, educación) y fomenta soluciones simples y mantenibles sobre la sobre-ingeniería.
