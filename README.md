# 🌟 Le Voyage Intérieur de Nawfel — Tome 1 : Les Étoiles du Cœur

> *Une aventure interactive dans le Royaume des Étoiles Perdues*

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)

## 📖 Description

**Le Voyage Intérieur de Nawfel** est un livre interactif numérique qui raconte l'histoire de Nawfel, un garçon de huit ans (presque neuf !) qui découvre un royaume magique où les étoiles ont disparu. Accompagné de Lumina, une petite étoile tombée pleine d'esprit, Nawfel part à la recherche des étoiles perdues à travers quatre royaumes enchantés.

Conçu pour les jeunes lecteurs (7-11 ans), ce livre combine aventure, choix moraux et thèmes de bienveillance, fraternité et courage.

## ✨ Caractéristiques

### Histoire
- **62 pages** de narration immersive en français
- **9 points de choix** avec 3 options chacun, tous valides
- **4 fins distinctes** : La Lumière du Ciel, La Lumière Fraternelle, Le Gardien des Étoiles, Les Rêves Partagés
- **5 chapitres** : Prologue, La Cité de Cristal, La Forêt Murmurante, L'Océan des Larmes, La Montagne des Rêves Vrais
- **Personnages** : Lumina (guide), Mémé Khadija (sagesse), Ondine, le Géant du Regret, l'Ombre des Rêves Oubliés

### Fonctionnalités
- 🎧 **Narration TTS** — Synthèse vocale en français (Web Speech API)
- 🔊 **Effets sonores** — Sons de page, choix, chapitres (Web Audio API)
- 📚 **Abécédaire spirituel** — Termes de sagesse avec explications
- 🧭 **Carte du voyage** — Navigation par chapitre avec progression
- 🏆 **Succès** — Système de réalisations déblocables
- 🔍 **Recherche** — Recherche plein texte dans l'histoire
- 📊 **Statistiques** — Temps de lecture, pages visitées, choix faits
- 🔖 **Favoris** — Système de marque-pages persistant
- 🗺️ **Carte des chemins** — Visualisation des branches narratives
- 🧩 **Quiz spirituel** — Questions sur l'histoire et les personnages
- 🎯 **Mode immersif** — Lecture sans interface pour immersion totale
- ⏱️ **Minuteur de lecture** — Suivi du temps de session et total
- 🔥 **Séries de lecture** — Streaks quotidiens
- 📏 **Personnalisation** — Taille de police, interligne, famille de police
- ⌨️ **Navigation clavier** — Espace pour continuer, 1-2-3 pour choisir
- 👆 **Navigation tactile** — Glisser gauche/droite pour tourner les pages

### Design
- 🌌 Thème bleu nuit profond avec étoiles argentées
- ✨ Animations Framer Motion fluides
- 🌟 Particules d'ambiance dynamiques selon l'humeur du chapitre
- 📱 Design responsive (mobile-first)

## 🛠️ Stack Technique

| Technologie | Usage |
|---|---|
| **Next.js 16** | Framework React avec App Router |
| **TypeScript 5** | Typage strict |
| **Tailwind CSS 4** | Styles utilitaires |
| **shadcn/ui** | Composants UI (New York style) |
| **Framer Motion 12** | Animations et transitions |
| **Zustand 5** | Gestion d'état client (persisté) |
| **Lucide Icons** | Icônes SVG |
| **Web Audio API** | Sons synthétisés |
| **Web Speech API** | Narration TTS |

## 🚀 Installation

### Prérequis
- [Bun](https://bun.sh/) (recommandé) ou Node.js 18+
- Un navigateur moderne

### Lancer en développement

```bash
# Cloner le dépôt
git clone https://github.com/Sounawa/Le-Voyage-Interieur-de-Nawfel.git
cd Le-Voyage-Interieur-de-Nawfel

# Installer les dépendances
bun install

# Lancer le serveur de développement
bun run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
bun run build
bun run start
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── page.tsx                # Orchestrateur principal
│   ├── layout.tsx              # Layout racine (thème bleu nuit)
│   └── globals.css             # CSS custom (thème étoiles)
├── components/
│   ├── book/                   # Composants du livre interactif
│   │   ├── BookCover.tsx       # Couverture animée avec champ d'étoiles
│   │   ├── StoryPageView.tsx   # Pages d'histoire avec drop cap
│   │   ├── ChoiceButtons.tsx   # Boutons de choix interactifs
│   │   ├── ChapterTitle.tsx    # Transitions de chapitre
│   │   ├── EndingScreen.tsx    # Écrans de fin (4 fins)
│   │   ├── TTSNarration.tsx    # Narration vocale
│   │   ├── SpiritualQuiz.tsx   # Quiz mini-jeu
│   │   ├── ChapterMap.tsx      # Carte de navigation
│   │   ├── AchievementsPanel.tsx # Panneau des succès
│   │   └── ...                 # + autres composants
│   └── ui/                     # Composants shadcn/ui
├── data/
│   ├── story-data.ts           # 62 pages, 9 choix, 4 fins
│   └── achievements.ts         # Définitions des succès
├── hooks/                      # Hooks custom (TTS, swipe, navigation)
├── lib/                        # Types et utilitaires
├── store/
│   └── story-store.ts          # Store Zustand (état persisté)
└── public/
    └── images/                 # Illustrations des royaumes
```

## 🎮 Guide de navigation

| Action | Desktop | Mobile |
|---|---|---|
| Continuer | `Espace` / `Entrée` | Tap / Glisser ← |
| Retour | `Échap` | Glisser → |
| Choix A/B/C | `1` / `2` / `3` | Tap sur le bouton |

## 📊 Statistiques du projet

- **~12 000 lignes** de code TypeScript/CSS
- **36 composants** React
- **4 hooks** custom
- **62 pages** d'histoire
- **9 points de choix**
- **4 fins distinctes**

## 📄 Licence

Ce projet est privé et réservé à un usage personnel.

---

*« Le Voyage Intérieur de Nawfel » — Conçu avec 💙 pour les jeunes aventuriers des étoiles.*
