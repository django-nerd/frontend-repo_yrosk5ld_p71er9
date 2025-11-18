function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-purple-500/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          See Waydev in action
        </h2>
        <p className="mt-3 text-slate-300">
          Get a personalized walkthrough and discover how top engineering leaders use Waydev to improve delivery.
        </p>
        <form className="mt-8 grid sm:grid-cols-3 gap-3">
          <input
            type="email"
            required
            placeholder="Work email"
            className="bg-slate-900/80 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
          <input
            type="text"
            placeholder="Company"
            className="bg-slate-900/80 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
          <button
            type="submit"
            className="bg-white text-slate-900 font-semibold rounded-md px-4 py-3 hover:bg-slate-100 transition-colors"
          >
            Book a demo
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-400">SOC2 Type II • SSO • GDPR</p>
      </div>
    </section>
  )
}

export default CTA
