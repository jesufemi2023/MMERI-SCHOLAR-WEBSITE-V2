import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const WAITLIST_URL = "https://forms.gle/th4na1Q227Y7LBtb6"

// Custom Threads icon since Lucide doesn't have one
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.396-1.177 1.093-.026 2.09.096 2.973.36.022-.492.018-.986-.013-1.478-.086-1.37-.542-2.17-1.396-2.452-.642-.212-1.476-.18-2.317.09-.907.29-1.634.794-1.99 1.093l-1.29-1.611c.466-.391 1.411-1.025 2.675-1.43 1.248-.398 2.519-.476 3.673-.222 1.478.326 2.556 1.212 3.03 2.492.28.754.39 1.618.327 2.572-.026.393-.078.785-.156 1.176 1.126.679 1.946 1.576 2.433 2.681.756 1.72.806 4.574-1.476 6.81-1.87 1.832-4.162 2.66-7.397 2.682zm.091-8.703c-.94.021-1.755.27-2.297.702-.469.375-.69.856-.66 1.432.035.663.39 1.134.92 1.478.595.386 1.35.54 2.134.5 1.076-.058 1.895-.47 2.435-1.222.479-.666.763-1.586.848-2.743-.86-.217-1.798-.314-2.73-.298-.205.013-.416.03-.65.051z" />
    </svg>
  )
}

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/mmerischolars", icon: Instagram },
  { name: "Threads", href: "https://threads.net/@mmerischolars", icon: ThreadsIcon },
]

export function Footer() {
  return (
    <footer className="bg-mmeri-navy py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Footer Logo */}
          <Link href="/" className="mb-4 sm:mb-6">
            <Image
              src="/images/footer-20logo-transparent.png"
              alt="MMERI Scholars"
              width={200}
              height={60}
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Tagline */}
          <p className="text-tagline text-mmeri-gold text-base sm:text-lg mb-5 sm:mb-6">Victory Belongs to the First</p>

          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 text-white hover:bg-mmeri-gold hover:text-mmeri-navy transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )
            })}
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-white/80 font-serif text-sm mb-6 sm:mb-8 text-center">
            <a href="mailto:info@mmerischolars.org" className="hover:text-mmeri-gold transition-colors">
              info@mmerischolars.org
            </a>
            <a href="tel:832-268-3370" className="hover:text-mmeri-gold transition-colors">
              (832) 268-3370
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/70 font-sans text-sm mb-6 sm:mb-8">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#values" className="hover:text-white transition-colors">
              Values
            </Link>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Join Waitlist
            </a>
          </nav>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-5 sm:pt-6 w-full text-center">
            <p className="text-white/50 font-sans text-xs sm:text-sm">
              © {new Date().getFullYear()} MMERI Scholars. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
