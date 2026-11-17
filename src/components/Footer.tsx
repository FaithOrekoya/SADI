import { CONTACT_PLACEHOLDERS } from '../data/sadiContent';

interface FooterProps {
  onSelectCorporate: () => void;
}

export function Footer({ onSelectCorporate }: FooterProps) {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#0B1F33] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="32" height="32" rx="7" fill="#173A5E" />
                <path
                  d="M9 24L13.5 8H18.5L23 24"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11V14M16 17.5V21"
                  stroke="#F28C28"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <span className="font-display text-lg font-extrabold tracking-tight text-white">
                  SADI
                </span>
                <p className="text-[11px] font-medium tracking-wider text-slate-400">
                  Driver Training &amp; Compliance Institute
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300/85">
              Dedicated to advancing driver competence, road safety awareness, and
              structured compliance excellence in Mdantsane, Eastern Cape, South
              Africa.
            </p>

            {/* Social Media Icon Links (Clearly marked placeholders scrolling to contact) */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                aria-label="LinkedIn profile placeholder"
                title="LinkedIn URL Placeholder — Connect via Contact Section"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-[#F28C28] hover:text-white cursor-pointer"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                aria-label="Facebook page placeholder"
                title="Facebook URL Placeholder — Connect via Contact Section"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-[#F28C28] hover:text-white cursor-pointer"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                aria-label="Instagram profile placeholder"
                title="Instagram URL Placeholder — Connect via Contact Section"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-[#F28C28] hover:text-white cursor-pointer"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#home');
                  }}
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                  className="transition-colors hover:text-[#F28C28]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#programs');
                  }}
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Training Programs
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#approach');
                  }}
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white">
              Training &amp; Corporate
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#programs');
                  }}
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Driver Training
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#programs');
                  }}
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Driver Safety &amp; Awareness
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#programs');
                  }}
                  className="transition-colors hover:text-[#F28C28]"
                >
                  Corporate Driver Training
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onSelectCorporate}
                  className="text-left transition-colors hover:text-[#F28C28] cursor-pointer"
                >
                  Corporate Partnerships
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white">
              Contact Information
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300/85">
              <li>{CONTACT_PLACEHOLDERS.location}</li>
              <li>{CONTACT_PLACEHOLDERS.phone}</li>
              <li>{CONTACT_PLACEHOLDERS.email}</li>
              <li>{CONTACT_PLACEHOLDERS.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} SADI Driver Training &amp; Compliance
            Institute. All rights reserved.
          </p>
          <p>Mdantsane, Eastern Cape · South Africa</p>
        </div>
      </div>
    </footer>
  );
}
