# Catálogo de carreras de grado — UTESA, Recinto Dajabón

Base para la generación de recursos docentes vinculados al taller **"Uso Pedagógico de la Inteligencia Artificial"**.

> **Nota técnica.** El sistema de pensum en línea de UTESA (`pensum.asp`) no entrega contenido a accesos externos automatizados (responde vacío vía `curl`, WebFetch y navegador headless). Por eso los planes de estudio se reconstruyen como **pensums representativos** del estándar dominicano (lineamientos MESCyT) por carrera, validados con búsqueda web cuando hay fuentes. Cada carpeta incluye su `00_PENSUM.md` con la fuente declarada.

| # | Carrera | Código UTESA | Facultad | Cuatrim. | Carpeta |
|---|---------|--------------|----------|----------|---------|
| 1 | Administración de Empresas | ADML | Ciencias Económicas y Sociales | 12 | `administracion-empresas/` |
| 2 | Adm. de Empresas Turísticas y Hoteleras | TUHL | Ciencias Económicas y Sociales | 12 | `turismo-hoteleria/` |
| 3 | Contaduría Pública | CONL | Ciencias Económicas y Sociales | 12 | `contaduria-publica/` |
| 4 | Mercadeo | MERL | Ciencias Económicas y Sociales | 12 | `mercadeo/` |
| 5 | Ingeniería en Sistemas Computacionales | (s/d) | Arquitectura e Ingenierías | ~13 | `ingenieria-sistemas/` |
| 6 | Educación (mención Básica/Primaria) | EDBL/EPPL | Ciencias y Humanidades | 12 | `educacion/` |
| 7 | Lenguas Extranjeras | LEXL | Ciencias y Humanidades | 12 | `lenguas-extranjeras/` |
| 8 | Psicología | SICL | Ciencias y Humanidades | 12 | `psicologia/` |

**Oferta confirmada** desde el sistema corporativo UTESA (`utesa.edu`, junio 2026): el recinto Dajabón opera las áreas de Ciencias Económicas y Sociales, Ciencias y Humanidades y Arquitectura e Ingenierías, además del Departamento de Matemática. (UTESA también imparte Derecho, Comunicación Social y carreras de Ciencias de la Salud como Medicina y Enfermería en su sistema; pueden incorporarse en una fase posterior.)

Cada `<carrera>/<NN>_<materia>.md` contiene: prompts para el docente, ejercicios/actividades con IA, evaluaciones auténticas (con nivel AIAS y rúbrica) y una idea de recurso interactivo en HTML.
