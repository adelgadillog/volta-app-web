import { Icons } from './Icons'

export default function CTA() {
  return (
    <section className="section bg-white">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-volta-primary via-volta-secondary to-volta-tertiary p-12 md:p-20 shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <span className="text-white font-semibold text-sm">🚀 Lanzamiento Especial</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Listo para revolucionar la fidelización?
            </h2>

            {/* Subheading */}
            <p className="text-xl text-white/90 mb-4">
              Únete a comercios que ya aumentaron su retención de clientes en 45%
            </p>
            <p className="text-lg text-white/80 mb-12">
              Comienza con una demo gratuita. Sin necesidad de tarjeta de crédito. Sin compromisos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group px-8 py-4 bg-white text-volta-primary rounded-lg font-bold text-lg hover:bg-volta-surface transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Solicitar Demo</span>
                <Icons.Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm">
                Contactar Ventas
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">24h</div>
                <p className="text-sm text-white/80">Respuesta garantizada</p>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">∞</div>
                <p className="text-sm text-white/80">Sin configuración compleja</p>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <p className="text-sm text-white/80">Soporte dedicado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative CTA section below */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Left card */}
          <div className="bg-volta-surface rounded-2xl p-8 border-2 border-volta-surface-variant hover:border-volta-primary transition-all duration-300 hover:shadow-lg group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👥</div>
            <h3 className="text-2xl font-bold text-volta-on-surface mb-3">Para Comercios</h3>
            <p className="text-volta-text-muted mb-6">
              Implementa tu programa de loyalty en minutos y comienza a retener clientes desde el primer día.
            </p>
            <button className="text-volta-primary font-bold hover:text-volta-secondary transition-colors inline-flex items-center gap-2 group/btn">
              Más información
              <Icons.ChevronDown className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right card */}
          <div className="bg-volta-surface rounded-2xl p-8 border-2 border-volta-surface-variant hover:border-volta-primary transition-all duration-300 hover:shadow-lg group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📱</div>
            <h3 className="text-2xl font-bold text-volta-on-surface mb-3">Para Clientes</h3>
            <p className="text-volta-text-muted mb-6">
              Descarga Volta hoy y empieza a acumular puntos en tus tiendas favoritas.
            </p>
            <button className="text-volta-primary font-bold hover:text-volta-secondary transition-colors inline-flex items-center gap-2 group/btn">
              Descargar app
              <Icons.ChevronDown className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
