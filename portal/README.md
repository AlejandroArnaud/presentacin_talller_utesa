# Portal de Recursos Docentes — UTESA Dajabón

SPA estática que consolida el taller *Uso Pedagógico de la IA*, las 633 materias de las 8 carreras
de Dajabón, sus pensums (representativos) y una biblioteca de prompts transversal. Abre en local
(doble clic) y se publica igual (Hetzner o GitHub Pages).

## Abrir

Doble clic en `index.html` (no requiere servidor ni internet salvo las fuentes web). El contenido
se carga vía `assets/data.js` (`window.PORTAL`), sin `fetch`, para funcionar bajo `file://`.

## Regenerar los datos

Desde la raíz del repositorio:

```bash
npm install      # solo la primera vez (instala marked, dependencia únicamente de build)
npm run build    # parsea los .md + el dossier y reescribe portal/assets/data.js
```

El build (`scripts/build-portal.mjs`) recorre `recursos_docentes/<carrera>/NN_*.md`, fusiona el
enriquecimiento de `build/enrichment/<carrera>.json` si existe, integra el dossier del taller y
escribe `portal/assets/data.js`. Es idempotente y reproducible; valida 8 carreras / 633 materias.

## Publicar

- **Hetzner:** servir la carpeta `portal/` como sitio estático.
- **GitHub Pages:** publicar `portal/` o copiarla a `docs/`.

## Notas

- Los pensums son **reconstrucciones representativas** del estándar MESCyT, no oficiales.
- El verde de marca (`#0F5132`) es provisional; sustituir por el oficial de UTESA en `assets/styles.css`.
