"use client"

import type React from "react"

import { useState } from "react"
import { Church, Users, Heart, School } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Organization {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  description: string
}

const organizations: Organization[] = [
  {
    id: "churches",
    title: "Churches",
    subtitle: "Faith-based community support",
    icon: <Church className="w-16 h-16 stroke-[1.5]" />,
    description:
      "Faith leaders serving diaspora families who want workshops that are culturally rooted and help their youth prepare for college and their future",
  },
  {
    id: "cultural",
    title: "Cultural Orgs",
    subtitle: "Heritage & identity building",
    icon: <Users className="w-16 h-16 stroke-[1.5]" />,
    description:
      "African, Caribbean, Afro-Latinx, and multicultural groups that want education sessions rooted in culture, identity and community for their youth and families.",
  },
  {
    id: "nonprofits",
    title: "Nonprofits",
    subtitle: "Social impact initiatives",
    icon: (
      <div className="relative w-16 h-16">
        <Heart className="w-16 h-16 stroke-[1.5]" />
      </div>
    ),
    description:
      "Nonprofits and youth programs that want workshops to help their students feel more confident and prepared for their next steps.",
  },
  {
    id: "schools",
    title: "Schools",
    subtitle: "Academic partnerships",
    icon: <School className="w-16 h-16 stroke-[1.5]" />,
    description:
      "Counselors and school staff who want support that helps them better understand and serve first-generation and diaspora students.",
  },
]

export function OrganizationsSection() {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null)

  return (
    <>
      <section id="community-partners" className="py-16 md:py-24 bg-[#092B43] relative overflow-hidden scroll-mt-20">
        {/* Decorative star */}
        <div className="absolute bottom-8 right-8 text-white/20">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-serif">
            Organizations We Partner With
          </h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {organizations.map((org) => (
              <button
                key={org.id}
                onClick={() => setSelectedOrg(org)}
                className="group bg-[#F6EFDF] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-[#D9AE42] focus:outline-none focus:ring-2 focus:ring-[#D9AE42] focus:ring-offset-2 focus:ring-offset-[#092B43] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[250px]"
              >
                <div className="text-[#D9AE42] mb-4 transition-transform duration-300 group-hover:scale-110">
                  {org.icon}
                </div>
                <h3 className="text-xl font-bold text-[#092B43] mb-2 font-serif transition-colors duration-300 group-hover:text-[#D9AE42]">
                  {org.title}
                </h3>
                <p className="text-sm text-[#092B43]/70 font-serif">{org.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selectedOrg} onOpenChange={() => setSelectedOrg(null)}>
        <DialogContent className="bg-[#F6EFDF] border-2 border-[#D9AE42] max-w-2xl">
          <DialogHeader>
            <div className="flex justify-center mb-4 text-[#D9AE42]">{selectedOrg?.icon}</div>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-[#092B43] text-center font-serif">
              {selectedOrg?.title}
            </DialogTitle>
            <DialogDescription className="text-base md:text-lg text-[#092B43] leading-relaxed pt-4 font-serif">
              {selectedOrg?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
