# Laboratorio de Algoritmos y Estructuras de Datos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 6 · **Código:** INF-218

## Sobre la materia
Componente práctico de INF-217: el estudiante implementa, prueba y mide estructuras de datos y algoritmos en un lenguaje de programación real (C/C++, Java o Python). Desarrolla competencias de codificación de estructuras desde cero, depuración, pruebas con casos límite, y medición empírica del rendimiento frente al análisis teórico.

## Enfoque IA (taller)
La IA acelera el andamiaje (boilerplate, esqueletos de prueba), pero el estudiante implementa la lógica central, la depura y la mide; el valor está en hacer funcionar y entender el código, no en copiarlo. La integridad se diseña con defensa en vivo y modificaciones imprevistas en el laboratorio, sin detectores de IA.

## Prompts para el docente
```
Eres instructor de laboratorio de Estructuras de Datos. Diseña una práctica de 2 horas para implementar una pila con arreglo y otra con lista enlazada en [lenguaje]. Incluye objetivos, esqueleto de archivo a completar por el estudiante, 4 casos de prueba (incluyendo pila vacía y desbordamiento) y criterios de "terminado".
```
```
Genera un set de pruebas (test cases) para validar una tabla hash implementada por un estudiante: inserción, búsqueda exitosa y fallida, colisiones, eliminación y redimensionamiento. Da entradas y salidas esperadas, sin dar la implementación.
```
```
Crea una rúbrica de laboratorio (1-4) para evaluar la entrega de código: compila y corre, pasa los casos de prueba, eficiencia lograda vs esperada, calidad del código (nombres, modularidad) y cobertura de casos límite. Formato tabla.
```
```
Diferencia la práctica "implementar ordenamiento" en tres niveles: con la función casi completa y un TODO, con solo la firma y pistas del algoritmo, y abierto exigiendo dos algoritmos distintos con medición de tiempos comparada.
```
```
Dame 6 preguntas para el cierre del laboratorio que obliguen al estudiante a explicar por qué su medición empírica de tiempos coincide (o no) con la complejidad teórica O(...) que esperaba.
```

## Ejercicios y actividades con IA
- **Esqueleto de la IA, lógica del estudiante.** Objetivo: implementar lo esencial. El estudiante pide a la IA solo la estructura de archivo y las firmas; escribe él la lógica de cada método y la prueba. Rol de la IA: andamiaje, nunca la solución central.
- **Generador de casos límite adversarios.** Objetivo: probar a fondo. El estudiante pide a la IA "casos que rompan mi código" (vacío, un elemento, duplicados, tamaño máximo), los corre y arregla los fallos. Rol de la IA: diseñar pruebas difíciles a superar.
- **Mide y contrasta con la teoría.** Objetivo: validar empíricamente. El estudiante mide tiempos de su algoritmo con entradas crecientes, pide a la IA que prediga la curva Big-O y compara su gráfica real con la predicción. Rol de la IA: hipótesis a verificar con datos.

## Evaluaciones auténticas
- **Implementación en vivo con variación (proceso + aplicada).** En el laboratorio, el estudiante completa una estructura y el instructor le pide en el momento una operación nueva (p. ej. agregar `peek` o invertir la lista). *AIAS Nivel 1 (Sin IA durante la prueba).* Rúbrica: corre correctamente, capacidad de modificar, depuración autónoma, explicación de la lógica.
- **Entrega con bitácora de pruebas (de proceso).** El estudiante entrega el código más un registro de los casos de prueba que diseñó, qué falló y cómo lo corrigió, declarando qué pidió a la IA. *AIAS Nivel 3 (IA asistida declarada).* Rúbrica: funcionalidad, cobertura de pruebas, comprensión demostrada, honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Un banco de pruebas visual donde el usuario "ejecuta" operaciones sobre una estructura y ve el estado interno y un registro de cada paso.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado "Banco de Pruebas de Estructuras". Permite operar una pila y una cola con botones (push/pop, enqueue/dequeue), muestra el contenido actual como cajas, lleva un log de operaciones y avisa visualmente cuando ocurre desbordamiento o estructura vacía. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica ejecutando: el código de la IA puede compilar pero fallar en colisiones, redimensionamiento o liberación de memoria; los casos límite son donde más yerra. No subir trabajos identificables de estudiantes a las herramientas. En Dajabón, considera el acceso desigual a equipos: ofrece tiempo de laboratorio presencial, permite Python (sin instalación pesada vía intérpretes en línea) y guarda copias locales de los entornos.
