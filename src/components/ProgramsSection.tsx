import { ArrowRight } from 'lucide-react';
import { TRAINING_PROGRAMS, type TrainingProgram } from '../data/sadiContent';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

interface ProgramsSectionProps {
  onSelectProgram: (program: TrainingProgram) => void;
}

export function ProgramsSection({ onSelectProgram }: ProgramsSectionProps) {
  return (
    <section
      id="programs"
      className="border-t border-slate-200/80 bg-[#F4F6F8] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
              OUR TRAINING PROGRAMS
            </p>
            <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#102B46] sm:text-4xl">
              Developing Skills for Every Driving Journey.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#252D35]/85">
              Explore professional training solutions designed to support driver
              development, practical competence, and safer road practices.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TRAINING_PROGRAMS.map((program, idx) => (
            <Reveal key={program.id} delay={idx * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#102B46]/30 hover:shadow-[0_14px_34px_rgba(16,43,70,0.08)]">
                {/* 4:3 Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#102B46]/5">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.imageAlt}
                    fallbackTitle={program.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Unboxed clean metadata line (Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#252D35]/65">
                    <span className="tabular-nums text-[#F28C28]">
                      {program.number}
                    </span>
                    <span aria-hidden="true">/</span>
                    <span>{program.category}</span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[#102B46]">
                    {program.title}
                  </h3>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#252D35]/85">
                    {program.summary}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <button
                      type="button"
                      onClick={() => onSelectProgram(program)}
                      className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#102B46] transition-colors duration-150 group-hover:text-[#F28C28] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F28C28]"
                    >
                      <span>Explore Program</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
