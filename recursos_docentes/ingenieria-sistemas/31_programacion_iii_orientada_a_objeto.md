# Programación III (Orientada a Objeto)

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 4 · **Código:** INF-172

## Sobre la materia
Profundización en programación orientada a objetos: herencia, polimorfismo, clases abstractas e interfaces, colecciones genéricas, manejo de excepciones, persistencia básica y principios de diseño orientado a objetos. Competencias clave: modelar dominios con clases bien diseñadas, aplicar abstracción y reutilización, y construir programas robustos y mantenibles.

## Enfoque IA (taller)
La IA genera jerarquías de clases y código OO funcional, pero abusa de herencia, rompe el encapsulamiento y aplica mal los patrones: el estudiante debe leer, refactorizar y justificar el diseño. La integridad se diseña con defensa del código y modificaciones en vivo, no con detectores de IA.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre "herencia vs composición" para estudiantes que ya
saben lo básico de POO. Incluye una analogía, un ejemplo donde la herencia es mala idea
y otro donde es adecuada, y un ejercicio guiado de refactorización.
```

```
Genera 5 ejercicios REALES de modelado orientado a objetos con contexto dominicano
(jerarquía de empleados de un colmado, tipos de cuentas de una cooperativa, vehículos
de una empresa de transporte fronterizo). Da el enunciado y las clases esperadas, sin
el código.
```

```
Crea una rúbrica de 4 criterios para evaluar un programa orientado a objetos:
diseño de clases (cohesión y encapsulamiento), uso correcto de herencia/polimorfismo,
manejo de excepciones y legibilidad. En español, escala 1 a 4, formato tabla.
```

```
Toma el ejercicio "sistema de figuras geométricas con área" y propón tres niveles: básico
(una clase abstracta y dos figuras), intermedio (interfaz y polimorfismo), avanzado
(colección genérica que calcula el área total y maneja una figura inválida). Mantén el
objetivo.
```

```
Dame 8 preguntas de discusión que lleven al estudiante a explicar POR QUÉ una clase debe
ser abstracta, cuándo conviene una interfaz sobre herencia, y qué problema de diseño
resuelve el polimorfismo, en lugar de solo escribir el código.
```

## Ejercicios y actividades con IA
- **Refactoriza el diseño de la IA.** Objetivo: criterio de diseño OO. El estudiante pide a la IA una jerarquía de clases con herencia profunda y la refactoriza (a composición o interfaces) explicando por qué mejora la cohesión y el encapsulamiento. Rol de la IA: diseño imperfecto a mejorar.
- **Explica el polimorfismo.** Objetivo: comprensión. El estudiante solicita a la IA un ejemplo de polimorfismo, lo ejecuta, predice la salida de cada llamada y reescribe en comentarios qué método se invoca y por qué. Rol de la IA: ejemplo a estudiar y predecir.
- **Caza la excepción.** Objetivo: robustez. El docente pide a la IA un programa OO sin manejo de errores; el estudiante identifica dónde puede fallar y agrega excepciones adecuadas. Rol de la IA: código frágil a endurecer.

## Evaluaciones auténticas
- **Live coding OO con variación (AIAS Nivel 1 — sin IA durante la prueba).** El estudiante modela un mini-dominio con clases y el docente pide en el momento agregar una subclase o cambiar una relación. Mini-rúbrica: (1) diseño de clases correcto, (2) uso adecuado de herencia/polimorfismo, (3) capacidad de modificar, (4) explicación verbal del diseño.
- **Proyecto OO con bitácora (AIAS Nivel 3 — IA asistida declarada).** Entrega un programa orientado a objetos para un caso real de Dajabón más un registro de qué pidió a la IA, qué refactorizó y por qué. Mini-rúbrica: (1) funcionalidad, (2) calidad del diseño OO, (3) manejo de excepciones, (4) honestidad y reflexión sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un visualizador de jerarquías de clases que muestra qué método se ejecuta al haber polimorfismo.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado
"Polimorfismo en Acción". Muestra una clase base y dos subclases con un método
sobrescrito; el usuario crea objetos de distinto tipo, los agrega a una lista y, al
pulsar "ejecutar", la app muestra qué versión del método corre en cada objeto. Interfaz
en español, funciona offline en el navegador.
```

## Notas
Verifica ejecutando: la IA produce código OO que compila pero con diseño deficiente (herencia innecesaria, encapsulamiento roto) o patrones mal aplicados. No subir trabajos identificables de estudiantes a las herramientas. Adapta los dominios al contexto de Dajabón (comercios, cooperativas, transporte fronterizo) para que el modelado tenga sentido real.
