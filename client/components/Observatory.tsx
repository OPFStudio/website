import { MapPin, TrendingUp, Zap, Activity } from "lucide-react";

export default function Observatory() {
  return (
    <section id="observatorio" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-2xl font-semibold tracking-wider mb-2">OBSERVATORIO ENERGÉTICO</p>
          <h2 className="text-sm sm:text-lg lg:text-2xl font-bold text-white">
            Plataforma Integral de análisis y visualización de información del Sector Energético
          </h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl h-96 lg:h-full min-h-96 group mb-10">
          {/* Map Preview */}
          <img src="Observatorio.png" alt="" />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="btn-primary">
            Acceder al Observatorio Energético
          </button>
        </div>
      </div>
      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </section>
  );
}
