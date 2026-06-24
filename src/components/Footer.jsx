export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative z-[1] border-t border-border py-8 px-[8%]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-xs text-text-3">
          MAI<span className="text-accent">.dev</span> — Muhammad Ahmad Iqbal
        </div>

        <ul className="flex gap-6 list-none">
          {[
            { label: 'Top', href: '#hero' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ].map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="font-mono text-[11px] text-text-3 transition-colors duration-200 hover:text-accent bg-transparent border-0 cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="font-mono text-[11px] text-text-3">
          © 2025 — Built with ❤️ in Lahore
        </div>
      </div>
    </footer>
  )
}
