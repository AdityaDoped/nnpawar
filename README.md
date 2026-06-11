# N.N. Pawar Associates — Architecture Firm Website

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Project Images
Copy all your images into `public/images/` with these exact names:
- vv2.jpeg, vv3.jpeg, vv7.jpeg, vv9.jpeg
- bungalow1.jpeg through bungalow6.jpeg
- sfh7.jpeg
- cam01.jpeg

### 3. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### 4. Build for Production
```bash
npm run build
npm start
```

## Pages
- `/` — Homepage with hero, stats, featured projects
- `/about` — Founder bio, philosophy, values
- `/services` — All 4 services with process steps
- `/projects` — Filterable project grid
- `/projects/[slug]` — Individual project detail with gallery
- `/contact` — Contact form + WhatsApp integration
