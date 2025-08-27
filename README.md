# kirna.dev

Modern web development project using Next.js and Aceternity UI components.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Components**: shadcn/ui (Aceternity UI source)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: MDX support
- **TypeScript**: Full type safety

## 📁 Project Structure

```
kirna-2/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── projects/page.tsx  # Projects/Portfolio page
│   ├── contact/page.tsx   # Contact page
│   └── layout.tsx         # Root layout
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   └── custom/            # Custom page components
├── content/                # MDX content files
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
└── configuration files     # Next.js, Tailwind, TypeScript
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

### Build
- Build for production: `npm run build`
- Start production server: `npm start`

## 🎯 Project Goals

Following the Aceternity UI blueprint for:
- Modern, fast, and responsive websites
- Maintainable and scalable component architecture
- Ready for real-world deployment
- Component-based development
- Flexible content management

## 📝 Notes

- Using shadcn/ui components directly (Aceternity UI source)
- No custom JavaScript - leveraging proven component patterns
- Following the startup landing page design pattern
- 100% static site ready for Vercel deployment
