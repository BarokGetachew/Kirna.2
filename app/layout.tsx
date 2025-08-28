import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import '@/styles/globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { CollapsibleNavbar } from '@/components/ui/collapsible-navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kirna.dev - Modern Web Development',
  description: 'Professional web development services with modern technologies',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <CollapsibleNavbar />

          {/* Main Content */}
          <main>{children}</main>

                     {/* Footer */}
           <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
             <div className="container mx-auto px-4 py-8">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 <div>
                   <h3 className="text-lg font-semibold mb-4 text-foreground">Startup</h3>
                   <p className="text-muted-foreground">Modern web development with cutting-edge technologies.</p>
                 </div>
                 <div>
                   <h4 className="font-semibold mb-4 text-foreground">Pages</h4>
                   <ul className="space-y-2">
                     <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                     <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                     <li><a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
                     <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-semibold mb-4 text-foreground">Socials</h4>
                   <ul className="space-y-2">
                     <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
                     <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
                     <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
                   <ul className="space-y-2">
                     <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                     <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                   </ul>
                 </div>
               </div>
               <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
                 <p>&copy; 2025 Startup. All rights reserved.</p>
                 <p className="mt-2 text-sm">Built with ❤️ using modern web technologies</p>
               </div>
             </div>
           </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
