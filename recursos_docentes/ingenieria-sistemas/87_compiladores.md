# Compiladores

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 10 · **Código:** INF-920

## Sobre la materia
Estudia la construcción de traductores de lenguajes: análisis léxico (tokens), análisis sintáctico (gramáticas, árboles de derivación), análisis semántico, generación y optimización de código intermedio. Desarrolla competencias de razonamiento formal, manejo de autómatas y gramáticas libres de contexto, y comprensión profunda de cómo el código fuente se convierte en algo ejecutable.

## Enfoque IA (taller)
La IA explica fases abstractas y genera gramáticas o tablas de análisis que el estudiante debe verificar derivando cadenas a mano: el reto no es producir un compilador, sino entender por qué una gramática es ambigua o por qué un parser entra en conflicto. La integridad se logra evaluando trazado formal, construcción manual de autómatas y defensa del diseño, no la entrega de código generado.

## Prompts para el docente
```
Eres profesor de Compiladores de décimo cuatrimestre. Planifica una unidad de 3 clases sobre análisis sintáctico descendente (LL(1)): objetivos, factorización por la izquierda, eliminación de recursividad, cálculo de conjuntos PRIMERO y SIGUIENTE, y construcción de la tabla de análisis con ejemplos.
```
```
Genera 4 gramáticas de ejemplo de complejidad creciente (expresiones aritméticas, sentencias if-else con el problema del else colgante, declaraciones de variables, llamadas a funciones). Para cada una indica si es ambigua o no y por qué, en sección aparte.
```
```
Crea una rúbrica de 4 criterios para evaluar un mini-compiladoro o analizador léxico/sintáctico del estudiante: correctitud del reconocimiento de tokens, manejo de la gramática, reporte de errores y calidad del código. Escala 1-4.
```
```
Diferencia la explicación de "gramática libre de contexto" en tres niveles: estudiante que confunde sintaxis con semántica, estudiante que ya construye autómatas finitos y estudiante adelantado que va hacia analizadores LR.
```
```
Genera 8 preguntas socráticas para discutir por qué la separación en fases (léxico, sintáctico, semántico) facilita el diseño de un compilador y cuándo conviene fusionar fases.
```

## Ejercicios y actividades con IA
- **Verifica la tabla LL(1) de la IA.** Objetivo: dominar el análisis predictivo. El estudiante pide a la IA los conjuntos PRIMERO/SIGUIENTE y la tabla de una gramática, luego los recalcula a mano y detecta errores o conflictos. Rol de la IA: producir un borrador a auditar.
- **Genera y depura un analizador léxico.** Objetivo: implementar reconocimiento de tokens. El estudiante pide a la IA un lexer (por ejemplo con expresiones regulares o Lex/Flex), lo prueba con casos límite (comentarios anidados, números mal formados) y corrige fallos. Rol de la IA: generar una base imperfecta para mejorar.

## Evaluaciones auténticas
- **Construcción manual de un parser para un mini-lenguaje (proceso + aplicada).** El estudiante diseña la gramática, deriva cadenas de prueba en papel y construye el analizador, documentando cada decisión. *AIAS Nivel 3 (IA para apoyo, contribución declarada).* Rúbrica: correctitud de la gramática, manejo de ambigüedad, reporte de errores, justificación del diseño.
- **Defensa oral del diseño del compilador (oral).** Ante una nueva construcción del lenguaje, el estudiante explica qué fase debe modificar y cómo. *AIAS Nivel 2 (IA solo para estudio previo, declarado).* Rúbrica: comprensión de las fases, capacidad de extender el diseño, dominio de gramáticas, claridad.

## Recurso interactivo en HTML
Un visualizador de derivación sintáctica: el usuario escribe una cadena y ve cómo se construye paso a paso el árbol de derivación según una gramática dada.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que muestre el análisis sintáctico de expresiones aritméticas simples (suma, resta, multiplicación, paréntesis). El usuario escribe una expresión y ve paso a paso la construcción del árbol de derivación y los tokens reconocidos. En español, abrible offline.
```

## Notas
Verifica gramáticas y tablas de la IA derivando a mano: produce con frecuencia conjuntos PRIMERO/SIGUIENTE incompletos o gramáticas con ambigüedades no señaladas, útiles como ejercicio de detección. No subas trabajos identificables de estudiantes. Adapta a Dajabón considerando el acceso desigual a equipos: permite diseño en papel de gramáticas y autómatas, y herramientas ligeras (ANTLR, PLY) que corran en máquinas modestas.
