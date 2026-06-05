# Matemáticas Discretas

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 1 · **Código:** MAT-115

## Sobre la materia
Fundamentos matemáticos de la computación: lógica proposicional, teoría de conjuntos, relaciones y funciones, técnicas de demostración, combinatoria, recursión y nociones de teoría de grafos. Competencias clave: razonar formalmente, demostrar afirmaciones y modelar problemas computacionales con estructuras discretas, base de algoritmos y bases de datos.

## Enfoque IA (taller)
La IA genera demostraciones y resuelve ejercicios, pero a veces "alucina" pasos inválidos: el estudiante debe verificar cada inferencia, lo que entrena el rigor lógico. Integridad por diseño mediante demostraciones explicadas y defensa oral del razonamiento, no por detección.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre tablas de verdad y equivalencias lógicas
(De Morgan) para estudiantes de primer cuatrimestre de Ingeniería en Sistemas, con
explicación, ejemplos guiados y ejercicios individuales que conecten con condiciones
de un programa (if/else).
```

```
Genera 6 problemas de combinatoria y conteo ambientados en informática real:
contraseñas posibles, direcciones IP, combinaciones de un menú, rutas en una red.
Da solo los enunciados, sin las soluciones.
```

```
Crea una rúbrica de 4 criterios para evaluar una demostración matemática (por ejemplo,
inducción): validez de cada paso, uso correcto de la técnica, claridad de la notación
y justificación escrita del razonamiento. En español, escala 1 a 4.
```

```
Toma el tema "teoría de conjuntos" y propón tres niveles de ejercicio: básico
(operaciones de unión e intersección), intermedio (probar una identidad sencilla) y
avanzado (modelar un problema de filtrado de datos con conjuntos).
```

```
Dame 8 preguntas socráticas que lleven al estudiante a explicar POR QUÉ una
demostración por inducción es válida y a detectar dónde fallaría un argumento
circular, en lugar de solo aplicar la plantilla.
```

## Ejercicios y actividades con IA
- **Audita la demostración.** Objetivo: rigor lógico. El estudiante pide a la IA una demostración por inducción, revisa cada paso y marca dónde (si) la IA introdujo un salto inválido o un caso base mal planteado. Rol de la IA: demostrador falible que el estudiante audita.
- **Traductor lógica–código.** Objetivo: conectar lógica y programación. El estudiante escribe una proposición lógica, pide a la IA que la exprese como condición de un programa y verifica que sean equivalentes con una tabla de verdad hecha a mano. Rol de la IA: puente entre notación formal y código.
- **Inventa el contraejemplo.** Objetivo: pensamiento crítico. La IA afirma que cierta propiedad de conjuntos siempre se cumple; el estudiante intenta refutarla con un contraejemplo propio. Rol de la IA: generador de afirmaciones a cuestionar.

## Evaluaciones auténticas
- **Portafolio de demostraciones explicadas (AIAS Nivel 1 — sin IA en la resolución; IA solo para verificar después, declarado).** El estudiante entrega varias demostraciones con justificación escrita de cada paso. Mini-rúbrica: (1) validez de los pasos, (2) técnica adecuada, (3) notación clara, (4) calidad de la justificación.
- **Defensa oral en pizarra (AIAS Nivel 1 — sin IA).** El estudiante demuestra una afirmación frente al grupo y responde preguntas sobre por qué cada paso es válido. Mini-rúbrica: (1) dominio de la técnica, (2) corrección lógica, (3) claridad al explicar, (4) respuesta a repreguntas.

## Recurso interactivo en HTML
Generador de tablas de verdad: el estudiante escribe una expresión lógica y la app construye la tabla completa.

```
Crea UN archivo .html autocontenido (sin librerías externas) donde el estudiante
escriba una expresión lógica con variables p, q, r y operadores AND, OR, NOT, IMPLICA,
y la app genere automáticamente la tabla de verdad completa y resalte si la expresión
es tautología, contradicción o contingencia. Interfaz en español, que abra directo en
el navegador.
```

## Notas
La IA falla con frecuencia en demostraciones formales y conteo combinatorio: verifica cada paso, es justamente lo que entrena la materia. No es necesario compartir datos de estudiantes. Adapta los ejemplos al contexto de Dajabón (redes de un comercio local, padrón de una junta de vecinos) para que la abstracción discreta se ancle en problemas cercanos.
