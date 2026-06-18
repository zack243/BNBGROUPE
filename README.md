# BNB Groupe Website

Site web corporate de BNB Groupe - Leader de la distribution en République Démocratique du Congo.

## 🚀 Technologies

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **next-intl** - Internationalisation (FR/EN)

## 📁 Structure du Projet

```
BNB/
├── app/                    # Application Next.js
│   ├── [locale]/          # Pages avec i18n
│   │   ├── page.tsx       # Accueil
│   │   ├── about-us/      # À propos
│   │   ├── business-portfolio/  # Portefeuille
│   │   ├── focus-brand/   # Focus Brand (ex Private Label)
│   │   ├── distribution/  # Distribution
│   │   ├── csr/           # RSE
│   │   ├── career/        # Carrière
│   │   ├── contact/       # Contact
│   │   ├── events-news/   # Événements
│   │   └── food-beverages/  # Produits
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Styles globaux
│   ├── sitemap.ts         # Sitemap
│   └── robots.txt         # Robots
├── components/            # Composants React
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── LanguageSwitch.tsx
│   └── ...
├── messages/              # Traductions
│   ├── fr.json
│   └── en.json
├── lib/                   # Utilitaires
├── types/                 # Types TypeScript
└── public/                # Assets statiques
    └── images/
```

## 🌍 Pages du Site

1. **Accueil** (`/`) - Présentation du groupe
2. **À Propos** (`/about-us/`) - Histoire et valeurs
3. **Portefeuille** (`/business-portfolio/`) - Secteurs d'activité
4. **Focus Brand** (`/focus-brand/`) - Marques propres (remplace Private Label)
5. **Produits** - Catégories de produits
6. **Distribution** (`/distribution/`) - Réseau logistique
7. **RSE** (`/csr/`) - Responsabilité sociale
8. **Carrière** (`/career/`) - Offres d'emploi
9. **Contact** (`/contact/`) - Formulaire de contact
10. **Événements** (`/events-news/`) - Actualités

## 🎨 Design System

### Couleurs

- **Bleu Corporate**: #0052CC (primary)
- **Orange BNB**: #FF8019 (accent)
- **Gris Premium**: #F3F4F6 (background)

### Typographie

- **Inter** - Corps de texte
- **Poppins** - Titres

## 📝 Scripts

```bash
# Installation
npm install

# Développement
npm run dev

# Build
npm run build

# Linter
npm run lint
```

## 🌐 Internationalisation

Le site est entièrement bilingue (FR/EN) avec next-intl.
- Switch de langue dans la navbar
- Traductions dans `/messages/`
- URLs localisées (`/fr/`, `/en/`)

## 📱 Responsive

Design mobile-first, optimisé pour tous les écrans :
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO

- Meta tags optimisés
- Sitemap XML
- Robots.txt
- Schema.org (à implémenter)
- Open Graph tags

## 👥 Auteur

BNB Groupe - Société Biso Na Biso Sarl
