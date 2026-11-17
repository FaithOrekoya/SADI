import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_PLACEHOLDERS, TRAINING_PROGRAMS } from '../data/sadiContent';
import { Reveal } from './Reveal';

export type EnquiryMode = 'individual' | 'corporate';

interface ContactSectionProps {
  selectedMode: EnquiryMode;
  selectedProgramId: string;
  onModeChange: (mode: EnquiryMode) => void;
  onProgramChange: (programId: string) => void;
}

interface FormErrors {
  fullName?: string;
  contactEmail?: string;
  phone?: string;
  message?: string;
}

export function ContactSection({
  selectedMode,
  selectedProgramId,
  onModeChange,
  onProgramChange,
}: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedMode === 'corporate' && selectedProgramId === '') {
      onProgramChange('corporate-training');
    }
  }, [selectedMode, selectedProgramId, onProgramChange]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactEmail.trim() || !emailPattern.test(contactEmail.trim())) {
      nextErrors.contactEmail = 'Please enter a valid email address.';
    }
    const digitsOnly = phone.replace(/[^\d+]/g, '');
    if (phone.trim() && digitsOnly.length < 9) {
      nextErrors.phone = 'Please enter a valid contact number (at least 9 digits).';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please briefly describe your training or compliance requirements.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setOrganisation('');
    setContactEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-[#F4F6F8] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Institution Details & Editable Contact Placeholders */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#F28C28]">
                CONTACT SADI
              </p>
              <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#102B46] sm:text-4xl">
                Speak With Our Training Team.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#252D35]/85">
                Enquire about individual driver education, safety awareness
                programmes, or corporate fleet training partnerships in Mdantsane
                and across the Eastern Cape.
              </p>

              <div className="mt-9 space-y-5 border-t border-slate-200 pt-7">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F28C28]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#102B46]">
                      Location
                    </p>
                    <p className="mt-0.5 text-sm text-[#252D35]/85">
                      {CONTACT_PLACEHOLDERS.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F28C28]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#102B46]">
                      Telephone
                    </p>
                    <p className="mt-0.5 text-sm text-[#252D35]/85">
                      {CONTACT_PLACEHOLDERS.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F28C28]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#102B46]">
                      Email
                    </p>
                    <p className="mt-0.5 text-sm text-[#252D35]/85">
                      {CONTACT_PLACEHOLDERS.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F28C28]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#102B46]">
                      Office Hours
                    </p>
                    <p className="mt-0.5 text-sm text-[#252D35]/85">
                      {CONTACT_PLACEHOLDERS.hours}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Validated Lead Capture Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(16,43,70,0.05)] sm:p-8">
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#102B46]/10 text-[#102B46]">
                      <CheckCircle2 className="h-7 w-7 text-[#F28C28]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-[#102B46]">
                      Enquiry Received
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#252D35]/85">
                      Thank you, <span className="font-semibold text-[#102B46]">{fullName}</span>.
                      Your {selectedMode === 'corporate' ? 'corporate training' : 'individual training'} enquiry
                      has been recorded in this prototype preview. Connect your preferred
                      email or CRM endpoint before launch.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#102B46] transition-colors hover:bg-[#F4F6F8] cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Interactive Segmented Enquiry Selector */}
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[#102B46]">
                        Enquiry Type
                      </span>
                      <div className="mt-2 inline-flex w-full rounded-lg border border-slate-200 bg-[#F4F6F8] p-1 sm:w-auto">
                        <button
                          type="button"
                          onClick={() => onModeChange('individual')}
                          className={`flex-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer sm:flex-initial ${
                            selectedMode === 'individual'
                              ? 'bg-white text-[#102B46] shadow-sm'
                              : 'text-[#252D35]/75 hover:text-[#102B46]'
                          }`}
                        >
                          Individual Training
                        </button>
                        <button
                          type="button"
                          onClick={() => onModeChange('corporate')}
                          className={`flex-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer sm:flex-initial ${
                            selectedMode === 'corporate'
                              ? 'bg-white text-[#102B46] shadow-sm'
                              : 'text-[#252D35]/75 hover:text-[#102B46]'
                          }`}
                        >
                          Corporate &amp; Fleet
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="sadi-full-name"
                          className="block text-sm font-medium text-[#102B46]"
                        >
                          Full Name <span className="text-[#F28C28]">*</span>
                        </label>
                        <input
                          id="sadi-full-name"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#252D35] transition-colors focus:border-[#102B46] focus:outline-none"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="sadi-organisation"
                          className="block text-sm font-medium text-[#102B46]"
                        >
                          Organisation {selectedMode === 'corporate' ? '(Recommended)' : '(Optional)'}
                        </label>
                        <input
                          id="sadi-organisation"
                          type="text"
                          value={organisation}
                          onChange={(e) => setOrganisation(e.target.value)}
                          placeholder="Company or organisation name"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#252D35] transition-colors focus:border-[#102B46] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="sadi-email"
                          className="block text-sm font-medium text-[#102B46]"
                        >
                          Email Address <span className="text-[#F28C28]">*</span>
                        </label>
                        <input
                          id="sadi-email"
                          type="email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="name@example.co.za"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#252D35] transition-colors focus:border-[#102B46] focus:outline-none"
                        />
                        {errors.contactEmail && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.contactEmail}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="sadi-phone"
                          className="block text-sm font-medium text-[#102B46]"
                        >
                          Contact Number
                        </label>
                        <input
                          id="sadi-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 043 000 0000"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#252D35] transition-colors focus:border-[#102B46] focus:outline-none"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="sadi-program"
                        className="block text-sm font-medium text-[#102B46]"
                      >
                        Training Area of Interest
                      </label>
                      <select
                        id="sadi-program"
                        value={selectedProgramId}
                        onChange={(e) => onProgramChange(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#252D35] transition-colors focus:border-[#102B46] focus:outline-none"
                      >
                        <option value="">General Training &amp; Compliance Enquiry</option>
                        {TRAINING_PROGRAMS.map((prog) => (
                          <option key={prog.id} value={prog.id}>
                            {prog.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="sadi-message"
                        className="block text-sm font-medium text-[#102B46]"
                      >
                        How Can We Assist? <span className="text-[#F28C28]">*</span>
                      </label>
                      <textarea
                        id="sadi-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your training objectives, preferred schedule, or fleet team requirements..."
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#252D35] transition-colors focus:border-[#102B46] focus:outline-none"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-[#F28C28] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#dc7918] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102B46] sm:w-auto"
                      >
                        Submit Enquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
