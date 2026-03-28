export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Cliente se registra',
      description: 'Descarga Volta → Se registra → Busca su tienda favorita → Obtiene tarjeta digital',
      icon: '👤'
    },
    {
      number: '2',
      title: 'Cajero escanea QR',
      description: 'Cajero escanea el QR del cliente desde Panel Volta → Puntos se acreditan en segundos',
      icon: '📲'
    },
    {
      number: '3',
      title: 'Cliente canjea premio',
      description: 'Al alcanzar un nivel, cliente canjea premio desde app → Comercio lo confirma',
      icon: '🎁'
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container-max">
        <h2 className="section-title text-center">Cómo funciona</h2>
        <p className="section-subtitle text-center">3 pasos simples para aumentar la retención</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[50%] w-[calc(200%-2rem)] h-0.5 bg-volta-surface-variant transform -translate-x-1/2 -translate-y-1/2"></div>
              )}

              <div className="relative">
                <div className="flex flex-col items-center">
                  {/* Step circle */}
                  <div className="w-20 h-20 bg-volta-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 relative z-10">
                    {step.number}
                  </div>

                  {/* Step icon */}
                  <div className="text-5xl mb-6">{step.icon}</div>

                  {/* Step content */}
                  <h3 className="text-xl font-bold text-volta-on-surface text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-volta-text-muted text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gamification levels showcase */}
        <div className="mt-20 bg-volta-background rounded-2xl p-12 border border-volta-surface-variant">
          <h3 className="text-2xl font-bold text-volta-on-surface text-center mb-12">
            Niveles de fidelización
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Bronze', color: '#CD7F32', bg: '#F5DEB3' },
              { name: 'Silver', color: '#C0C0C0', bg: '#E8E8E8' },
              { name: 'Gold', color: '#FFD700', bg: '#FFF9C4' },
              { name: 'Platinum', color: '#E5E4E2', bg: '#F5F5F5' }
            ].map((level, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl"
                style={{ backgroundColor: level.bg }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: level.color }}
                >
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-bold text-volta-on-surface">{level.name}</h4>
                <p className="text-sm text-volta-text-muted mt-1">Premios exclusivos</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
