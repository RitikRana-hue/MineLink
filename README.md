# 🏔️ MineLink - Connected Mining Intelligence Platform

A modern, professional mining platform website built with Next.js 16, featuring advanced animations, responsive design, and cutting-edge UI components.

![Next.js](https://img.shields.io/badge/Next.js-16.1.7-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

### 🎨 **Advanced Animations**
- 360° circular solution carousel with orbital rotation
- Horizontal scrolling tabs with infinite loop
- Icon rotation animations on hover
- Smooth page transitions with Framer Motion
- Professional card hover effects

### 🖼️ **Professional Design**
- High-quality Unsplash mining images
- Dark/Light theme support
- Gradient effects and shadows
- Color-coded sections
- Responsive design for all devices

### 📱 **Pages**
- **Home**: Hero section, circular carousel, solutions preview
- **Platform**: Platform overview and features
- **Solutions**: 6 mining solutions with detailed pages
- **About**: Company information
- **Contact**: Contact form with details

### 🎯 **Solutions Included**
1. Environmental Intelligence
2. Worker Safety Monitoring
3. Vehicle & Equipment Tracking
4. Intelligent Safety System
5. Mining AI Assistant
6. Visual Monitoring (CCTV)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd minelink

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Deploy

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions for various platforms including Vercel, Netlify, and self-hosted options.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.7
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Components**: Base UI, Shadcn
- **Theme**: next-themes

## 📁 Project Structure

```
minelink/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles & animations
│   │   ├── contact/           # Contact page
│   │   ├── platform/          # Platform page
│   │   ├── solutions/         # Solutions pages
│   │   └── about/             # About page
│   ├── components/
│   │   ├── navbar.tsx         # Navigation bar
│   │   ├── footer.tsx         # Footer
│   │   ├── sections/          # Page sections
│   │   │   ├── circular-solutions-carousel.tsx
│   │   │   └── modules-tabs.tsx
│   │   └── ui/                # UI components
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                     # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
└── package.json               # Dependencies
```

## 🎨 Key Components

### Circular Solutions Carousel
360-degree rotating carousel displaying solution cards with images, icons, and descriptions.

### Horizontal Scrolling Tabs
Infinite scrolling tab navigation with pause-on-hover functionality.

### Enhanced Cards
Professional card designs with:
- Gradient backgrounds
- Hover animations
- Shadow effects
- Icon rotations

## 🔧 Configuration

### Image Optimization
Images from Unsplash are configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      pathname: '/**',
    },
  ],
}
```

### Custom Animations
All animations are defined in `src/app/globals.css`:
- `spin-slow`: 2s icon rotation
- `spin-very-slow`: 60s orbit path rotation
- `orbit`: 30s circular carousel
- `scroll-left`: 20s horizontal scrolling

## 📞 Contact Information

- **Email**: support@nodesio.in
- **Phone**: +91 72918-97879
- **Location**: Ballabgarh, Faridabad

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For inquiries, contact support@nodesio.in

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT_GUIDE.md)
- [Website Overview](./WEBSITE_OVERVIEW.md)

## ✅ Production Ready

- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ Optimized images
- ✅ Responsive design
- ✅ SEO-friendly
- ✅ Performance optimized
- ✅ Accessible navigation

---

**Built with ❤️ for the mining industry**
