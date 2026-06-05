# Fonética Francesa I

**Carrera:** Lenguas Extranjeras · **Cuatrimestre:** 6 · **Código:** FRA-604

## Sobre la materia

Introducción al sistema fonético-fonológico del francés: vocales orales y nasales, semivocales, el alfabeto fonético internacional (AFI), la liaison, el enchaînement, la "e" muda y los rasgos prosódicos. Desarrolla la capacidad de transcribir, percibir y producir sonidos franceses inexistentes en español, base de una pronunciación inteligible y natural.

## Enfoque IA (taller)

La IA ayuda a explicar contrastes fonéticos, generar pares mínimos y crear ejercicios de transcripción; el estudiante percibe, produce y se autoevalúa con audio real. La integridad se diseña con desempeño oral en vivo y transcripción supervisada, no con detección. La IA describe el sonido; el oído y la boca del estudiante lo dominan.

## Prompts para el docente

```
Eres profesor de fonética francesa. Planifica una clase de 60 min sobre las vocales nasales (/ɑ̃/, /ɛ̃/, /ɔ̃/), que no existen en español. Incluye explicación articulatoria sencilla, pares mínimos, ejercicios de discriminación auditiva y producción guiada. Anticipa los errores del hispanohablante (nasalizar de más o de menos, confundir las tres).
```

```
Genera 15 pares mínimos en francés para contrastar /y/ vs /u/ (ej. "rue" vs "roue") y /e/ vs /ɛ/. Da para cada par: la palabra, su transcripción AFI, el significado en español y una frase corta de ejemplo. Marca cuáles suelen confundir los hispanohablantes.
```

```
Crea una rúbrica de 4 criterios para evaluar la lectura en voz alta de un párrafo francés de nivel B1-B2. Niveles: Logrado / En proceso / Inicial. Foco en vocales nasales, liaison y enchaînement, "e" muda y ritmo/entonación.
```

```
Toma esta lista de palabras con liaison y dame tres versiones de ejercicio: una para quien recién aprende el AFI, una intermedia con frases, y una de reto con un texto corto donde el estudiante marque todas las liaisons obligatorias, prohibidas y facultativas. Mismo objetivo fonético.
```

```
Dame 6 preguntas de discusión para que los estudiantes reflexionen sobre por qué ciertos sonidos franceses les cuestan, comparando con el español y con su acento local dominicano. Que lleven a hipótesis sobre transferencia fonética, no a respuestas memorizadas.
```

## Ejercicios y actividades con IA

- **Transcribir y verificar.** *Objetivo:* dominar el AFI. *Estudiante:* pide a ChatGPT 10 palabras francesas, las transcribe él mismo al AFI y luego pide a la IA que señale solo los errores, contrastando con un diccionario con audio. *IA:* genera el corpus y marca fallos; el estudiante transcribe primero.
- **Caza de la liaison.** *Objetivo:* aplicar liaison/enchaînement. *Estudiante:* pide a Gemini un texto corto sin marcas, marca a mano dónde hay liaison y de qué tipo, y verifica escuchando un audio real (Forvo). *IA:* aporta el texto; el oído valida.
- **Mi espejo articulatorio.** *Objetivo:* producir vocales nasales. *Estudiante:* pide a la IA una explicación articulatoria de /ɑ̃/, la practica frente a cámara y se autoevalúa; luego la demuestra en vivo. *IA:* describe la posición; el estudiante ejecuta.

## Evaluaciones auténticas

- **Lectura en voz alta + autoanálisis (en vivo).** El estudiante lee un párrafo francés y luego señala oralmente sus propios aciertos y errores fonéticos. **AIAS Nivel 1 (Sin IA en el examen):** la IA solo apoyó la práctica previa. *Mini-rúbrica:* vocales nasales / liaison y enchaînement / "e" muda y ritmo / conciencia fonética del autoanálisis.
- **Cuaderno de transcripción AFI con audios.** Portafolio de palabras transcritas y grabadas; el estudiante declara dónde usó la IA. **AIAS Nivel 2 (IA para apoyo, declarado):** *Mini-rúbrica:* exactitud de transcripción AFI / correspondencia audio-transcripción / progreso entre entregas / declaración honesta del uso de IA.

## Recurso interactivo en HTML

Una tabla interactiva de vocales francesas con AFI y audio.

```
Crea UN archivo .html autocontenido (sin internet, sin librerías externas) titulado "Voyelles françaises". Muestra una cuadrícula de las vocales orales y nasales del francés; cada celda tiene el símbolo AFI, una palabra-ejemplo y un botón que, con speechSynthesis en francés, pronuncia la palabra. Incluye una sección de 10 pares mínimos donde el usuario escucha dos palabras y elige cuál oyó, con puntaje final. Diseño limpio tipo tabla fonética, colores suaves.
```

## Notas

- Verifica siempre la pronunciación contra audio humano real (Forvo, Larousse audio); speechSynthesis y la IA pueden errar en vocales nasales y liaison.
- No subas grabaciones de estudiantes con sus nombres; usa iniciales o seudónimos.
- Aprovecha que en Dajabón muchos estudiantes ya oyen criollo haitiano (base francófona): úsalo como puente para vocales nasales y ritmo, sin asumir que el criollo equivale al francés estándar.
