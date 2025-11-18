import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Customers', href: '#customers' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-lg shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">Waydev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-300 hover:text-white text-sm">Sign in</a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              Get started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-slate-200 hover:text-white text-sm py-2">
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <a href="#" className="text-slate-300 hover:text-white text-sm">Sign in</a>
              <a href="#cta" className="inline-flex items-center gap-2 bg-white text-slate-900 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-slate-100 transition-colors">Get started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
