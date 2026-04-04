'use client'

import { Icons } from './Icons'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Cliente se registra',
      description: 'Descarga Volta → Se registra → Busca su tienda favorita → Obtiene tarjeta digital',
      icon: '👤',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '2',
      title: 'Cajero escanea QR',
      description: 'Cajero escanea el QR del cliente desde Panel Volta → Puntos se acreditan en segundos',
      icon: '📲',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '3',
      title: 'Cliente canjea premio',
      description: 'Al alcanzar un nivel, cliente canjea premio desde app → Comercio lo confirma',
      icon: '🎁',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section className="section bg-gradient-to-b from-white to-volta-background" id="how">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="section-title">Cómo funciona</h2>
          <p className="section-subtitle">3 pasos simples para aumentar la retención</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="absolute top-20 left-[calc(50%+40px)] right-[-calc(100%+40px)] h-1 bg-gradient-to-r from-volta-primary via-volta-secondary to-transparent transform group-hover:scale-y-150 transition-transform origin-left" />
              )}

              <div className="relative">
                {/* Step number circle */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 bg-gradient-to-br ${step.color} shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  {step.number}
                </div>

                {/* Step icon */}
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg">
                  {step.icon}
                </div>

                {/* Step content */}
                <div className="bg-volta-surface rounded-xl p-6 border border-volta-surface-variant group-hover:border-volta-primary transition-all duration-300 group-hover:shadow-lg">
                  <h3 className="text-xl font-bold text-volta-on-surface mb-3 group-hover:text-volta-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-volta-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-12">
              {/* Vertical line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-5 top-20 bottom-0 w-0.5 bg-gradient-to-b from-volta-primary to-volta-secondary" />
              )}

              {/* Circle */}
              <div className={`absolute -left-2 top-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${step.color} shadow-lg`}>
                {step.number}
              </div>

              {/* Content */}
              <div className="bg-volta-surface rounded-xl p-6 border border-volta-surface-variant">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-lg font-bold text-volta-on-surface mb-2">
                  {step.title}
                </h3>
                <p className="text-volta-text-muted text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gamification levels showcase */}
        <div className="mt-24 bg-gradient-to-br from-volta-primary/10 via-volta-secondary/5 to-transparent rounded-3xl p-12 border-2 border-volta-surface-variant">
          <h3 className="text-3xl font-bold text-volta-on-surface text-center mb-4">
            Niveles de Fidelización
          </h3>
          <p className="text-center text-volta-text-muted mb-12 max-w-2xl mx-auto">
            Motiva a tus clientes con 4 niveles progresivos, cada uno con premios y beneficios únicos
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Bronze', color: '#CD7F32', bg: '#F5DEB3', icon: '🥉' },
              { name: 'Silver', color: '#C0C0C0', bg: '#E8E8E8', icon: '🥈' },
              { name: 'Gold', color: '#FFD700', bg: '#FFF9C4', icon: '🥇' },
              { name: 'Platinum', color: '#E5E4E2', bg: '#F5F5F5', icon: '👑' }
            ].map((level, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl border-2 border-transparent hover:border-volta-primary transition-all duration-300 group hover:scale-105 hover:shadow-lg transform"
                style={{ backgroundColor: level.bg }}
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">
                  {level.icon}
                </div>
                <h4 className="font-bold text-volta-on-surface text-lg mb-1">
                  {level.name}
                </h4>
                <p className="text-sm text-volta-text-muted">
                  Premios especiales
                </p>
              </div>
            ))}
          </div>

          {/* Progress bars */}
          <div className="mt-12 space-y-6">
            {[
              { level: 'Bronze', percentage: 25 },
              { level: 'Silver', percentage: 50 },
              { level: 'Gold', percentage: 75 },
              { level: 'Platinum', percentage: 100 }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-volta-on-surface">{item.level}</span>
                  <span className="text-sm text-volta-text-muted">{item.percentage} puntos</span>
                </div>
                <div className="h-3 bg-volta-surface rounded-full overflow-hidden border border-volta-surface-variant">
                  <div
                    className="h-full bg-gradient-to-r from-volta-primary to-volta-secondary rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
