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
      className="rounded-lg p-5 md:p-6 transition-all flex flex-col h-full"
      style={{
        backgroundColor: "#FDFBF7",
        border: "1px solid #E5E2DA",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* Header: Photo + Name/Role side by side */}
      <div className="flex items-start gap-4 mb-4">
        {/* Headshot */}
        <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover rounded-full"
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.src = "/placeholder-user.jpg"
            }}
          />
        </div>

        {/* Name & Role */}
        <div className="flex flex-col justify-center pt-1">
          <h4
            className="font-sans font-bold text-base md:text-lg leading-tight"
            style={{ color: "#1A1A1A" }}
          >
            {name}
          </h4>
          <p
            className="font-sans text-xs md:text-[13px] leading-snug mt-0.5"
            style={{ color: "#A67C3D" }}
          >
            {role}
          </p>
          <p
            className="font-sans text-xs md:text-[13px] italic leading-snug"
            style={{ color: "#A67C3D" }}
          >
            {schoolLine}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p
        className="font-serif text-[13px] md:text-sm mb-4 flex-grow leading-relaxed"
        style={{ color: "#2D2D2D" }}
      >
        &ldquo;{displayQuote}&rdquo;
      </p>

      {/* Footer: Name attribution + Tags + Read More */}
      <div className="mt-auto">
        {/* Attribution */}
        <p
          className="font-sans text-xs font-semibold mb-1"
          style={{ color: "#1A1A1A" }}
        >
          {name}
        </p>
        <p
          className="font-sans text-[11px] mb-3"
          style={{ color: "#6B6B6B" }}
        >
          {role}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, index) => {
            const tagColors = [
              { bg: "#F7F3EB", text: "#8B7355", border: "#E8E0D0" },
              { bg: "#EEF2EF", text: "#5A7A65", border: "#D8E2DC" },
              { bg: "#F5F0E8", text: "#7A6B55", border: "#E5DDD0" },
            ]
            const colorSet = tagColors[index % tagColors.length]
            return (
              <span
                key={tag}
                className="text-[10px] md:text-[11px] px-2.5 py-1 rounded-full font-sans"
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

        {/* Read More */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-sans text-xs font-medium transition-colors hover:underline"
          style={{ color: "#1A1A1A" }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  )
}
