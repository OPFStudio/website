import { TrendingUp, Zap, AlertCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden hero-paddings hero-back">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 hero-home">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Inteligencia Energética para decisiones que construyen futuro
              </h1>
              
              <p className="text-lg text-gray-300 max-w-xl">
                Transformando datos y análisis, en inteligencia para la evolución de los Sistemas Eléctricos en América Latina.
              </p>
            </div>

            <p className="text-green-400 text-lg font-semibold">Sistemas Eléctricos · Mercados Eléctricos · Transición Energética</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-secondary">
                Observatorio Energético
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
}
