# Diseño de Sistemas

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 4 · **Código:** INF-171

## Sobre la materia
Diseño de soluciones de software a partir del análisis: del requerimiento al modelo, diagramas UML (casos de uso, clases, secuencia), diseño de la arquitectura, modelado de datos, interfaces y patrones básicos de diseño. Competencias clave: traducir necesidades reales en un diseño coherente, justificar decisiones de arquitectura y documentar con notación estándar.

## Enfoque IA (taller)
La IA propone arquitecturas y diagramas con rapidez, pero ignora restricciones del contexto y mezcla niveles de abstracción: el estudiante debe criticar, ajustar y justificar cada decisión. La integridad se diseña con defensa del diseño y trazabilidad requerimiento-decisión, no con detectores.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre "del requerimiento al diagrama de casos de uso"
para estudiantes de Ingeniería en Sistemas. Incluye un mini-caso (sistema para una
farmacia), identificación de actores y casos de uso, y un ejercicio guiado.
```

```
Genera 4 casos REALES de sistemas para el contexto de Dajabón (colmado con inventario,
clínica con citas, cooperativa con préstamos, transporte fronterizo) con una breve
descripción del negocio y 5-6 requerimientos funcionales cada uno, sin la solución de
diseño.
```

```
Crea una rúbrica de 4 criterios para evaluar un diseño de sistema entregado por un
estudiante: cobertura de los requerimientos, coherencia de los diagramas UML,
justificación de las decisiones de arquitectura y calidad del modelo de datos. En
español, escala 1 a 4, formato tabla.
```

```
Toma el caso "sistema de citas de una clínica" y propón tres niveles de diseño: básico
(casos de uso principales), intermedio (diagrama de clases con relaciones) y avanzado
(diagrama de secuencia para reservar una cita y manejo de un caso de error). Mantén el
mismo dominio.
```

```
Dame 8 preguntas socráticas que lleven al estudiante a justificar POR QUÉ separó el
sistema en ciertos módulos, qué pasaría si cambia un requerimiento, y qué riesgos tiene
su elección de arquitectura, en lugar de solo dibujar diagramas.
```

## Ejercicios y actividades con IA
- **Critica la arquitectura de la IA.** Objetivo: criterio de diseño. El estudiante pide a la IA una arquitectura para un caso dado y la evalúa contra los requerimientos reales, señalando supuestos erróneos, sobre-ingeniería o módulos faltantes. Rol de la IA: propuesta a auditar, no a aceptar.
- **Diagrama y justificación.** Objetivo: trazabilidad. El estudiante genera con IA un primer diagrama de clases, lo corrige a mano y escribe por qué cada cambio responde a un requerimiento concreto. Rol de la IA: borrador inicial a refinar.
- **Diseño contra restricciones.** Objetivo: realismo. El estudiante añade restricciones locales (conexión intermitente en la frontera, bajo presupuesto, poco personal técnico) y pide a la IA adaptar el diseño; luego valida si la propuesta es viable. Rol de la IA: generadora de alternativas a someter al contexto.

## Evaluaciones auténticas
- **Defensa del diseño en sesión de revisión (AIAS Nivel 1 — sin IA en la sustentación).** El estudiante presenta sus diagramas y responde por qué tomó cada decisión y cómo manejaría un cambio de requerimiento. Mini-rúbrica: (1) coherencia del diseño, (2) justificación de decisiones, (3) dominio de UML, (4) respuesta a cambios y repreguntas.
- **Documento de diseño con bitácora de IA (AIAS Nivel 3 — IA asistida declarada).** Entrega el diseño completo de un sistema para un negocio real de Dajabón más un registro de qué pidió a la IA, qué aceptó y qué descartó. Mini-rúbrica: (1) cobertura de requerimientos, (2) calidad de los diagramas, (3) decisiones justificadas, (4) honestidad y criterio sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un tablero para mapear requerimientos a casos de uso y módulos del sistema.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado
"Mapa de Requerimientos". El usuario escribe requerimientos en una lista y los arrastra
o asigna a actores, casos de uso y módulos en columnas; la app muestra qué requerimientos
quedan sin cubrir. Interfaz en español, funciona offline en el navegador.
```

## Notas
Verifica la coherencia: la IA produce diagramas que se ven correctos pero contradicen los requerimientos o mezclan niveles de abstracción. No subir información sensible de negocios reales sin permiso; usar datos ficticios. Adapta los casos al contexto de Dajabón (comercios fronterizos, cooperativas, clínicas, conectividad limitada) para que el diseño responda a necesidades reales.
