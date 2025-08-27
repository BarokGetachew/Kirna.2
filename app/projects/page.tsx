import { Badge } from "@/components/ui/badge";
import { GlassCard, GlassButton, AnimatedBackground } from "@/components/ui/aceternity-ui";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern, scalable e-commerce solution built with Next.js and Stripe integration.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "🛍️",
      category: "Full-Stack"
    },
    {
      title: "Portfolio Website",
      description: "A beautiful, responsive portfolio website showcasing creative work and projects.",
      technologies: ["React", "Framer Motion", "GSAP", "CSS Modules"],
      image: "🎨",
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
      image: "📋",
      category: "Full-Stack"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with beautiful visualizations and location tracking.",
      technologies: ["React", "D3.js", "OpenWeather API", "PWA"],
      image: "🌤️",
      category: "Frontend"
    },
    {
      title: "Blog Platform",
      description: "A content management system for bloggers with SEO optimization and analytics.",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      image: "✍️",
      category: "Full-Stack"
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile application for fitness tracking and goal management.",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      image: "📱",
      category: "Mobile"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-600 dark:text-green-400 mb-6">
            🚀 Our Work
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of innovative web applications and digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project, index) => (
            <GlassCard 
              key={index} 
              className="group hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
              <div className="relative z-10 p-8">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{project.image}</span>
                  </div>
                  <Badge variant="tech" className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-600 dark:text-purple-400">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-white/20 dark:bg-slate-800/30 border border-white/30 dark:border-slate-700/30 text-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <GlassButton className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                  View Project
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <GlassCard className="max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
            <div className="relative z-10 p-12">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 mb-6">
                💼 Let's Work Together
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ready to start your{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  next project
                </span>
                ?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative design.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GlassButton className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/25">
                  Start a Project
                </GlassButton>
                <GlassButton className="px-10 py-4 text-lg font-semibold">
                  View More Work
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
