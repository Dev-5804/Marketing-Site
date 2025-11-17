# Marketing Site Template - Next.js Landing Page

Portfolio project demonstrating a marketing landing page built with Next.js (App Router), TypeScript, and Tailwind CSS.

A modern, fully responsive marketing landing page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project showcases clean component architecture, responsive design patterns, and production-ready frontend development practices.

🔗 **[Live Demo](https://marketing-site-five-kohl.vercel.app/)**

---

## ✨ Features

- **🎨 Modern Design** — Clean, minimalist aesthetic with black-and-white color scheme
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop breakpoints
- **⚡ Lightning Fast** — Built with Next.js 16 App Router and Turbopack
- **🧩 Reusable Components** — Modular, TypeScript-based component library
- **📧 Working Contact Form** — Client and server-side validation with API route
- **♿ Accessible** — Semantic HTML and ARIA attributes for better accessibility
- **🎯 SEO Optimized** — Proper meta tags and semantic structure

---

## 🏗️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📦 Project Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts          # Contact form API endpoint
├── components/
│   ├── Navbar.tsx            # Navigation with mobile menu
│   ├── Hero.tsx              # Hero section with CTA
│   ├── FeatureGrid.tsx       # Feature cards grid
│   ├── Testimonials.tsx      # Customer testimonials
│   ├── ContactForm.tsx       # Contact form with validation
│   ├── Footer.tsx            # Footer with links
│   ├── Container.tsx         # Layout container wrapper
│   ├── SectionHeading.tsx    # Reusable section heading
│   └── Button.tsx            # Reusable button component
├── layout.tsx                # Root layout with metadata
├── page.tsx                  # Home page composition
└── globals.css               # Global styles and Tailwind directives

lib/
└── cn.ts                     # Utility for className merging

public/
└── images/                   # Static assets
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm/bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dev-5804/Marketing-Site.git
   cd Marketing-Site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## 📋 Components Overview

### Core Sections

- **Navbar** — Responsive navigation with mobile hamburger menu
- **Hero** — Eye-catching hero section with headline and CTA button
- **Feature Grid** — Showcase 6 key features with icons and descriptions
- **Testimonials** — Social proof with customer reviews
- **Contact Form** — Functional form with validation and success states
- **Footer** — Site footer with navigation links

### Utilities

- **Container** — Polymorphic container component with responsive padding
- **Button** — Flexible button component with variant support
- **SectionHeading** — Consistent section titles across the site

---

## 🎯 Key Features Implemented

### Contact Form API
- **Endpoint:** `POST /api/contact`
- **Validation:** Required fields + email format validation
- **Response:** JSON with success/error states
- **Security:** Server-side input validation

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Hamburger menu for mobile navigation
- Flexible grid layouts that adapt to screen size

### Performance Optimizations
- Next.js automatic code splitting
- Optimized font loading with `next/font`
- Static page generation where possible
- Minimal CSS with Tailwind's JIT compiler

---

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Update README** with your live URL

---

## 📸 Screenshots

_Add screenshots of your deployed site here_

---

## 📸 Screenshots

### Desktop View
![Hero Section](https://via.placeholder.com/800x400?text=Add+Screenshot+Here)

### Mobile View
![Mobile Responsive](https://via.placeholder.com/375x667?text=Add+Mobile+Screenshot+Here)

> **Note:** Replace placeholder images with actual screenshots of your deployed site.

---

## 🤝 Contributing

This is a portfolio/demonstration project. Feel free to fork and customize for your own use!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Devendra**
- GitHub: [@Dev-5804](https://github.com/Dev-5804)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Vercel](https://vercel.com/font)

---

**Made with ❤️ for demonstrating modern frontend development practices**
