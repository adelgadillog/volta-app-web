export default function CTA() {
  return (
    <section className="section bg-volta-primary text-white">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para aumentar la retención de clientes?
          </h2>

          <p className="text-xl mb-10 opacity-95">
            Comienza hoy con una demo gratuita. Sin necesidad de tarjeta de crédito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-volta-primary rounded-lg font-bold text-lg hover:bg-volta-surface transition-colors active:scale-95">
              Solicitar demo
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors active:scale-95">
              Contactar ventas
            </button>
          </div>

          {/* Testimonial or trust badge */}
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <span>✓</span>
            <span>Respuesta en 24 horas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
