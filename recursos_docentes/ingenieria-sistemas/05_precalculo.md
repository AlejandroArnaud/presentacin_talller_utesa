# Precálculo

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 1 · **Código:** MAT-160

## Sobre la materia
Prepara para el cálculo: funciones (lineales, cuadráticas, polinómicas, exponenciales, logarítmicas y trigonométricas), su gráfica, dominio y rango, transformaciones y resolución de ecuaciones e inecuaciones. Competencias clave: modelar relaciones con funciones, interpretar gráficas y razonar el comportamiento de una función, base indispensable para Cálculo I.

## Enfoque IA (taller)
La IA explica procedimientos paso a paso y grafica funciones, pero comete errores algebraicos: el estudiante debe verificar cada resultado, lo que entrena el razonamiento. Integridad por diseño mediante problemas aplicados, explicación del procedimiento y verificación, no por detección.

## Prompts para el docente

```
Planifica una clase de 90 minutos sobre funciones exponenciales para estudiantes de
primer cuatrimestre de Ingeniería en Sistemas. Conecta con un caso real (crecimiento
del número de usuarios de una app, capacidad de almacenamiento que se duplica).
Incluye explicación, ejemplos guiados y ejercicios individuales.
```

```
Genera 6 problemas de modelado con funciones lineales y cuadráticas aplicados a
situaciones de informática y del comercio de Dajabón (costo de un plan de internet
por GB, trayectoria, ganancia según precio). Da solo los enunciados, sin soluciones.
```

```
Crea una rúbrica de 4 criterios para evaluar la resolución de un problema con
funciones: planteamiento del modelo, procedimiento algebraico correcto, interpretación
de la gráfica o el resultado, y explicación del razonamiento. En español, escala 1 a 4.
```

```
Toma el tema "función cuadrática" y propón tres niveles de problema: básico (hallar
vértice y raíces), intermedio (plantear la función desde un enunciado) y avanzado
(optimizar: hallar el precio que maximiza la ganancia).
```

```
Dame 8 preguntas de discusión que lleven al estudiante a explicar POR QUÉ cambia la
gráfica de una función al modificar sus parámetros (desplazamientos, dilataciones), en
vez de solo memorizar reglas.
```

## Ejercicios y actividades con IA
- **Verifica al "tutor" IA.** Objetivo: razonamiento y verificación. El estudiante pide a la IA que resuelva una ecuación logarítmica paso a paso, rehace cada paso a mano y marca dónde (si) la IA se equivocó. La IA hace de tutor falible; el estudiante audita el álgebra.
- **De la gráfica al modelo.** Objetivo: interpretar funciones. El estudiante describe una situación (usuarios que crecen mes a mes), pide a la IA que proponga una función que la modele y verifica con valores propios si la función predice bien. Rol de la IA: proponer un modelo que el estudiante contrasta con datos.
- **Inventa y resuelve.** Objetivo: transferir conceptos. El estudiante crea un problema de optimización sobre un negocio de Dajabón, pide a la IA que lo resuelva y compara con su propia solución. La IA contrasta; el estudiante construye y valida.

## Evaluaciones auténticas
- **Bitácora de problemas con interpretación (AIAS Nivel 1 — sin IA en la resolución; IA solo para verificar después, declarado).** El estudiante entrega problemas con todo el procedimiento y una explicación de qué significa el resultado en el contexto. Mini-rúbrica: (1) planteamiento del modelo, (2) procedimiento algebraico, (3) interpretación correcta, (4) calidad de la explicación.
- **Resolución en pizarra (AIAS Nivel 1 — sin IA).** El estudiante resuelve y grafica una función frente al grupo explicando cada paso. Mini-rúbrica: (1) dominio del procedimiento, (2) exactitud, (3) lectura correcta de la gráfica, (4) claridad al explicar.

## Recurso interactivo en HTML
Graficador interactivo de funciones donde el estudiante mueve parámetros y ve el efecto en la gráfica en tiempo real.

```
Crea UN archivo .html autocontenido (sin librerías externas, usando canvas) que grafique
la función cuadrática y = a(x-h)^2 + k con tres deslizadores para a, h y k. Al mover
cada deslizador, la gráfica se actualiza en tiempo real y se muestran el vértice y las
raíces. Interfaz en español, que abra directo en el navegador.
```

## Notas
Verifica SIEMPRE el álgebra de la IA: comete errores con logaritmos, signos y factorización, por eso es ideal para entrenar la verificación. No es necesario compartir datos de estudiantes. Usa contextos de Dajabón y de informática (planes de internet por GB, crecimiento de usuarios) para que las funciones se sientan útiles y no abstractas.
