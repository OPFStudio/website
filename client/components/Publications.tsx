import { BookOpen, Clock, ArrowRight } from "lucide-react";

const publications = [
  {
    imageName: "books.png",
  },
  {
    imageName: "informes.png",
  },
  {
    imageName: "articulos.png",
  },
  {
    imageName: "blog.png",
  },
];

export default function Publications() {
  return (
    <section id="publicaciones" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div>
            <p className="text-cyan-400 text-2xl font-semibold tracking-wider mb-2">PUBLICACIONES</p>
            <h2 className="text-sm sm:text-lg lg:text-2xl font-bold text-white">
              Libros, Informes, Artículos técnicos y más
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group card-glass overflow-hidden hover:border-cyan-500/50 cursor-pointer transition-all duration-300">
              <img src={`/${pub.imageName}`}></img>
              
              <a href="#" className="text-cyan-400 text-sm font-medium mt-4 inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                Ir a la sección <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center sm:hidden">
          <button className="btn-secondary">
            Ver todas las publicaciones
          </button>
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </section>
  );
}
