"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

const WAITLIST_URL = "https://forms.gle/th4na1Q227Y7LBtb6"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }, [pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const hash = href.substring(2)

      if (pathname === "/") {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } else {
        router.push(`/#${hash}`)
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-mmeri-cream/98 backdrop-blur-md shadow-sm border-b border-mmeri-navy/5" : "bg-mmeri-cream"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex flex-col gap-0.5 flex-shrink-0">
            <Image
              src="/images/full-20logo-20-transparent.png"
              alt="MMERI Scholars"
              width={240}
              height={60}
              className="h-10 sm:h-11 lg:h-12 w-auto"
              priority
            />
            <span
              className="font-serif text-[10px] sm:text-[11px] capitalize tracking-wide font-semibold"
              style={{ color: "#D9AE42" }}
            >
              Victory Belongs to the First
            </span>
          </Link>

          <nav className="hidden xl:flex items-center justify-center flex-1 mx-6 2xl:mx-10">
            <div className="flex items-center gap-1 2xl:gap-2">
              <Link
                href="/who-we-serve"
                className="font-sans text-mmeri-navy hover:text-mmeri-maroon hover:bg-mmeri-navy/5 transition-all font-semibold text-[13px] 2xl:text-sm whitespace-nowrap px-3 2xl:px-4 py-2 rounded-md"
              >
                Who We Serve
              </Link>
              <Link
                href="/#what-we-do"
                onClick={(e) => handleNavClick(e, "/#what-we-do")}
                className="font-sans text-mmeri-navy hover:text-mmeri-maroon hover:bg-mmeri-navy/5 transition-all font-semibold text-[13px] 2xl:text-sm whitespace-nowrap px-3 2xl:px-4 py-2 rounded-md"
              >
                What We Do
              </Link>
              <Link
                href="/#our-story"
                onClick={(e) => handleNavClick(e, "/#our-story")}
                className="font-sans text-mmeri-navy hover:text-mmeri-maroon hover:bg-mmeri-navy/5 transition-all font-semibold text-[13px] 2xl:text-sm whitespace-nowrap px-3 2xl:px-4 py-2 rounded-md"
              >
                Our Story
              </Link>
              <Link
                href="/#community-partners"
                onClick={(e) => handleNavClick(e, "/#community-partners")}
                className="font-sans text-mmeri-navy hover:text-mmeri-maroon hover:bg-mmeri-navy/5 transition-all font-semibold text-[13px] 2xl:text-sm whitespace-nowrap px-3 2xl:px-4 py-2 rounded-md"
              >
                Community Partners
              </Link>
              <Link
                href="/scholars"
                className="font-sans text-mmeri-navy hover:text-mmeri-maroon hover:bg-mmeri-navy/5 transition-all font-semibold text-[13px] 2xl:text-sm whitespace-nowrap px-3 2xl:px-4 py-2 rounded-md"
              >
                Scholars
              </Link>
              <Link
                href="/connect"
                className="font-sans text-mmeri-navy hover:text-mmeri-maroon hover:bg-mmeri-navy/5 transition-all font-semibold text-[13px] 2xl:text-sm whitespace-nowrap px-3 2xl:px-4 py-2 rounded-md"
              >
                Connect
              </Link>
            </div>
          </nav>

          <div className="hidden xl:flex items-center flex-shrink-0">
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans bg-mmeri-maroon text-white px-5 py-2.5 rounded-md hover:bg-mmeri-maroon/90 transition-all font-semibold text-sm shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Join Waitlist
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-mmeri-navy hover:text-mmeri-maroon transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-4 border-t border-mmeri-navy/10 pt-4">
            <Link
              href="/who-we-serve"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-mmeri-navy hover:text-mmeri-maroon transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-mmeri-navy/5"
            >
              Who We Serve
            </Link>
            <Link
              href="/#what-we-do"
              onClick={(e) => handleNavClick(e, "/#what-we-do")}
              className="font-sans text-mmeri-navy hover:text-mmeri-maroon transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-mmeri-navy/5"
            >
              What We Do
            </Link>
            <Link
              href="/#our-story"
              onClick={(e) => handleNavClick(e, "/#our-story")}
              className="font-sans text-mmeri-navy hover:text-mmeri-maroon transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-mmeri-navy/5"
            >
              Our Story
            </Link>
            <Link
              href="/#community-partners"
              onClick={(e) => handleNavClick(e, "/#community-partners")}
              className="font-sans text-mmeri-navy hover:text-mmeri-maroon transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-mmeri-navy/5"
            >
              Community Partners
            </Link>
            <Link
              href="/scholars"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-mmeri-navy hover:text-mmeri-maroon transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-mmeri-navy/5"
            >
              Scholars
            </Link>
            <Link
              href="/connect"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-mmeri-navy hover:text-mmeri-maroon transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-mmeri-navy/5"
            >
              Connect
            </Link>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans bg-mmeri-maroon text-white px-4 py-3 rounded-lg hover:bg-mmeri-maroon/90 transition-all font-semibold text-center shadow-sm mt-2"
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
