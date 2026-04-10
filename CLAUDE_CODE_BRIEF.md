# Brief pour Claude Code — Site EuroHockey U21 Salon-de-Provence

## Contexte
Tu travailles sur le site officiel de l'EuroHockey U21 Championship II-A Women 2026, organisé par le Salon de Provence Hockey Club.  
Ce projet est géré conjointement avec Cowork (Claude desktop) qui reste le point d'entrée du client (Yann). Tu reçois les instructions par copier-coller depuis cette conversation.

---

## Dépôt GitHub
- **URL** : https://github.com/neush99/eurohockeyu21salon
- **Branche principale** : `main`
- **Site en ligne** : https://www.eurohockeyu21salon.info/

> ⚠️ **IMPORTANT : un site est déjà en ligne et visible publiquement.**  
> Toute modification poussée sur `main` est immédiatement publiée. Ne jamais pusher sans validation explicite de Yann.

---

## 🔒 Règles absolues de publication

### Workflow obligatoire
1. Toutes les modifications se font **en local uniquement** dans un premier temps
2. Après chaque modification, tu **montres le diff** à Yann et tu lui expliques ce qui a changé
3. Tu ne pushes sur GitHub **que si Yann dit explicitement "ok publie" ou "go"**
4. Tu travailles toujours sur une **branche de développement** séparée, jamais directement sur `main`

### Mise en place des branches
```bash
# Initialiser git si ce n'est pas fait
git init
git remote add origin https://TOKEN@github.com/neush99/eurohockeyu21salon.git
git fetch origin
git checkout main
git pull origin main

# Créer une branche de travail
git checkout -b dev
```

Toutes les modifications vont sur la branche `dev`. Quand Yann valide → merge sur `main` → push.

### Rollback (retour arrière)
Si Yann veut annuler une publication après un push :
```bash
# Voir les commits récents
git log --oneline -5

# Revenir au commit précédent (remplacer HASH par le hash du commit)
git revert HEAD
git push origin main
```
Ou plus simplement, sur GitHub : **Settings → Pages** ne pointe que sur `main`, donc revenir en arrière = `git revert` + push.

### Connexion GitHub
Pour pouvoir pousser les modifications, tu as besoin d'un **Personal Access Token** GitHub :
1. Demande à Yann de générer un token sur https://github.com/settings/tokens (classic token, scope `repo`)
2. Configure git :
```bash
git config user.email "ya.gilquin@gmail.com"
git config user.name "Yann Gilquin"
git remote set-url origin https://TOKEN@github.com/neush99/eurohockeyu21salon.git
```

---

## Structure des fichiers locaux
Répertoire de travail : `C:\Users\YannGilquin\OneDrive - E RETAIL DEVELOPPEMENT\Claude\Eurohockey`

```
Eurohockey/
├── index.html                    ← site complet (single-file HTML/CSS/JS)
├── images/
│   ├── affiche.jpeg              ← affiche officielle du tournoi
│   ├── SHC_sans_fond.png         ← logo Salon Hockey Club (fond transparent)
│   ├── Circle_of_trust_sansfond.png  ← logo Circle of Trust (fond transparent)
│   └── logo-eurohockey-noir.png  ← logo EuroHockey officiel (à placer par Yann)
└── sources/
    └── vidéo.mp4                 ← vidéo promotionnelle du tournoi
```

---

## État actuel du site (index.html)
Site HTML single-file, design moderne gold/noir aux couleurs EuroHockey.

**Sections existantes (dans l'ordre) :**
1. Barre de langue FR/EN (fixed top)
2. Navbar fixe avec logo EuroHockey
3. **Hero** — logo grand format + titre + compte à rebours jusqu'au 28/07/2026 16h00
4. Bande de stats (4 nations, 5 jours, 8 matchs, 1 championne)
5. **Programme officiel** — calendrier complet des matchs
6. **Équipes** — 4 nations (France, Italie, Ukraine, Lituanie) en Pool A unique
7. **Infos pratiques** — stade, accès, hébergement, restauration, billetterie, carte OpenStreetMap
8. **Galerie** — placeholder en attente des vraies photos
9. **Partenaires** — FF Hockey, Ministère des Sports, Ville de Salon, Région Sud, etc.
10. **Contact** — email + club organisateur + lien EHF
11. Footer

**Stack technique :** HTML5 / CSS3 / JS vanilla — aucune dépendance externe sauf Google Fonts (Montserrat + Open Sans). Responsive mobile/tablette inclus.

**Système bilingue FR/EN :** via attributs `data-fr` et `data-en` sur chaque élément texte, switché par la fonction JS `setLang(lang)`.

---

## Modifications à implémenter (priorité 1)

### 1. Popup vidéo de bienvenue
- **Fichier** : `sources/vidéo.mp4`
- **Comportement** : s'affiche automatiquement à la première visite de la session (sessionStorage). Ne se réaffiche pas si l'utilisateur refresh la page dans la même session. Se réaffiche à la prochaine session (nouvel onglet / fermeture navigateur).
- **Format** : modal/popup centré, fond semi-transparent sombre, bouton ✕ pour fermer, lecture automatique AVEC son (ou muted + unmute button selon taille fichier).
- **Responsive** : s'adapter en largeur sur mobile et tablette (max 95vw).
- **Note** : tester la taille du fichier MP4 — si > 10 Mo, envisager de l'héberger ailleurs (YouTube unlisted) et l'intégrer en iframe.

### 2. Affiche officielle — vignette cliquable avec lightbox ✅ CONFIRMÉ
- **Fichier** : `images/affiche.jpeg`
- **PAS en fond de page**. Intégrer comme une **vignette cliquable** (thumbnail) dans une section ou dans le hero.
- Au clic sur la vignette → ouverture d'un **lightbox** (overlay sombre plein écran) affichant l'affiche en grand format.
- La lightbox se ferme au clic sur ✕ ou en cliquant en dehors de l'image.
- Implémentation JS vanilla, sans librairie externe.
- Responsive : sur mobile la lightbox occupe 95vw max.
- Suggestion de placement : dans le hero à droite du titre, ou dans une petite section dédiée "Affiche officielle" avec label + vignette.
- La vignette doit avoir un effet hover (légère élévation ou bordure gold).

### 3. Section Salon Hockey Club
- Nouvelle section avant le footer, avec :
  - Logo `SHC_sans_fond.png` (grand, centré ou à gauche)
  - Logo `Circle_of_trust_sansfond.png` (plus petit, à côté ou en dessous)
  - Devise "Circle of Trust" affichée en titre/tagline
  - Texte de présentation officiel (issu du dossier de subvention) :

**Texte FR :**
> Fondé à Salon-de-Provence et en pleine structuration depuis 2020, le **Salon de Provence Hockey Club (SHC)** porte les valeurs du sport collectif, de l'éducation par le sport, de la mixité et de l'ouverture sur l'international. Affilié à la Fédération Française de Hockey et à la Ligue PACA, le SHC s'est imposé comme un acteur sportif incontournable du territoire salonais. Avec **184 licenciés en 2024-2025** (+90 % en 3 ans) et une équipe féminine engagée en Nationale 2, le club porte un projet à la fois sportif, éducatif et social. En 2026, il relève un défi historique : organiser la **Coupe d'Europe U21 Féminine** à Salon-de-Provence.

**Texte EN :**
> Founded in Salon-de-Provence and in full development since 2020, the **Salon de Provence Hockey Club (SHC)** upholds the values of team sport, education through sport, inclusivity and international openness. Affiliated with the French Hockey Federation and the PACA League, the SHC has established itself as a key sports actor in the Salon area. With **184 registered players in 2024-2025** (+90% in 3 years) and a women's team competing in Nationale 2, the club drives a sporting, educational and social project. In 2026, it takes on a historic challenge: hosting the **U21 Women's European Championship** in Salon-de-Provence.

  - Liens réseaux sociaux :
    - Facebook : https://www.facebook.com/SalonHockeyClub/
    - Instagram : https://www.instagram.com/salonhockeyclub/
  - Boutons sociaux avec icônes SVG inline (pas de dépendance FontAwesome)
  - Design : fond sombre (dark) avec accents gold, cohérent avec le reste du site

### 4. Section Billetterie
- Nouvelle section entre "Infos pratiques" et "Galerie"
- Message clé : **ouverture de la billetterie le 1er mai 2026**, entrée **GRATUITE**, inscription obligatoire pour gérer le flux
- Plateforme pressentie : **SportEasy** (lien placeholder pour l'instant : `#billetterie` — sera remplacé quand le lien sera disponible)
- Logique d'affichage :
  - Avant le 1er mai 2026 → afficher un compte à rebours "Ouverture dans X jours" + badge "Gratuit"
  - Après le 1er mai 2026 → afficher le bouton CTA "S'inscrire gratuitement" actif
  - Gérer cela en JS pur avec `new Date()` comparé à `new Date('2026-05-01')`
- Design : section sombre (dark) avec call-to-action gold bien visible, mise en avant du mot "GRATUIT"
- Bilingue FR/EN
- Ajouter une note : "L'inscription est gratuite et obligatoire pour accéder au site le jour de l'événement."

### 5. Liens réseaux sociaux dans le footer et la navbar
- Ajouter icônes Facebook + Instagram dans le footer
- Optionnel : petites icônes dans la navbar mobile

---

## Conventions de commit
Utiliser des messages clairs en français :
```
feat: ajout popup vidéo de bienvenue
feat: intégration affiche officielle en hero
feat: section Salon Hockey Club + réseaux sociaux
feat: section billetterie avec ouverture 1er mai
fix: [description du correctif]
```

## Workflow recommandé
1. Modifier `index.html` localement
2. Tester en ouvrant dans un navigateur
3. `git add index.html` (+ images si nouvelles)
4. `git commit -m "feat: ..."`
5. Proposer à Yann de valider, puis `git push`

---

## Informations utiles
- **Organisateur** : Salon de Provence Hockey Club
- **Email contact** : contact@eurohockeyu21salon.info
- **Compte GitHub** : neush99
- **Dates tournoi** : 28 juillet – 1er août 2026
- **Équipes** : France 🇫🇷, Italie 🇮🇹, Ukraine 🇺🇦, Lituanie 🇱🇹
- **Facebook** : https://www.facebook.com/SalonHockeyClub/
- **Instagram** : https://www.instagram.com/salonhockeyclub/
