export function OpeningSoonSection() {
  return (
    <section className="bg-mmeri-navy py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gold accent line */}
          <div className="w-12 sm:w-16 h-1 bg-mmeri-gold mx-auto mb-6 sm:mb-8" />

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 text-balance px-2">
            Something New is Coming to MMERI Scholars
          </h2>

          <p className="font-serif text-white/90 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed px-2">
            Our next advising cohort opens soon. Because our work is high-touch and personalized, availability is
            limited.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/20 mx-2 sm:mx-0">
            <p className="font-serif text-white text-base sm:text-lg mb-2">
              Join the list to be the first notified when doors open.
            </p>
            <p className="font-serif text-white/80 mb-2 text-sm sm:text-base">Your family's story matters here.</p>
            <p className="font-serif text-white/80 text-sm sm:text-base">Your student's future is honored here.</p>
          </div>

          <a
            href="https://forms.gle/th4na1Q227Y7LBtb6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-sans font-bold bg-mmeri-gold text-mmeri-navy px-5 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-mmeri-gold/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base md:text-lg"
          >
            Join the Waitlist – Victory Belongs to the First
          </a>
        </div>
      </div>
    </section>
  )
}
