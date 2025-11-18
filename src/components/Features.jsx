import { GitBranch, GaugeCircle, Users2, Workflow, Radar, ShieldHalf } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: GitBranch,
      title: 'Workflow Analytics',
      desc: 'Understand PR cycle time, review depth, and handoffs to reduce idle time and ship faster.'
    },
    {
      icon: GaugeCircle,
      title: 'Delivery Metrics',
      desc: 'Track DORA, sprint health, and planning accuracy to align engineering with business.'
    },
    {
      icon: Users2,
      title: 'Team Performance',
      desc: 'Spot bottlenecks across teams and repos with fair, context-rich insights.'
    },
    {
      icon: Workflow,
      title: 'Jira + GitHub',
      desc: 'Connect SDLC tools for end-to-end visibility from ticket to deploy.'
    },
    {
      icon: Radar,
      title: 'Risk Detection',
      desc: 'Identify risky code, stale branches, and late reviews before they slow you down.'
    },
    {
      icon: ShieldHalf,
      title: 'Enterprise Ready',
      desc: 'SSO, granular roles, and SOC2 Type II compliance out of the box.'
    },
  ]

  return (
    <section id="features" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to lead with data</h2>
          <p className="mt-3 text-slate-300">Built for VPs of Engineering, Directors, and Team Leads</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-cyan-400/20 transition-colors" />
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
