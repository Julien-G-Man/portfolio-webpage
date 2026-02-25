'use client'

import { Award, GraduationCap } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full border border-border mb-4">
            <GraduationCap size={16} className="text-accent" />
            <span className="text-xs font-medium text-accent">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Passion for AI & Innovation</h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Text */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm a Computer Science student at Kwame Nkrumah University of Science and Technology (KNUST) and a Mastercard Scholar, deeply passionate about building and experimenting with applied AI systems. My journey in tech has been driven by a fascination with how modern AI tools can solve real-world problems.
            </p>
            <p>
              I've worked extensively with Large Language Models using OpenAI and Azure OpenAI, integrating them into production systems. My experience ranges from building AI-powered educational platforms like <span className="text-accent font-semibold">Lamla AI</span> to engineering scalable conversational AI backends with <span className="text-accent font-semibold">Tena AI</span>.
            </p>
            <p>
              Beyond coding, I'm genuinely interested in responsible AI use, AI education, and helping students and developers understand how to leverage modern AI tools effectively in real-world projects. I believe the future belongs to those who can bridge the gap between AI capabilities and practical applications.
            </p>
            <p>
              When I'm not building, you'll find me exploring new AI research, contributing to open-source projects, or mentoring peers interested in full-stack development and AI integration.
            </p>
          </div>

          {/* Stats & Education */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">5+</p>
                <p className="text-sm text-muted-foreground font-medium">Projects Built</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">1</p>
                <p className="text-sm text-muted-foreground font-medium">Year in Tech</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">10+</p>
                <p className="text-sm text-muted-foreground font-medium">Skills Mastered</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">100%</p>
                <p className="text-sm text-muted-foreground font-medium">Passionate</p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-background border border-border rounded-lg p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award size={24} className="text-accent" />
                Education
              </h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <h4 className="text-lg font-bold text-white mb-1">BSc: Computer Science</h4>
                  <p className="text-accent font-medium mb-2">Kwame Nkrumah University of Science and Technology</p>
                  <p className="text-sm text-muted-foreground">2025 – 2028 | Kumasi, Ghana</p>
                  <p className="text-sm text-muted-foreground mt-2"><span className="text-accent">Status:</span> Mastercard Foundation Scholar</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-1">W.A.S.S.C.E (Sciences)</h4>
                  <p className="text-accent font-medium mb-2">Rochas Foundation College of Africa</p>
                  <p className="text-sm text-muted-foreground">2020 – 2023 | Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
