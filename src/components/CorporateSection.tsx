import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CORPORATE_BACKDROP_IMAGE } from '../data/sadiContent';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

interface CorporateSectionProps {
  onDiscussCorporate: () => void;
}

const CORPORATE_PILLARS = [
  'Structured fleet driver assessments and practical upskilling',
  'Alignment with workplace road safety and compliance standards',
  'Flexible training coordination built around operational schedules',
];

export function CorporateSection({ onDiscussCorporate }: CorporateSectionProps) {
  return (
    <section
      id="corporate"
      className="relative overflow-hidden bg-[#102B46] py-20 text-white sm:py-24"
    >
      {/* Background highway imagery with measured dark navy scrim for >= 4.5:1 contrast */}
      <div aria-hidden="true" className="absolute inset-0">
        <ImageWithFallback
          src={CORPORATE_BACKDROP_IMAGE.src}
          alt=""
          className="h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B46] via-[#102B46]/92 to-[#102B46]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
                CORPORATE TRAINING &amp; PARTNERSHIPS
              </p>

              <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                Building Safer, More Capable Workforces.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Support your organisation with structured driver training and
                compliance-focused development solutions designed around your
                operational needs.
              </p>

              <ul className="mt-7 space-y-3">
                {CORPORATE_PILLARS.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-start gap-3 text-sm text-slate-100 sm:text-base"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#F28C28]"
                      aria-hidden="true"
                    />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <button
                  type="button"
                  onClick={onDiscussCorporate}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#F28C28] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#dc7918] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Discuss Corporate Training</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b1f33]/75 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                <div className="aspect-[16/10] overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src="/src/assets/images/program_corporate_fleet_1794921342894.jpg"
                    alt="Commercial fleet team attending a structured compliance and safety briefing"
                    fallbackTitle="Corporate Fleet Training Solutions"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-semibold tracking-wider text-[#F28C28]">
                    FLEET &amp; ORGANISATIONAL READINESS
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                    Partnering with Eastern Cape businesses, logistics operators, and
                    institutions to strengthen driver discipline and road safety culture.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
