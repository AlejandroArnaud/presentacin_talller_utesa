# Blockchain, Criptomonedas y Metaverso (electiva optativa)

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** INF-027

## Sobre la materia
Tecnologías descentralizadas: estructura de la cadena de bloques, hashing y consenso (PoW, PoS), criptomonedas y wallets, contratos inteligentes (Solidity), tokens y NFT, y fundamentos de mundos virtuales (metaverso). Competencias clave: explicar y evaluar críticamente cuándo blockchain aporta valor real, programar un contrato inteligente básico y razonar sobre seguridad, costos y riesgos.

## Enfoque IA (taller)
La IA es excelente generando contratos en Solidity y explicaciones, pero también propaga hype y errores de seguridad costosos; el estudiante debe auditar, probar en testnet y separar la promesa del hecho. La integridad se diseña con análisis situados y defensa razonada, sin recurrir a detectores de IA.

## Prompts para el docente
```
Eres profesor de Blockchain, Criptomonedas y Metaverso para Ingeniería en Sistemas. Planifica una clase de 2 horas sobre contratos inteligentes en Solidity: qué son, anatomía de un contrato, despliegue en testnet con Remix y un ejemplo de token simple. Incluye objetivos, demo paso a paso y una práctica guiada.
```
```
Genera 5 casos de uso de blockchain evaluados con sentido crítico para el contexto dominicano: trazabilidad de café de exportación, registro de títulos de propiedad, remesas desde el exterior, certificados académicos UTESA verificables y pagos transfronterizos en Dajabón. Para cada uno, qué aporta blockchain de verdad y cuándo una base de datos normal bastaría.
```
```
Crea una rúbrica (1-4) para evaluar el análisis de un caso de uso de blockchain: justificación de por qué (o por qué no) usar blockchain, comprensión técnica de la solución, análisis de seguridad y costos, viabilidad real y claridad. En tabla.
```
```
Diferencia el ejercicio "programa un contrato inteligente" en tres niveles: con el contrato dado para solo desplegar y probar, con la especificación de funciones definida, y abierto exigiendo manejar un caso de seguridad (control de acceso, evitar reentrancy). Mantén el objetivo.
```
```
Dame 6 preguntas socráticas para que los estudiantes piensen críticamente sobre cripto y metaverso: ¿este problema necesita blockchain o es hype?, ¿qué pasa si se pierde la llave privada?, ¿quién asume el costo del gas?, ¿qué riesgos de seguridad tiene este contrato?
```

## Ejercicios y actividades con IA
- **Audita el contrato de la IA.** Objetivo: seguridad de smart contracts. El estudiante pide a la IA un contrato en Solidity, lo despliega en testnet (Remix) y busca fallos (sin control de acceso, vulnerable a reentrancy), corrigiéndolos y explicando el riesgo. Rol de la IA: borrador inseguro a auditar.
- **¿Blockchain o hype?** Objetivo: pensamiento crítico. El estudiante pide a la IA que defienda usar blockchain para un caso, y luego construye el contraargumento mostrando cuándo una base de datos tradicional es mejor. Rol de la IA: voz a favor que el estudiante debe refutar con criterio.
- **Verifica la explicación técnica.** Objetivo: separar verdad de mito. El estudiante pide a la IA cómo funciona el consenso PoS o un NFT, contrasta con fuentes confiables y corrige imprecisiones o afirmaciones exageradas. Rol de la IA: explicación a verificar.

## Evaluaciones auténticas
- **Debate de viabilidad con defensa en vivo (AIAS Nivel 2 – IA solo para explorar).** El estudiante defiende si un caso real (p. ej. títulos de propiedad en RD) debe usar blockchain y responde objeciones del docente sobre costos, gobernanza y seguridad. Mini-rúbrica: solidez del argumento técnico, análisis de riesgos y costos, respuesta a objeciones, honestidad sobre las limitaciones.
- **Proyecto de contrato con bitácora (AIAS Nivel 3 – IA asistida declarada).** Entrega un contrato inteligente desplegado en testnet más un registro de qué pidió a la IA, qué fallo de seguridad encontró y cómo lo corrigió. Mini-rúbrica: funcionamiento del contrato, seguridad del código, comprensión demostrada, honestidad sobre el uso de IA.

## Recurso interactivo en HTML
Idea: una mini cadena de bloques visual donde el usuario edita un bloque y ve cómo se rompen los hashes de toda la cadena.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías, usando SubtleCrypto para SHA-256) llamado "Cómo Funciona una Blockchain". Muestra 3-4 bloques encadenados con dato, hash previo y hash propio; al editar el dato de un bloque, recalcula su hash y marca en rojo todos los bloques posteriores como inválidos, mostrando por qué la cadena es inmutable. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica todo: la IA inventa precios de cripto, comisiones de gas, datos regulatorios y puede generar contratos con vulnerabilidades graves. Nunca uses llaves privadas, fondos reales ni mainnet en clase: solo testnets y wallets de prueba. No subas datos personales ni financieros a las herramientas. Adapta a Dajabón discutiendo casos realistas (remesas, café de exportación, comercio fronterizo) y la cautela ante estafas cripto comunes en la región.
