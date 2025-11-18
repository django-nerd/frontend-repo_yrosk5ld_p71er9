import { ArrowRight, Shield, LineChart, Clock } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_40%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-200 text-xs px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Now with deeper Jira + GitHub insights
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Ship faster with engineering intelligence
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              Waydev turns Git, Jira, and CI/CD activity into clear, actionable metrics — so you can improve delivery, reduce bottlenecks, and align engineering with business outcomes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors">
                Book a demo
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-white border border-white/15 hover:border-white/30 transition-colors">
                See how it works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-slate-300">
              <div className="flex items-center gap-2"><Shield size={18} className="text-cyan-400"/> SOC2 Type II</div>
              <div className="flex items-center gap-2"><LineChart size={18} className="text-blue-400"/> DORA metrics</div>
              <div className="flex items-center gap-2"><Clock size={18} className="text-emerald-400"/> Real-time data</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-3">
              <div className="h-full w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2432&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl bg-cyan-500/20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl bg-blue-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
