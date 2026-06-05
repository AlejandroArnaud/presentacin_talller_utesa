# Domótica y Entorno Inteligente (electiva optativa)

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** INF-023

## Sobre la materia
Diseño de espacios inteligentes con sensores, actuadores, microcontroladores (Arduino, ESP32, Raspberry Pi), protocolos (MQTT, Zigbee, Wi-Fi) y automatización del hogar/edificio (iluminación, climatización, seguridad, eficiencia energética). Competencias clave: integrar hardware y software en un sistema IoT funcional, programar lógica de automatización y evaluar costo, consumo y seguridad de la solución.

## Enfoque IA (taller)
La IA acelera el prototipado (genera código de firmware, diagramas de conexión y lógica de reglas) pero el estudiante debe montar el circuito, verificar que responde físicamente y depurar lo que la IA no ve. La integridad nace de demostrar el sistema funcionando en vivo, no de vigilar la entrega.

## Prompts para el docente
```
Eres profesor de Domótica para 9º cuatrimestre de Ingeniería en Sistemas. Planifica una clase práctica de 3 horas sobre control de iluminación con ESP32 y sensor de movimiento PIR vía MQTT. Incluye objetivos, lista de componentes, montaje paso a paso, código comentado y una falla intencional para que el estudiante depure.
```
```
Genera 5 casos reales de automatización para el contexto de Dajabón: control de riego de un conuco, refrigeración de un colmado, seguridad de una vivienda fronteriza, ahorro energético en un aula UTESA y monitoreo de temperatura en una farmacia. Para cada uno, sensores, actuadores y la regla lógica esperada.
```
```
Crea una rúbrica (1-4) para evaluar un prototipo domótico: funcionamiento real del sistema, calidad del código de automatización, correcto cableado/seguridad eléctrica, eficiencia energética y documentación del diseño. En tabla.
```
```
Diferencia el proyecto "automatiza una habitación" en tres niveles: con el circuito y código base ya dados para solo ajustar parámetros, con la lista de componentes definida, y abierto exigiendo integrar dos sensores y registro de datos en la nube. Mantén el objetivo.
```
```
Dame 6 preguntas socráticas para que los estudiantes justifiquen decisiones de diseño domótico: por qué Zigbee y no Wi-Fi, qué pasa si falla la red, cómo evitar que el sistema sea un riesgo de seguridad o privacidad en el hogar.
```

## Ejercicios y actividades con IA
- **Depura el firmware de la IA.** Objetivo: validar código embebido. El docente pide a la IA un sketch de ESP32 con un bug (pin equivocado, lógica invertida); el estudiante lo carga, observa que el actuador no responde y lo corrige. Rol de la IA: producir el firmware defectuoso a depurar.
- **De requisito a arquitectura.** Objetivo: diseñar el sistema. El estudiante dibuja su propio diagrama de sensores/actuadores para un caso, luego pide el de la IA y argumenta qué cambiaría y por qué. Rol de la IA: contraste de diseño, no fuente única.
- **Reglas de automatización a prueba.** Objetivo: razonar lógica. El estudiante pide a la IA reglas "si-entonces" para un escenario y prueba con qué entradas fallan o causan comportamientos no deseados. Rol de la IA: borrador de lógica a estresar.

## Evaluaciones auténticas
- **Demostración del prototipo con falla en vivo (AIAS Nivel 2 – IA solo para explorar).** El estudiante muestra su sistema funcionando y el docente desconecta un sensor o introduce un cambio de requisito que debe resolver en el momento. Mini-rúbrica: funcionamiento real, capacidad de diagnóstico, justificación de las decisiones de diseño, manejo de seguridad eléctrica.
- **Proyecto domótico con bitácora (AIAS Nivel 3 – IA asistida declarada).** Entrega el prototipo más un registro de qué código pidió a la IA, qué falló al montarlo y cómo lo corrigió. Mini-rúbrica: funcionalidad del sistema, calidad de integración hardware/software, comprensión demostrada, honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un simulador de reglas de automatización del hogar donde el usuario ajusta sensores virtuales y observa cómo responden las luces, el aire y la alarma.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado "Simulador de Casa Inteligente". Muestra una habitación con sensores (movimiento, temperatura, luz) que el usuario activa con controles, y reglas configurables tipo "si movimiento entonces encender luz". Al cambiar un sensor, actualiza el estado visual de luces, aire y alarma. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica en hardware: la IA puede dar código para una placa o librería distinta a la que tienes, o cableados peligrosos. No subas datos reales de cámaras, ubicaciones o rutinas de personas a las herramientas. Adapta a Dajabón con cortes eléctricos frecuentes (prever respaldo y reconexión), clima cálido y componentes realmente disponibles en el comercio local o fronterizo.
