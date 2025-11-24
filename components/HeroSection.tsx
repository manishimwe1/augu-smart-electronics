import { ArrowRight, ShieldCheck, ShieldCheckIcon, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-6">
              <ShieldCheck size={14} />
              <span>Kigali's Most Trusted Tech Experts</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                Electronics & IT
              </span>
              <br /> Solutions
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From expert computer repair and CCTV installation to enterprise
              networking. We provide fast, reliable technology services for
              businesses and individuals across Rwanda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                // onClick={()=>{}}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] transition-all"
              >
                <Zap size={20} />
                Request services
              </button>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                View Services
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-lg lg:max-w-none">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-4/3 group">
              {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div> */}
              <Image
                src="/printer.jpeg"
                alt="Technician repairing motherboard"
                fill
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge 1 */}
              <div className="absolute bottom-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <ShieldCheckIcon size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/80">Warranty Included</p>
                  <p className="text-sm font-bold text-white">
                    30 Day Guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl -z-10 animate-pulse opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-dashed border-slate-300 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
