"use client"

import React, { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConnectPage() {
  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement("script")
    script.src = "https://kit.com/forms/8978292/subscriptions"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F6EFDF" }}>
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-2xl">
          {/* Page Headline */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-mmeri-navy mb-1">
              Connect With MMERI Scholars
            </h1>
          </div>

          {/* Primary CTA Block - Visually Dominating */}
          <div
            className="border-2 p-12 md:p-16 mb-12 text-center"
            style={{
              borderColor: "#1a2e4c",
              backgroundColor: "#faf9f6",
            }}
          >
            <p className="font-serif text-mmeri-navy mb-8 text-lg leading-relaxed">
              Ready to talk through your student's situation?
            </p>
            <a
              href="https://calendly.com/lisabanyem/mmeri-scholars-free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-bold text-white px-8 py-4 transition-all hover:opacity-90 text-lg"
              style={{ backgroundColor: "#96181D" }}
            >
              Schedule a Clarity Call
            </a>
            <p className="font-serif text-mmeri-navy/70 mt-6 text-sm">
              Not ready to schedule yet? That's okay.
            </p>
          </div>

          {/* Ask a Quick Question Form */}
          <div className="mb-12">
            <h2 className="font-serif text-lg md:text-xl font-bold text-mmeri-navy mb-6">
              Get MMERI updates and key college planning deadlines & Resources
            </h2>
            <h3 className="font-sans font-bold text-mmeri-navy text-base mb-6 uppercase tracking-widest">
              Ask a Quick Question
            </h3>
            <form
              action="https://formspree.io/f/mvzzgreg"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="font-serif text-sm px-4 py-3 border border-mmeri-navy/20 bg-white focus:outline-none"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="font-serif text-sm px-4 py-3 border border-mmeri-navy/20 bg-white focus:outline-none"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="font-serif text-sm px-4 py-3 border border-mmeri-navy/20 bg-white focus:outline-none w-full resize-none"
              />
              <button
                type="submit"
                className="font-sans font-bold px-6 py-3 transition-colors"
                style={{
                  backgroundColor: "#faf9f6",
                  color: "#092B43",
                  border: "2px solid #092B43",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* What to Expect */}
          <div className="mb-12">
            <h2 className="font-sans font-bold text-mmeri-navy text-base mb-4 uppercase tracking-widest">
              What to Expect
            </h2>
            <ul className="space-y-2 font-serif text-sm text-mmeri-navy">
              <li>• We'll respond within 1-2 business days</li>
              <li>• We'll connect you with a relevant MMERI professional</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="bg-mmeri-navy text-white p-8 md:p-10">
            <h2 className="font-serif font-bold text-2xl md:text-3xl mb-8 text-center">
              Stay informed about our work
            </h2>
            {/* ConvertKit Embed Form */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <form id="ck_form_8978292" class="ck-form" action="https://app.kit.com/forms/8978292/subscriptions" data-remote="true" method="post" style="background-color: transparent; border: none; padding: 0; box-shadow: none;">
                    <div class="ck-form-content" style="color: #fff; max-width: 100%; margin: 0 auto; display: flex; gap: 12px; justify-content: center; align-items: center; flex-wrap: wrap;">
                      <input class="ck-input" name="email_address" placeholder="Email" type="email" required style="flex: 1; min-width: 250px; max-width: 400px; padding: 12px 16px; border: none; border-radius: 4px; font-family: Georgia, serif; font-size: 16px; background-color: #faf9f6; color: #1a2e4c;" />
                      <button class="ck-button ck-button-primary" type="submit" style="padding: 12px 32px; background-color: #6b8e7f; color: white; border: none; border-radius: 4px; font-weight: bold; font-family: -apple-system,BlinkMacSystemFont,segoe ui,Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 16px; cursor: pointer; min-width: 120px;">Subscribe</button>
                    </div>
                  </form>
                  <script>
                    (function(w){if(w.ConvertKit){w.setTimeout(function(){w.ConvertKit.attachCircleWidget({element:"ck_form_8978292",className:"ck-circle"})},50)}})(window);
                  </script>
                `,
              }}
            />
            <p className="font-serif text-sm text-white/90 mt-6 text-center">
              Your information is confidential and used solely for connecting you with MMERI Scholars
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
