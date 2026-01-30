import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhoWeServeGrid } from "@/components/who-we-serve-grid"

export const metadata = {
  title: "Who We Serve",
  description:
    "MMERI Scholars serves diaspora students, first-generation students and families, and purpose-seeking students navigating the college admissions journey.",
}

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-mmeri-navy mb-4">Who We Serve</h1>
            <p className="font-serif text-lg md:text-xl text-mmeri-navy/80 max-w-3xl mx-auto">
              We partner with students and families who value culture, clarity, and confidence in their college journey.
            </p>
          </div>

          {/* Grid Component */}
          <WhoWeServeGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
