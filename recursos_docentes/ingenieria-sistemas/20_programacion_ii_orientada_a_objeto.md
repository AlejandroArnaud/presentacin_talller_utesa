# Programación II (Orientada a Objeto)

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 3 · **Código:** INF-167

## Sobre la materia
Programación orientada a objetos: clases y objetos, encapsulamiento, herencia, polimorfismo, abstracción, relaciones entre clases y nociones de diseño. Competencias clave: modelar un dominio del mundo real con objetos, reutilizar código mediante herencia y polimorfismo, y razonar sobre un buen diseño orientado a objetos.

## Enfoque IA (taller)
La IA genera clases y jerarquías que compilan pero a veces violan principios de diseño (encapsulamiento débil, herencia mal usada): el estudiante lee, ejecuta, critica y rediseña. La integridad se diseña con defensa en vivo del código y modificaciones imprevistas, no con detectores de IA.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre herencia y polimorfismo para estudiantes que ya
saben programar de forma estructurada. Usa un ejemplo del mundo real (una jerarquía de
empleados, o de medios de pago en un comercio de Dajabón). Incluye un diagrama de clases,
ejemplos progresivos y un ejercicio guiado con su solución comentada.
```

```
Genera 5 problemas REALES de diseño orientado a objetos con contexto dominicano (sistema
de una farmacia con productos y ventas, gestión de socios de una cooperativa, alquiler de
motoconchos, calificaciones de una escuela). Pide identificar clases, atributos, métodos y
relaciones. Da solo los enunciados.
```

```
Crea una rúbrica (escala 1 a 4, en español, formato tabla) para evaluar un programa
orientado a objetos: correctitud del resultado, diseño de clases (encapsulamiento,
cohesión), uso adecuado de herencia y polimorfismo, y legibilidad del código.
```

```
Diferencia el ejercicio "modelar un sistema de figuras geométricas con área" en tres
niveles: con la clase base ya dada, con pistas sobre qué heredar, y abierto con un
requisito extra (agregar una figura nueva sin romper el código existente).
```

```
Dame 6 preguntas socráticas que lleven al estudiante a justificar POR QUÉ usó herencia en
lugar de composición, o por qué hizo privado un atributo, en vez de aplicar los conceptos
mecánicamente.
```

## Ejercicios y actividades con IA
- **Rediseña la clase de la IA.** Objetivo: diseño con criterio. El estudiante pide a la IA una clase con malas prácticas (atributos públicos, métodos que hacen demasiado), la ejecuta y la rediseña aplicando encapsulamiento y cohesión. Rol de la IA: código a mejorar, no a copiar.
- **Extiende sin romper.** Objetivo: polimorfismo y herencia. El estudiante toma una jerarquía generada por la IA y agrega una subclase nueva, verificando que el código existente siga funcionando. Rol de la IA: base de partida que el estudiante extiende.
- **Explica el diseño.** Objetivo: comprender. El estudiante pide a la IA un diagrama de clases para un caso, lo reescribe con sus palabras justificando cada relación y propone una alternativa. Rol de la IA: borrador del diseño que el estudiante critica.

## Evaluaciones auténticas
- **Live coding con variación (AIAS Nivel 1 — sin IA durante la prueba).** En clase, el estudiante implementa una clase o jerarquía y el docente le pide un cambio en el momento (agregar un método, una subclase, cambiar una relación). Mini-rúbrica: (1) correctitud, (2) calidad del diseño, (3) capacidad de modificar en vivo, (4) explicación de las decisiones.
- **Proyecto con bitácora y diagrama (AIAS Nivel 3 — IA asistida declarada).** Entrega un programa orientado a objetos, su diagrama de clases y un registro de qué pidió a la IA, qué cambió y por qué. Mini-rúbrica: (1) funcionalidad, (2) diseño OO aplicado, (3) coherencia entre diagrama y código, (4) honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Visualizador de jerarquía de clases: el estudiante explora una jerarquía y ve qué atributos y métodos hereda cada subclase.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que muestre una
jerarquía de clases (por ejemplo Animal → Perro, Gato) como un árbol. Al hacer clic en una
clase, lista sus atributos y métodos propios y los heredados, distinguiéndolos con color.
Permite alternar entre 2 ejemplos. En español, abre directo en el navegador y funciona offline.
```

## Notas
Verifica ejecutando: el código de la IA puede compilar pero diseñar mal (romper encapsulamiento, abusar de la herencia) o usar bibliotecas inexistentes. No subir trabajos identificables de estudiantes a las herramientas. Usa dominios de Dajabón (farmacia, cooperativa, motoconchos, escuela) para que el modelado orientado a objetos parta de objetos reales y reconocibles.
