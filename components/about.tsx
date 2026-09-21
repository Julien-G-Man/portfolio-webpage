'use client'

import Image from 'next/image'
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
              Born in the Republic of Congo, raised in Nigeria, now studying Computer Science at KNUST in Ghana as a Mastercard Foundation Scholar. Three countries, one direction  -  building things that matter.
            </p>
            <p>
              I've been working hands-on with LLMs  -  OpenAI, Claude, Azure OpenAI  -  integrating them into real projects. Things like <span className="text-accent font-semibold">Ocasia</span>, an AI study platform my friend and I built, and <span className="text-accent font-semibold">ScholarAid</span>, a scholarship platform with AI-powered essay review. Each one has taught me something I didn't know going in.
            </p>
            <p>
              I genuinely believe technology is one of the most powerful tools Africa has right now  -  for education, health, access, opportunity. That's not just a talking point for me, it shapes what I choose to build and why.
            </p>
            <p>
              When I'm not building, I'm reading about what I haven't figured out yet - which is a long list, and that's fine. I also love helping people grow, which led me to start <span className="text-accent font-semibold">VALUENETWORK</span>, a community where I share opportunities and updates, and <span className="text-accent font-semibold">Founderslens</span>, a TikTok page posting wisdom from top founders and builders.
            </p>

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
              <div className="bg-background border border-border rounded-none p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">10+</p>
                <p className="text-sm text-muted-foreground font-medium">Projects Built</p>
              </div>
              <div className="bg-background border border-border rounded-none p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">5+</p>
                <p className="text-sm text-muted-foreground font-medium">Deployed</p>
              </div>
              <div className="bg-background border border-border rounded-none p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">15+</p>
                <p className="text-sm text-muted-foreground font-medium">Tools & Skills</p>
              </div>
              <div className="bg-background border border-border rounded-none p-6 hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent mb-2">1.5</p>
                <p className="text-sm text-muted-foreground font-medium">Years in Tech</p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-background border border-border rounded-none p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Award size={24} className="text-accent" />
                Education
              </h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <h4 className="text-lg font-bold text-foreground mb-1">BSc: Computer Science</h4>
                  <p className="text-accent font-medium mb-2">Kwame Nkrumah University of Science and Technology</p>
                  <p className="text-sm text-muted-foreground">2025  -  2028 | Kumasi, Ghana</p>
                  <p className="text-sm text-muted-foreground mt-2"><span className="text-accent">Status:</span> Mastercard Foundation Scholar</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">W.A.S.S.C.E (Sciences)</h4>
                  <p className="text-accent font-medium mb-2">Rochas Foundation College of Africa</p>
                  <p className="text-sm text-muted-foreground">2017  -  2023 | Nigeria</p>
                </div>
              </div>
            </div>

          </div>

        </div>

          {/* Beyond Code */}
          <div className="mt-12 bg-background border border-border rounded-none p-8 space-y-6">
            <h3 className="text-xl font-bold text-foreground">Beyond Code</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <a
                href="https://www.tiktok.com/@founderslens"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-border bg-secondary">
                  <Image
                    src="/paystack_thumbnail.png"
                    alt="Founderslens placeholder image"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Founderslens</p>
                    <ExternalLink size={16} className="mt-1 flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">TikTok - wisdom from top founders and builders</p>
                </div>
              </a>

              <a
                href="https://ngotgiants.buildscitech.com/what-we-do/impact-stories/julien-glory-manana"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-border bg-secondary">
                  <Image
                    src="/ngot-sprint.png"
                    alt="nGOT Giants Development Sprint placeholder image"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">nGOT Giants Impact Story</p>
                    <ExternalLink size={16} className="mt-1 flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Shipping a medical-literature RAG system through the Development Sprint</p>
                </div>
              </a>

              <a
                href="https://whatsapp.com/channel/0029Vb5ldB3GehEPpTk00Y0g"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-border bg-secondary">
                  <Image
                    src="/valuenetwork_logo.png"
                    alt="VALUENETWORK logo image"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">VALUENETWORK</p>
                    <ExternalLink size={16} className="mt-1 flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Community - opportunities, updates, and resources for students and builders</p>
                </div>
              </a>
      
            </div>
          </div>
      </div>
    </section>
  )
}
