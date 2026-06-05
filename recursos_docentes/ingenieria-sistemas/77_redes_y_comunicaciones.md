# Redes y Comunicaciones

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** INF-411

## Sobre la materia

Estudia los fundamentos de las redes de datos: modelos OSI y TCP/IP, medios y topologías, direccionamiento IP y subredes, enrutamiento y conmutación, protocolos de aplicación y seguridad básica. Competencias clave: diseñar y direccionar una red, diagnosticar fallos de conectividad y razonar sobre el flujo de datos entre capas.

## Enfoque IA (taller)

La IA explica protocolos, genera escenarios y ayuda a planear subredes, pero el estudiante debe verificar cálculos, validar configuraciones y diagnosticar con evidencia. La integridad se diseña con resolución en vivo de fallos y cálculo de subredes a mano, no con detección de IA.

## Prompts para el docente

```
Eres profesor de Redes y Comunicaciones. Planifica una clase de 2 horas sobre el modelo OSI. Incluye objetivos, una analogía cotidiana (enviar una carta), qué hace cada capa con un ejemplo concreto de protocolo, y 3 ejercicios de "en qué capa ocurre esto".
```
```
Genera 5 problemas de subneteo (VLSM y máscaras) con contexto real: red para el laboratorio de UTESA Dajabón con 4 segmentos de tamaños distintos. Da el requerimiento de hosts por segmento y la solución (subredes, máscaras, rangos) por separado.
```
```
Crea una rúbrica (1-4) para evaluar el diseño de una red pequeña: corrección del esquema de direccionamiento, elección de topología y equipos, segmentación/seguridad básica, y claridad del diagrama y la documentación.
```
```
Diferencia un ejercicio de "diseñar la red de una oficina" en tres niveles: con diagrama base dado, con requisitos de hosts a calcular, y abierto añadiendo VLANs y un enlace redundante. Mantén el objetivo.
```
```
Dame 6 preguntas socráticas para que el estudiante razone por qué un ping falla aunque el cable esté conectado, recorriendo causas capa por capa (física, enlace, red, transporte).
```

## Ejercicios y actividades con IA

- **Verifica el subneteo de la IA.** Objetivo: dominar el cálculo. El estudiante pide a la IA un plan de subredes, recalcula a mano máscaras y rangos, y corrige cualquier error de la IA explicando la causa. Rol de la IA: borrador a comprobar.
- **Diagnóstico guiado de fallos.** Objetivo: razonar por capas. La IA describe un síntoma de red; el estudiante propone hipótesis ordenadas por capa OSI y comandos para confirmarlas. Rol de la IA: generadora del escenario de falla.
- **Explica el protocolo, simplifica.** Objetivo: comprender. El estudiante pide a la IA cómo funciona TCP (handshake, control de flujo), lo reexplica con un diagrama propio y señala qué simplificó la IA. Rol de la IA: tutor a contrastar.

## Evaluaciones auténticas

- **Diseño de red para un caso local (aplicada, AIAS Nivel 3 – IA asistida declarada).** El estudiante diseña y direcciona la red de un negocio o institución de Dajabón y entrega diagrama, plan de subredes y bitácora de IA. Rúbrica: corrección del direccionamiento, idoneidad del diseño, seguridad/segmentación, honestidad sobre el uso de IA.
- **Diagnóstico oral con variación (oral, AIAS Nivel 1 – Sin IA durante la prueba).** Ante una falla descrita en vivo, el estudiante razona el troubleshooting capa por capa. Rúbrica: orden lógico del diagnóstico, dominio de protocolos, uso correcto de comandos, claridad al explicar.

## Recurso interactivo en HTML

Idea: una calculadora de subredes que muestra paso a paso cómo se obtienen máscara, rango y broadcast.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) que sea una calculadora de subredes. El usuario ingresa una IP y un prefijo (CIDR) y ve la máscara, la dirección de red, el rango de hosts y el broadcast, con una explicación binaria paso a paso. En español, abrible offline en el navegador.
```

## Notas

Verifica todo cálculo de la IA recalculándolo: confunde con frecuencia rangos, máscaras y direcciones reservadas. No subas topologías, IPs internas reales ni credenciales de la red de la institución. Adapta los casos a Dajabón (laboratorio de UTESA, comercios, conectividad fronteriza) y considera que algunas prácticas pueden hacerse en simuladores gratuitos si no hay equipos físicos.
