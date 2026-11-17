import { ArrowRight, Check } from 'lucide-react';
import { HERO_IMAGE } from '../data/sadiContent';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

interface HeroSectionProps {
  onExplorePrograms: () => void;
  onPartnerWithSadi: () => void;
}

const HERO_TRUST_POINTS = [
  'Professional Training',
  'Safety-Focused Approach',
  'Individual & Corporate Solutions',
];

export function HeroSection({
  onExplorePrograms,
  onPartnerWithSadi,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#102B46] py-16 text-white sm:py-24 lg:py-28"
    >
      {/* Full-bleed Hero Background Image */}
      <div aria-hidden="true" className="absolute inset-0">
        <ImageWithFallback
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fallbackTitle="Professional Driver Training"
          className="h-full w-full object-cover object-center"
        />
        {/* Measured directional navy scrim ensuring >= 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B46]/95 via-[#102B46]/80 to-[#102B46]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102B46]/70 via-transparent to-[#102B46]/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          {/* Editorial Value Proposition */}
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
                SADI DRIVER TRAINING &amp; COMPLIANCE INSTITUTE · MDANTSANE
              </p>

              <h1
                className="text-balance mt-4 font-display font-extrabold tracking-tight text-white"
                style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)', lineHeight: 1.08 }}
              >
                Building Safer Drivers. Strengthening Road Safety.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-100/90 sm:text-lg">
                Empowering individuals and organisations through structured driver
                training, professional development, and a commitment to compliance
                excellence.
              </p>

              {/* Primary and Secondary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExplorePrograms}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#F28C28] px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#dc7918] active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Explore Training Programs</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onPartnerWithSadi}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-150 hover:border-white hover:bg-white/20 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28]"
                >
                  Partner With SADI
                </button>
              </div>

              {/* Three unboxed trust indicators beneath CTAs */}
              <div className="mt-10 border-t border-white/20 pt-6">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-100">
                  {HERO_TRUST_POINTS.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check
                        className="h-4 w-4 shrink-0 text-[#F28C28]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Floating Information Card anchored cleanly over the open background */}
          <Reveal delay={0.1} className="sm:max-w-xs lg:mb-1">
            <div className="rounded-xl border border-white/25 bg-white/95 p-5 shadow-[0_14px_36px_rgba(10,25,44,0.32)] backdrop-blur-md">
              <p className="text-[11px] font-semibold tracking-[0.12em] text-[#F28C28]">
                EASTERN CAPE · STRUCTURED INSTRUCTION
              </p>
              <p className="mt-1.5 font-display text-base font-bold text-[#102B46] sm:text-lg">
                Training That Builds Confidence
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#252D35]/80">
                Practical driver coaching and safety discipline for individuals and
                commercial fleets.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
