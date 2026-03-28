export default function Features() {
  const consumerFeatures = [
    {
      icon: '📱',
      title: 'Una sola app',
      description: 'Centraliza todos tus programas de loyalty en un lugar'
    },
    {
      icon: '🎮',
      title: 'Gamificación',
      description: '4 niveles (Bronze, Silver, Gold, Platinum) con premios reales'
    },
    {
      icon: '⚡',
      title: 'Acumulación automática',
      description: 'Escanea QR en caja → puntos se acreditan al instante'
    },
    {
      icon: '🏆',
      title: 'Desafíos semanales',
      description: 'Gana puntos extra con desafíos cross-tienda'
    }
  ]

  const businessFeatures = [
    {
      icon: '⚙️',
      title: 'Alta en minutos',
      description: 'Configura tus niveles y premios desde el panel web'
    },
    {
      icon: '📱',
      title: 'Sin hardware',
      description: 'Cajeros escanean desde celular o PC'
    },
    {
      icon: '📊',
      title: 'Dashboard en tiempo real',
      description: 'Visualiza clientes, frecuencias, canjes'
    },
    {
      icon: '📈',
      title: 'Retención medible',
      description: 'Datos claros del impacto en tu negocio'
    }
  ]

  return (
    <section className="section">
      <div className="container-max">
        {/* Para Consumidores */}
        <div className="mb-24">
          <h2 className="section-title text-center">Para tus clientes</h2>
          <p className="section-subtitle text-center">Experiencia simplificada de fidelización</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consumerFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-volta-surface rounded-xl p-6 border border-volta-surface-variant hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-volta-on-surface mb-2">
                  {feature.title}
                </h3>
                <p className="text-volta-text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Para Negocios */}
        <div className="border-t border-volta-surface-variant pt-16">
          <h2 className="section-title text-center">Para tu negocio</h2>
          <p className="section-subtitle text-center">Gestión sin fricción, datos inmediatos</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-volta-surface rounded-xl p-6 border border-volta-surface-variant hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-volta-on-surface mb-2">
                  {feature.title}
                </h3>
                <p className="text-volta-text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
