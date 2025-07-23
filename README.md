# Zenkai

An AI-powered code generation platform that creates interactive web applications with real-time preview capabilities.

## 🚀 Features

- **AI Code Generation**: Generate complete web applications using natural language prompts
- **Live Preview**: Real-time sandbox environment for testing generated code
- **Multiple Templates**: Pre-built project templates including Netflix clone, admin dashboard, Kanban board, and more
- **File Explorer**: Browse and edit generated project files with syntax highlighting
- **Responsive Design**: Modern UI with dark mode support
- **Project Management**: Save and manage your generated projects

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with TypeScript
- **Database**: [Prisma](https://www.prisma.io/) ORM
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **UI Components**: Custom component library with [Radix UI](https://www.radix-ui.com/)
- **Code Highlighting**: [Prism.js](https://prismjs.com/) for syntax highlighting
- **Sandbox Environment**: Custom iframe-based execution environment
- **Build Tools**: ESLint, PostCSS

## 📦 Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/            
│   ├── ui/                # Reusable UI components
│   ├── code-view/         # Code syntax highlighting
│   ├── file-explorer.tsx  # File browser component
│   └── tree-view.tsx      # File tree navigation
├── modules/
│   ├── home/              # Homepage templates and constants
│   └── projects/          # Project management features
├── lib/                   # Utility functions
└── hooks/                 # Custom React hooks

prisma/
├── schema.prisma          # Database schema
└── migrations/            # Database migrations

sandbox-templates/
└── nextjs/               # Next.js sandbox template
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zenkai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your database URL and other required variables.

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 UI Components

The project includes a comprehensive design system with components like:

- **Layout**: [`Sidebar`](src/components/ui/sidebar.tsx), [`Sheet`](src/components/ui/sheet.tsx), [`Tabs`](src/components/ui/tabs.tsx)
- **Navigation**: [`Breadcrumb`](src/components/ui/breadcrumb.tsx), [`Menubar`](src/components/ui/menubar.tsx)
- **Data Display**: [`Table`](src/components/ui/table.tsx), [`Card`](src/components/ui/card.tsx), [`Progress`](src/components/ui/progress.tsx)
- **Forms**: [`Input`](src/components/ui/input.tsx), [`Textarea`](src/components/ui/textarea.tsx), [`Switch`](src/components/ui/switch.tsx)
- **Feedback**: [`Skeleton`](src/components/ui/skeleton.tsx), [`Sonner`](src/components/ui/sonner.tsx)

## 🎯 Available Templates

The platform includes several pre-built project templates:

- 🎬 **Netflix Clone** - Streaming platform homepage with hero banner and movie sections
- 📦 **Admin Dashboard** - Professional dashboard with stats, charts, and tables  
- 📋 **Kanban Board** - Drag-and-drop task management interface
- 🗂️ **File Manager** - File browser with folder navigation
- 📺 **YouTube Clone** - Video platform with thumbnails and categories
- 🛍️ **E-commerce Store** - Shopping interface with cart functionality
- 🏡 **Airbnb Clone** - Property listing platform with filters
- 🎵 **Spotify Clone** - Music player with playlists and controls

## 🎨 Styling

The project uses a custom design system built on Tailwind CSS with:

- **CSS Custom Properties** for theming in [`globals.css`](src/app/globals.css)
- **Dark Mode** support with automatic theme switching
- **Consistent Design Tokens** for colors, spacing, and typography
- **Component Variants** using [class-variance-authority](https://cva.style/)

## 🔧 Development

### Code Highlighting

Syntax highlighting is provided by [`CodeView`](src/components/code-view/index.tsx) component with support for:
- JavaScript/TypeScript
- JSX/TSX  
- Python
- CSS

### File System

The [`FileExplorer`](src/components/file-explorer.tsx) component provides:
- File tree navigation
- Breadcrumb navigation
- Code preview with syntax highlighting
- Copy functionality

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for beautiful icons
- [Prism.js](https://prismjs.com/) for syntax highlighting
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
