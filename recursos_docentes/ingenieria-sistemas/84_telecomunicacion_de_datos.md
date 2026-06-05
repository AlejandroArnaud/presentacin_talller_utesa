# Telecomunicación de Datos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 10 · **Código:** INF-344

## Sobre la materia
Estudia los fundamentos de la transmisión de datos: señales analógicas y digitales, medios de transmisión (cobre, fibra, inalámbrico), modulación y codificación, multiplexación, modelo OSI y TCP/IP, protocolos, control de errores y conmutación. Competencias clave: comprender cómo viaja la información entre dispositivos, analizar capas y protocolos, y dimensionar enlaces según ancho de banda, latencia y errores.

## Enfoque IA (taller)
La IA explica conceptos abstractos con analogías, traza el viaje de un paquete capa por capa y plantea cálculos de transmisión, pero el estudiante debe aplicar esos modelos a escenarios concretos y detectar simplificaciones erróneas. La integridad se asegura evaluando el análisis de casos y la sustentación, no el origen del texto.

## Prompts para el docente

```
Eres profesor de Telecomunicación de Datos para Ingeniería en Sistemas. Planifica una
clase de 90 minutos sobre el modelo OSI explicando cada capa con una analogía cotidiana,
el viaje de un mensaje desde la capa de aplicación hasta la física, y una actividad para
identificar en qué capa ocurre cada problema de red.
```

```
Genera 5 problemas de cálculo de transmisión de datos con contexto real (tiempo de
descarga de un archivo según el ancho de banda, throughput efectivo con overhead, tasa de
error de bits, capacidad de un canal con la fórmula de Shannon). Da enunciados y soluciones
detalladas aparte.
```

```
Crea una rúbrica de 4 criterios para evaluar el análisis de un caso de red: correcta
identificación de capas y protocolos involucrados, exactitud de los cálculos de
transmisión, diagnóstico del problema, y claridad de la propuesta de solución. En español,
escala 1 a 4.
```

```
Diferencia la explicación de "multiplexación" en tres niveles: estudiante que aún no
distingue señal analógica de digital, estudiante que ya entiende ancho de banda, y
estudiante avanzado que compara TDM, FDM y WDM para un enlace específico.
```

```
Dame 8 preguntas socráticas para discutir por qué una conexión con más ancho de banda no
siempre se siente más rápida, llevando al estudiante a razonar sobre latencia, overhead de
protocolos, errores y congestión, no solo sobre la velocidad nominal.
```

## Ejercicios y actividades con IA
- **Traza el paquete y verifica.** Objetivo: dominar el modelo de capas. El estudiante pide a la IA que describa el recorrido de un dato por las capas OSI/TCP-IP para un caso (enviar un mensaje, cargar una web) y luego corrige u completa el encapsulamiento capa por capa con sus propias palabras. Rol de la IA: generar un recorrido a auditar.
- **Dimensiona un enlace real.** Objetivo: aplicar cálculos. El estudiante plantea un escenario (conectar dos sedes en la frontera) y pide a la IA estimaciones de tiempo y capacidad; luego rehace los cálculos y discute si los supuestos (overhead, errores) son realistas. Rol de la IA: proponer cálculos que el estudiante valida.

## Evaluaciones auténticas
- **Análisis de un caso de transmisión real con sustentación (proceso + aplicada).** El estudiante diagnostica un escenario de comunicación de datos (enlace lento, errores, elección de medio) identificando capas, protocolos y cálculos, y lo defiende. *AIAS Nivel 3 (IA para apoyo conceptual y de cálculo, con verificación y declaración).* Mini-rúbrica: (1) identificación de capas/protocolos, (2) exactitud de cálculos, (3) diagnóstico, (4) sustentación.
- **Examen de pizarra: traza una transmisión paso a paso (oral + sin IA).** El estudiante explica en pizarra el encapsulamiento y el viaje de un dato, respondiendo variaciones en vivo. *AIAS Nivel 1 (sin IA).* Mini-rúbrica: (1) comprensión del modelo de capas, (2) corrección técnica, (3) capacidad de responder cambios, (4) claridad.

## Recurso interactivo en HTML
Un visualizador del modelo OSI donde el estudiante ve cómo un mensaje se encapsula con cabeceras al bajar por las capas y se desencapsula al subir.

```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que
visualice el encapsulamiento en el modelo OSI/TCP-IP: el usuario escribe un mensaje y, con
un botón, ve cómo se le agregan cabeceras al pasar por cada capa (de aplicación a física) y
luego cómo se quitan en el receptor. Resalta la cabecera de cada capa. En español, abrible
offline en el navegador.
```

## Notas
La IA mezcla convenciones (bits vs. bytes, kilo decimal vs. binario) y simplifica el overhead: exige que el estudiante verifique unidades y supuestos en todo cálculo. No subas configuraciones de red reales con direcciones o credenciales, ni datos de estudiantes. Adapta los casos al contexto de Dajabón (enlaces entre sedes, conectividad limitada en zonas rurales, comunicación binacional) en lugar de escenarios abstractos sin anclaje local.
