export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-volta-background via-white to-white pt-20 pb-0">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <div className="inline-block bg-volta-surface-variant px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-volta-primary">✨ La revolución del loyalty</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-volta-on-surface mb-6 leading-tight">
              Loyalty sin <span className="bg-gradient-to-r from-volta-primary to-volta-secondary bg-clip-text text-transparent">complicaciones</span>
            </h1>

            <p className="text-xl text-volta-text-muted mb-8 leading-relaxed">
              Una única app centraliza todos los programas de fidelización de tus clientes. Ellos acumulan puntos, suben de nivel y canjean premios reales. Sin tarjetas. Sin fricción.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                Comenzar ahora
              </button>
              <button className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
                Ver demostración
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col gap-3 text-sm text-volta-text-muted">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-volta-success rounded-full flex items-center justify-center text-white text-xs">✓</span>
                <span>Sin tarjetas de crédito requeridas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-volta-success rounded-full flex items-center justify-center text-white text-xs">✓</span>
                <span>Implementación en minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-volta-success rounded-full flex items-center justify-center text-white text-xs">✓</span>
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative h-96 md:h-[500px]">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-volta-primary/10 via-volta-secondary/5 to-transparent rounded-3xl blur-3xl animate-pulse" />

            {/* Main illustration box */}
            <div className="relative h-full bg-gradient-to-br from-volta-primary/20 to-volta-secondary/10 rounded-3xl border-2 border-volta-surface-variant overflow-hidden flex flex-col items-center justify-center p-8">
              {/* Phone mockup */}
              <div className="relative w-40 h-80 bg-white rounded-3xl shadow-2xl border-8 border-volta-on-surface overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Phone screen content */}
                <div className="h-full bg-gradient-to-b from-volta-primary to-volta-secondary p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <p className="text-white text-center text-sm font-bold">Estás en Gold!</p>
                  <p className="text-white/80 text-xs mt-2">+150 puntos hoy</p>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-volta-on-surface rounded-b-3xl" />
              </div>

              {/* Floating elements */}
              <div className="absolute top-12 right-8 bg-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
                <span className="text-2xl">🎁</span>
              </div>
              <div className="absolute bottom-12 left-8 bg-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 bg-volta-surface rounded-2xl p-12">
          <div className="text-center hover:scale-105 transition-transform">
            <p className="text-4xl font-bold text-volta-primary mb-2">4</p>
            <p className="text-volta-text-muted">Niveles de fidelización</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform">
            <p className="text-4xl font-bold text-volta-primary mb-2">∞</p>
            <p className="text-volta-text-muted">Tiendas por app</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform">
            <p className="text-4xl font-bold text-volta-primary mb-2">0$</p>
            <p className="text-volta-text-muted">Costo de hardware</p>
          </div>
          <div className="text-center hover:scale-105 transition-transform">
            <p className="text-4xl font-bold text-volta-primary mb-2">24h</p>
            <p className="text-volta-text-muted">Implementación</p>
          </div>
        </div>
      </div>
    </section>
  )
}
