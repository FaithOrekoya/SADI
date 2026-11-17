import { TRUST_PILLARS } from '../data/sadiContent';
import { Reveal } from './Reveal';

export function TrustStrip() {
  return (
    <section
      aria-label="Institutional Pillars"
      className="border-y border-slate-200 bg-[#F4F6F8] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {TRUST_PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.number}
              delay={index * 0.05}
              className="lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="flex flex-col">
                <span className="tabular-nums font-display text-sm font-bold text-[#F28C28]">
                  {pillar.number}
                </span>
                <h2 className="mt-2 font-display text-lg font-bold tracking-tight text-[#102B46]">
                  {pillar.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#252D35]/80">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
