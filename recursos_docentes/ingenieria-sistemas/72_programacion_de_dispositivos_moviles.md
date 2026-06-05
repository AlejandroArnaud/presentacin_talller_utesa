# Programación de Dispositivos Móviles

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 8 · **Código:** INF-840

## Sobre la materia
Desarrollo de aplicaciones móviles: ciclo de vida de una app, diseño de interfaces y navegación, manejo de eventos, almacenamiento local, consumo de APIs, permisos y publicación. Competencias clave: construir una app funcional centrada en el usuario, integrar datos remotos y resolver los retos propios del entorno móvil (pantallas pequeñas, conectividad intermitente, recursos limitados).

## Enfoque IA (taller)
La IA genera componentes de interfaz, código y soluciones que el estudiante debe ejecutar en un dispositivo, depurar, adaptar al diseño y mejorar; el valor está en una app que funcione, no en pegar código. La integridad se diseña con defensa en vivo de la app y cambios imprevistos, sin detectores de IA.

## Prompts para el docente
```
Eres profesor de Programación de Dispositivos Móviles. Planifica una clase de 2 horas sobre navegación entre pantallas y paso de datos. Incluye objetivos, un ejemplo guiado, errores comunes (estado perdido, fugas de memoria) y un ejercicio práctico con su solución.
```
```
Propón 5 ideas de apps móviles REALES y útiles para Dajabón: precios del mercado fronterizo, turnos de una clínica, transporte hacia Santiago, registro de una cooperativa y reporte de incidencias del barrio. Para cada una, da las pantallas mínimas y los datos que manejaría.
```
```
Crea una rúbrica (1-4) para evaluar una app móvil estudiantil: funcionalidad, usabilidad en pantalla pequeña, manejo de errores y de conexión, calidad del código y experiencia de usuario. Formato tabla.
```
```
Diferencia el ejercicio "lista con detalle" en tres niveles: con plantilla de UI casi completa, con pistas, y abierto exigiendo almacenamiento local y manejo de modo sin conexión. Mantén el mismo objetivo.
```
```
Dame 6 preguntas de discusión para que los estudiantes razonen sobre decisiones de diseño móvil: qué mostrar primero, cómo manejar la falta de internet y por qué los permisos afectan la confianza del usuario.
```

## Ejercicios y actividades con IA
- **Depura la pantalla de la IA.** Objetivo: leer y corregir. El docente pide a la IA una pantalla con un bug (estado que no se actualiza, lista vacía); el estudiante la ejecuta, encuentra el fallo y lo arregla. Rol de la IA: generar el código fallido a diagnosticar.
- **Del boceto a la UI.** Objetivo: diseñar con criterio. El estudiante dibuja su interfaz, pide a la IA una versión en código y la ajusta a su boceto, justificando los cambios de usabilidad. Rol de la IA: borrador de UI a refinar.
- **Maneja la conexión.** Objetivo: robustez. El estudiante pide a la IA el consumo de una API y luego agrega, con su criterio, manejo de errores y estado "sin internet". Rol de la IA: base a endurecer.

## Evaluaciones auténticas
- **Demo en dispositivo con cambio en vivo (aplicada + oral).** El estudiante muestra su app funcionando y el docente pide una modificación en el momento (otra validación, otro estado de UI). *AIAS Nivel 3 (IA asistida declarada).* Rúbrica: funcionalidad, usabilidad, capacidad de modificar, explicación de la arquitectura.
- **Proyecto con bitácora de desarrollo (proceso).** App pequeña para una necesidad real de Dajabón más registro de qué pidió a la IA, qué cambió y por qué. *AIAS Nivel 3 (IA asistida declarada).* Rúbrica: funcionalidad y UX, calidad del código, manejo de conexión/errores, honestidad y reflexión sobre el uso de IA.

## Recurso interactivo en HTML
Idea: un prototipo navegable de la app en el navegador, simulando la pantalla de un teléfono.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS, sin librerías) que simule la pantalla de un teléfono y muestre un prototipo navegable de una app sencilla con 3 pantallas (lista, detalle y formulario) y navegación entre ellas con datos de ejemplo. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica ejecutando en un dispositivo o emulador: la IA puede usar APIs obsoletas o componentes inexistentes que compilan mal. No subir claves de API, datos personales ni trabajos identificables de estudiantes. Adapta a Dajabón priorizando apps útiles para el comercio fronterizo y servicios locales, y considera la conectividad intermitente: el manejo del modo sin conexión es un criterio real de evaluación.
