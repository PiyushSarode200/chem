"use client"

import { Heart, GraduationCap, Users, FlaskConical } from "lucide-react"

export function AcknowledgmentSection() {
  return (
    <section id="acknowledgment" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary mb-4">
            Thank You
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Acknowledgment
          </h2>
        </div>

        {/* Main Acknowledgment Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-pulse-glow">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
              </div>

              {/* Main Text */}
              <div className="text-center space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                  We would like to express our sincere gratitude to our respected faculty and the 
                  <span className="text-primary font-medium"> Chemical Prototyping Department </span>
                  for providing us the opportunity to conduct this experiment on Hand Sanitizer Preparation.
                </p>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                  We are thankful for their valuable guidance, support, and encouragement throughout the project. 
                  Their insights helped us understand the practical application of chemical formulations.
                </p>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                  We also thank our teammates — 
                  <span className="text-primary font-medium"> Abhijeet Damal</span>, 
                  <span className="text-primary font-medium"> Piyush Sarode</span>, 
                  <span className="text-primary font-medium"> Shravani Minache</span>, and 
                  <span className="text-primary font-medium"> Vikrant Haral </span>
                  — for their cooperation and teamwork in successfully completing this experiment.
                </p>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-4 my-10">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                <FlaskConical className="h-5 w-5 text-primary" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
              </div>

              {/* Attribution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-6 text-center border border-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-1">Faculty & Department</h4>
                  <p className="text-sm text-muted-foreground">
                    Chemical Prototyping Department
                  </p>
                </div>

                <div className="glass rounded-2xl p-6 text-center border border-primary/10">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-1">Team Members</h4>
                  <p className="text-sm text-muted-foreground">
                    Abhijeet, Piyush, Shravani, Vikrant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Chemical Prototyping Experiment • 2026
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <FlaskConical className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Hand Sanitizer Preparation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
