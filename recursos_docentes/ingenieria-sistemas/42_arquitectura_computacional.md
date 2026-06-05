# Arquitectura Computacional

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 5 · **Código:** INF-440

## Sobre la materia

Estudia la organización interna del computador: representación de datos y aritmética binaria, lógica digital, CPU (unidad de control y ALU), jerarquía de memoria y caché, buses, E/S, y nociones de ensamblador y pipeline. Competencias clave: explicar cómo se ejecuta una instrucción, razonar sobre rendimiento y memoria, y conectar el hardware con el software que lo usa.

## Enfoque IA (taller)

La IA explica conceptos abstractos con analogías y genera ejercicios de conversión y trazado que el estudiante debe verificar haciendo los cálculos a mano; entender el porqué importa más que la respuesta. Integridad por diseño: se evalúa con problemas resueltos a mano, defensa oral y trazas de ejecución, no con tareas copiables; sin detectores de IA.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre jerarquía de memoria y caché (principio de localidad, aciertos/fallos) para principiantes. Incluye una analogía cotidiana, un diagrama descrito en texto, un ejemplo numérico de tasa de aciertos y un ejercicio guiado con solución.
```

```
Genera 5 ejercicios reales de aritmética y representación: convertir entre binario/decimal/hexadecimal, suma en complemento a dos con desbordamiento, y representación de un número en punto flotante simple. Da enunciado y resultado esperado paso a paso.
```

```
Crea una rúbrica (1-4) para evaluar un ejercicio donde el estudiante traza la ejecución de una instrucción por las etapas del CPU: correcto entendimiento del ciclo fetch-decode-execute, manejo de registros, uso de la ALU, y claridad de la explicación. Formato tabla.
```

```
Toma el tema "memoria caché" y diferéncialo en tres niveles: básico (definir aciertos y fallos), intermedio (calcular tasa de aciertos dado un patrón de acceso) y avanzado (comparar dos políticas de reemplazo y justificar). Mantén el objetivo.
```

```
Dame 6 preguntas socráticas que lleven al estudiante a predecir cómo cambia el rendimiento al variar el tamaño de la caché o la frecuencia del reloj, sin darle la respuesta directa.
```

## Ejercicios y actividades con IA

- **Verifica la conversión de la IA.** Objetivo: dominar la aritmética binaria. La IA resuelve una conversión o suma en complemento a dos (a veces con error); el estudiante rehace el cálculo a mano y confirma o corrige. Rol de la IA: generar el procedimiento a auditar.
- **Explica el pipeline con tus palabras.** Objetivo: comprender el flujo. El estudiante pide a la IA una explicación del pipeline, la reescribe con sus propias palabras y propone un ejemplo de riesgo (hazard) que la IA no mencionó. Rol de la IA: borrador conceptual a profundizar.

## Evaluaciones auténticas

- **Examen resuelto a mano con justificación (AIAS Nivel 1: sin IA durante la prueba).** Problemas de conversión, complemento a dos y traza de instrucción resueltos en papel, con explicación del razonamiento. Rúbrica: (1) corrección de los cálculos, (2) manejo de casos límite/desbordamiento, (3) claridad del razonamiento, (4) uso correcto de la notación.
- **Mini-investigación comparativa con defensa oral (AIAS Nivel 3: IA asistida declarada).** El estudiante compara dos arquitecturas o políticas de caché, declara qué consultó a la IA y defiende sus conclusiones ante preguntas. Rúbrica: (1) exactitud técnica, (2) profundidad de la comparación, (3) honestidad sobre el uso de IA, (4) solidez en la defensa.

## Recurso interactivo en HTML

Idea: un conversor visual que muestra un número en decimal, binario y hexadecimal a la vez, resaltando cada bit.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS puro, sin librerías) llamado "Conversor de Bases Interactivo". El usuario escribe un número en decimal y la página muestra en tiempo real su representación en binario (8 bits) y hexadecimal, resaltando cada bit encendido. Incluye un modo que muestra la suma en complemento a dos de dos números. En español, funciona offline.
```

## Notas

Verificación: la IA comete errores en aritmética binaria, desbordamientos y ciclos de reloj; valida todo cálculo a mano. Las explicaciones pueden sonar correctas y estar mal, así que pide siempre el paso a paso. Privacidad: contenido técnico, sin datos personales. Contexto Dajabón: relacionar caché y memoria con la experiencia de equipos modestos del laboratorio (por qué una máquina con poca RAM se vuelve lenta).
