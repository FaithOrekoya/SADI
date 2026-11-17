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
      className="relative overflow-hidden bg-white pb-14 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Value Proposition */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
                SADI DRIVER TRAINING &amp; COMPLIANCE INSTITUTE · MDANTSANE
              </p>

              <h1
                className="text-balance mt-4 font-display font-extrabold tracking-tight text-[#102B46]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)', lineHeight: 1.08 }}
              >
                Building Safer Drivers. Strengthening Road Safety.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#252D35]/85 sm:text-lg">
                Empowering individuals and organisations through structured driver
                training, professional development, and a commitment to compliance
                excellence.
              </p>

              {/* Primary and Secondary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExplorePrograms}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#F28C28] px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#dc7918] active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102B46]"
                >
                  <span>Explore Training Programs</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onPartnerWithSadi}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#102B46]/25 bg-white px-6 py-3 text-sm font-semibold text-[#102B46] transition-colors duration-150 hover:border-[#102B46] hover:bg-[#F4F6F8] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28]"
                >
                  Partner With SADI
                </button>
              </div>

              {/* Three unboxed trust indicators beneath CTAs */}
              <div className="mt-9 border-t border-slate-200 pt-6">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#252D35]">
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

          {/* Right Column: Split Photography + Layered Floating Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.08} className="relative h-full">
              <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-[#F4F6F8] sm:min-h-[420px] lg:min-h-[500px]">
                <ImageWithFallback
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  fallbackTitle="Professional Driver Training"
                  className="h-full w-full object-cover object-center lg:h-full"
                />

                {/* Subtle bottom gradient scrim for clean contrast */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#102B46]/80 via-[#102B46]/30 to-transparent"
                />

                {/* Layered Floating Information Card */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
                  <div className="rounded-xl border border-white/25 bg-white/95 p-4 shadow-[0_12px_32px_rgba(16,43,70,0.18)] backdrop-blur-md sm:p-5">
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-[#F28C28]">
                      EASTERN CAPE · STRUCTURED INSTRUCTION
                    </p>
                    <p className="mt-1.5 font-display text-base font-bold text-[#102B46] sm:text-lg">
                      Training That Builds Confidence
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#252D35]/80">
                      Practical driver coaching and safety discipline for individuals and commercial fleets.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
