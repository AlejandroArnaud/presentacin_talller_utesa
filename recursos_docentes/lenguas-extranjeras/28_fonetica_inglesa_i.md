# Fonética Inglesa I

**Carrera:** Lenguas Extranjeras · **Cuatrimestre:** 5 · **Código:** ING-260

## Sobre la materia

Introducción a la fonética y fonología del inglés: el alfabeto fonético internacional (IPA), vocales (incluyendo el *schwa* /ə/ y vocales largas/cortas), diptongos, consonantes problemáticas para hispanohablantes (/θ/, /ð/, /v/, /z/, /ʃ/) y nociones de acento de palabra. Desarrolla la capacidad de transcribir, percibir y producir sonidos con precisión articulatoria.

## Enfoque IA (taller)

La IA explica puntos de articulación, genera pares mínimos y transcribe a IPA; el estudiante verifica contra un diccionario con audio porque la IA puede errar símbolos. La integridad se diseña con desempeño oral en vivo y transcripción supervisada, no con detección. La IA produce el material; el estudiante percibe, articula y corrige.

## Prompts para el docente

```
Eres fonetista y profesor de inglés. Planifica una clase de 90 min para hispanohablantes sobre el sonido /θ/ (think) y su contraste con /s/, /t/ y /f/. Incluye descripción articulatoria sencilla, pares mínimos, ejercicios de discriminación auditiva, un trabalenguas y una actividad de producción en vivo. Lista los errores típicos del hispanohablante.
```

```
Genera 12 pares mínimos en inglés para distinguir /iː/ (sheep) de /ɪ/ (ship), con su transcripción IPA y una frase de ejemplo cada uno. Ordénalos de fácil a difícil para un estudiante de Dajabón sin contacto previo con angloparlantes.
```

```
Crea una rúbrica de 4 criterios para evaluar la lectura en voz alta de un párrafo corto en inglés. Niveles: Logrado / En proceso / Inicial. Evalúa producción de sonidos objetivo (/θ/, /v/, /z/), schwa en sílabas átonas, acento de palabra y ritmo general.
```

```
Toma el ejercicio de discriminar /b/ vs /v/ y dame tres niveles: para quien no oye la diferencia, para quien la oye pero no la produce, y un reto con palabras y frases rápidas. Mismo objetivo de percepción-producción.
```

```
Dame 8 preguntas de discusión para que estudiantes reflexionen sobre "¿por qué mi pronunciación delata mi lengua materna y eso importa (o no) para comunicarme?", con foco en inteligibilidad más que en acento nativo.
```

## Ejercicios y actividades con IA

- **Transcripción auditada.** *Objetivo:* dominar IPA. *Estudiante:* pide a la IA la transcripción de 10 palabras, luego la coteja con el diccionario Cambridge y marca dónde la IA falló. *IA:* propone transcripciones; el estudiante valida contra fuente fiable.
- **Mi minimal-pair drill.** *Objetivo:* discriminación auditiva. *Estudiante:* pide a ChatGPT 10 pares mínimos de un sonido difícil, los escucha con audio real y los clasifica. *IA:* genera el set; la percepción es del estudiante.
- **Diagnóstico de mi acento.** *Objetivo:* autoconciencia articulatoria. *Estudiante:* describe a la IA qué sonidos le cuestan y pide rutina de práctica; graba antes/después en vivo. *IA:* sugiere ejercicios; la mejora se demuestra oralmente.

## Evaluaciones auténticas

- **Lectura en voz alta + explicación articulatoria (en vivo).** El estudiante lee un párrafo y explica cómo articula tres sonidos objetivo. **AIAS Nivel 1 (Sin IA en el examen; IA solo para practicar antes):** *Mini-rúbrica:* precisión de sonidos objetivo / acento de palabra correcto / inteligibilidad / explicación articulatoria correcta.
- **Portafolio de transcripciones IPA verificadas.** Transcribe 15 palabras y documenta qué corrigió tras consultar el diccionario. **AIAS Nivel 3 (IA como borrador, verificación obligatoria documentada):** *Mini-rúbrica:* exactitud final del IPA / detección de errores de la IA / uso de la fuente / consistencia de símbolos.

## Recurso interactivo en HTML

Un entrenador de pares mínimos con audio para sonidos difíciles del inglés.

```
Crea UN archivo .html autocontenido (sin librerías externas) que entrene pares mínimos de inglés (ship/sheep, think/sink, very/berry). Muestra una palabra, la pronuncia con speechSynthesis en inglés, y el estudiante elige cuál de dos opciones escuchó; valida, lleva puntaje y muestra el IPA de ambas al responder. Incluye 20 ítems editables en un array y botones grandes. Diseño limpio.
```

## Notas

- Verifica SIEMPRE los símbolos IPA y la pronunciación con Cambridge Dictionary o Forvo; la IA confunde con frecuencia símbolos fonéticos.
- La voz sintética (speechSynthesis) es una guía, no un modelo perfecto: contrasta con hablantes nativos cuando sea posible.
- En Dajabón hay poco contacto cotidiano con angloparlantes; usa audio auténtico y prioriza inteligibilidad sobre "acento nativo".
