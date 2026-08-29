'use client'

import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-500/15 to-transparent backdrop-blur-xl navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="OPF Studio" className="w-14 h-14 object-contain" />
            <div className="hidden sm:flex flex-col">
              <span className="text-2xl font-bold text-white">OPF Studio</span>
              <span className="text-sm text-gray-400 -mt-0.5">Inteligencia Energética</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Nosotros
            </a>
            <a href="#servicios" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Servicios
            </a>
            <a href="#observatorio" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Observatorio
            </a>
            <a href="#publicaciones" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Publicaciones
            </a>
            <a href="#contacto" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:p-2 text-gray-400 hover:text-blue-400 transition-colors">
              <Search size={20} />
            </button> 
            <a href="https://app.opfstudio.com/" className="cursor-pointer">
              <button className="cursor-pointer hidden sm:inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all border border-blue-400/20">
                Login
              </button>
            </a>
            <button className="hidden sm:inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all border border-blue-400/20">
              Suscribirse
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              Servicios
            </a>
            <a
              href="#observatorio"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              Observatorio
            </a>
            <a
              href="#recursos"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              Recursos
            </a>
            <a
              href="#publicaciones"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              Publicaciones
            </a>
            <a
              href="#contacto"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              Contacto
            </a>
            <button className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold border border-blue-400/20">
              Explorar Observatorio
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
