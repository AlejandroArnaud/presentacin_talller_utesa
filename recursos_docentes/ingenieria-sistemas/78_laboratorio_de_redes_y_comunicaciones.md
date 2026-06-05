# Laboratorio de Redes y Comunicaciones

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** INF-412

## Sobre la materia

Componente práctico de Redes y Comunicaciones: armado de cableado, configuración de switches y routers, simulación en Packet Tracer/GNS3, captura de tráfico con Wireshark, pruebas de conectividad y documentación de prácticas. Competencias clave: implementar y verificar una red real o simulada, diagnosticar con herramientas y documentar evidencia técnica.

## Enfoque IA (taller)

La IA sugiere comandos de configuración y ayuda a interpretar capturas, pero el estudiante debe ejecutar, verificar la evidencia (pings, tablas, capturas) y explicar qué observó. La integridad se diseña evaluando la evidencia real de la práctica y la defensa en vivo, no con detección de IA.

## Prompts para el docente

```
Eres instructor de Laboratorio de Redes. Planifica una práctica de 2 horas en Packet Tracer: dos VLANs con enrutamiento inter-VLAN. Incluye objetivo, topología sugerida, pasos de configuración, comandos de verificación y 3 criterios de evidencia que el estudiante debe capturar.
```
```
Genera 4 guías de práctica con escenarios para Dajabón: conectar dos salas del laboratorio de UTESA, configurar DHCP para un colmado con varios dispositivos, segmentar la red de una clínica, y simular acceso entre dos sucursales. Da topología y resultado esperado por separado.
```
```
Crea una rúbrica (1-4) para evaluar un informe de laboratorio de redes: corrección de la configuración, evidencia de verificación (capturas/pings), diagnóstico de problemas encontrados, y claridad de la documentación.
```
```
Diferencia una práctica de "configurar enrutamiento estático" en tres niveles: con la mitad de los comandos dados, con comentarios a completar, y abierta añadiendo una ruta de respaldo. Mantén el objetivo.
```
```
Dame 6 preguntas socráticas para que el estudiante interprete una captura de Wireshark, razonando qué protocolo es, qué capa, y si el comportamiento es normal o un síntoma de problema.
```

## Ejercicios y actividades con IA

- **Comandos de la IA, verificación propia.** Objetivo: configurar y comprobar. El estudiante pide a la IA la configuración de un router, la aplica en Packet Tracer y valida con `show` y `ping`, corrigiendo lo que falle. Rol de la IA: borrador de configuración a verificar.
- **Interpreta la captura juntos.** Objetivo: leer tráfico. El estudiante captura paquetes reales, pide a la IA ayuda para interpretar un campo y luego explica con sus palabras qué pasó en la red. Rol de la IA: tutor de interpretación.
- **Diagnostica la práctica rota.** Objetivo: troubleshooting. El docente entrega una topología con un fallo; el estudiante usa a la IA para listar hipótesis y las confirma con comandos. Rol de la IA: generadora de hipótesis a validar.

## Evaluaciones auténticas

- **Práctica implementada con evidencia (aplicada, AIAS Nivel 3 – IA asistida declarada).** El estudiante construye una topología funcional, entrega capturas de verificación y bitácora de uso de IA. Rúbrica: configuración correcta, calidad de la evidencia, diagnóstico de problemas, honestidad sobre el uso de IA.
- **Defensa práctica en vivo (oral + aplicada, AIAS Nivel 1 – Sin IA durante la prueba).** El estudiante reproduce o modifica una configuración ante el docente y explica cada comando. Rúbrica: dominio de los comandos, capacidad de modificar, verificación con evidencia, claridad al explicar.

## Recurso interactivo en HTML

Idea: una guía interactiva de comandos donde el usuario elige un objetivo (configurar VLAN, ver tabla de rutas) y ve el comando con su explicación.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que sea una "chuleta interactiva" de comandos de red. El usuario elige un objetivo de una lista (configurar IP, crear VLAN, verificar conectividad) y la página muestra el comando, una explicación y el resultado esperado. En español, abrible offline en el navegador.
```

## Notas

Verifica en el simulador antes de confiar: la IA puede dar comandos de sintaxis incorrecta o de otra versión de IOS. No subas configuraciones reales, IPs internas ni credenciales del laboratorio. Adapta las prácticas a Dajabón (salas de UTESA, comercios, salud) y, si faltan equipos físicos, usa Packet Tracer o GNS3 gratuitos para garantizar acceso equitativo.
