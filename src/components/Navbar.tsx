import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
}

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Corporate', href: '#corporate' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onGetStarted }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(16,43,70,0.06)]'
          : 'border-b border-slate-200/70 bg-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        {/* Zone 1: Clean single-line typographic brand wordmark with geometric road emblem */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F28C28]"
          aria-label="SADI Driver Training and Compliance Institute Home"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="7" fill="#102B46" />
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
          <span className="font-display text-xl font-extrabold tracking-tight text-[#102B46] whitespace-nowrap shrink-0">
            SADI
          </span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="relative py-1 text-sm font-medium text-[#252D35] transition-colors duration-150 hover:text-[#102B46] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F28C28] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#F28C28] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile menu toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onGetStarted}
            className="hidden min-h-[40px] items-center justify-center rounded-lg bg-[#F28C28] px-5 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#dc7918] active:bg-[#c86c12] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102B46] md:inline-flex"
          >
            Get Started
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 text-[#102B46] transition-colors hover:bg-[#F4F6F8] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#252D35] hover:bg-[#F4F6F8] hover:text-[#102B46]"
            >
              Home
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#252D35] hover:bg-[#F4F6F8] hover:text-[#102B46]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onGetStarted();
              }}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#F28C28] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#dc7918] cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
