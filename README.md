# SS Interiors — Website

A modern, animated website for **SS Interiors**, built with React + Vite + Tailwind CSS + Framer Motion.

---

## 1. Folder structure

```
ss-interiors/
├── public/
│   ├── images/
│   │   ├── logo-placeholder.svg     ← replace with your real logo (transparent PNG)
│   │   ├── hero/                    ← homepage hero visuals
│   │   ├── services/                ← one image per service card
│   │   └── gallery/                 ← gallery/lightbox images
│   └── videos/                      ← drop any video files here
├── src/
│   ├── app/                         ← the 5 pages (one file each)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── components/                  ← reusable building blocks
│   │   ├── Header.jsx    (fixed nav)
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── AnimatedBlueprint.jsx     (the animated floor-plan graphic)
│   │   ├── ServiceCard.jsx / ServiceModal.jsx
│   │   ├── GalleryGrid.jsx / Lightbox.jsx
│   │   ├── ContactForm.jsx
│   │   ├── SocialLinks.jsx
│   │   └── SectionTitle.jsx / Reveal.jsx / StatCounter.jsx
│   ├── data/                        ← all editable content lives here
│   │   ├── organization.js          (company info, address, stats, values, process)
│   │   ├── services.js              (every service card + its modal content)
│   │   └── gallery.js               (every gallery image + category)
│   ├── styles/index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── package.json
```

**To change text content:** edit the files in `src/data/`. You won't need to touch any component to update phone numbers, addresses, service descriptions, or gallery captions.

---

## 2. Replacing the logo

Swap `public/images/logo-placeholder.svg` for your real PNG logo (no background), then update the two references to it:

- `src/components/Header.jsx` — the `<img src="/images/logo-placeholder.svg" ...>` line
- `src/components/Footer.jsx` — same line

Just point both `src` attributes to your new filename (e.g. `/images/logo.png`), and drop the actual file into `public/images/`.

## 3. Replacing placeholder images

Every image in `public/images/services/`, `public/images/gallery/`, and `public/images/hero/` is currently a generated placeholder graphic (labelled, so you can tell what it's meant to be). To swap them:

1. Add your real photo to the matching folder (jpg/png/webp all work).
2. Open `src/data/services.js` or `src/data/gallery.js` and change the `image:` path to match your new filename.

No other code changes needed — cards, the gallery grid, and the lightbox all pull from these data files.

## 4. Adding your social media links

Open `src/data/organization.js` and fill in the `socials` object:

```js
socials: {
  facebook: 'https://facebook.com/yourpage',
  instagram: 'https://instagram.com/yourpage',
  youtube: '',
},
```

Any left blank will show as a dimmed, inactive icon in the header/footer until you add a link.

---

## 5. Running it locally in VS Code

**Prerequisite:** Install [Node.js](https://nodejs.org/) (version 18 or later — the LTS version is fine). This gives you the `node` and `npm` commands.

### Step-by-step

1. **Unzip** the project folder anywhere on your computer (e.g. Desktop).
2. **Open it in VS Code:**
   - Open VS Code → `File` → `Open Folder...` → select the unzipped `ss-interiors` folder.
3. **Open a terminal inside VS Code:**
   - Menu bar → `Terminal` → `New Terminal` (or `` Ctrl+` ``).
4. **Install dependencies** (only needed once, or after you change `package.json`):
   ```bash
   npm install
   ```
   This downloads React, Tailwind, Framer Motion, etc. into a `node_modules` folder — it can take a minute.
5. **Start the development server:**
   ```bash
   npm run dev
   ```
   You'll see output like:
   ```
   VITE ready in 400 ms
   ➜  Local:   http://localhost:5173/
   ```
6. **Open the site:** Ctrl+click (or Cmd+click on Mac) the `http://localhost:5173/` link in the terminal, or paste it into your browser.

The site now auto-reloads every time you save a file — edit anything in `src/`, hit save, and the browser updates instantly.

7. **To stop the server:** click into the terminal and press `Ctrl + C`.

### Building for production (when you're ready to publish)

```bash
npm run build
```

This creates an optimized `dist/` folder you can upload to any static host (Hostinger, Netlify, Vercel, GitHub Pages, cPanel, etc.). To preview that production build locally before uploading:

```bash
npm run preview
```

---

## 6. Useful things to know

- **5 pages:** Home, About, Services, Gallery, Contact — routed with React Router, so navigation never reloads the page.
- **Fixed header** with quick links to all 5 pages; it gets a background blur once you scroll.
- **Service cards** on Home & Services open a detail modal on click, with a **Book Now** button that jumps to the Contact page and pre-fills the service in the enquiry form.
- **Gallery lightbox:** click any image for a full-screen view with left/right arrow and keyboard navigation (`←` `→` `Esc`).
- **Contact form** currently opens the visitor's email app pre-filled with their enquiry (no backend required). If you'd like it to submit directly to a database or emailing service instead, that's a small follow-up job — just ask.
- **Colors, fonts, spacing:** all controlled from `tailwind.config.js` and `src/styles/index.css` if you want to adjust the look later.

---

Questions or want changes (more services, a blog section, testimonials, a booking calendar, etc.)? Just ask — the data-driven structure makes most additions quick.
