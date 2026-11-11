# HealthCare — International First Aid & Everyday Health Platform

[![React](https://img.shields.io/badge/React-18.x-blue.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **"Know what to do." / "Saber qué hacer."**  
> An open, evidence-based civic first aid and health education platform designed to empower everyday people without medical training to recognize life-threatening emergencies and take immediate, life-saving action.

---

## 🌟 Key Features

### 🌐 Native Bilingual Support (Español / English)
- **First-Visit Language Selection**: Mandatory initial splash dialog prompting the user to choose their preferred language (Español 🇪🇸 or English 🇬🇧) before viewing content.
- **On-the-Fly Switching**: Quick toggle located in the navigation bar and footer to swap languages at any time without losing state.
- **Full Clinical Translation**: All 19 protocols, user interface components, and educational tools are 100% localized.

### 🚨 Quick Action Panel (Emergency-First UI)
- For life-threatening (`critical`) and urgent (`urgent`) situations, the page **prioritizes action steps immediately**, before clinical descriptions, background, or metadata.
- Large, scannable numbered action cards with high-contrast text.
- Inline list of critical **DO NOT** rules to prevent common, dangerous home remedies.
- Expandable accordion toggle to read the full educational guide and clinical sources when time permits.

### ⚡ Emergency Stress Mode (Active Crisis View)
- Fullscreen, ultra-high-contrast view designed for panic situations.
- **Interactive CPR Metronome**: Built with the browser's Web Audio API, pulses visually and audibly at **110 BPM** (within the 100–120 BPM international standard to the rhythm of *"Stayin' Alive"*).
- One-tap **emergency calling button** mapped to the user's selected country dispatch number.

### 🔍 Natural Language Quick Search ("What should I do if...?")
- Client-side Natural Language Processing (NLP) search engine.
- Filters bilingual stop words (`what`, `should`, `que`, `hacer`, `si`, etc.) and ranks articles by exact title matches, keywords, content depth, and urgency levels.
- Global keyboard shortcut (`/` or `Ctrl/Cmd + K`) to open the instant search modal from any screen.

### 🧰 Interactive Clinical Tools
1. **Vital Signs Reference Guide** (`/vital-signs`): Baseline reference charts for heart rate (pulse), respiratory rate, blood pressure, and body temperature across adults, children, and infants.
2. **First Aid Kit Checklist** (`/kit-checklist`): 16-item clinically recommended supply checklist with categorized tracking, local storage persistence, and a clean print layout.
3. **First Aid Knowledge Quiz** (`/quiz`): 6 real-world emergency scenarios testing bystander instincts with immediate rationales based on AHA and ERC consensus.

### 🌍 Multi-Country Emergency Directory
- Dynamic emergency dispatch numbers (Ambulance, Fire, Police, Poison Control) for:
  - 🇺🇸 United States (`911`)
  - 🇪🇺 European Union / International (`112`)
  - 🇬🇧 United Kingdom (`999`)
  - 🇦🇷 Argentina (`107` / `911`)
  - 🇪🇸 Spain (`112`)
  - 🇲🇽 Mexico (`911`)
  - 🇨🇦 Canada (`911`)
  - 🇦🇺 Australia (`000`)
  - 🇯🇵 Japan (`119`)
- Preferences persist across visits using `localStorage`.

### 🖨️ Print-Ready First Aid Sheets
- Custom `@media print` CSS stylesheet with header badges, emergency dispatch numbers, and clean monochromatic formatting.
- Perfect for printing and placing inside home, travel, or vehicle first aid kits.

---

## 📚 Clinical Curriculums & Guides

The platform organizes 19 verified protocols across 6 foundational categories:

| Category | Topics Covered |
|---|---|
| **Medical Emergencies** | Hands-Only Adult CPR, AED Public Defibrillator Guide, Choking Relief (Heimlich), Acute Stroke Recognition (BE-FAST), Anaphylaxis & EpiPen, Chest Pain & Heart Attack. |
| **Accidents & Injuries** | Burns & Scalds Cooling, Severe Bleeding & Wound Pressure, Bone Fractures & Sprains, Head Injuries & Concussion Monitoring. |
| **Health at Home** | First Aid Kit Essentials, Household Chemical Poisoning, Safe Fever & Thermometer Management. |
| **Warning Signs** | Severe Dehydration Red Flags, Fainting (Syncope) & Dizziness. |
| **Preparedness** | 72-Hour Family Emergency Evacuation Go-Bag. |
| **Prevention & Safety** | Heat Illness & Heat Stroke Prevention, Food Safety & Infection Prevention. |

*All guides are formulated in alignment with international guidelines from the **American Heart Association (AHA)**, **European Resuscitation Council (ERC)**, **International Federation of Red Cross (IFRC)**, and the **World Health Organization (WHO)**.*

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Audio Processing**: Web Audio API (native browser oscillator for CPR rhythm)
- **Data Architecture**: Pure front-end with zero backend, zero trackers, and zero database dependencies.

---

## 📁 Project Structure

```
HealthCare/
├── README.md
└── health_care/
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── tailwind.config.js
    └── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css                    # Tailwind + @media print utilities
    ├── types/
    │   └── index.ts                 # Article, Category, EmergencyGuide, Language types
    ├── context/
    │   ├── CountryContext.tsx       # Localized country emergency numbers
    │   └── LanguageContext.tsx      # Bilingual i18n provider ('es' | 'en')
    ├── data/
    │   ├── articles.ts              # English clinical guides + localized resolver
    │   ├── articles.es.ts           # Spanish clinical guides (19 protocols)
    │   ├── categories.ts            # Localized curriculum categories
    │   ├── emergencyNumbers.ts      # 10+ country emergency dispatch directory
    │   ├── kitItems.ts              # First aid kit supply inventory
    │   ├── quizzes.ts               # Scenario-based questions with feedback
    │   └── translations.ts          # Core UI translation dictionary (EN/ES)
    ├── utils/
    │   └── search.ts                # Bilingual client-side search engine
    ├── components/
    │   ├── layout/                  # Layout, Navbar, Footer, DisclaimerBanner, LanguageModal
    │   ├── ui/                      # ArticleCard, CategoryCard, UrgencyBadge
    │   ├── search/                  # SearchModal (Ctrl+K)
    │   ├── tools/                   # VitalSignsReference, EmergencyStressMode, FirstAidKitChecklist
    │   └── quiz/                    # QuizCard
    └── pages/
        ├── HomePage.tsx             # Hero, quick access cards, categories, tools
        ├── CategoryPage.tsx         # Category view with urgency filters & tool callouts
        ├── ArticlePage.tsx          # Quick Action Panel + full educational guide
        ├── SearchPage.tsx           # Natural language symptom query page
        ├── QuizPage.tsx             # 3-step interactive clinical quiz
        ├── VitalSignsPage.tsx       # Age-bracket vital signs reference
        ├── KitChecklistPage.tsx     # Persistent supplies checklist
        └── Legal/                   # DisclaimerPage, PrivacyPage, TermsPage, ContactPage
```

---

## ⚠️ Medical Scope Disclaimer

**This web application is purely educational and designed for civic first aid literacy.**  
It does **not** provide personalized medical diagnosis, prescription, or clinical decision-making. In any acute or life-threatening emergency, bystanders must immediately contact their local emergency medical services (such as 911, 112, 107, or 999).

---
