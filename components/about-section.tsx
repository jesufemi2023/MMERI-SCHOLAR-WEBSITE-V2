import Image from "next/image"
import { Trophy, Heart, Users, Sparkles, Shield } from "lucide-react"

export function AboutSection() {
  const beliefIcons = [Trophy, Heart, Users, Sparkles, Shield]

  const beliefs = [
    "We believe victory belongs to those who choose courage over comfort and take the step their families never have.",
    "We believe every door we open should make the path smoother for those who follow.",
    "We believe scholars and families turn challenges into victories when they have guidance, access, and confidence in their own roots.",
    "We believe culturally aligned advising builds trust, honors heritage and creates success that lasts across generations.",
    "We believe being rooted in who you are is the truest path to victory.",
  ]

  return (
    <section id="what-we-do" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mmeri-navy mb-3 sm:mb-4">
              About MMERI Scholars
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-mmeri-gold mx-auto" />
          </div>

          {/* Beliefs */}
          <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            {beliefs.map((belief, index) => {
              const IconComponent = beliefIcons[index]
              return (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-lg sm:rounded-xl bg-mmeri-cream/50 border-l-4 border-mmeri-maroon hover:bg-mmeri-cream/80 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-mmeri-maroon flex items-center justify-center">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="font-serif text-mmeri-navy/90 text-sm sm:text-base md:text-lg leading-relaxed">
                    {belief}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Founder section */}
          <div id="our-story" className="bg-mmeri-cream rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 scroll-mt-20">
            <div>
              {/* Name and title */}
              <h3 className="text-xl sm:text-2xl font-bold text-mmeri-navy mb-1 sm:mb-2">Lisa Banyem, M.Ed</h3>
              <p className="text-mmeri-maroon font-sans font-semibold text-sm sm:text-base mb-6">
                Founder & Lead Advisor
              </p>

              <Image
                src="/images/lisa-founder.png"
                alt="Lisa Banyem, M.Ed - Founder & Lead Advisor of MMERI Scholars"
                width={280}
                height={350}
                className="float-left mr-6 mb-4 rounded-lg shadow-md object-cover w-64 h-auto"
              />

              <div className="font-serif text-mmeri-navy/80 leading-relaxed text-sm sm:text-base space-y-4">
                <p>
                  Lisa Banyem is a mother, first-generation American, educator, and college access advocate who has
                  spent nearly a decade guiding first-generation and diaspora families through the American education
                  system. As someone who understands the weight of being "the first" in a family to navigate college,
                  influenced by her Nigerian-Igbo roots, she built MMERI Scholars to offer the support she wished her
                  immigrant parents had known how to access.
                </p>

                <p>
                  Lisa's career spans classroom teaching, college advising, and program leadership. She has helped
                  hundreds of students gain admission to selective universities, secure life-changing scholarships, and
                  discover a sense of pride in their identity and story. Her advising is known for being direct, deeply
                  caring, culturally aligned, and relentlessly student-centered. Families trust her because of her
                  cultural competency, honesty, fierce advocacy, and commitment to equity.
                </p>

                <p>
                  Throughout her work in public education and the college access field, Lisa has designed high-impact
                  systems, led large-scale initiatives, and created programs that close equity gaps for first-generation
                  and low-income students. Her approach blends research-backed advising practices with an understanding
                  of the cultural dynamics that diaspora families navigate.
                </p>

                <p className="font-semibold text-mmeri-navy">
                  MMERI Scholars is the culmination of Lisa's mission: to ensure that students who are "the first" in
                  their families turn challenges into victories. She believes that whether you are a first-generation
                  American, a first-generation college student, or simply the first to pursue an educational goal that
                  looks different from your family's path, there's a place for you here.
                </p>
              </div>
              <div className="clear-both" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
