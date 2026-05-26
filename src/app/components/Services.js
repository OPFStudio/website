import { LayoutList, GraduationCap, Radar } from "lucide-react";

const services = [
  {
    icon: LayoutList,
    title: "Consultoría Estratégica",
    description: "Apoyo a instituciones y empresas en planeación, regulación y toma de decisiones, a través de simulaciones y análisis de datos."
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    description: "Programas de capacitación técnicos y ejecutivos para desarrollar capacidades en el Sector Energético"
  },
  {
    icon: Radar,
    title: "Dashboards y Apps",
    description: "Servicios de Tableros de información y aplicaciones web para la toma de decisiones estratégicas"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-2xl font-semibold tracking-wider mb-4">SERVICIOS</p>
          <h2 className="text-sm sm:text-lg lg:text-2xl font-bold text-white">
            Servicios inteligentes para el análisis estratégico en el Sector Energético
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group card-glass hover:border-cyan-500/50 hover:bg-white/10 cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 group-hover:border-cyan-500/60 mb-4 transition-all">
                  <Icon size={24} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <a href="#" className="text-cyan-400 text-sm font-medium mt-4 inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  Ver más
                  <span>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </section>
  );
}
