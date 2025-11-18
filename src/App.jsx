import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <CTA />

      <footer className="bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-md" />
            <span className="text-slate-300 text-sm">© {new Date().getFullYear()} Waydev</span>
          </div>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
