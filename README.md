# Minimalist Dark Portfolio with Draggable Objectives

A high-performance developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**, featuring an ultra-dark theme (`#090A0F`), high-voltage neon highlights (`#00F5D4` Neon Cyan, `#CCFF00` Acid Lime), and interactive drag-and-drop canvas capabilities.

---

## ⚡ Key Highlights & Architecture

1. **Draggable Modular Objectives:**
   * The core objectives (**About**, **Experience**, **Skills**, and **Activities**) live inside a Framer Motion `Reorder.Group` canvas.
   * Visitors can drag sections using their grip handles (`⋮⋮`) to re-sequence the portfolio flow.
   * Preferences persist via `localStorage` with a instant "Reset Order" toggle.

2. **Interactive Physics Sandbox:**
   * The **Home/Hero** and **Skills** sections include draggable badges with spring elastic physics that visitors can fling and pull.
   * Skills section provides a view switch between **Structured Matrix** and an **Interactive Sandbox**.

3. **Minimalist High-Contrast Palette:**
   * **Background:** Deep Abyss Black (`#090A0F`)
   * **Cards / Glass Surfaces:** Obsidian Slate (`#11131C`) with subtle borders
   * **Highlight Contrast:** Electric Neon Cyan (`#00F5D4`) & Acid Lime (`#CCFF00`)

4. **Celebratory Micro-interactions:**
   * Clickable Activity & Hackathon cards trigger particle confetti bursts via `canvas-confetti`.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Floating pill nav + reset order trigger
│   │   ├── Hero.jsx               # Hero with status pill, stats & flingable chips
│   │   ├── DraggableCanvas.jsx    # Framer Motion Reorder canvas container
│   │   ├── AboutSection.jsx       # Bento grid + live local time clock
│   │   ├── ExperienceSection.jsx  # Interactive role timeline + metrics
│   │   ├── SkillsSection.jsx      # Categorized matrix + draggable physics sandbox
│   │   ├── ActivitiesSection.jsx  # Hackathons, open-source & confetti trigger
│   │   └── Footer.jsx             # Terminal contact box + one-click copy email
│   ├── data/
│   │   └── portfolioData.js       # Central data file (edit all personal info here)
│   ├── App.jsx                    # Root layout & section order state
│   ├── index.css                  # Custom grid pattern, scrollbar & glass styles
│   └── main.jsx                   # React entry point
├── index.html                     # HTML shell with Google Fonts
├── tailwind.config.js             # Theme tokens & neon glows
├── vite.config.js                 # Vite bundler config (port 3000)
└── package.json
```

---

=======
# Barath-S-Portfolio
>>>>>>> 15b09cedec9e7c2aa5bcac1e56133f61ff172aaf
