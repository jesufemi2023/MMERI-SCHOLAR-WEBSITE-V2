"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface FAQItem {
  id: string
  question: string
  answer: string
  expandedByDefault?: boolean
  category?: "expanded" | "collapsed"
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What does \"MMERI\" mean?",
    answer:
      "MMERI is derived from the Igbo language and means victorious or triumphant. MMERI Scholars exists to help families turn their educational journeys into lasting victories through intentional planning and informed decision-making.",
    category: "expanded",
    expandedByDefault: true,
  },
  {
    id: "2",
    question: "Is MMERI only for immigrant or diaspora families?",
    answer:
      "No. MMERI serves families who value early planning, accountability, and informed decision-making. Our work is deeply informed by the experiences of immigrant, diaspora, and first-generation families, as these communities often navigate the college system without clear guidance. That perspective shapes how we advise but it does not limit who we serve.",
    category: "expanded",
    expandedByDefault: true,
  },
  {
    id: "3",
    question: "Why do you offer both one-time plans and year-long advising?",
    answer:
      "Families come to MMERI at different stages of readiness. Some want ongoing accountability and hands-on support. Others need clarity first before committing long-term. Offering both options allows families to start where they are without pressure. One-time plans provide clarity at a specific moment. Year-long advising provides ongoing guidance as decisions unfold.",
    category: "expanded",
    expandedByDefault: true,
  },
  {
    id: "4",
    question: "Are there benefits to year-long advising over Blueprint plans?",
    answer:
      "Yes. The difference is accountability and execution. Blueprint plans outline what needs to happen, but families are responsible for carrying it out independently. With year-long advising, we stay involved as decisions unfold, track progress, adjust strategy when circumstances change, and help families avoid common missteps before they become costly. In short: Blueprint plans provide direction. Year-long advising provides guidance, accountability, and course correction over time.",
    category: "collapsed",
  },
  {
    id: "5",
    question: "Can we upgrade from a one-time plan to year-long advising later?",
    answer:
      "Yes. Many families begin with a one-time plan and later choose year-long advising once they better understand the complexity of execution. If you decide to continue working with us, we'll recommend the most appropriate next step based on your student's stage and needs. Availability for year-long advising is limited and not guaranteed.",
    category: "collapsed",
  },
  {
    id: "6",
    question: "Can we start the process late (senior year), or do we have to start early?",
    answer:
      "Starting early provides the greatest flexibility, lower stress, and stronger financial outcomes. Our highest scholarship totals and smoothest application seasons come from families who begin in 9th or 10th grade. That said, we do offer an Accelerated Victory track for seniors. Space for late-start seniors is limited to ensure we can provide the high-touch, 1:1 support required to catch up strategically.",
    category: "collapsed",
  },
  {
    id: "7",
    question: "How much time does each service require from our family?",
    answer:
      "The time commitment depends on the level of support you choose. One-time plans require upfront information gathering and independent execution. Year-long advising involves regular check-ins, preparation between meetings, and ongoing engagement. Families who stay engaged tend to see the strongest outcomes.",
    category: "collapsed",
  },
  {
    id: "8",
    question: "Do you offer support for families with multiple children?",
    answer:
      "Yes. We believe in building a family legacy. Many families enroll younger siblings in our ROOTED or BLOOM programs while an older student is in VICTORY. We offer a Sibling Legacy Discount for families who commit to the MMERI path for more than one scholar.",
    category: "collapsed",
  },
  {
    id: "9",
    question: "Do you offer payment plans for year-long advising?",
    answer:
      "Yes. Payment plans are available for year-long advising and are discussed after we've confirmed the service is a good fit. One-time plans and Blueprint services are paid in full at booking.",
    category: "collapsed",
  },
  {
    id: "10",
    question: "Do you guarantee college admissions or scholarships?",
    answer:
      "No. Ethical advising does not guarantee outcomes. What we provide is clear strategy, early planning, and culturally informed decision-making designed to reduce risk and increase opportunity. Final outcomes depend on student effort, institutional policies, and external factors.",
    category: "collapsed",
  },
  {
    id: "11",
    question: "Do you review essays, transcripts, or applications during workshops?",
    answer:
      "No. Workshops are educational and designed for groups. They do not include individualized advising, document review, or recommendations for specific students. Families seeking personalized guidance should explore our advising and strategy services.",
    category: "collapsed",
  },
  {
    id: "12",
    question: "Do you work with students outside your local area?",
    answer:
      "Yes. All advising services are offered virtually, allowing us to support families regardless of location.",
    category: "collapsed",
  },
  {
    id: "13",
    question: "How quickly can we start after submitting the intake form?",
    answer:
      "We review intake forms within 2–3 business days. If your situation is time-sensitive, please note deadlines clearly in your submission.",
    category: "collapsed",
  },
]

export default function FAQPage() {
  const isMobile = useIsMobile()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Initialize with first 3 items expanded
  useEffect(() => {
    setExpandedItems(["1", "2", "3"])
  }, [])

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      if (isMobile) {
        // Mobile: only one open at a time
        return prev.includes(id) ? [] : [id]
      } else {
        // Desktop: multiple can be open
        return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      }
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-4xl">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-mmeri-navy mb-2">
              Frequently Asked Questions
            </h1>
          </div>

          {/* FAQ Container */}
          <div className="border-2 border-mmeri-navy/40 p-0 bg-mmeri-cream shadow-sm">
            {/* All FAQ Items */}
            <div className="space-y-0 px-6 md:px-8 py-6">
              {faqData.map((item, idx) => (
                <FAQAccordionItem
                  key={item.id}
                  item={item}
                  isExpanded={expandedItems.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                  isLast={idx === faqData.length - 1}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-mmeri-navy text-white p-8 md:p-10 text-center">
            <h2 className="font-sans text-xl md:text-2xl font-bold mb-3">Not sure where to start?</h2>
            <p className="font-serif text-sm md:text-base mb-6 text-white/90">
              We'll help you identify the right next step based your student's stage and needs
            </p>
            <a
              href="https://calendly.com/mmerischolars/scholars-free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-bold text-white bg-mmeri-maroon hover:bg-mmeri-maroon/90 px-8 py-3 rounded-md transition-colors mb-4"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

interface FAQAccordionItemProps {
  item: FAQItem
  isExpanded: boolean
  onToggle: () => void
  isLast: boolean
}

function FAQAccordionItem({ item, isExpanded, onToggle, isLast }: FAQAccordionItemProps) {
  return (
    <div className={`border-b ${isLast ? "border-b-transparent" : "border-mmeri-navy/15"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-4 text-left hover:bg-white/40 transition-colors duration-200"
      >
        {/* Crimson sash - only visible when expanded */}
        <div
          className={`flex-shrink-0 w-1 h-8 bg-mmeri-maroon rounded-full transition-opacity duration-200 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Maroon square icon */}
        <div className="flex-shrink-0 mt-0">
          <div className="w-5 h-5 bg-mmeri-maroon flex-shrink-0" />
        </div>

        {/* Question */}
        <div className="flex-1 min-w-0">
          <p className="font-serif font-bold text-mmeri-navy text-sm md:text-base leading-snug">{item.question}</p>
        </div>

        {/* Expand/Collapse Icon */}
        <div className="flex-shrink-0 ml-2">
          <div className={`transform transition-transform duration-200 ${isExpanded ? "rotate-180" : "rotate-0"}`}>
            <ChevronDown className="w-5 h-5 text-mmeri-navy/70" />
          </div>
        </div>
      </button>

      {/* Answer */}
      {isExpanded && (
        <div className="pb-4 bg-white/50">
          <div className="ml-14">
            <p className="font-serif text-mmeri-navy/80 text-sm md:text-base leading-relaxed">{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}
