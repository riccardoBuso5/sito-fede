# ⚽ Magliette di Calcio

Collezione di magliette di calcio storiche con carosello interattivo per visualizzare i diversi colori di ogni modello.

## 🌐 Link del Sito

**GitHub Pages:** [https://riccardoBuso5.github.io/sito-fede/](https://riccardoBuso5.github.io/sito-fede/)

## 🚀 Come Avviare il Server Locale

### Prerequisiti
- Ruby 3.0+ installato
- Bundler installato (`gem install bundler`)
- Git installato

### Passaggi

1. **Clona il repository:**
```bash
git clone https://github.com/riccardoBuso5/sito-fede.git
cd sito-fede
```

2. **Installa le dipendenze:**
```bash
bundle install
```

3. **Avvia il server Jekyll:**
```bash
bundle exec jekyll serve
```

4. **Accedi al sito locale:**
Apri il browser a: **http://localhost:4000/sito-fede/**

## 📱 Funzionalità

- ✅ Card responsive per ogni modello di maglietta
- ✅ Carosello immagini con frecce di navigazione
- ✅ Indicatori colore interattivi
- ✅ Link diretto ai post Instagram
- ✅ Design moderno con CSS puro
- ✅ Mobile-friendly
- ✅ Animazioni fluide

## 📁 Struttura del Progetto

```
sito-fede/
├── index.md                 # Pagina principale con le card
├── _config.yml              # Configurazione Jekyll
├── _data/
│   └── shirts.yml           # Dati magliette
├── _includes/
│   ├── header.html          # Intestazione con navbar
│   └── footer.html          # Piè di pagina
├── _layouts/
│   └── default.html         # Layout principale
├── assets/
│   ├── shirts.css           # Stili completi
│   └── shirts/
│       └── fiorentina-maglia.jpg  # Immagini
├── Gemfile                  # Dipendenze Ruby
└── README.md                # Questo file
```

## 🎨 Come Aggiungere Magliette

### 1. Aggiungi i dati in `_data/shirts.yml`:

```yaml
- id: 5
  name: "Nome Maglietta"
  team: "Squadra"
  season: "2024/25"
  description: "Descrizione della maglietta"
  instagram: "https://www.instagram.com/p/post-url/"
  colors:
    - name: "Colore 1"
      hex: "#XXXXXX"
      image: "/sito-fede/assets/shirts/immagine1.jpg"
    - name: "Colore 2"
      hex: "#XXXXXX"
      image: "/sito-fede/assets/shirts/immagine2.jpg"
```

### 2. Aggiungi le immagini:

Copia le immagini in `assets/shirts/` e aggiorna i percorsi nel YAML.

## 🔧 Comandi Utili

```bash
# Build statico per il deploy
bundle exec jekyll build

# Esecuzione in modalità watch (rileva cambiamenti)
bundle exec jekyll serve --watch

# Pulisci i file generati
bundle exec jekyll clean

# Genera con configurazione di produzione
JEKYLL_ENV=production bundle exec jekyll build
```

## 🚀 Deploy su GitHub Pages

1. Fai il commit dei cambiamenti:
```bash
git add .
git commit -m "Aggiorna magliette"
git push origin main
```

2. Attendi 2-3 minuti e visita: https://riccardoBuso5.github.io/sito-fede/

## 📝 Note

- Usa immagini di buona qualità (min. 400x400px)
- Il carosello funziona automaticamente con JavaScript vanilla
- I colori degli indicatori rispecchiano il colore della maglietta
- Mobile responsive fino a 320px di larghezza

## 🤝 Contributi

Per suggerimenti o modifiche, puoi aprire un issue su GitHub.

## 📄 Licenza

Tutti i diritti riservati © 2025
