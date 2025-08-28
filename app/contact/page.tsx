"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard, GlassButton, AnimatedBackground } from "@/components/ui/aceternity-ui";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Message sent successfully!');
    reset();
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-6">
            📧 Get In Touch
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? Let&apos;s discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Contact Form */}
          <GlassCard className="p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-foreground">Send Message</h2>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input 
                      {...register("firstName", { required: "First name is required" })}
                      className="bg-white/20 dark:bg-slate-800/30 border border-white/30 dark:border-slate-700/30 backdrop-blur-xl text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all duration-300" 
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input 
                      {...register("lastName", { required: "Last name is required" })}
                      className="bg-white/20 dark:bg-slate-800/30 border border-white/30 dark:border-slate-700/30 backdrop-blur-xl text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all duration-300" 
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input 
                    type="email" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="bg-white/20 dark:bg-slate-800/30 border border-white/30 dark:border-slate-700/30 backdrop-blur-xl text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all duration-300" 
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select 
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full bg-white/20 dark:bg-slate-800/30 border border-white/30 dark:border-slate-700/30 backdrop-blur-xl text-foreground rounded-lg px-3 py-2 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Discussion">Project Discussion</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Support">Support</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    rows={6}
                    {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                    className="bg-white/20 dark:bg-slate-800/30 border border-white/30 dark:border-slate-700/30 backdrop-blur-xl text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all duration-300 resize-none" 
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <GlassButton type="submit" className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25">
                  Send Message
                </GlassButton>
              </form>
            </div>
          </GlassCard>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-600 dark:text-purple-400 mb-4">
                📍 Contact Info
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              <GlassCard className="p-6 group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/20">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@kirna.dev</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/20">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Website</h3>
                    <p className="text-muted-foreground">kirna.dev</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/20">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <p className="text-muted-foreground">@kirna-dev</p>
                  </div>
                </div>
              </GlassCard>
            </div>
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
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  amazing
                </span>{" "}
                together
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Your next project is just a message away. Let&apos;s discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GlassButton className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/25">
                  Start a Project
                </GlassButton>
                <GlassButton className="px-10 py-4 text-lg font-semibold">
                  View Our Work
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
