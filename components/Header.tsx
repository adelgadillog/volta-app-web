'use client'

import { useState } from 'react'
import { Icons } from './Icons'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Características', href: '#features' },
    { label: 'Cómo funciona', href: '#how' },
    { label: 'Precios', href: '#' },
  ]

  return (
    <header className="bg-white border-b border-volta-surface-variant sticky top-0 z-50 shadow-sm">
      <div className="container-max max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-volta-primary to-volta-secondary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-volta-primary to-volta-secondary bg-clip-text text-transparent">
              Volta
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-volta-text-muted hover:text-volta-primary transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-volta-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden md:block btn-primary text-sm py-2 px-4 transform hover:scale-105 transition-transform active:scale-95">
            Comenzar
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-volta-surface rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Icons.X className="w-6 h-6 text-volta-primary" />
            ) : (
              <Icons.Menu className="w-6 h-6 text-volta-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-volta-surface-variant space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-volta-on-surface hover:bg-volta-surface rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full btn-primary text-sm py-2 mt-4">
              Comenzar
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
