# Next.js + Sanity Website Maker

A modern, production-ready website template built with **Next.js 16**, **Sanity CMS**, and **Tailwind CSS**. Optimized for Netlify deployment.

## ✨ Features

- ⚡ **Next.js 16** with App Router and Server Components
- 📝 **Sanity CMS** for headless content management
- 🎨 **Tailwind CSS v4** for styling
- 🎬 **Framer Motion** for animations
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with meta tags and Open Graph
- 🚀 **Netlify Ready** with optimized deployment config
- ✅ **TypeScript** for type safety

## 📦 Project Structure

```
├── web/                    # Next.js frontend
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   └── lib/           # Utilities & Sanity config
│   └── public/            # Static assets
├── studio/                 # Sanity CMS Studio
│   ├── schemas/           # Content schemas
│   └── sanity.config.ts   # Studio configuration
└── netlify.toml           # Netlify deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- A [Sanity.io](https://sanity.io) account

### 1. Create a Sanity Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click "Create new project"
3. Note your **Project ID** and **Dataset** name

### 2. Configure Environment Variables

**For the web app (`web/.env.local`):**
```bash
cp web/.env.example web/.env.local
```

Edit `web/.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

**For Sanity Studio (`studio/.env`):**
```bash
cp studio/.env.example studio/.env
```

Edit `studio/.env`:
```env
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

### 3. Install Dependencies

```bash
# Install web dependencies
cd web
npm install

# Install studio dependencies
cd ../studio
npm install
```

### 4. Run Development Servers

**Terminal 1 - Web App:**
```bash
cd web
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

**Terminal 2 - Sanity Studio:**
```bash
cd studio
npm run dev
```
Open [http://localhost:3333](http://localhost:3333)

## 🔧 Customization

### Update Site Metadata

Edit `web/src/app/layout.tsx`:
- Update site name, description, and keywords
- Replace social media images in `public/`

### Add New Pages

1. Create a new folder in `web/src/app/`
2. Add a `page.tsx` file with your content
3. Optionally create a Sanity schema for dynamic content

### Add New Sanity Schemas

1. Create a new schema file in `studio/schemas/`
2. Register it in `studio/schemas/index.ts`
3. Create corresponding queries in `web/src/lib/queries.ts`

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build settings:
   - **Base directory:** `web`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. Add environment variables in Netlify dashboard

### Deploy Sanity Studio

```bash
cd studio
npm run deploy
```

Follow the prompts to deploy to `your-studio.sanity.studio`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

## 📄 License

MIT License - feel free to use this template for any project!

---

Built with ❤️ by [RBG Web Design](https://github.com/RBG-WebDesign)
