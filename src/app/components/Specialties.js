'use client'

import { UtilityPole, ChartNoAxesCombined, Leaf, HandCoins, FileCode, BrainCircuit } from "lucide-react";

const specialties = [
  {
    icon: UtilityPole,
    title: "Sistemas Eléctricos",
    description: "Simulación y Análisis de Sistemas Eléctricos de Potencia",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: ChartNoAxesCombined,
    title: "Mercados Eléctricos",
    description: "Comprensión profunda de la dinámica de los Precios Marginales y competencia en los Mercados Eléctricos",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Leaf,
    title: "Transición Energética",
    description: "Análisis y Comprensión de las Estrategias y Tecnologías para la Transición hacia Energías Limpias",
    color: "from-cyan-600 to-blue-500"
  },
  {
    icon: HandCoins,
    title: "Análisis Financiero de Proyectos",
    description: "Análisis de los Riesgos Asociados al proyecto para buscar la Viabilidad Financiera",
    color: "from-blue-600 to-cyan-500"
  },
  {
    icon: FileCode,
    title: "Desarrollo de Software",
    description: "Experiencia en desarrollo de Aplicaciones Web o de escritorio en diferentes lenguajes de programación",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "Análisis de Datos",
    description: "Análisis y transformación de datos para tomar decisiones Estratégicas",
    color: "from-blue-500 to-cyan-600"
  }
];

export default function Specialties() {
  return (
    <section id="nosotros" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-2xl font-semibold tracking-wider mb-4">NOSOTROS</p>
          <h2 className="text-sm sm:text-lg lg:text-2xl font-bold text-white max-w-3xl mx-auto">
            Nuestra experiencia y especialización
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-xl p-6 hover:border-cyan-500/50 hover:from-slate-900/80 hover:to-slate-800/60 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${specialty.color} transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${specialty.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors">
                      {specialty.description}
                    </p>
                  </div>
                </div>

                {/* Border animation */}
                <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                  animation: "moveGradient 3s ease-in-out infinite"
                }}></div>
              </div>
            );
          })}
        </div>

        {/* Latin American Expertise Highlight */}
        <div className="mt-16 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 backdrop-blur-xl p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className = "grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3"><svg className="fill-[#7dd87d] w-10 h-10" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,17a4,4,0,1,1,4-4A4,4,0,0,1,12,17Zm6,4a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v3H18ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm0,5A5.968,5.968,0,0,1,7.537,9H3a3,3,0,0,0-3,3v3H6.349A5.971,5.971,0,0,1,6,13Zm11.651,2H24V12a3,3,0,0,0-3-3H16.463a5.952,5.952,0,0,1,1.188,6Z"/></svg></div>
                <div className="col-span-2 text-[#7dd87d]">EXPERIENCIA</div>
                <div className="col-span-2 row-span-2">Equipo interdiciplinario con amplia experiencia en el Sector Energético</div>
              </div>
              <div className = "grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3"><svg className="fill-[#7dd87d] w-10 h-10" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12.056,11.211l8.039,6.718-5.694,4.271c-1.422,1.067-3.378,1.067-4.8,0l-6.133-4.6c-.519-.389-1.151-.6-1.8-.6h-.667C.448,17,0,16.552,0,16V4.937c0-.508,.379-.931,.884-.988,1.357-.151,2.579-.696,3.829-1.424,1.798-.925,4.157-.595,5.616,.772l.617,.593-4.007,3.911c-1.073,1.072-1.244,2.767-.398,3.938,.52,.723,1.461,1.259,2.444,1.259,.793,0,1.554-.312,2.104-.863l.967-.925ZM19.954,2.525c-1.69-.845-3.798-.625-5.308,.548l-6.303,6.152c-.371,.372-.455,.967-.181,1.347,.18,.25,.441,.4,.739,.425,.295,.025,.581-.082,.788-.29l3.618-3.429c.949-.901,2.324,.537,1.383,1.445l-1.181,1.097,8.593,7.181h.897c.552,0,1-.448,1-1V4.903c0-.49-.358-.895-.841-.982-1.694-.306-3.205-1.395-3.205-1.395Z"/></svg></div>
                <div className="col-span-2 text-[#7dd87d]">COMPROMISO</div>
                <div className="col-span-2 row-span-2">Contribuir al desarrollo sostenible y eficiente del Sector Energético</div>
              </div>
              <div className = "grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3"><svg className="fill-[#7dd87d] w-10 h-10" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.941,11H17.463a18.368,18.368,0,0,0-2.289-7.411A9.013,9.013,0,0,1,20.941,11ZM9.685,14h4.63A16.946,16.946,0,0,1,12,19.9,16.938,16.938,0,0,1,9.685,14Zm-.132-3A16.246,16.246,0,0,1,12,4.1,16.241,16.241,0,0,1,14.447,11ZM8.826,3.589A18.368,18.368,0,0,0,6.537,11H3.059A9.013,9.013,0,0,1,8.826,3.589ZM3.232,14H6.641a18.906,18.906,0,0,0,2.185,6.411A9.021,9.021,0,0,1,3.232,14Zm11.942,6.411A18.884,18.884,0,0,0,17.359,14h3.409A9.021,9.021,0,0,1,15.174,20.411Z"/></svg></div>
                <div className="col-span-2 text-[#7dd87d]">VISIÓN</div>
                <div className="col-span-2 row-span-2">Ser referentes en análisis y soluciones innovadoras para el Sector Energético</div>
              </div>
            </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </section>
  );
}

