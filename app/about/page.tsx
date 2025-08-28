import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassCard, GlassButton, AnimatedBackground } from "@/components/ui/aceternity-ui";
import AboutContent from "@/content/about.mdx";

export default function About() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 mb-6">
            🚀 About Us
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Building the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our mission, values, and the technology stack that powers our innovative solutions.
          </p>
        </div>

        {/* MDX Content */}
        <GlassCard className="p-10 mb-16">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <AboutContent />
          </div>
        </GlassCard>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full text-xs font-medium text-green-600 dark:text-green-400 mb-4">
              🚀 Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Modern Web Development{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Redefined
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              At kirna.dev, we specialize in creating modern, fast, and responsive websites 
              using cutting-edge technologies like Next.js, Tailwind CSS, and ShadCN UI components.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our approach focuses on building maintainable, scalable applications that are 
              ready for real-world deployment and future growth.
            </p>
          </div>
          <GlassCard className="p-10 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Our Tech Stack</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center group/item">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></span>
                  <span className="text-foreground font-medium">Next.js 15 with App Router</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></span>
                  <span className="text-foreground font-medium">TypeScript for type safety</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></span>
                  <span className="text-foreground font-medium">Tailwind CSS for styling</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></span>
                  <span className="text-foreground font-medium">ShadCN UI components</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></span>
                  <span className="text-foreground font-medium">Framer Motion for animations</span>
                </li>
              </ul>
            </div>
          </GlassCard>
        </div>

        {/* Values Section */}
        <div className="text-center mb-32">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 mb-6">
            💎 Our Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 leading-tight">
            Building with{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Purpose
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <GlassCard className="text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative z-10 p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Quality First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize code quality, performance, and user experience in everything we build.
                </p>
              </div>
            </GlassCard>
            <GlassCard className="text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
              <div className="relative z-10 p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Always exploring the latest technologies and best practices to deliver cutting-edge solutions.
                </p>
              </div>
            </GlassCard>
            <GlassCard className="text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10 p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Working closely with clients to understand needs and deliver solutions that exceed expectations.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <GlassCard className="max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
            <div className="relative z-10 p-12">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 mb-6">
                🚀 Ready to get started?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ready to build something{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  amazing
                </span>
                ?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your project and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GlassButton className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/25">
                  View Projects
                </GlassButton>
                <GlassButton className="px-10 py-4 text-lg font-semibold">
                  Get in Touch
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
