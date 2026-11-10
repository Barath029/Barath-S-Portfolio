import React from 'react';
import { Cpu, Code2, ShieldCheck, Database } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "AI & ML SYSTEMS",
      icon: <Cpu className="w-5 h-5 text-[#E05A36]" />,
      desc: "Conflict-free railway scheduling algorithms, constraint optimization mathematics, prompt engineering, and model validation."
    },
    {
      title: "FULL-STACK ARCHITECTURE",
      icon: <Code2 className="w-5 h-5 text-[#E05A36]" />,
      desc: "High-performance web applications, commercial billing platforms, institutional slot engines, and scalable React integrations."
    },
    {
      title: "QA & BETA TESTING",
      icon: <ShieldCheck className="w-5 h-5 text-[#E05A36]" />,
      desc: "Functional and automation testing with Beta Testing, edge-case bug identification, regression checks, and live AI SaaS validation."
    },
    {
      title: "DATA & CLOUD SYSTEMS",
      icon: <Database className="w-5 h-5 text-[#E05A36]" />,
      desc: "Relational and document storage (Supabase, PostgreSQL, MongoDB, SQL) with optimized query indexing and CI/CD pipelines."
    }
  ];

  return (
    <section id="services" className="bg-[#F4EFEA] text-[#111113] py-20 px-4 sm:px-10 font-sans border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Template Style) */}
        <div className="text-center mb-14">
          <span className="text-xs font-sans font-bold tracking-widest text-[#E05A36] uppercase">
            — SERVICES & DOMAINS —
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-[#111113] mt-2">
            Engineering Domains
          </h2>
        </div>

        {/* 4 Columns (Template Style with Circular Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className={`pt-6 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''} space-y-4 group`}
            >
              {/* Circular Line Icon */}
              <div className="w-12 h-12 rounded-full border border-black/15 group-hover:border-[#E05A36] bg-white flex items-center justify-center transition-all duration-300 shadow-sm">
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base sm:text-lg text-[#111113] tracking-wide uppercase group-hover:text-[#E05A36] transition-colors">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6E645D] leading-relaxed font-sans">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

