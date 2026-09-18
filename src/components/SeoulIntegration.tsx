import React from 'react';
import { Globe2, ArrowRight } from 'lucide-react';

export const SeoulIntegration: React.FC = () => {
  const steps = [
    {
      num: '01',
      city: 'İstanbul Maslak',
      title: 'Temel Hazırlık & Kuluçka',
      desc: '1.400 saatlik K-Pop dans temelleri, canlı vokal dayanıklılığı, Korece dil eğitimi ve medya duruşu masterclassları.'
    },
    {
      num: '02',
      city: 'Seul Gangnam',
      title: 'A&R Masterclass & Kayıt',
      desc: 'Güney Kore’nin önde gelen stüdyolarında baş yapımcılar ve hit bestecilerle debut albüm parça kayıtları ve klip çekimleri.'
    },
    {
      num: '03',
      city: 'Tokyo & Global',
      title: 'Uluslararası Sahne Debut',
      desc: 'Asya arena sahnelerinde, MAMA ve uluslararası müzik festivallerinde Genesis Unit olarak resmi çıkış ve stadyum turnesi.'
    }
  ];

  return (
    <section id="seul" className="py-20 border-t border-[#e8ded2] dark:border-[#261e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Globe2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Kıtalararası Koridor</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            İstanbul &times; Seul Entegrasyon Hattı
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Adaylarımızı Türkiye'den Asya ve dünya sahnelerine taşıyan 3 aşamalı resmi kariyer köprüsü.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="rounded-3xl border border-[#e8ded2] dark:border-[#261e18] bg-white dark:bg-[#17120e] p-8 flex flex-col justify-between shadow-sm hover:border-amber-400 dark:hover:border-amber-500 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cinzel text-4xl font-black text-amber-500">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
                    {step.city}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#e8ded2] dark:border-[#261e18] text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                <span>Resmi Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
