# Aashish Kumar Shukla - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing my skills, projects, and experience as a Full Stack Developer.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Framer Motion animations and hover effects
- **Dark/Light Theme**: Built-in theme support with TailwindCSS
- **Contact Form**: Integrated contact functionality
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS 3 + Radix UI components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router 6 (SPA mode)
- **Backend**: Express.js (for API endpoints)
- **Deployment**: Netlify
- **Testing**: Vitest

## 📁 Project Structure

```
MyPortfolio/
├── client/                 # React frontend
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Main portfolio page
│   │   └── NotFound.tsx   # 404 page
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Radix UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # App entry point with routing
│   └── global.css        # Global styles and theme
├── server/               # Express API backend
│   ├── index.ts          # Server configuration
│   └── routes/           # API route handlers
├── shared/               # Shared types and interfaces
├── public/               # Static assets
└── netlify/              # Netlify Functions
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aashishshukla/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📜 Available Scripts

```bash
npm run dev        # Start development server (client + server)
npm run build      # Production build
npm run start      # Start production server
npm run typecheck  # TypeScript validation
npm test          # Run Vitest tests
npm run format.fix # Format code with Prettier
```

## 🎨 Customization

### Theme Colors
Customize the color scheme in [`client/global.css`](client/global.css) and [`tailwind.config.ts`](tailwind.config.ts):

```css
:root {
  --tech-blue-500: 217 91% 60%;
  --tech-blue-600: 221 83% 53%;
  /* Add your custom colors */
}
```

### Content
Update personal information, projects, and experience in [`client/pages/Index.tsx`](client/pages/Index.tsx).

### Adding New Pages
1. Create component in `client/pages/NewPage.tsx`
2. Add route in `client/App.tsx`:
   ```typescript
   <Route path="/new-page" element={<NewPage />} />
   ```

## 🌐 Deployment

### Netlify (Current)
The project is configured for Netlify deployment with:
- Build command: `npm run build:client`
- Publish directory: `dist/spa`
- API routes handled via Netlify Functions

### Manual Deployment
```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score**: 95+ Performance
- **Bundle Size**: Optimized with Vite
- **Loading Time**: < 2 seconds on 3G
- **SEO Score**: 100/100

## 🔧 Key Features Implemented

### Professional Sections
- **Hero Section**: Animated introduction with typing effect
- **About**: Personal information and career objective
- **Skills**: Technical skills with categorized display
- **Projects**: Portfolio projects with descriptions and links
- **Experience**: Work experience and achievements
- **Education**: Academic background
- **Contact**: Contact form and information

### Technical Features
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Framer Motion integration
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Radix UI components
- **Fast Loading**: Optimized assets and code splitting

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- **Email**: shuklaaashish90@gmail.com
- **LinkedIn**: [linkedin.com/in/aashish-kumar-shukla](https://linkedin.com/in/aashish-kumar-shukla)
- **GitHub**: [github.com/aashishshukla](https://github.com/aashishshukla)
- **LeetCode**: [leetcode.com/u/Aashishshukla](https://leetcode.com/u/Aashishshukla)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Fusion Starter](https://github.com/fusion-starter) template
- UI components from [Radix UI](https://radix-ui.com)
- Icons from [Lucide React](https://lucide.dev)
- Animations powered by [Framer Motion](https://framer.com/motion)
- Styling with [TailwindCSS](https://tailwindcss.com)

---

**Made with ❤️ by Aashish Kumar Shukla**
