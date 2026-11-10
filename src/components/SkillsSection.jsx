import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Code2,
  ShieldCheck,
  Globe,
  Database,
  GitBranch,
  Users,
  Sparkles,
  Layers
} from 'lucide-react';

export default function SkillsSection({ skills }) {
  const categories = skills?.categories || [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      badge: "CORE SPECIALIZATION",
      icon: <Cpu className="w-4 h-4 text-[#E18E7E]" />,
      skills: [
        "Machine Learning Fundamentals",
        "Prompt Engineering",
        "AI-Assisted Development",
        "Model Output Validation",
        "Optimization & Scheduling Algorithms"
      ]
    },
    {
      id: "languages",
      title: "Programming Languages",
      badge: "FOUNDATIONS",
      icon: <Code2 className="w-4 h-4 text-[#F2A99B]" />,
      skills: ["Python", "SQL", "C", "C++", "Java"]
    },
    {
      id: "testing",
      title: "Testing & Automation",
      badge: "QA & RELIABILITY",
      icon: <ShieldCheck className="w-4 h-4 text-[#E18E7E]" />,
      skills: [
        "Automation Testing",
        "Manual Testing",
        "Bug Reporting",
        "AI Beta Testing"
      ]
    },
    {
      id: "web-backend",
      title: "Web & Backend Development",
      badge: "FULL-STACK ARCHITECTURE",
      icon: <Globe className="w-4 h-4 text-[#F2A99B]" />,
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "REST APIs"]
    },
    {
      id: "databases",
      title: "Database Management",
      badge: "DATA STORAGE",
      icon: <Database className="w-4 h-4 text-[#E18E7E]" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      id: "tools",
      title: "Version Control & Tools",
      badge: "DEV TOOLING",
      icon: <GitBranch className="w-4 h-4 text-[#F2A99B]" />,
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      id: "professional",
      title: "Professional Skills",
      badge: "LEADERSHIP & OPERATIONS",
      icon: <Users className="w-4 h-4 text-[#E18E7E]" />,
      skills: [
        "Team Leadership",
        "Project Management",
        "Client Handling",
        "Public Speaking",
        "Problem Solving"
      ]
    }
  ];

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'ai-ml':
        return <Cpu className="w-4 h-4 text-[#E18E7E]" />;
      case 'languages':
        return <Code2 className="w-4 h-4 text-[#F2A99B]" />;
      case 'testing':
        return <ShieldCheck className="w-4 h-4 text-[#E18E7E]" />;
      case 'web-backend':
        return <Globe className="w-4 h-4 text-[#F2A99B]" />;
      case 'databases':
        return <Database className="w-4 h-4 text-[#E18E7E]" />;
      case 'tools':
        return <GitBranch className="w-4 h-4 text-[#F2A99B]" />;
      case 'professional':
        return <Users className="w-4 h-4 text-[#E18E7E]" />;
      default:
        return <Layers className="w-4 h-4 text-[#E18E7E]" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Section Header (Marina Voss Editorial Style) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E18E7E]/20 pb-5 mb-10">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E18E7E]" />
            03 // TECHNICAL TOOLING & CATEGORIZED SKILLS
          </span>
          <h2 className="text-3xl sm:text-5xl font-poppins font-black uppercase text-[#FFF6F2] mt-2 tracking-tight">
            Skills & Tooling
          </h2>
        </div>
        <p className="text-xs font-mono text-[#D8C6C0] max-w-md">
          TECHNICAL STACK, PROGRAMMING LANGUAGES & SPECIALIZED DOMAINS
        </p>
      </div>

      {/* Categorized Skills Grid (Zero Evaluation Bars - Clean Category & Tag Presentation) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => {
          const isFeatured = cat.id === 'ai-ml';

          return (
            <div
              key={cat.id || idx}
              className={`p-6 sm:p-7 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 hover:border-[#E18E7E]/80 transition-all duration-300 flex flex-col justify-between shadow-editorial relative overflow-hidden group ${
                isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#251422] to-[#1C101A] border-[#E18E7E]/50' : ''
              }`}
            >
              {/* Corner Ambient Flare */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#E18E7E]/10 group-hover:bg-[#E18E7E]/20 transition-all blur-2xl pointer-events-none" />

              <div>
                {/* Header: Icon, Category Name, and Badge */}
                <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-[#E18E7E]/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#251422] border border-[#E18E7E]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="font-poppins font-bold text-base sm:text-lg text-white group-hover:text-[#F2A99B] transition-colors tracking-wide">
                      {cat.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#251422] text-[#F2A99B] border border-[#E18E7E]/30 uppercase font-bold tracking-wider shrink-0">
                    {cat.badge}
                  </span>
                </div>

                {/* Skills Tags List */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-xl border transition-all text-xs font-sans font-medium leading-relaxed ${
                        isFeatured
                          ? 'bg-[#2E182B] border-[#E18E7E]/35 text-[#FFF6F2] hover:border-[#E18E7E] hover:bg-[#381D34]'
                          : 'bg-[#251422]/90 border-[#E18E7E]/20 text-[#D8C6C0] hover:text-white hover:border-[#E18E7E]/60'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Meta Counter */}
              <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D8C6C0]">
                <span>{cat.skills.length} Skills</span>
                <span className="text-[#E18E7E] group-hover:translate-x-0.5 transition-transform">↗</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
