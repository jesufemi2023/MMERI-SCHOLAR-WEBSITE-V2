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
      className="relative rounded-lg transition-all flex flex-col"
      style={{
        backgroundColor: "#FDFBF7",
        border: "1px solid #E5E0D5",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
        width: "280px",
        minHeight: "320px",
        padding: "20px",
        paddingTop: "50px",
      }}
    >
      {/* Headshot - positioned at top left, overlapping card edge */}
      <div
        className="absolute"
        style={{
          top: "-30px",
          left: "20px",
          width: "70px",
          height: "70px",
        }}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover rounded-full"
          style={{ border: "2px solid #E5E0D5" }}
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.src = "/placeholder-user.jpg"
          }}
        />
      </div>

      {/* Name and Info - aligned left */}
      <div className="mb-3">
        <h4
          className="font-sans font-bold text-base mb-0.5"
          style={{ color: "#1A1A1A" }}
        >
          {name}
        </h4>
        <p
          className="font-sans text-xs leading-tight"
          style={{ color: "#996B1D" }}
        >
          {role}
        </p>
        <p
          className="font-sans text-xs leading-tight italic"
          style={{ color: "#8A8A8A" }}
        >
          {schoolLine}
        </p>
      </div>

      {/* Quote */}
      <p
        className="font-sans text-sm mb-4 flex-grow"
        style={{ color: "#3D3D3D", lineHeight: "1.5" }}
      >
        &ldquo;{displayQuote}&rdquo;
      </p>

      {/* Name attribution below quote */}
      <p
        className="font-sans text-xs font-semibold mb-1"
        style={{ color: "#1A1A1A" }}
      >
        {name.split(" ")[0]} {name.split(" ")[1]?.[0]}.
      </p>
      <p
        className="font-sans text-xs mb-3"
        style={{ color: "#8A8A8A" }}
      >
        {role.includes("Class") ? role : `Class of ${new Date().getFullYear()}`}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag, index) => {
          const tagColors = [
            { bg: "#F5F0E6", text: "#8B7355", border: "#E8E0D0" },
            { bg: "#E8F0E8", text: "#5A7A5A", border: "#D0E0D0" },
            { bg: "#FFF5E6", text: "#A07030", border: "#F0E0C8" },
          ]
          const colorSet = tagColors[index % tagColors.length]
          return (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-1 rounded-full font-sans"
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
        className="font-sans text-xs text-left transition-colors hover:underline"
        style={{ color: "#5A5A5A" }}
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  )
}
