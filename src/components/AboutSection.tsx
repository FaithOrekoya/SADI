import { ArrowRight, BookOpen, Shield, TrendingUp } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/sadiContent';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

interface AboutSectionProps {
  onDiscoverApproach: () => void;
}

const VALUE_POINTS = [
  {
    icon: BookOpen,
    title: 'Structured Learning',
    text: 'Methodical theory and practical milestones tailored to clear competency goals.',
  },
  {
    icon: TrendingUp,
    title: 'Professional Development',
    text: 'Building consistent driver judgement, poise, and accountability on every route.',
  },
  {
    icon: Shield,
    title: 'Safety-Driven Training',
    text: 'Practical hazard prevention and compliance awareness embedded into every lesson.',
  },
];

export function AboutSection({ onDiscoverApproach }: AboutSectionProps) {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Editorial Photography */}
          <div className="lg:col-span-6">
            <Reveal className="h-full">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-[#F4F6F8] sm:min-h-[400px]">
                <ImageWithFallback
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  fallbackTitle="SADI Safety & Compliance Inspection"
                  className="h-full w-full object-cover object-center lg:h-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Institutional Narrative */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <Reveal delay={0.08}>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
                ABOUT SADI
              </p>

              <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#102B46] sm:text-4xl">
                Driving Excellence Through Training and Compliance.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#252D35]/85">
                SADI Driver Training &amp; Compliance Institute is committed to
                promoting professional driver development through structured
                training programmes that prioritise safety, practical knowledge,
                and compliance excellence.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#252D35]/75">
                Based in Mdantsane in the Eastern Cape, our institute supports both
                private individuals and commercial organisations seeking dependable,
                standards-led driver education.
              </p>

              {/* Three structured value points separated by clean hairline dividers */}
              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                {VALUE_POINTS.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="flex items-start gap-4 py-4"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F4F6F8] text-[#102B46]">
                        <Icon className="h-4 w-4 text-[#F28C28]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-[#102B46]">
                          {point.title}
                        </h3>
                        <p className="mt-0.5 text-sm leading-relaxed text-[#252D35]/80">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onDiscoverApproach}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#102B46] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#193d61] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28]"
                >
                  <span>Discover Our Approach</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
