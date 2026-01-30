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
        backgroundColor: "#FFFFFF",
        border: "1px solid #D6D9DC",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Headshot */}
      <div className="mb-4 flex justify-center">
        <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
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
      </div>

      {/* Name */}
      <h4
        className="font-serif font-bold text-base md:text-lg text-center mb-1"
        style={{ color: "#092B43" }}
      >
        {name}
      </h4>

      {/* Role Line */}
      <p
        className="font-serif text-xs md:text-sm text-center mb-1"
        style={{ color: "#6b8e7f" }}
      >
        {role}
      </p>

      {/* School Line */}
      <p
        className="font-serif text-xs md:text-sm text-center mb-4"
        style={{ color: "#6b8e7f" }}
      >
        {schoolLine}
      </p>

      {/* Quote */}
      <p
        className="font-serif text-sm mb-4 flex-grow"
        style={{ color: "#092B43", lineHeight: "1.5" }}
      >
        {displayQuote}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full font-serif"
            style={{
              backgroundColor: "#f5f5f5",
              color: "#092B43",
              border: "1px solid #e5e5e5",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read More / Read Less */}
      {quoteFull && quoteShort !== quoteFull && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-serif text-sm font-semibold text-center transition-colors hover:opacity-70"
          style={{ color: "#092B43" }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  )
}
