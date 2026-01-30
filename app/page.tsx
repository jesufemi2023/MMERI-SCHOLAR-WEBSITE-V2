"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionStatement } from "@/components/mission-statement"
import { OpeningSoonSection } from "@/components/opening-soon-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { OrganizationsSection } from "@/components/organizations-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Wait for components to mount and render
      setTimeout(() => {
        const id = hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          const headerOffset = 100 // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 300) // Increased timeout for better reliability
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <HeroSection />
        <MissionStatement />
        <OpeningSoonSection />
        <AboutSection />
        <ValuesSection />
        <OrganizationsSection />
      </main>
      <Footer />
    </div>
  )
}
