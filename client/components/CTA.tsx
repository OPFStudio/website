import { Zap, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    alert("Mensaje enviado correctamente");
  };
  
  return (
    <section id="contacto" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 text-2xl font-semibold tracking-wider mb-4">CONTACTO</p>
        </div>
        
        <div className="card-glass border-cyan-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 text-center">
          <h2 className="text-sm sm:text-lg lg:text-2xl font-bold text-white mb-6">
            ¿HABLEMOS DE TU PRÓXIMO PROYECTO?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Cuéntanos cómo podemos ayudarte con consultorías en análisis de sistemas eléctricos,
            mercados eléctricos, transición energética, o capacitación. Estamos abiertos a colaboraciones en proyectos de investigación en toda América Latina.
          </p>
          <div className="">
            <form onSubmit={handleSubmit} className="mb-5 rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-blue-950/40 backdrop-blur">
              <div className="grid gap-5 mb-10">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre completo" className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500" required/>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico" className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500" required/>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Empresa o institución" className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"/>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Cuéntanos sobre tu proyecto" className="resize-none min-h-[180px] rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500" required/>
              </div>
              <button className="hidden sm:inline-block px-40 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all border border-blue-400/20">
                Enviar Mensaje
              </button>

            </form>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-cyan-500/10 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle size={18} className="text-cyan-400 flex-shrink-0" />
              Amplia experiencia en el Sector Energético
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle size={18} className="text-cyan-400 flex-shrink-0" />
              Soporte especializado
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle size={18} className="text-cyan-400 flex-shrink-0" />
              Sin compromiso inicial
            </div>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

    </section>
  );
}
