import React from 'react';
import { motion, Reorder } from 'framer-motion';
import { GripVertical, ArrowUpDown, RotateCcw } from 'lucide-react';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ActivitiesSection from './ActivitiesSection';

export default function DraggableCanvas({
  items,
  onReorder,
  onReset,
  data
}) {
  const renderSectionContent = (id) => {
    switch (id) {
      case 'about':
        return <AboutSection about={data.about} />;
      case 'experience':
        return <ExperienceSection experience={data.experience} />;
      case 'projects':
        return <ProjectsSection projects={data.projects} />;
      case 'skills':
        return <SkillsSection skills={data.skills} />;
      case 'activities':
        return <ActivitiesSection leadership={data.leadership} academics={data.academics} />;
      default:
        return null;
    }
  };

  const sectionMeta = {
    about: { label: '01. Background & Philosophy', color: '#38BDF8' },
    experience: { label: '02. Professional Track Record', color: '#818CF8' },
    projects: { label: '03. Flagship Systems', color: '#38BDF8' },
    skills: { label: '04. Technical Toolkit', color: '#818CF8' },
    activities: { label: '05. Leadership & Campus Initiatives', color: '#38BDF8' }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6 font-sans">
      {/* Draggable Dock Control Banner */}
      <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#111319] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
            <ArrowUpDown className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-sans font-bold text-white">
                Modular Architecture Canvas
              </h3>
              <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10 font-medium">
                Drag to Re-order
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Grab the handles <span className="text-sky-400 font-bold">⋮⋮</span> on any module to customize your evaluation flow.
            </p>
          </div>
        </div>

        {/* Current Order Chips & Reset Button */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <div className="hidden xl:flex items-center gap-1.5 text-xs font-sans text-slate-400">
            {items.map((item, idx) => (
              <span key={item} className="flex items-center gap-1">
                <span className="text-slate-300 capitalize font-medium">{item}</span>
                {idx < items.length - 1 && <span className="text-slate-500">→</span>}
              </span>
            ))}
          </div>

          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-sans text-slate-300 hover:text-white transition-all ml-2 cursor-pointer font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Flow</span>
          </button>
        </div>
      </div>

      {/* Reorderable List of Sections */}
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={onReorder}
        className="space-y-12"
      >
        {items.map((itemId, index) => {
          const meta = sectionMeta[itemId] || { label: itemId, color: '#38BDF8' };
          return (
            <Reorder.Item
              key={itemId}
              value={itemId}
              className="relative rounded-2xl bg-transparent transition-all"
              whileDrag={{
                scale: 1.01,
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Drag Handle Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-xl bg-[#111319]/80 border border-white/5 text-xs font-sans text-slate-400 group">
                <div className="flex items-center gap-2">
                  <div
                    className="p-1 rounded cursor-grab active:cursor-grabbing hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Drag to reorder section"
                  >
                    <GripVertical className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-white">
                    {meta.label}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span>Priority 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                </div>
              </div>

              {/* Actual Section Content */}
              <div className="relative">
                {renderSectionContent(itemId)}
              </div>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </section>
  );
}
