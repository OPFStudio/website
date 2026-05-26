// import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap- mb-5">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo.svg" alt="OPF Studio" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">OPF Studio</span>
                <span className="text-xs text-gray-400 -mt-0.5">Inteligencia Energética</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm">
              Transformando datos y análisis, en inteligencia para la evolución de los Sistemas Eléctricos en América Latina.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Observatorio Energético
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Dashboard y apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Capacitación
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                {/* <Mail size={18} className="text-cyan-400 mt-1 flex-shrink-0" /> */}
                <a href="mailto:info@opfstudio.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  info@opfstudio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                {/* <Phone size={18} className="text-cyan-400 mt-1 flex-shrink-0" /> */}
                <a href="tel:+1234567890" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  +52 55 1309 1585
                </a>
              </li>
              <li className="flex items-start gap-3">
                {/* <MapPin size={18} className="text-cyan-400 mt-1 flex-shrink-0" /> */}
                <span className="text-gray-400 text-sm">
                  CDMX, México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-6 sm:mb-0">
            © {currentYear} OPF Studio. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              {/* <Linkedin size={20} /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              {/* <Twitter size={20} /> */}
            </a>
            <span className="w-px h-6 bg-gray-500/20"></span>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Política de privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Términos de servicio
            </a>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
      </div>
    </footer>
  );
}
