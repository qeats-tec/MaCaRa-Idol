import React, { useState } from 'react';
import { PROGRAM_DIVISIONS } from '../data/agencyData';
import { Layers, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProgramDivisions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="egitim" className="py-20 border-t border-[#e8ded2] dark:border-[#261e18] bg-[#f7f3ec]/60 dark:bg-[#120d0a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Akademi Müfredatı & Gelişim Alanları</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            İdol & Sanatçı Gelişim Departmanları
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Seul’ün en köklü eğlence ajanslarının çalışma prensiplerine dayanan 4 ana disiplinde yoğun eğitim ve masterclass programı.
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAM_DIVISIONS.map((prog, idx) => (
            <div 
              key={prog.id}
              className="rounded-3xl border border-[#e8ded2] dark:border-[#261e18] bg-white dark:bg-[#17120e] overflow-hidden flex flex-col justify-between shadow-sm hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="aspect-4/3 overflow-hidden bg-neutral-900 relative">
                <img 
                  src={prog.imageUrl} 
                  alt={prog.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300">
                    {prog.focus}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-700 dark:text-amber-400 font-bold mb-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{prog.hours}</span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mt-1 mb-3">
                    {prog.subtitle}
                  </p>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {prog.description}
                  </p>
                </div>

                {/* Skills List */}
                <div className="pt-4 border-t border-[#e8ded2] dark:border-[#261e18] space-y-1.5">
                  {prog.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
