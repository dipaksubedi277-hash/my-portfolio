# My Portfolio – React + Tailwind CSS

## Run
```
npm install
npm run dev
```

## Make it yours
Open `src/data/data.js` and change the name, photo, skills, education, projects and social links.
Put your photo and CV (PDF) in the `public` folder and write their paths in `data.js` (e.g. "/me.jpg").

## Structure
- `src/App.jsx` – `createBrowserRouter`
- `src/layouts/RootLayout.jsx` – Navbar + `<Outlet />` + Footer
- `src/pages/` – Home, About, Skills, Education, Projects, Contact
- `src/components/` – Navbar, Footer, Hero, SkillCard, EducationCard, ProjectCard, ContactForm
- `src/data/data.js` – all your details

## Build / Deploy
`npm run build` → upload the `dist` folder to Netlify, or import the repo in Vercel.
