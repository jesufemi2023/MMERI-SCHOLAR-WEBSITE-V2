"use client"

import React, { useState } from "react"
import Image from "next/image"

interface TestimonialCardProps {
  id: string
  name: string
  role: string
  schoolLine: string
  quoteShort: string
  quoteFull: string
  tags: string[]
  image: string
}

export function TestimonialCard({
  name,
  role,
  schoolLine,
  quoteShort,
  quoteFull,
  tags,
  image,
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const displayQuote = isExpanded ? quoteFull : quoteShort

  return (
    <div
      className="rounded-xl p-6 md:p-7 transition-all flex flex-col h-full"
      style={{
        backgroundColor: "#FDFBF7",
        border: "1px solid #E8E4DC",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Headshot */}
      <div className="mb-5 flex justify-center">
        <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover rounded-full"
            style={{ border: "3px solid #E8E4DC" }}
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.src = "/placeholder-user.jpg"
            }}
          />
        </div>
      </div>

      {/* Name */}
      <h4
        className="font-serif font-bold text-lg md:text-xl text-center mb-1"
        style={{ color: "#092B43" }}
      >
        {name}
      </h4>

      {/* Role Line */}
      <p
        className="font-sans text-xs md:text-sm text-center mb-0.5"
        style={{ color: "#8B6914" }}
      >
        {role}
      </p>

      {/* School Line */}
      <p
        className="font-sans text-xs md:text-sm text-center mb-5 italic"
        style={{ color: "#7A6B4E" }}
      >
        {schoolLine}
      </p>

      {/* Quote */}
      <p
        className="font-serif text-sm md:text-base mb-5 flex-grow leading-relaxed"
        style={{ color: "#3A3A3A" }}
      >
        &ldquo;{displayQuote}&rdquo;
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {tags.map((tag, index) => {
          const tagColors = [
            { bg: "#F5F0E6", text: "#8B6914", border: "#E5DCC8" },
            { bg: "#EDF2EE", text: "#4A6B5A", border: "#D4E0D8" },
            { bg: "#F0EDE8", text: "#6B5A4A", border: "#DDD7CC" },
          ]
          const colorSet = tagColors[index % tagColors.length]
          return (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full font-sans font-medium"
              style={{
                backgroundColor: colorSet.bg,
                color: colorSet.text,
                border: `1px solid ${colorSet.border}`,
              }}
            >
              {tag}
            </span>
          )
        })}
      </div>

      {/* Read More / Read Less */}
      {quoteFull && quoteShort !== quoteFull && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-sans text-sm font-medium text-center transition-colors hover:underline"
          style={{ color: "#8B6914" }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  )
}
