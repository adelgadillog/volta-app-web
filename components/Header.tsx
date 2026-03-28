export default function Header() {
  return (
    <header className="bg-white border-b border-volta-surface-variant sticky top-0 z-50">
      <div className="container-max max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-volta-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <h1 className="text-2xl font-bold text-volta-primary">Volta</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-volta-on-surface hover:text-volta-primary transition">
            Características
          </a>
          <a href="#how" className="text-volta-on-surface hover:text-volta-primary transition">
            Cómo funciona
          </a>
          <a href="#" className="text-volta-on-surface hover:text-volta-primary transition">
            Precios
          </a>
        </nav>

        {/* CTA Button */}
        <button className="btn-primary text-sm py-2 px-4">
          Comenzar
        </button>
      </div>
    </header>
  )
}
