'use client'

import { useState } from 'react'
import { Icons } from './Icons'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setEmail('')
        setSubscribed(false)
      }, 3000)
    }
  }

  const links = {
    producto: [
      { label: 'Características', href: '#features' },
      { label: 'Cómo funciona', href: '#how' },
      { label: 'Precios', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    empresa: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'Careers', href: '#' }
    ],
    legal: [
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
      { label: 'Cookies', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: 'twitter', label: 'Twitter', href: '#' },
    { icon: 'facebook', label: 'Facebook', href: '#' },
    { icon: 'instagram', label: 'Instagram', href: '#' },
    { icon: 'linkedin', label: 'LinkedIn', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-b from-volta-on-surface to-black text-white pt-20 pb-8">
      <div className="container-max max-w-7xl mx-auto px-4 md:px-6">
        {/* Newsletter Section */}
        <div className="mb-16 bg-gradient-to-r from-volta-primary/20 to-volta-secondary/20 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-3">Suscríbete a nuestro newsletter</h3>
            <p className="text-white/80 mb-8">
              Recibe tips, actualizaciones y ofertas exclusivas directamente en tu inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-volta-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-volta-primary hover:bg-volta-secondary transition-colors rounded-lg font-bold transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Icons.Send className="w-5 h-5" />
                Suscribirse
              </button>
            </form>

            {subscribed && (
              <div className="mt-4 text-volta-success font-semibold flex items-center justify-center gap-2">
                <span className="w-5 h-5 bg-volta-success rounded-full flex items-center justify-center text-white text-xs">✓</span>
                ¡Suscripción confirmada!
              </div>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-volta-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h3 className="text-2xl font-bold text-volta-primary">Volta</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Fidelización digital simple y efectiva para tu negocio.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Producto</h4>
            <ul className="space-y-3">
              {links.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm group inline-block"
                  >
                    {link.label}
                    <span className="block w-0 h-0.5 bg-volta-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm group inline-block"
                  >
                    {link.label}
                    <span className="block w-0 h-0.5 bg-volta-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm group inline-block"
                  >
                    {link.label}
                    <span className="block w-0 h-0.5 bg-volta-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Volta. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-volta-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="Twitter">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-volta-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="Facebook">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-volta-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="Instagram">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-volta-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="LinkedIn">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
