---
name: recursos-docentes-utesa
description: "Generación de recursos didácticos por carrera/materia de UTESA Dajabón (prompts, ejercicios, evaluaciones, HTML) en archivos .md"
metadata: 
  node_type: memory
  type: project
  originSessionId: 7d36a47b-6ca6-44f0-a738-fbbf67aaa57c
---

Fase derivada del [[taller-utesa-ia-pedagogica]]: generar, por cada materia de las carreras de UTESA Dajabón, recursos didácticos (prompts, ejercicios, evaluaciones auténticas con nivel AIAS, ideas de recurso HTML) y guardarlos en archivos `.md` reutilizables. Ejecutado con workflows.

**Hallazgo técnico (no obvio):** el portal de pensum de UTESA (`pensum.asp` en `utesa.edu/webutesa/progaca`) NO entrega contenido a accesos externos: responde HTTP 200 con 0 bytes vía curl, WebFetch y Chrome headless (`--dump-dom`). En cambio, `carreraf.asp?facul=<FACULTAD>` SÍ lista las carreras con sus códigos de pensum. Por eso los pensums se reconstruyen como **representativos** del estándar dominicano (MESCyT), no scrapeados. Facultades válidas para el parámetro: `CIENCIAS+Y+HUMANIDADES`, `CIENCIAS+ECONOMICAS+Y+SOCIALES`, `CIENCIAS+DE+LA+SALUD` (la de ingenierías no se resolvió por nombre).

**Carreras de grado de Dajabón (8):** Administración de Empresas (ADML), Adm. Turística/Hotelera (TUHL), Contaduría (CONL), Mercadeo (MERL), Ing. Sistemas Computacionales, Educación (EDBL), Lenguas Extranjeras (LEXL), Psicología (SICL).

**Estructura:** `recursos_docentes/<carrera-slug>/00_PENSUM.md` + `NN_<materia>.md` por materia. Catálogo en `recursos_docentes/CATALOGO_CARRERAS.md`.

**Estado: COMPLETO para las 8 carreras de Dajabón** — 633 materias con recursos, generadas en 3 tandas de workflow (T1: Educación+Psicología; T2: Administración+Contaduría+Mercadeo; T3: Turismo+Ing.Sistemas+Lenguas). Índice maestro en `recursos_docentes/INDICE.md`; total 643 archivos .md. Opcional futuro: ampliar a toda UTESA (Derecho, Comunicación Social, Medicina, Enfermería, etc.).

**Cautela:** varios `00_PENSUM.md` se auto-etiquetaron `fuente: oficial`, pero como `pensum.asp` no es accesible se deben tratar como **representativos**; cotejar con el pénsum oficial impreso de UTESA antes de uso formal.

**Why:** el objetivo del usuario pide cobertura "por cada materia" (~380 materias); el enfoque incremental por tandas permite validar el formato y conservar progreso (los agentes escriben a disco) antes de escalar.
**How to apply:** reutilizar el script de workflow `recursos-docentes-utesa-dajabon` cambiando la lista `PILOTO`; cada `.md` sigue la plantilla (prompts, ejercicios, evaluación AIAS+rúbrica, recurso HTML) derivada del marco del taller.
