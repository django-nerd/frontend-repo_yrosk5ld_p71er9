function SocialProof() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
    'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_IBM_1972.png',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Atlassian_logo_%282018%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg',
  ]

  return (
    <section id="customers" className="bg-slate-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-slate-400 text-sm mb-6">Trusted by data-driven engineering teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6 opacity-80">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="h-8 object-contain mx-auto invert" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
