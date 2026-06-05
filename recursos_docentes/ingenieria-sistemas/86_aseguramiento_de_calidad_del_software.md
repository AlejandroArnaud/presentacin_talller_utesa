# Aseguramiento de Calidad del Software

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 10 · **Código:** INF-433

## Sobre la materia
Cubre los principios y prácticas para garantizar la calidad del software: fundamentos de testing, niveles (unitario, integración, sistema, aceptación) y tipos de prueba (funcional, regresión, carga, usabilidad), diseño de casos de prueba, manejo de defectos, automatización, métricas de calidad y estándares (ISO 25010). Competencias clave: planificar pruebas, diseñar casos que descubran defectos, y evaluar la calidad de un producto de forma sistemática.

## Enfoque IA (taller)
La IA genera casos de prueba, propone escenarios y redacta planes, pero el estudiante decide qué probar, descubre los casos límite que la IA pasa por alto y juzga si la cobertura es suficiente: el pensamiento crítico del tester no se delega. La integridad se asegura evaluando los defectos encontrados en software real y la sustentación del plan, no el origen del documento.

## Prompts para el docente

```
Eres profesor de Aseguramiento de Calidad del Software para Ingeniería en Sistemas.
Planifica una clase de 90 minutos sobre diseño de casos de prueba con particiones de
equivalencia y valores límite, con un ejemplo completo (validación de un formulario) y una
práctica para diseñar casos de un requisito dado.
```

```
Genera 5 requisitos de software realistas (login con bloqueo por intentos, carrito de
compras con ITBIS, formulario de inscripción, cálculo de nómina, reserva de citas) y, para
cada uno, una lista de casos de prueba que cubran caminos válidos, inválidos y casos
límite. Presenta requisito y casos por separado.
```

```
Crea una rúbrica de 4 criterios para evaluar un plan de pruebas: cobertura de los
requisitos, calidad de los casos (incluyendo casos límite y negativos), claridad del
reporte de defectos, y priorización por riesgo. En español, escala 1 a 4.
```

```
Diferencia una actividad de testing en tres niveles: estudiante que recién distingue
prueba de bug (escribir casos simples), estudiante con base (cubrir casos límite y
negativos) y estudiante avanzado (definir estrategia de pruebas y automatizar regresión).
```

```
Dame 8 preguntas socráticas para discutir por qué "pasar todas las pruebas" no garantiza
software de calidad, llevando al estudiante a razonar sobre cobertura, casos no
contemplados, calidad de los datos de prueba y la diferencia entre verificar y validar.
```

## Ejercicios y actividades con IA
- **Encuentra lo que la IA olvidó.** Objetivo: pensamiento crítico de tester. El estudiante pide a la IA casos de prueba para un requisito y luego audita la lista, agregando los casos límite y negativos que faltan y explicando qué riesgo cubre cada uno. Rol de la IA: generar una base de casos a completar.
- **Caza de defectos en software real.** Objetivo: ejecución de pruebas. El estudiante prueba una app real (propia o asignada), encuentra defectos y, con apoyo de la IA, redacta reportes claros y reproducibles; decide cuáles son críticos. Rol de la IA: asistente de redacción de reportes sobre defectos hallados por el estudiante.

## Evaluaciones auténticas
- **Plan de pruebas y campaña de testing sobre una app real, sustentado (proceso + aplicada).** El estudiante diseña el plan, ejecuta las pruebas sobre una aplicación, reporta defectos reales con evidencia y defiende su estrategia. *AIAS Nivel 3 (IA para generar y revisar casos, con cobertura y defectos verificados por el estudiante, declarado).* Mini-rúbrica: (1) cobertura de requisitos, (2) calidad de casos (límite/negativos), (3) reportes de defectos reproducibles, (4) sustentación.
- **Diseño de casos de prueba en vivo a partir de un requisito (aplicada + oral, sin IA).** Dado un requisito nuevo, el estudiante diseña los casos en el momento y justifica su cobertura. *AIAS Nivel 1 (sin IA durante la evaluación).* Mini-rúbrica: (1) técnica de diseño (equivalencia/límite), (2) cobertura, (3) inclusión de casos negativos, (4) justificación.

## Recurso interactivo en HTML
Un tablero de seguimiento de defectos (bug tracker) donde el estudiante registra hallazgos con severidad, estado y pasos para reproducir.

```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que sea un
mini gestor de defectos: el usuario registra un bug con título, severidad (baja/media/alta/
crítica), estado (abierto/en revisión/cerrado) y pasos para reproducir; los datos se
guardan en el navegador (localStorage) y se muestran en una tabla filtrable por severidad y
estado. En español, abrible offline en el navegador.
```

## Notas
La IA genera casos de prueba plausibles pero incompletos y a veces inventa comportamientos del software que no existen: exige que el estudiante ejecute las pruebas sobre el sistema real y verifique cada defecto reportado. No subas código propietario ni datos de estudiantes a la IA. Adapta los requisitos a ejemplos del contexto de Dajabón (comercio fronterizo, ITBIS, servicios locales) y prioriza probar aplicaciones accesibles y proyectos propios de la clase.
