import { Icons } from './Icons'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  badge?: string
}

export default function Features() {
  const consumerFeatures: Feature[] = [
    {
      icon: <Icons.Smartphone2 className="w-8 h-8" />,
      title: 'Una sola app',
      description: 'Centraliza todos tus programas de loyalty en un lugar',
      badge: 'Para Clientes'
    },
    {
      icon: <Icons.Gamepad2 className="w-8 h-8" />,
      title: 'Gamificación',
      description: '4 niveles (Bronze, Silver, Gold, Platinum) con premios reales',
      badge: 'Para Clientes'
    },
    {
      icon: <Icons.Zap className="w-8 h-8" />,
      title: 'Acumulación automática',
      description: 'Escanea QR en caja → puntos se acreditan al instante',
      badge: 'Para Clientes'
    },
    {
      icon: <Icons.Trophy className="w-8 h-8" />,
      title: 'Desafíos semanales',
      description: 'Gana puntos extra con desafíos cross-tienda',
      badge: 'Para Clientes'
    }
  ]

  const businessFeatures: Feature[] = [
    {
      icon: <Icons.Cog className="w-8 h-8" />,
      title: 'Alta en minutos',
      description: 'Configura tus niveles y premios desde el panel web',
      badge: 'Para Negocios'
    },
    {
      icon: <Icons.Smartphone2 className="w-8 h-8" />,
      title: 'Sin hardware',
      description: 'Cajeros escanean desde celular o PC',
      badge: 'Para Negocios'
    },
    {
      icon: <Icons.BarChart3 className="w-8 h-8" />,
      title: 'Dashboard en tiempo real',
      description: 'Visualiza clientes, frecuencias, canjes',
      badge: 'Para Negocios'
    },
    {
      icon: <Icons.TrendingUp className="w-8 h-8" />,
      title: 'Retención medible',
      description: 'Datos claros del impacto en tu negocio',
      badge: 'Para Negocios'
    }
  ]

  const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
    <div
      className="group relative bg-volta-surface rounded-2xl p-8 border-2 border-volta-surface-variant hover:border-volta-primary transition-all duration-300 hover:shadow-xl hover:scale-105"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Badge */}
      {feature.badge && (
        <div className="inline-block bg-volta-primary/10 px-3 py-1 rounded-full mb-4">
          <span className="text-xs font-bold text-volta-primary">{feature.badge}</span>
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-volta-primary/20 to-volta-secondary/10 rounded-lg flex items-center justify-center mb-4 text-volta-primary group-hover:scale-110 transition-transform">
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-volta-on-surface mb-3 group-hover:text-volta-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-volta-text-muted leading-relaxed">{feature.description}</p>

      {/* Hover accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-volta-primary/10 to-transparent rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )

  return (
    <section className="section bg-white" id="features">
      <div className="container-max">
        {/* Para Consumidores */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="section-title">Para tus clientes</h2>
            <p className="section-subtitle">Experiencia simplificada de fidelización</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consumerFeatures.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} index={idx} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 flex items-center gap-4">
          <div className="flex-1 h-px bg-volta-surface-variant" />
          <span className="text-volta-text-muted font-medium">y también</span>
          <div className="flex-1 h-px bg-volta-surface-variant" />
        </div>

        {/* Para Negocios */}
        <div>
          <div className="text-center mb-16">
            <h2 className="section-title">Para tu negocio</h2>
            <p className="section-subtitle">Gestión sin fricción, datos inmediatos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessFeatures.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
