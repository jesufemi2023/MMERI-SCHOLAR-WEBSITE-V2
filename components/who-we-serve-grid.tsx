"use client"

import type React from "react"

import { useState } from "react"
import { Globe, Sprout, Settings, Lightbulb, Users, Compass } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface ServiceCategory {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  description: string
}

const categories: ServiceCategory[] = [
  {
    id: "diaspora",
    title: "Diaspora Students",
    subtitle: "Students navigating international contexts.",
    icon: <Globe className="w-12 h-12 md:w-14 md:h-14" />,
    description:
      "Young people growing up between cultures who want guidance that honors their heritage while helping them move confidently through the American school system.",
  },
  {
    id: "first-gen",
    title: "First-Gen Students",
    subtitle: "Pioneering new academic legacies.",
    icon: <Sprout className="w-12 h-12 md:w-14 md:h-14" />,
    description:
      "Students who are the first in their families to navigate U.S high school, college, and career decisions and want support from someone who understands what that feels like.",
  },
  {
    id: "second-gen",
    title: "Second-Gen Students",
    subtitle: "Building upon family's educational journey.",
    icon: <Settings className="w-12 h-12 md:w-14 md:h-14" />,
    description:
      "Young people raised with strong cultural values who want help navigating school, opportunities, and identity in a way that honors both their heritage and their present reality.",
  },
  {
    id: "motivated",
    title: "Motivated Students",
    subtitle: "Driven individuals with clear goals.",
    icon: <Lightbulb className="w-12 h-12 md:w-14 md:h-14" />,
    description:
      "High-achieving or driven students (Grades 9–12) who want structure, strategy, and clarity as they work towards their academic and extracurricular pathways.",
  },
  {
    id: "parents",
    title: "Parents & Families",
    subtitle: "Guidance for the whole family unit.",
    icon: <Users className="w-12 h-12 md:w-14 md:h-14" />,
    description:
      "Families who want transparent advice, cultural understanding, and a trusted partner who respects their values and hopes for their child.",
  },
  {
    id: "purpose",
    title: "Purpose-Seeking Students",
    subtitle: "Finding direction for their academic path.",
    icon: <Compass className="w-12 h-12 md:w-14 md:h-14" />,
    description:
      "Students who want clarity about majors, strengths, and future paths so their choices feel intentional, informed, and aligned with who they are.",
  },
]

export function WhoWeServeGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className="group relative bg-white border-2 border-mmeri-navy/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-mmeri-gold hover:shadow-lg hover:scale-105 text-center flex flex-col items-center gap-4"
          >
            {/* Icon */}
            <div className="text-mmeri-navy group-hover:text-mmeri-gold transition-colors duration-300">
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="font-sans text-xl md:text-2xl font-bold text-mmeri-navy group-hover:text-mmeri-gold transition-colors">
              {category.title}
            </h3>

            {/* Subtitle */}
            <p className="font-serif text-sm md:text-base text-mmeri-navy/70">{category.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-mmeri-gold">{selectedCategory?.icon}</div>
              <DialogTitle className="font-sans text-2xl md:text-3xl font-bold text-mmeri-navy">
                {selectedCategory?.title}
              </DialogTitle>
            </div>
            <DialogDescription className="font-serif text-base md:text-lg text-mmeri-navy/80 text-left leading-relaxed pt-2">
              {selectedCategory?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
