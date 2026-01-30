import { Trophy, Globe, Star, Flame, DoorOpen, Users, Fingerprint } from "lucide-react"

const coreValues = [
  {
    title: "Courage",
    description: "Choosing bold steps over comfort.",
    icon: Trophy,
  },
  {
    title: "Heritage",
    description: "Staying rooted in cultural identity.",
    icon: Globe,
  },
  {
    title: "Excellence",
    description: "Upholding high standards and discipline.",
    icon: Star,
  },
  {
    title: "Resilience",
    description: "Turning challenges into momentum.",
    icon: Flame,
  },
  {
    title: "Access",
    description: "Opening doors and expanding opportunity.",
    icon: DoorOpen,
  },
  {
    title: "Community",
    description: "Lifting others as we rise.",
    icon: Users,
  },
  {
    title: "Authenticity",
    description: "Showing up as our full, true selves.",
    icon: Fingerprint,
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="bg-mmeri-cream py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mmeri-navy mb-3 sm:mb-4">Our Core Values</h2>
            <div className="w-12 sm:w-16 h-1 bg-mmeri-gold mx-auto mb-4 sm:mb-6" />
            <p className="font-serif text-mmeri-navy/80 text-base sm:text-lg max-w-2xl mx-auto px-2">
              The principles that guide every family we serve
            </p>
          </div>

          {/* Values grid - improved responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-mmeri-gold/30 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-mmeri-maroon/10 flex items-center justify-center mb-4 group-hover:bg-mmeri-maroon transition-colors duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-mmeri-maroon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-mmeri-navy mb-2">{value.title}</h3>
                  <p className="font-serif text-mmeri-navy/70 text-sm sm:text-base">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
