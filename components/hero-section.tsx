export function HeroSection() {
  return (
    <section className="relative bg-mmeri-cream py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mmeri-gold/10 via-transparent to-mmeri-maroon/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-mmeri-gold/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-mmeri-maroon/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-mmeri-navy mb-8 sm:mb-10 text-balance leading-[1.1] tracking-tight">
            Guiding First-Generation Scholars to Victory
          </h1>

          <p className="text-3xl sm:text-4xl md:text-[2.75rem] text-mmeri-gold mb-12 sm:mb-14 font-serif font-light tracking-wide">
            Culture . Clarity . Confidence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 mt-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPkXvrmD_m_MdMSMVAltFQMoYPXA7bOqd-TMxXw6-ApvZR1w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-sans font-bold bg-mmeri-maroon text-white px-10 sm:px-12 py-5 sm:py-6 rounded-xl hover:bg-mmeri-maroon/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg sm:text-xl"
            >
              Join the Waitlist
            </a>
            <a
              href="https://calendly.com/lisabanyem/mmeri-scholars-free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-sans font-bold bg-mmeri-gold text-mmeri-navy px-10 sm:px-12 py-5 sm:py-6 rounded-xl hover:bg-mmeri-gold/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg sm:text-xl"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
