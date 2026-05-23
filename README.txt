================================================================================
MICASA - MULTI-PAGE STATIC SITE DOCUMENTATION
================================================================================

1. OVERVIEW
-----------
MiCasa is a refined, multi-page static website built for home management, 
professional presence, and knowledge sharing. Use it to host your home-related 
info, a professional about page, and a full-featured Knowledge Hub.

2. KEY FEATURES
---------------
- Multi-Page Navigation: Home, Knowledge Hub, and About pages.
- Hash Routing: Compatible with GitHub Pages out of the box.
- Modern Navbar: Sticky frosted-glass header with active tab indication.
- Knowledge Hub: Integrated feature for hosting Markdown-based learnings.
- Transparent Footer: Clean, minimalist footer for social links.

3. FILE & FOLDER STRUCTURE
--------------------------
/public                 : Unprocessed static files.
/knowledge              : Put your .md files for the Hub here.
/src                    : Main source code.
  /assets               : Processed images, fonts, etc.
  /components           : Reusable UI components (Navbar, Footer, Layout).
  /pages                : Page-level components (Home, About, KnowledgeHubPage).
  /hooks                : Custom React hooks (useKnowledge).
  /services             : Data logic (knowledgeService).
  /styles               : Global CSS (globals.css).
  /types.ts             : Global TypeScript types.
  App.tsx               : Route orchestrator (MiCasa main logic).

4. UPDATING CONTENT
-------------------
- Home/About: Edit 'src/pages/Home.tsx' or 'About.tsx' directly.
- Knowledge Hub: Add/Edit .md files in the '/knowledge' folder.
- Navigation: Modify 'src/components/Navbar.tsx'.

5. HOW TO HOST ON GITHUB PAGES
------------------------------
1. Push this entire folder to your GitHub repo.
2. Settings > Pages > Build and deployment > Source: GitHub Actions.
3. The site is live!

6. LOCAL DEVELOPMENT
--------------------
1. Run: npm install
2. Run: npm run dev
3. Open http://localhost:3000

================================================================================
