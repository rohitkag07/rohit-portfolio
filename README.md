# Rohit Kag - Portfolio Website

A modern, animated portfolio website built with Next.js, featuring advanced animations, interactive elements, and a premium design aesthetic.

## ✨ Features

- 🎨 **Advanced Animations**: Particle effects, scroll-triggered animations, and 3D card tilts
- 🖼️ **Professional Design**: Glassmorphism effects, gradient accents, and smooth transitions
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ♿ **Accessible**: Respects user preferences for reduced motion
- ⚡ **Performance Optimized**: Built with Next.js 16 and modern web technologies
- 🎭 **Interactive Elements**: Hover effects, micro-interactions, and smooth page transitions

## 🚀 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: CSS Modules with custom design system
- **Animations**: Framer Motion
- **Particles**: tsParticles
- **Icons**: Lucide React
- **Scroll Animations**: React Intersection Observer

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/rohitkag07/rohit-portfolio.git

# Navigate to project directory
cd rohit-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
rohit-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section with profile
│   ├── Contact.tsx        # Contact form and info
│   ├── Experience.tsx     # Work experience timeline
│   ├── Hero.tsx           # Hero section with particles
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Project showcase
│   ├── Skills.tsx         # Skills with animated bars
│   └── ParticleBackground.tsx  # Particle effect component
├── hooks/                 # Custom React hooks
│   ├── useAnimatedCounter.ts
│   └── useScrollAnimation.ts
├── public/                # Static assets
│   ├── profile.jpg        # Profile photo
│   └── resume.pdf         # Resume file
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:
- Custom CSS variables for colors, spacing, and typography
- Glassmorphism effects with backdrop blur
- Gradient accents and smooth transitions
- Dark theme optimized for readability
- Responsive breakpoints for all devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rohit Kag**
- Email: kag07rohit@gmail.com
- GitHub: [@rohitkag07](https://github.com/rohitkag07)
- LinkedIn: [Rohit Kag](https://linkedin.com/in/rohit-kag)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Animation libraries: Framer Motion and tsParticles
- Icons by Lucide React
