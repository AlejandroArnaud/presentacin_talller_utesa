# Seguridad Informática

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 11 · **Código:** INF-820

## Sobre la materia
Estudia la protección de sistemas y datos: principios CIA (confidencialidad, integridad, disponibilidad), criptografía, control de acceso y autenticación, vulnerabilidades comunes (OWASP, inyección, XSS), gestión de riesgos y respuesta a incidentes. Desarrolla competencias de pensamiento adversarial, análisis de riesgos y diseño de defensas, junto con la ética profesional del hacking responsable.

## Enfoque IA (taller)
La IA explica vectores de ataque y genera análisis de riesgo o configuraciones defensivas que el estudiante debe validar contra estándares y probar en entorno controlado: el reto es pensar como atacante y defensor, no obtener una respuesta. La integridad se logra evaluando el análisis de amenazas, la justificación de controles y la defensa ética, no la entrega de texto generado.

## Prompts para el docente
```
Eres profesor de Seguridad Informática de undécimo cuatrimestre. Planifica una clase de 90 min sobre el OWASP Top 10, enfocada en inyección SQL: objetivos, cómo funciona el ataque, una demostración descrita en entorno controlado, y las defensas (consultas parametrizadas, validación). Incluye advertencia ética.
```
```
Genera 4 escenarios de incidentes de seguridad realistas para analizar (phishing a empleados de una pyme, ransomware en una clínica, fuga de datos de clientes, acceso no autorizado por contraseña débil). Para cada uno da el contexto, el impacto y preguntas de análisis, sin instrucciones para causar daño.
```
```
Crea una rúbrica de 4 criterios para evaluar un análisis de riesgos o plan de seguridad del estudiante: identificación de amenazas y activos, valoración del riesgo, pertinencia de los controles propuestos y consideración ético-legal. Escala 1-4.
```
```
Diferencia la explicación de "cifrado simétrico vs asimétrico" en tres niveles: estudiante que confunde cifrado con codificación, estudiante que ya entiende llaves y estudiante adelantado que razona sobre PKI y firma digital.
```
```
Genera 8 preguntas socráticas para debatir los dilemas éticos del hacking (divulgación responsable, pentesting con permiso, doble uso del conocimiento ofensivo) y la responsabilidad profesional del ingeniero.
```

## Ejercicios y actividades con IA
- **Audita la configuración "segura" de la IA.** Objetivo: evaluar defensas. El estudiante pide a la IA una configuración de seguridad (servidor, firewall, política de contraseñas), la contrasta con buenas prácticas (CIS, OWASP) y detecta debilidades o falsas garantías. Rol de la IA: dar un borrador a auditar críticamente.
- **Modelado de amenazas asistido.** Objetivo: pensar adversarialmente. Sobre un sistema hipotético, el estudiante usa la IA para enumerar amenazas (estilo STRIDE), luego prioriza por riesgo real y propone controles, justificando qué descarta. Rol de la IA: generar una lista amplia a filtrar con criterio.

## Evaluaciones auténticas
- **Evaluación de seguridad de un sistema (aplicada + proceso).** El estudiante analiza un sistema dado (o una app propia en laboratorio), identifica vulnerabilidades, las documenta y propone mitigaciones, todo en entorno autorizado. *AIAS Nivel 3 (IA para apoyo, contribución declarada).* Rúbrica: cobertura de amenazas, valoración del riesgo, calidad de las mitigaciones, ética y alcance autorizado.
- **Defensa oral de un plan de seguridad (oral).** Ante un nuevo vector de ataque planteado en vivo, el estudiante explica cómo lo detectaría y mitigaría. *AIAS Nivel 2 (IA solo para estudio previo, declarada).* Rúbrica: comprensión de los principios CIA, razonamiento adversarial, justificación de controles, claridad.

## Recurso interactivo en HTML
Un simulador de fortaleza de contraseñas y ataques: el usuario prueba contraseñas y ve cómo el largo y la entropía cambian el tiempo estimado para romperlas.
```
Crea UN archivo .html autocontenido (HTML, CSS y JS, sin dependencias externas) que evalúe la fortaleza de una contraseña: el usuario escribe una y ve su entropía estimada, los criterios que cumple (largo, mayúsculas, símbolos) y una estimación didáctica del tiempo para romperla por fuerza bruta. En español, abrible offline. No transmite ni guarda lo escrito.
```

## Notas
Verifica las recomendaciones de la IA contra estándares actuales: sugiere prácticas obsoletas (algoritmos débiles, MD5, configuraciones inseguras) presentadas como seguras; contrastar con OWASP/NIST es esencial. Mantén toda práctica ofensiva en laboratorio aislado y con autorización; nunca contra sistemas reales sin permiso. No subas datos personales ni credenciales reales. Adapta a Dajabón con casos de pymes, clínicas y comercios fronterizos, y enfatiza la ética profesional y el marco legal dominicano (Ley 53-07 sobre crímenes de alta tecnología).
