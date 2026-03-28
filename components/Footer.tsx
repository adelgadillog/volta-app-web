export default function Footer() {
  return (
    <footer className="bg-volta-on-surface text-white py-12 px-4">
      <div className="container-max max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-volta-primary mb-4">Volta</h3>
            <p className="text-gray-300 text-sm">
              Fidelización digital simple y efectiva para tu negocio
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-300 hover:text-white transition">Características</a></li>
              <li><a href="#how" className="text-gray-300 hover:text-white transition">Cómo funciona</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Precios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contacto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacidad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Términos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Volta. Todos los derechos reservados.
          </p>

          {/* Social links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
