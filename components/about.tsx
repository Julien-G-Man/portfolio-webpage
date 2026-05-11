'use client'

import { Award, GraduationCap, Users, TrendingUp, ExternalLink } from 'lucide-react'

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
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Learning, Building, Shipping</h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Text */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Born in the Republic of Congo, raised in Nigeria, now studying Computer Science at KNUST in Ghana as a Mastercard Foundation Scholar. Three countries, one direction — building things that matter.
            </p>
            <p>
              I've been working hands-on with LLMs — OpenAI, Claude, Azure OpenAI — integrating them into real projects. Things like <span className="text-accent font-semibold">Lamla AI</span>, an AI study platform my friend and I built, and <span className="text-accent font-semibold">ScholarAid</span>, a scholarship platform with AI-powered essay review. Each one has taught me something I didn't know going in.
            </p>
            <p>
              I genuinely believe technology is one of the most powerful tools Africa has right now — for education, health, access, opportunity. That's not just a talking point for me, it shapes what I choose to build and why.
            </p>
            <p>
              When I'm not building, I'm reading about what I haven't figured out yet — which is a long list, and that's fine. I also love helping people grow, which led me to start <span className="text-accent font-semibold">VALUENETWORK</span>, a community where I share opportunities and updates, and <span className="text-accent font-semibold">Founderslens</span>, a TikTok page posting wisdom from top founders and builders.
            </p>

            <div className="pt-2">
              <p className="text-sm font-medium text-accent mb-3">Currently exploring</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI Engineering',
                  'RAG Pipelines',
                  'MCP Servers',
                  'LangChain',
                  'LLMs',
                  'Agentic Workflows',
                  'Machine Learning',
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-sm border border-accent/30 text-foreground/70 rounded-full bg-accent/5"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm font-medium text-accent mb-3">Open to</p>
              <div className="flex flex-wrap gap-2">
                {['Internships', 'Collaboration', 'Open Source', 'Mentorship'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm border border-accent/50 text-accent rounded-full bg-accent/10 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Education */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">10+</p>
                <p className="text-sm text-muted-foreground font-medium">Projects Built</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">5+</p>
                <p className="text-sm text-muted-foreground font-medium">Deployed</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">15+</p>
                <p className="text-sm text-muted-foreground font-medium">Tools & Skills</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">1.5</p>
                <p className="text-sm text-muted-foreground font-medium">Years in Tech</p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-background border border-border rounded-lg p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Award size={24} className="text-accent" />
                Education
              </h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <h4 className="text-lg font-bold text-foreground mb-1">BSc: Computer Science</h4>
                  <p className="text-accent font-medium mb-2">Kwame Nkrumah University of Science and Technology</p>
                  <p className="text-sm text-muted-foreground">2025 – 2028 | Kumasi, Ghana</p>
                  <p className="text-sm text-muted-foreground mt-2"><span className="text-accent">Status:</span> Mastercard Foundation Scholar</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">W.A.S.S.C.E (Sciences)</h4>
                  <p className="text-accent font-medium mb-2">Rochas Foundation College of Africa</p>
                  <p className="text-sm text-muted-foreground">2020 – 2023 | Nigeria</p>
                </div>
              </div>
            </div>

            {/* Beyond Code */}
            <div className="bg-background border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-bold text-foreground">Beyond Code</h3>
              <a
                href="https://www.tiktok.com/@founderslens"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:border-accent/50 border border-border rounded-lg p-4 transition-colors"
              >
                <TrendingUp size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Founderslens</p>
                  <p className="text-sm text-muted-foreground">TikTok · wisdom from top founders and builders</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-0.5" />
              </a>
              <div className="flex items-start gap-4 border border-border rounded-lg p-4">
                <Users size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">VALUENETWORK</p>
                  <p className="text-sm text-muted-foreground">Community · opportunities, updates, and resources for students and builders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
