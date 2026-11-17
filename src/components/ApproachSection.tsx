import { APPROACH_STEPS } from '../data/sadiContent';
import { Reveal } from './Reveal';

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="border-t border-slate-200/80 bg-[#F4F6F8] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
              OUR TRAINING APPROACH
            </p>
            <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#102B46] sm:text-4xl">
              A Clear Path to Better Driving Standards.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#252D35]/85">
              A structured three-stage process built to turn assessment into
              consistent, accountable driving habits.
            </p>
          </div>
        </Reveal>

        {/* Horizontal 3-Step Progression */}
        <div className="relative mt-14">
          {/* Desktop Horizontal Connecting Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden h-[1px] bg-slate-300 md:block"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {APPROACH_STEPS.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.08}>
                <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-200 hover:border-[#102B46]/30 hover:shadow-[0_10px_28px_rgba(16,43,70,0.06)]">
                  {/* Step Marker */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#102B46] font-display text-base font-bold text-white tabular-nums">
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-[#F28C28]">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#102B46]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm font-medium leading-relaxed text-[#252D35]">
                    {item.description}
                  </p>

                  <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-[#252D35]/75">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
