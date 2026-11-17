import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import type { TrainingProgram } from '../data/sadiContent';
import { ImageWithFallback } from './ImageWithFallback';

interface ProgramDetailModalProps {
  program: TrainingProgram | null;
  onClose: () => void;
  onEnquireProgram: (program: TrainingProgram) => void;
}

export function ProgramDetailModal({
  program,
  onClose,
  onEnquireProgram,
}: ProgramDetailModalProps) {
  useEffect(() => {
    if (!program) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#102B46]/65 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close program overview"
          className="absolute right-4 top-4 z-10 inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-white/95 text-[#102B46] shadow-sm transition-colors hover:bg-[#F4F6F8] cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-[16/9] w-full overflow-hidden bg-[#F4F6F8]">
          <ImageWithFallback
            src={program.image}
            alt={program.imageAlt}
            fallbackTitle={program.title}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#252D35]/65">
            <span className="tabular-nums text-[#F28C28]">{program.number}</span>
            <span aria-hidden="true">/</span>
            <span>{program.category}</span>
          </div>

          <h3
            id="program-modal-title"
            className="mt-2 font-display text-2xl font-bold text-[#102B46] sm:text-3xl"
          >
            {program.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#252D35]/85 sm:text-base">
            {program.audience}.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#102B46]">
              Core Training Focus
            </h4>
            <ul className="mt-3 space-y-2.5">
              {program.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2.5 text-sm text-[#252D35]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#F28C28]"
                    aria-hidden="true"
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#102B46]">
              Intended Development Outcomes
            </h4>
            <ul className="mt-3 space-y-2">
              {program.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-2.5 text-sm text-[#252D35]/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#102B46]"
                  />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#102B46] transition-colors hover:bg-[#F4F6F8] cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => onEnquireProgram(program)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#F28C28] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#dc7918] cursor-pointer"
            >
              <span>Enquire About This Program</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
