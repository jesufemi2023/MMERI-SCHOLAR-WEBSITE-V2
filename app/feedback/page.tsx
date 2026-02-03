'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#092B43" }}
            >
              Share Your Feedback
            </h1>
            <p
              className="font-sans text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "#6B6B6B" }}
            >
              Your insights help us improve our programs and better serve first-generation families on their college journey.
            </p>
          </div>

          {/* Feedback Form Embed */}
          <div className="max-w-2xl mx-auto">
            <div
              style={{
                backgroundColor: "#F9F4F2",
                border: "1px solid #D6D9DC",
                borderRadius: "12px",
                padding: "48px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
              }}
            >
              <iframe
                src="https://forms.gle/9cFyQXzN3T7hZ8mE8"
                width="100%"
                height="600"
                style={{ border: "none" }}
                title="MMERI Feedback Form"
              />
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2
              className="font-serif text-2xl font-bold mb-6"
              style={{ color: "#092B43" }}
            >
              How to Share Your Feedback
            </h2>
            <div className="space-y-4">
              <p
                className="font-sans text-base"
                style={{ color: "#6B6B6B" }}
              >
                If you prefer to reach out directly, you can also contact us at:
              </p>
              <a
                href="mailto:feedback@mmerischolars.org"
                className="font-sans font-semibold text-base hover:underline"
                style={{ color: "#A67C3D" }}
              >
                feedback@mmerischolars.org
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
