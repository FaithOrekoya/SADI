import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PLACEHOLDER_TESTIMONIALS } from '../data/sadiContent';
import { Reveal } from './Reveal';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? PLACEHOLDER_TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === PLACEHOLDER_TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
                CLIENT &amp; TRAINEE FEEDBACK
              </p>
              <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#102B46] sm:text-4xl">
                Trusted Training. Meaningful Progress.
              </h2>
              <p className="mt-3 text-sm text-[#252D35]/70">
                Sample feedback layout — placeholder entries ready to be replaced with
                verified client and learner testimonials.
              </p>
            </div>
          </Reveal>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 bg-white text-[#102B46] transition-colors hover:border-[#102B46] hover:bg-[#F4F6F8] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 bg-white text-[#102B46] transition-colors hover:border-[#102B46] hover:bg-[#F4F6F8] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop 3-card Grid with Active Focus / Mobile Interactive Single-Card Slider */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLACEHOLDER_TESTIMONIALS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col justify-between rounded-2xl border p-7 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-[#102B46] bg-[#F4F6F8]/90 shadow-[0_10px_26px_rgba(16,43,70,0.07)]'
                    : 'hidden border-slate-200 bg-white hover:border-slate-300 lg:flex'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Quote
                      className="h-6 w-6 text-[#F28C28]"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold tracking-wider text-[#252D35]/60">
                      {item.category}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#252D35] sm:text-base">
                    “{item.quote}”
                  </p>
                </div>

                <div className="mt-7 border-t border-slate-200 pt-4">
                  <p className="font-display text-sm font-bold text-[#102B46]">
                    {item.authorPlaceholder}
                  </p>
                  <p className="mt-0.5 text-xs text-[#252D35]/70">
                    {item.rolePlaceholder}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide Selector Dots */}
        <div
          className="mt-8 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Select testimonial slide"
        >
          {PLACEHOLDER_TESTIMONIALS.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`View testimonial ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'w-8 bg-[#F28C28]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
