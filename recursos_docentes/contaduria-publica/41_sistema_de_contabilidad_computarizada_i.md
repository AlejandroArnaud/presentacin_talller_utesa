# Sistema de Contabilidad Computarizada I

**Carrera:** Contaduría Pública · **Cuatrimestre:** 6 · **Código:** INF-406

## Sobre la materia
Asignatura aplicada que enseña a llevar la contabilidad con software: configuración del catálogo de cuentas, registro de comprobantes, manejo de módulos (compras, ventas, inventario, bancos), generación de reportes y estados financieros, y emisión de comprobantes fiscales (NCF) en sistemas usados en República Dominicana. Competencias clave: parametrizar un sistema contable, operar sus módulos y validar la información que produce.

## Enfoque IA (taller)
La IA funciona como manual interactivo y asistente de resolución de problemas del software, mientras el estudiante demuestra el dominio operando el sistema en vivo. Integridad por diseño: se evalúa la ejecución real en el software y la validación de los reportes, no se rastrea el uso de IA.

## Prompts para el docente
```
Actúa como didacta de sistemas contables de nivel universitario. Planifica una clase práctica de 90 min sobre la creación y parametrización del catálogo de cuentas en un sistema contable computarizado para sexto cuatrimestre. Incluye una guía paso a paso, un ejercicio práctico y criterios de evaluación.
```
```
Genera 4 escenarios reales de operación en un sistema contable para un comercio de Dajabón (registrar una factura de compra con NCF, una venta a crédito, una nota de débito por devolución, una conciliación bancaria) y, para cada uno, los pasos esperados y los errores comunes que cometen los estudiantes.
```
```
Crea una rúbrica analítica (4 niveles) para evaluar el manejo del software contable: correcta parametrización, exactitud en el registro de comprobantes, uso apropiado de los módulos y validación de los reportes generados.
```
```
Diferencia esta práctica de registro en el sistema [pego la práctica] en tres niveles: refuerzo (registrar 5 comprobantes simples), estándar (operar dos módulos y emitir un reporte), desafío (cerrar un período y generar estados financieros con NCF).
```
```
Dame 8 preguntas socráticas que lleven a mis estudiantes a discutir por qué un sistema mal parametrizado produce reportes erróneos y qué responsabilidad fiscal implica eso ante la DGII.
```

## Ejercicios y actividades con IA
- **Resuelve el error del sistema.** Objetivo: diagnóstico técnico. El estudiante describe a la IA un mensaje de error o un reporte descuadrado y evalúa si la solución propuesta es válida antes de aplicarla en el software. La IA: hipótesis de solución; el estudiante: técnico que valida.
- **Valida el reporte.** Objetivo: control de calidad de datos. El estudiante genera un reporte en el sistema, pide a la IA cómo interpretarlo y verifica manualmente si las cifras cuadran con los comprobantes. La IA: guía de lectura; el estudiante: auditor del dato.

## Evaluaciones auténticas
- **Ciclo operativo completo en el software (aplicada).** El estudiante parametriza, registra un lote de comprobantes con datos nuevos y genera los estados financieros, todo en vivo en el sistema. *AIAS Nivel 1 (Sin IA durante la operación; permitida solo para estudiar antes).* Rúbrica: parametrización / exactitud de registros / uso de módulos / reportes correctos.
- **Demostración guiada del proceso (oral + proceso).** El estudiante opera el sistema mientras explica cada paso y por qué lo hace ante preguntas del docente. *AIAS Nivel 2 (IA para preparar; ejecución y explicación propias).* Rúbrica: dominio operativo / justificación de pasos / validación de resultados.

## Recurso interactivo en HTML
Simulador básico de captura de comprobantes con validación de cuadre y NCF.
```
Crea UN archivo .html autocontenido (HTML/CSS/JS en línea, sin librerías externas) llamado "captura_comprobantes.html". Simula la pantalla de registro de un sistema contable: el estudiante ingresa un comprobante (fecha, NCF, cuentas, débito y crédito). El sistema valida que la partida cuadre, que el NCF tenga formato válido (11 dígitos) y muestra el asiento resultante; lleva puntaje y barra de progreso. En español, diseño tipo software contable.
```

## Notas
Verifica los pasos que indica la IA: puede describir menús de software que no existen o mezclar funciones de sistemas distintos (QuickBooks, ContaPlus, etc.). Enseña a no subir bases de datos contables ni datos de clientes a herramientas de IA. Adapta los ejemplos al contexto fiscal dominicano (NCF, formatos 606/607 de la DGII) y a los negocios de Dajabón.
