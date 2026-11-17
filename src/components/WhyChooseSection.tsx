import {
  Award,
  Building2,
  CheckCircle2,
  Compass,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { BENEFIT_ITEMS, WHY_CHOOSE_IMAGE, type BenefitItem } from '../data/sadiContent';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

const ICON_MAP: Record<BenefitItem['iconName'], typeof Layers> = {
  layers: Layers,
  shield: ShieldCheck,
  award: Award,
  compass: Compass,
  building: Building2,
  checkCircle: CheckCircle2,
};

export function WhyChooseSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Tall Editorial Portrait */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-[#F4F6F8] sm:min-h-[480px]">
                <ImageWithFallback
                  src={WHY_CHOOSE_IMAGE.src}
                  alt={WHY_CHOOSE_IMAGE.alt}
                  fallbackTitle="Senior SADI Driving Instructor"
                  className="h-full w-full object-cover object-top lg:h-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Heading + 6-item Benefits Grid */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal delay={0.06}>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
                WHY CHOOSE SADI
              </p>
              <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#102B46] sm:text-4xl">
                More Than Training. A Commitment to Safer Roads.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#252D35]/85">
                Our institution combines disciplined road instruction with clear
                compliance standards so every participant builds habits that endure.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {BENEFIT_ITEMS.map((item, idx) => {
                const Icon = ICON_MAP[item.iconName];
                return (
                  <Reveal key={item.id} delay={0.04 * idx}>
                    <div className="group h-full rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-[#102B46]/30 hover:bg-[#F4F6F8]/60">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-[#F4F6F8] text-[#102B46] transition-colors duration-200 group-hover:border-[#F28C28]/40 group-hover:bg-[#F28C28]/10">
                        <Icon
                          className="h-5 w-5 text-[#102B46] transition-colors duration-200 group-hover:text-[#F28C28]"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mt-4 font-display text-base font-bold text-[#102B46]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#252D35]/80">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
