"use client"

import React, { useState, useRef, useEffect } from "react"
import { TestimonialCard } from "./testimonial-card"

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

interface MoreScholarJourneysProps {
  testimonials: Testimonial[]
}

export function MoreScholarJourneys({
  testimonials,
}: MoreScholarJourneysProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  useEffect(() => {
    updateScrollButtons()
  }, [testimonials])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
      setTimeout(updateScrollButtons, 300)
    }
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const scrollAmount = index * 320
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full py-16 md:py-20" style={{ backgroundColor: "#F9F4F2" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#092B43" }}
        >
          More Scholar Journeys
        </h2>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
            onScroll={updateScrollButtons}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full snap-start"
                style={{ width: "calc(90vw - 8px)" }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="rounded-full transition-all"
                style={{
                  width: currentIndex === index ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    currentIndex === index ? "#092B43" : "#d4a84b",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
