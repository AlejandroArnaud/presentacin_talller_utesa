# Contabilidad I (electiva optativa)

**Carrera:** Ingeniería en Sistemas Computacionales · **Cuatrimestre:** 9 · **Código:** CON-118

## Sobre la materia
Electiva optativa que introduce los fundamentos de la contabilidad financiera: ecuación contable, cuentas y partida doble, asientos en el libro diario, mayorización, balance de comprobación y estados financieros básicos (balance general y estado de resultados). Competencias clave: registrar operaciones con la partida doble, interpretar estados financieros y conectar la contabilidad con sistemas de información empresariales.

## Enfoque IA (taller)
La IA explica conceptos, propone asientos y arma estados como borrador, pero comete errores de clasificación y cuadre: el estudiante debe verificar que cada asiento balancee y respete las normas. La integridad se diseña con casos prácticos resueltos a mano y defensa de los registros, sin detectores.

## Prompts para el docente

```
Planifica una clase de 2 horas sobre la partida doble y el registro en el libro diario para estudiantes de Ingeniería en Sistemas sin formación contable previa. Incluye una analogía con sistemas (entradas/salidas), 4 transacciones de ejemplo registradas paso a paso y un ejercicio guiado con su solución.
```

```
Genera 6 transacciones REALES de un negocio de Dajabón (un colmado o una ferretería fronteriza): compra a crédito, venta en efectivo, pago de servicios, préstamo bancario, compra de mobiliario, retiro del dueño. Para cada una indica las cuentas afectadas y si se debita o acredita.
```

```
Crea una rúbrica (1-4) para evaluar un ciclo contable básico: corrección de los asientos en el diario, exactitud de la mayorización, cuadre del balance de comprobación, elaboración de los estados financieros y orden de la presentación. Formato tabla, en español.
```

```
Diferencia el ejercicio "registra las operaciones del mes de una tienda" en tres niveles: básico (con el plan de cuentas y las cuentas ya identificadas), intermedio (solo las transacciones narradas) y avanzado (incluye un ajuste por depreciación). Mantén el mismo objetivo.
```

```
Dame 6 preguntas socráticas para que el estudiante justifique por qué una cuenta va al debe o al haber, qué significa que el balance "cuadre" y cómo una transacción afecta simultáneamente el balance general y el estado de resultados.
```

## Ejercicios y actividades con IA
- **Caza el asiento mal cuadrado.** Objetivo: verificar la partida doble. El docente pide a la IA un conjunto de asientos con un error de cuadre o clasificación; el estudiante lo detecta, lo corrige y explica la regla violada. Rol de la IA: generadora de asientos defectuosos a auditar.
- **Del relato al registro.** Objetivo: traducir operaciones. El estudiante registra a mano las transacciones de un colmado, luego pide la versión de la IA y compara cuentas y montos justificando las diferencias. Rol de la IA: contraste, no fuente única.
- **Interpreta el estado financiero.** Objetivo: leer resultados. El estudiante pide a la IA un estado de resultados simple y responde si el negocio ganó o perdió y por qué, verificando los cálculos. Rol de la IA: borrador a interpretar críticamente.

## Evaluaciones auténticas
- **Ciclo contable completo de un negocio local (AIAS Nivel 2 — IA solo para explorar conceptos).** A partir de transacciones reales de un comercio de Dajabón, el estudiante elabora a mano diario, mayor, balance de comprobación y estados financieros. Mini-rúbrica: (1) corrección de los asientos, (2) cuadre del balance, (3) estados bien elaborados, (4) orden y presentación.
- **Defensa del registro con transacción sorpresa (AIAS Nivel 1 — sin IA en la sustentación).** El estudiante explica sus asientos y el docente añade una operación nueva en vivo que debe registrar y justificar. Mini-rúbrica: (1) dominio de la partida doble, (2) clasificación correcta de cuentas, (3) justificación verbal, (4) manejo del caso nuevo.

## Recurso interactivo en HTML
Idea: un simulador de partida doble donde se registra una transacción y la app valida el cuadre.

```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías) llamado "Simulador de Partida Doble". El usuario elige cuentas y montos para el debe y el haber de una transacción; la app valida en tiempo real si el asiento cuadra (debe = haber), muestra el efecto en la ecuación contable (Activo = Pasivo + Capital) y da retroalimentación. En español, funciona offline al abrir en el navegador.
```

## Notas
Verifica los cálculos: la IA equivoca clasificaciones de cuentas y puede presentar balances que no cuadran o confundir normas locales con las de otros países. No subir cifras financieras reales de empresas o personas a las herramientas. Usa negocios típicos de Dajabón (colmados, ferreterías, importadoras fronterizas) para que las transacciones sean cercanas y el estudiante entienda la utilidad práctica de la contabilidad.
