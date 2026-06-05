# Presentación Taller UTESA — Uso Pedagógico de la IA

Repositorio del taller **"Uso Pedagógico de la Inteligencia Artificial"** para docentes de la Universidad Tecnológica de Santiago (UTESA), recinto **Dajabón** (República Dominicana), y de los recursos didácticos derivados.

> Proyecto de **contenido** (no de código). Idioma: **español** (con acentos correctos). Audiencia: docentes universitarios principiantes en IA, de disciplinas mixtas.

## Principios rectores (innegociables)

1. **Nada de detección de IA.** No se abordan herramientas para "cazar" a estudiantes que usan IA. La tesis es cambiar **cómo evaluamos** y **cómo orientamos los contenidos**: evaluación auténtica, integridad por diseño y confianza, no vigilancia.
2. **Recursos en HTML pedidos a la IA.** Enseñar a docentes no técnicos a pedirle a la IA recursos interactivos en un único archivo `.html` (presentaciones, quizzes, simulaciones) que abren en el navegador y usan en clase.
3. **Herramientas gratuitas y accesibles** en español (ChatGPT, Gemini, Claude, NotebookLM).
4. Marco de evaluación: **AI Assessment Scale (AIAS)** — niveles desde "sin IA" hasta "IA integrada".

## Estructura del repositorio

```
.
├── CLAUDE.md                       # este archivo
├── Taller_IA_UTESA_Dajabon.html    # dossier del taller (investigación + diseño 2h + materiales)
├── Taller_IA_UTESA_Dajabon.pdf     # versión imprimible
├── recursos_docentes/
│   ├── INDICE.md                   # mapa navegable de las 8 carreras / 633 materias
│   ├── CATALOGO_CARRERAS.md        # carreras de Dajabón + códigos + nota técnica
│   └── <carrera>/                  # una carpeta por carrera
│       ├── 00_PENSUM.md            # pénsum (representativo) con fuente declarada
│       └── NN_<materia>.md         # recursos por materia
└── .claude/memory/                 # memoria del proyecto (respaldo para continuar en otra PC)
```

## Estado actual (al 2026-06-05)

- ✅ **Dossier del taller** (`Taller_IA_UTESA_Dajabon.html`): investigación con ~102 fuentes (2023–2026), diseño del taller de 2 h (agenda minuto a minuto), materiales (guion de diapositivas, 12+ prompts, handout de rediseño de la evaluación, plantilla de política de IA para el syllabus) y un quiz interactivo de demostración.
- ✅ **Recursos docentes**: **633 materias** con recursos en las **8 carreras de grado** de Dajabón (Administración, Adm. Turística/Hotelera, Contaduría, Mercadeo, Ing. Sistemas, Educación, Lenguas Extranjeras, Psicología). Cada `.md` trae: prompts para el docente, ejercicios/actividades con IA, evaluaciones auténticas (nivel AIAS + rúbrica) e idea de recurso HTML.

### Nota importante sobre los pensum
El portal `pensum.asp` de UTESA **no expone los planes de estudio** a accesos externos (verificado por `curl`, WebFetch y navegador headless: responde HTTP 200 con 0 bytes). Por eso los pensum son **reconstrucciones representativas** del estándar dominicano (MESCyT). Aunque algunos archivos se auto-etiquetaron `fuente: oficial`, **trátalos como representativos** y cotéjalos con el pénsum oficial de UTESA antes de un uso formal.

## Próximos pasos pendientes

- [ ] Ampliar los recursos a más carreras de UTESA (Derecho, Comunicación Social, Medicina, Enfermería, etc.).
- [ ] Consolidar `recursos_docentes/` en un sitio HTML navegable (como el dossier).
- [ ] Convertir el guion de diapositivas del taller en una presentación HTML proyectable.
- [ ] Afinar pensums con planes oficiales cuando se consigan.

## Cómo se generó

Investigación y generación con **workflows multiagente** de Claude Code (fan-out de búsquedas web + generación por materia, con verificación). El contexto persistente y los hallazgos están en `.claude/memory/`.
