import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedBackground, FloatingCard, AnimatedIcon, GlassCard, GlassButton } from "@/components/ui/aceternity-ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          {/* Premium gradient text */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 mb-6">
              ✨ Deploy in seconds, not hours
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Deploy your website in{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              seconds
            </span>
            , not hours.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            With our state of the art, cutting edge, we are so back kinda hosting services, you can deploy your website in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Create account
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold border-2 hover:bg-muted/50 transition-all duration-300 transform hover:scale-105">
              Book a call
            </Button>
          </div>

          {/* Premium stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">50ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-4 bg-gradient-to-b from-muted/30 to-background relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-600 dark:text-green-400 mb-6">
              🚀 Features
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Deployments made{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                easy
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Deploy with ease, leave complexities to us.
            </p>
          </div>
          
          {/* Development Flow */}
          <GlassCard className="max-w-4xl mx-auto mb-20 font-mono text-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Deployment Flow</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">$</span>
                  <span className="text-foreground">git add .</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">$</span>
                  <span className="text-foreground">git commit -m &quot;update&quot;</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500">$</span>
                  <span className="text-foreground">git push</span>
                </div>
                <div className="text-center text-lg font-semibold text-green-600 mt-6 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  ✨ your site is live
                </div>
              </div>
            </div>
          </GlassCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FloatingCard delay={0.1}>
              <div className="text-center group">
                <AnimatedIcon>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                    <span className="text-4xl">🚀</span>
                  </div>
                </AnimatedIcon>
                <h3 className="text-2xl font-bold mb-3 text-foreground">One click deploy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deploy your app in seconds, with our one click deploy feature.
                </p>
              </div>
            </FloatingCard>
            
            <GlassCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Intuitive workflow</h3>
              <p className="text-muted-foreground leading-relaxed">
                With our intuitive workflow, you can easily manage your app without complex steps.
              </p>
            </GlassCard>
            
            <GlassCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                <span className="text-4xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Hosting over the edge</h3>
              <p className="text-muted-foreground leading-relaxed">
                With our edge network, we host your website by going into each city by ourselves.
              </p>
            </GlassCard>
            
            <GlassCard className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                <span className="text-4xl">✍️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Running out of copy</h3>
              <p className="text-muted-foreground leading-relaxed">
                You are running out of copy for your website, we can generate copy for you.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 mb-6">
              💰 Pricing
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Simple pricing for{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                advanced
              </span>{" "}
              people
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Our pricing is designed for advanced people who need more features and more flexibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hobby Plan */}
            <GlassCard className="hover:scale-105 transition-transform duration-300 relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-sm font-medium rounded-full shadow-lg">
                  Hobby
                </span>
              </div>
              <div className="pt-8">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Hobby</h3>
                <div className="text-5xl font-bold mb-8">
                  <span className="text-2xl">$</span>99
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Access to basic analytics reports
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Up to 10,000 data points per month
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Email support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Community forum access
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Cancel anytime
                  </li>
                </ul>
                <GlassButton className="w-full py-4 text-lg font-semibold">
                  Get Hobby
                </GlassButton>
              </div>
            </GlassCard>

            {/* Starter Plan */}
            <GlassCard className="relative hover:scale-105 transition-transform duration-300 border-2 border-purple-500/50 group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="default" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg">
                  ⭐ Featured
                </Badge>
              </div>
              <div className="pt-8">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Starter</h3>
                <div className="text-5xl font-bold mb-8">
                  <span className="text-2xl">$</span>299
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Advanced analytics dashboard
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Customizable reports and charts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Real-time data tracking
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Integration with third-party tools
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Everything in Hobby Plan
                  </li>
                </ul>
                <GlassButton className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get Starter
                </GlassButton>
              </div>
            </GlassCard>

            {/* Pro Plan */}
            <GlassCard className="hover:scale-105 transition-transform duration-300 relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-full shadow-lg">
                  Pro
                </span>
              </div>
              <div className="pt-8">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Pro</h3>
                <div className="text-5xl font-bold mb-8">
                  <span className="text-2xl">$</span>599
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Enterprise-grade security
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Priority support 24/7
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Advanced team management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Everything in Starter Plan
                  </li>
                </ul>
                <GlassButton className="w-full py-4 text-lg font-semibold">
                  Get Pro
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="container mx-auto text-center">
          <GlassCard className="max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
            <div className="relative z-10 p-12">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 mb-6">
                🚀 Ready to get started?
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Join thousands of developers who have already{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  deployed
                </span>{" "}
                with us.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Experience lightning-fast hosting with unparalleled reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GlassButton size="lg" className="px-12 py-6 text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/25">
                  Start deploying now
                </GlassButton>
                <GlassButton size="lg" className="px-12 py-6 text-xl font-semibold">
                  View documentation
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
