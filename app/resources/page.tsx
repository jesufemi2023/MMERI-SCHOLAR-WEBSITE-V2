"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Calendar, FileText, GraduationCap, CheckCircle2 } from "lucide-react"

const resourceHighlights = [
  {
    icon: CheckCircle2,
    title: "College Application Checklist",
    description: "A comprehensive timeline to keep your family on track from freshman year through senior year.",
  },
  {
    icon: Calendar,
    title: "Key Deadlines & Milestones",
    description: "Never miss important dates for applications, financial aid, and scholarship opportunities.",
  },
  {
    icon: FileText,
    title: "Financial Aid Guidance",
    description: "Understanding FAFSA, CSS Profile, and scholarship strategies for first-generation families.",
  },
  {
    icon: GraduationCap,
    title: "College Research Tools",
    description: "How to evaluate schools based on fit, outcomes, and affordability - not just rankings.",
  },
]

export default function ResourcesPage() {
  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement("script")
    script.src = "https://f.convertkit.com/ckjs/ck.5.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://f.convertkit.com/ckjs/ck.5.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-mmeri-cream">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F8F6E8" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-mmeri-maroon" />
                <span
                  className="font-sans text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "#A67C3D" }}
                >
                  Free Resources
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-mmeri-navy mb-6 leading-tight text-balance">
                College Resources for Families Who Want to Get It Right the First Time
              </h1>
              <p className="font-serif text-lg md:text-xl text-mmeri-navy/80 max-w-3xl mx-auto leading-relaxed text-pretty">
                Practical tools, timelines, and guidance designed for first-generation and diaspora families navigating
                the college process with clarity and confidence
              </p>
            </div>

            {/* Email Signup Card */}
            <div
              className="bg-white rounded-xl p-8 md:p-10 shadow-sm max-w-2xl mx-auto"
              style={{ border: "1px solid #E5E2DA" }}
            >
              <h2 className="font-sans text-xl md:text-2xl font-bold text-mmeri-navy text-center mb-3">
                Get Your Free College Planning Checklist
              </h2>
              <p className="font-serif text-sm md:text-base text-mmeri-navy/70 text-center mb-6">
                Enter your email below and we&apos;ll send you our comprehensive checklist to help your family stay
                organized and informed.
              </p>

              {/* ConvertKit Form */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <form action="https://app.kit.com/forms/8983294/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="8983294" data-uid="d9397ddf34" data-format="inline" data-version="5" data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Check your email — it's on the way.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}' min-width="400 500 600 700 800">
                      <div data-style="clean">
                        <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                        <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields" style="display: flex; gap: 12px; flex-wrap: wrap;">
                          <div class="formkit-field" style="flex: 1; min-width: 200px;">
                            <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Enter your email address" required="" type="email" style="color: #1a2e4c; border: 1px solid #E5E2DA; border-radius: 8px; font-weight: 400; padding: 14px 16px; width: 100%; font-size: 15px; background: #FDFBF7;">
                          </div>
                          <button data-element="submit" class="formkit-submit formkit-submit" style="color: #ffffff; background-color: #A51C30; border-radius: 8px; font-weight: 600; padding: 14px 24px; border: none; cursor: pointer; font-size: 15px; white-space: nowrap; transition: background-color 0.2s;">
                            <div class="formkit-spinner"><div></div><div></div><div></div></div>
                            <span>Send me the Checklist</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  `,
                }}
              />

              <p className="font-serif text-xs text-mmeri-navy/50 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Get Section */}
        <section className="py-16 md:py-20 bg-mmeri-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-mmeri-navy mb-4">
                What&apos;s Inside the Checklist
              </h2>
              <p className="font-serif text-base md:text-lg text-mmeri-navy/70 max-w-2xl mx-auto">
                Everything you need to navigate the college process with confidence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resourceHighlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "#F9F4F2",
                    border: "1px solid #E5E2DA",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#A51C30" }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-mmeri-navy text-lg mb-2">{item.title}</h3>
                      <p className="font-serif text-mmeri-navy/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why MMERI Section */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#F8F6E8" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-mmeri-navy mb-6">
                Why Families Trust MMERI
              </h2>
              <p className="font-serif text-base md:text-lg text-mmeri-navy/80 leading-relaxed mb-8 max-w-3xl mx-auto">
                We understand the unique challenges that first-generation and diaspora families face. Our resources are
                designed with your cultural context in mind - because navigating the college process shouldn&apos;t mean
                abandoning your values or starting from scratch.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/scholars"
                  className="font-sans font-semibold text-mmeri-maroon hover:text-mmeri-maroon/80 transition-colors underline underline-offset-4"
                >
                  See Our Scholar Success Stories
                </a>
                <span className="hidden sm:inline text-mmeri-navy/30">|</span>
                <a
                  href="/faq"
                  className="font-sans font-semibold text-mmeri-maroon hover:text-mmeri-maroon/80 transition-colors underline underline-offset-4"
                >
                  Read Our FAQ
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-mmeri-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="font-sans text-xl md:text-2xl font-bold text-white mb-3">
              Ready for Personalized Guidance?
            </h2>
            <p className="font-serif text-sm md:text-base text-white/80 mb-6 max-w-2xl mx-auto">
              Our free resources are a great starting point. When you&apos;re ready for 1:1 support tailored to your
              family&apos;s needs, we&apos;re here to help.
            </p>
            <a
              href="https://calendly.com/mmerischolars/scholars-free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-bold text-white bg-mmeri-maroon hover:bg-mmeri-maroon/90 px-8 py-3 rounded-md transition-colors"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
