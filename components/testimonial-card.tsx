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
      className="rounded-lg p-4 transition-all flex flex-col h-full"
      style={{
        backgroundColor: "#FDFBF7",
        border: "1px solid #E5E2DA",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
      }}
    >
      {/* Header: Photo + Name/Role side by side */}
      <div className="flex items-start gap-3 mb-3">
        {/* Headshot */}
        <div className="relative w-12 h-12 flex-shrink-0">
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
        <div className="flex flex-col justify-center min-w-0">
          <h4
            className="font-sans font-bold text-sm leading-tight truncate"
            style={{ color: "#1A1A1A" }}
          >
            {name}
          </h4>
          <p
            className="font-sans text-[11px] leading-snug mt-0.5 truncate"
            style={{ color: "#A67C3D" }}
          >
            {role}
          </p>
          <p
            className="font-sans text-[11px] italic leading-snug truncate"
            style={{ color: "#A67C3D" }}
          >
            {schoolLine}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p
        className="font-serif text-xs mb-3 flex-grow leading-relaxed"
        style={{ color: "#2D2D2D" }}
      >
        &ldquo;{displayQuote}&rdquo;
      </p>

      {/* Footer: Attribution + Tags + Read More */}
      <div className="mt-auto">
        {/* Attribution */}
        <p
          className="font-sans text-[11px] font-semibold"
          style={{ color: "#1A1A1A" }}
        >
          {name}
        </p>
        <p
          className="font-sans text-[10px] mb-2"
          style={{ color: "#6B6B6B" }}
        >
          {role}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
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
                className="text-[9px] px-2 py-0.5 rounded-full font-sans"
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
          className="font-sans text-[11px] font-medium transition-colors hover:underline"
          style={{ color: "#1A1A1A" }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  )
}
