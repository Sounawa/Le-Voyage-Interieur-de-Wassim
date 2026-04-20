# 🌈 Le Voyage Intérieur de Wassim — Tome 1 : Le Pays des Couleurs Perdues

> *Une aventure magique et colorée pour les plus petits !*

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)

## 📖 Description

**Le Voyage Intérieur de Wassim** est un livre interactif numérique qui raconte l'histoire de Wassim, un garçon de six ans (presque sept !) qui découvre un monde magique où toutes les couleurs ont disparu. Accompagné de Papillon, un joli papillon magique, Wassim part à la recherche des couleurs perdues à travers quatre royaumes enchantés.

Conçu pour les tout jeunes lecteurs (5-8 ans), ce livre combine aventure, choix simples et thèmes de gentillesse, courage et joie. Le vocabulaire est simple, les phrases sont courtes, et l'histoire est pleine de magie et de couleurs !

## ✨ Caractéristiques

### Histoire
- **72 pages** de narration adaptée aux 5-8 ans
- **9 points de choix** avec 3 options simples et claires
- **4 fins distinctes** : L'Arc-en-Ciel, La Joie de Partager, Le Gardien des Couleurs, Le Petit Artiste
- **6 chapitres** : Prologue, Le Pays Sans Couleurs, Le Royaume Rouge, Le Royaume Jaune, Le Royaume Bleu, Le Royaume Vert
- **Personnages** : Papillon (guide), Renard Roux, Dauphin Bleu, Licorne, Arbre de Vie
- **Références fraternelles** : Souhayl (10 ans) et Nawfel (8 ans), les grands frères

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
- 🧩 **Quiz spirituel** — Questions sur l'histoire et les couleurs
- 🎯 **Mode immersif** — Lecture sans interface pour immersion totale
- ⏱️ **Minuteur de lecture** — Suivi du temps de session et total
- 🔥 **Séries de lecture** — Streaks quotidiens
- 📏 **Personnalisation** — Taille de police, interligne, famille de police
- ⌨️ **Navigation clavier** — Espace pour continuer, 1-2-3 pour choisir
- 👆 **Navigation tactile** — Glisser gauche/droite pour tourner les pages

### Design
- 🌈 Thème violet/rose/teal chaleureux et ludique
- ✨ Animations Framer Motion fluides et colorées
- 🌟 Particules multicolores selon l'humeur du chapitre
- 🦋 Effet arc-en-ciel pour les moments de triomphe
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
git clone https://github.com/Sounawa/Le-Voyage-Interieur-de-Wassim.git
cd Le-Voyage-Interieur-de-Wassim

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
│   ├── layout.tsx              # Layout racine (thème violet/rose)
│   └── globals.css             # CSS custom (thème couleurs)
├── components/
│   ├── book/                   # Composants du livre interactif
│   │   ├── BookCover.tsx       # Couverture animée avec confettis
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
│   ├── story-data.ts           # 72 pages, 9 choix, 4 fins
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
- **72 pages** d'histoire
- **9 points de choix**
- **4 fins distinctes**

## 📄 Licence

Ce projet est privé et réservé à un usage personnel.

---

*« Le Voyage Intérieur de Wassim » — Conçu avec 🌈 pour les petits aventuriers des couleurs.*
