import React from 'react';
import { Sparkles, Building2, Music2, Globe, ArrowDown, CheckCircle2 } from 'lucide-react';
import idolStageImg from '../assets/images/kpop_idol_stage_1789750822603.jpg';
import handsomeIdolImg from '../assets/images/kpop_handsome_idol_1789750779611.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hakkimizda" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Agency Badge & Hero Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-300 text-xs font-semibold tracking-widest uppercase mb-5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>İstanbul Maslak &bull; Seul Gangnam &bull; Tokyo Entegre Ağ</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
            Türkiye'nin Yeni Nesil Küresel Yıldız Kampüsü
          </h1>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
            MaCaRa Idols TR, Asya müzik otoriteleri ve Seul kuluçka merkezleriyle doğrudan entegre çalışan; ileri düzey şan, koreografi, müzik prodüksiyonu ve sahne sanatları akademisidir.
          </p>

          {/* Quick Jump Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#studyo"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <span>Stüdyo & Tesisleri İncele</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#magaza"
              className="px-6 py-3 rounded-xl bg-white dark:bg-[#17120e] hover:bg-amber-50 dark:hover:bg-[#201914] text-neutral-800 dark:text-neutral-200 border border-[#e8ded2] dark:border-[#261e18] font-bold text-xs uppercase tracking-wider transition-all"
            >
              Resmi Mağaza & Figür
            </a>
          </div>
        </div>

        {/* Dual High-Impact Editorial Banners (Matching Exact Generated Photos) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 items-stretch">
          
          {/* Main Stadium Concert Stage (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden relative min-h-[380px] lg:min-h-[480px] border border-[#e8ded2] dark:border-[#261e18] group shadow-xl">
            <img 
              src={idolStageImg} 
              alt="Seul Olympic Arena Konser Sahnesi & Canlı İdol Performansı" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-2">
                Olympic Gymnastics Arena &bull; Küresel Sahne Lansmanı
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug max-w-xl">
                Dünya Arenalarında Canlı Sahne & Senkronizasyon
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-lg">
                Maslak stüdyolarımızda yetiştirilen sanatçılar; Seul, Tokyo ve küresel arena turnelerinde stadyum ses ve ışık sistemleriyle sahneye çıkmaktadır.
              </p>
            </div>
          </div>

          {/* Secondary Editorial Concept Portrait Banner (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[340px] lg:min-h-[480px] border border-[#e8ded2] dark:border-[#261e18] group shadow-xl">
            <img 
              src={handsomeIdolImg} 
              alt="Resmi Debut İdol Portresi & Teaser" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-6 sm:p-8 text-white">
              <div className="self-start px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-amber-300">
                Resmi Debut &bull; Visual Center
              </div>

              <div>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Karizmatik Sahne Duruşu & İmaj
                </h4>
                <p className="text-xs text-neutral-300 mt-2">
                  Seul baş stilistleri ve editoryal moda koçları eşliğinde tasarlanan yüksek standartlı görsel kimlik.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Professional Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#140f0c] border border-[#e8ded2] dark:border-[#261e18] shadow-xs flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cinzel text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">4.500 m²</span>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">Maslak Ana Kampüsü</p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Yüzer zeminli akustik ve dans stüdyoları</p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#140f0c] border border-[#e8ded2] dark:border-[#261e18] shadow-xs flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4">
              <Music2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cinzel text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">6 Stüdyo</span>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">SSL & Dolby Atmos</p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Neumann mikrofon havuzu ve mastering</p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#140f0c] border border-[#e8ded2] dark:border-[#261e18] shadow-xs flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cinzel text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">Seul HQ</span>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">Doğrudan Debut Koridoru</p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Güney Kore A&R ve yapımcı ortaklığı</p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#140f0c] border border-[#e8ded2] dark:border-[#261e18] shadow-xs flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cinzel text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">%100 Canlı</span>
              <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">Vokal & Sahne Disiplini</p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">Milisaniye hareket ve şan analizi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
