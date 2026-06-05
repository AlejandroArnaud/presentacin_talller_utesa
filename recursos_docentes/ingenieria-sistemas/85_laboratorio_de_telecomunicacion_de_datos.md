# Laboratorio de Telecomunicación de Datos

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 10 · **Código:** INF-345

## Sobre la materia
Componente práctico de Telecomunicación de Datos: configuración de redes y direccionamiento IP, uso de simuladores (Cisco Packet Tracer, GNS3) y herramientas de diagnóstico (ping, traceroute, Wireshark), armado de cableado, análisis de tráfico capturado y documentación de prácticas. Competencias clave: configurar y diagnosticar redes con rigor, interpretar capturas reales y comunicar hallazgos en informes técnicos.

## Enfoque IA (taller)
La IA ayuda a preparar topologías, interpretar comandos y leer capturas de tráfico, pero el aprendizaje vive en la configuración real y en la captura que el estudiante toma en vivo. La integridad por diseño se logra con prácticas ejecutadas en simulador/equipo y bitácora de proceso con evidencia propia, no con detección.

## Prompts para el docente

```
Eres profesor del Laboratorio de Telecomunicación de Datos. Diseña una práctica de 2 horas
en Cisco Packet Tracer para configurar una red de dos subredes con un router, incluyendo
objetivos, topología, plan de direccionamiento IP, pasos de configuración y pruebas de
conectividad con ping y traceroute.
```

```
Genera una guía paso a paso para usar Wireshark en una práctica de principiantes: cómo
capturar tráfico, filtrar por protocolo (ICMP, HTTP, DNS), identificar las capas en un
paquete y 8 preguntas de análisis que el estudiante debe responder con SU propia captura.
```

```
Crea una rúbrica de 4 criterios para evaluar un informe de práctica de redes:
configuración correcta y funcional, calidad de la evidencia (capturas, pruebas de
conectividad), análisis del tráfico observado, y diagnóstico/solución de problemas. En
español, escala 1 a 4.
```

```
Toma la práctica "configuración de VLANs" y propón tres versiones según el nivel: guiada
(comandos dados), semiguiada (el estudiante decide el direccionamiento) y abierta (el
estudiante diseña la segmentación para un caso dado y la justifica).
```

```
Dame 8 preguntas de discusión que lleven al estudiante a explicar POR QUÉ falla una
conexión en su simulación (máscara incorrecta, gateway mal configurado, tabla de rutas) a
partir de su propia evidencia, en vez de solo reportar que "no hace ping".
```

## Ejercicios y actividades con IA
- **Diagnostica con la IA, decide tú.** Objetivo: troubleshooting real. El estudiante topa con un fallo de conectividad en su simulación, le describe a la IA los síntomas y su configuración, recibe hipótesis y prueba cuáles aplican realmente, documentando la causa confirmada. Rol de la IA: generar hipótesis a verificar en el simulador.
- **Lee tu propia captura.** Objetivo: análisis de tráfico. Tras capturar tráfico en Wireshark, el estudiante pide a la IA ayuda para interpretar SUS paquetes (qué protocolo, qué capa, qué significa), y confirma o corrige con la evidencia a la vista. Rol de la IA: asistente de lectura sobre datos propios.

## Evaluaciones auténticas
- **Práctica de configuración evaluada en vivo con informe (proceso + aplicada).** El estudiante arma y configura una topología funcional, demuestra la conectividad ante el docente y entrega un informe con capturas propias. *AIAS Nivel 3 (IA para apoyo en sintaxis y análisis, configuración y evidencia propias, declarado).* Mini-rúbrica: (1) configuración funcional, (2) evidencia (capturas/pruebas), (3) análisis del tráfico, (4) diagnóstico.
- **Reto de troubleshooting en simulador (aplicada + oral, sin IA).** El docente entrega una topología con fallas; el estudiante las encuentra y corrige en vivo explicando su razonamiento. *AIAS Nivel 1 (sin IA durante la evaluación).* Mini-rúbrica: (1) método de diagnóstico, (2) corrección efectiva, (3) explicación técnica, (4) rapidez razonable.

## Recurso interactivo en HTML
Una calculadora de subredes (subneteo) donde el estudiante ingresa una IP y un prefijo y ve red, broadcast, rango de hosts y máscara.

```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que sea
una calculadora de subredes: el usuario ingresa una dirección IPv4 y un prefijo CIDR (p.
ej. /26) y la app muestra la máscara, la dirección de red, la de broadcast, el rango de
hosts utilizables y la cantidad de hosts. En español, abrible offline en el navegador.
```

## Notas
La IA da comandos para una sintaxis o versión de equipo distinta a la del simulador y "supone" salidas que no coinciden con la real: exige que el estudiante valide cada comando y use SUS capturas, no salidas inventadas. No subas configuraciones reales con direcciones o credenciales, ni datos de estudiantes. Adapta las prácticas a los recursos del laboratorio de Dajabón (simuladores gratuitos como Packet Tracer si el equipo físico es limitado) y a topologías con sentido local (enlazar sedes, segmentar una red escolar).
