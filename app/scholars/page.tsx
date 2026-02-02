"use client"

import React, { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MoreScholarJourneys } from "@/components/more-scholar-journeys"
import { TestimonialCard } from "@/components/testimonial-card"
import Image from "next/image"

interface College {
  id: string
  name: string
  logo: string
  category: string[]
}

interface ScholarStory {
  id: number
  name: string
  school: string
  image: string
  description: string
}

interface Testimonial {
  id: string
  name: string
  role: string
  schoolLine: string
  quoteShort: string
  quoteFull: string
  tags: string[]
  image: string
}

export default function ScholarsPage() {
  const [colleges, setColleges] = useState<College[]>([])
  const [scholarStories, setScholarStories] = useState<ScholarStory[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [filteredColleges, setFilteredColleges] = useState<College[]>([])

  useEffect(() => {
    // Load acceptances data
    fetch("/acceptances.json")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data.colleges)
        setScholarStories(data.scholarStories)
        setFilteredColleges(data.colleges)
      })
      .catch((error) => console.error("Error loading acceptances data:", error))

    // Load testimonials data
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data.testimonials)
      })
      .catch((error) => console.error("Error loading testimonials data:", error))
  }, [])

  useEffect(() => {
    // Filter colleges based on selected category
    if (selectedFilter === "all") {
      setFilteredColleges(colleges)
    } else {
      setFilteredColleges(
        colleges.filter((college) => college.category.includes(selectedFilter))
      )
    }
  }, [selectedFilter, colleges])

  const filters = [
    { label: "All", value: "all" },
    { label: "Selectives", value: "selective" },
    { label: "HBCU", value: "hbcu" },
    { label: "STEM", value: "stem" },
    { label: "Liberal Arts", value: "liberal-arts" },
    { label: "Flagship", value: "flagship" },
  ]

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F6EFDF" }}>
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Proof of What's Possible Card */}
          <div
            className="rounded-lg p-8 md:p-12 mb-16"
            style={{
              backgroundColor: "#F8F6E8",
              border: "1px solid #D6D9DC",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-2"
                style={{ color: "#092B43" }}
              >
                Proof of What's Possible
              </h2>
              <p
                className="font-serif text-lg"
                style={{ color: "#092B43" }}
              >
                Our Scholars Earn Admissions to Top Institutions
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className="font-serif font-semibold px-5 py-2 rounded-lg transition-all"
                  style={{
                    backgroundColor:
                      selectedFilter === filter.value ? "#092B43" : "#F9F4F2",
                    color: selectedFilter === filter.value ? "#faf9f6" : "#092B43",
                    border:
                      selectedFilter === filter.value
                        ? "1px solid #092B43"
                        : "1px solid #D6D9DC",
                    fontSize: "14px",
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* College Logos Grid */}
            <div className="mb-12">
              <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3 md:gap-4 mb-8">
                {filteredColleges.map((college) => (
                  <div
                    key={college.id}
                    className="flex items-center justify-center p-2 rounded-lg transition-all hover:shadow-sm"
                    style={{
                      backgroundColor: "#F0E5D5",
                      border: "1px solid #D6D9DC",
                      aspectRatio: "1",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <div className="relative w-14 h-14">
                      <Image
                        src={college.logo || "/placeholder.svg"}
                        alt={college.name}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement
                          img.src = "/placeholder-logo.svg"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="font-serif text-mmeri-navy hover:text-mmeri-maroon transition-colors underline"
                >
                  View all 17 acceptances
                </a>
              </div>
            </div>

            {/* Featured Scholar Stories */}
            <div className="mt-12">
              <h3
                className="font-serif text-3xl font-bold text-center mb-12"
                style={{
                  color: "#092B43",
                  borderBottom: "2px dotted #d4a84b",
                  paddingBottom: "12px",
                }}
              >
                Featured Scholar Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials
                  .filter((t) => ["aysha-alibin-skinner", "darion", "jesua-trejo"].includes(t.id))
                  .map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      id={testimonial.id}
                      name={testimonial.name}
                      role={testimonial.role}
                      schoolLine={testimonial.schoolLine}
                      quoteShort={testimonial.quoteShort}
                      quoteFull={testimonial.quoteFull}
                      tags={testimonial.tags}
                      image={testimonial.image}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* More Scholar Journeys Section */}
        <MoreScholarJourneys testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  )
}
