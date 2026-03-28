export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-volta-background to-white pt-20">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-volta-on-surface mb-6 leading-tight">
            Una app para todos tus <span className="text-volta-primary">programas de fidelización</span>
          </h1>

          <p className="text-lg md:text-xl text-volta-text-muted mb-10">
            Centraliza la fidelización de tu negocio. Sin tarjetas. Sin apps extras. Sin fricción. Tus clientes vuelven, vos ves los datos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-primary text-lg">
              Comenzar ahora
            </button>
            <button className="btn-secondary text-lg">
              Ver demostración
            </button>
          </div>

          {/* Decorative gradient shape */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-b from-volta-primary/10 to-volta-secondary/5 rounded-3xl border border-volta-surface-variant overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-volta-primary rounded-full mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-volta-on-surface font-medium">Escanea QR → Puntos automáticos</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-volta-primary mb-2">4</p>
              <p className="text-volta-text-muted">Niveles de fidelización</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-volta-primary mb-2">∞</p>
              <p className="text-volta-text-muted">Programas en 1 app</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl md:text-4xl font-bold text-volta-primary mb-2">0</p>
              <p className="text-volta-text-muted">Costo de hardware</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
