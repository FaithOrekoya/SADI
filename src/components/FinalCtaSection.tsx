import { ArrowRight } from 'lucide-react';
import { CORPORATE_BACKDROP_IMAGE } from '../data/sadiContent';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

interface FinalCtaSectionProps {
  onGetInTouch: () => void;
  onExploreTraining: () => void;
}

export function FinalCtaSection({
  onGetInTouch,
  onExploreTraining,
}: FinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#102B46] py-20 text-white sm:py-24">
      <div aria-hidden="true" className="absolute inset-0">
        <ImageWithFallback
          src={CORPORATE_BACKDROP_IMAGE.src}
          alt=""
          className="h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[#102B46]/82" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
            START WITH SADI
          </p>

          <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Take the Next Step Towards Better Driving Standards.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Whether you&apos;re an individual looking to develop your driving skills
            or an organisation seeking professional training solutions, SADI is
            ready to help.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onGetInTouch}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#F28C28] px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#dc7918] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onExploreTraining}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/15 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28]"
            >
              Explore Training
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
