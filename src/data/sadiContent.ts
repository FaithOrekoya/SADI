export interface TrainingProgram {
  id: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  audience: string;
  focusAreas: string[];
  outcomes: string[];
}

export interface TrustPillar {
  number: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | 'layers'
    | 'shield'
    | 'award'
    | 'compass'
    | 'building'
    | 'checkCircle';
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorPlaceholder: string;
  rolePlaceholder: string;
  category: string;
}

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_sadi_training_wide_1794926045824.jpg',
  alt: 'SADI driving instructor in a navy shirt speaking beside a modern silver learner training vehicle on a sunlit South African coastal road',
};

export const ABOUT_IMAGE = {
  src: '/src/assets/images/about_sadi_inspection_1794921341121.jpg',
  alt: 'Compliance instructor conducting a structured pre-trip vehicle inspection at a modern driver training facility',
};

export const WHY_CHOOSE_IMAGE = {
  src: '/src/assets/images/why_sadi_instructor_1794921342900.jpg',
  alt: 'Senior South African driving and compliance instructor holding structured training materials beside a modern training sedan',
};

export const CORPORATE_BACKDROP_IMAGE = {
  src: '/src/assets/images/corporate_highway_backdrop_1794921343609.jpg',
  alt: 'South African coastal highway at golden hour with commercial fleet vehicles and passenger cars travelling safely',
};

export const TRUST_PILLARS: TrustPillar[] = [
  {
    number: '01',
    title: 'Professional Training',
    description: 'Structured curriculum led by attentive, safety-focused instruction.',
  },
  {
    number: '02',
    title: 'Driver Development',
    description: 'Progressive practical coaching that builds calm, capable road habits.',
  },
  {
    number: '03',
    title: 'Safety & Compliance',
    description: 'Clear focus on road discipline, vehicle checks, and compliance standards.',
  },
  {
    number: '04',
    title: 'Corporate Training Solutions',
    description: 'Dedicated fleet and workplace programmes tailored for organisations.',
  },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'driver-training',
    number: '01',
    category: 'Foundational & Practical',
    title: 'Driver Training',
    summary: 'Professional development and practical driving education.',
    image: '/src/assets/images/program_driver_training_1794921342248.jpg',
    imageAlt: 'Modern hatchback training vehicle navigating a paved practical driving circuit with safety cones',
    audience: 'Individuals seeking structured, confidence-building practical driver education',
    focusAreas: [
      'Vehicle controls, observation routines, and smooth handling',
      'Road positioning, intersection discipline, and urban traffic navigation',
      'Structured practical progression matched to learner readiness',
      'Pre-drive vehicle checks and responsible road conduct',
    ],
    outcomes: [
      'Consistent, methodical vehicle control in everyday road environments',
      'Stronger situational awareness and calm decision-making behind the wheel',
    ],
  },
  {
    id: 'safety-awareness',
    number: '02',
    category: 'Defensive Habits',
    title: 'Driver Safety & Awareness',
    summary: 'Building safer driving habits and stronger road awareness.',
    image: '/src/assets/images/program_safety_awareness_1794921341594.jpg',
    imageAlt: 'Inside view of a vehicle cabin with driver maintaining safe following distance on an open highway',
    audience: 'Active drivers looking to sharpen hazard perception and defensive road habits',
    focusAreas: [
      'Early hazard identification and safe following-distance management',
      'Speed management across changing road, weather, and traffic conditions',
      'Mirror-checking discipline and blind-spot awareness',
      'Fatigue, distraction prevention, and proactive risk reduction',
    ],
    outcomes: [
      'Reduced day-to-day driving risk through defensive anticipation',
      'Clearer judgement in high-traffic and highway environments',
    ],
  },
  {
    id: 'corporate-training',
    number: '03',
    category: 'Fleet & Organisational',
    title: 'Corporate Driver Training',
    summary: 'Structured training solutions for organisations and businesses.',
    image: '/src/assets/images/program_corporate_fleet_1794921342894.jpg',
    imageAlt: 'Commercial fleet vehicles and drivers in high-visibility vests attending a structured safety briefing',
    audience: 'Fleet operators, logistics teams, public entities, and corporate vehicle teams',
    focusAreas: [
      'Baseline driver assessments and structured development feedback',
      'Pre-trip inspection routines and fleet vehicle care accountability',
      'Compliance-aligned road conduct and workplace safety alignment',
      'Flexible scheduling coordinated around operational fleet demands',
    ],
    outcomes: [
      'More consistent driving standards across company drivers and fleet teams',
      'Stronger safety culture and operational compliance support',
    ],
  },
];

export const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: 'structured',
    title: 'Structured Training Approach',
    description:
      'Every session follows a clear sequence of objectives rather than ad-hoc driving practice.',
    iconName: 'layers',
  },
  {
    id: 'safety-first',
    title: 'Safety-First Mindset',
    description:
      'Hazard awareness, calm judgement, and safe road habits sit at the core of every module.',
    iconName: 'shield',
  },
  {
    id: 'development',
    title: 'Professional Development',
    description:
      'Guidance designed to elevate driver discipline, attitude, and consistent road conduct.',
    iconName: 'award',
  },
  {
    id: 'practical',
    title: 'Practical Learning Experience',
    description:
      'Hands-on coaching in real driving contexts with clear, constructive feedback throughout.',
    iconName: 'compass',
  },
  {
    id: 'solutions',
    title: 'Individual & Corporate Solutions',
    description:
      'Adaptable training pathways serving private learners as well as commercial fleet teams.',
    iconName: 'building',
  },
  {
    id: 'compliance',
    title: 'Commitment to Compliance Excellence',
    description:
      'Training frameworks grounded in regulatory awareness, documentation discipline, and accountability.',
    iconName: 'checkCircle',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Assess training requirements, experience, and development objectives.',
    detail:
      'We begin by reviewing your current driving background or organisational fleet requirements to establish a clear training baseline.',
  },
  {
    step: '02',
    title: 'Train',
    description: 'Deliver structured learning and practical driver development.',
    detail:
      'Instructors guide participants through methodical road theory, safety routines, and hands-on driving practice at a measured pace.',
  },
  {
    step: '03',
    title: 'Improve',
    description: 'Encourage responsible driving practices and continuous improvement.',
    detail:
      'Targeted review and feedback reinforce safer habits, compliance discipline, and lasting confidence on South African roads.',
  },
];

export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      '[Placeholder Testimonial — Replace with verified feedback from an individual learner sharing how SADI’s structured instruction improved their confidence and road awareness.]',
    authorPlaceholder: '[Individual Learner Name — Placeholder]',
    rolePlaceholder: '[Private Training Participant · Mdantsane]',
    category: 'Driver Training',
  },
  {
    id: 'testimonial-2',
    quote:
      '[Placeholder Testimonial — Replace with a verified endorsement from a fleet supervisor or operations manager regarding SADI’s corporate driver development and compliance focus.]',
    authorPlaceholder: '[Fleet Supervisor Name — Placeholder]',
    rolePlaceholder: '[Operations Manager · Partner Organisation]',
    category: 'Corporate Training',
  },
  {
    id: 'testimonial-3',
    quote:
      '[Placeholder Testimonial — Replace with verified feedback highlighting practical road safety habits, calm instruction, and measurable improvement in driver discipline.]',
    authorPlaceholder: '[Organisation Representative — Placeholder]',
    rolePlaceholder: '[Health & Safety Lead · Eastern Cape]',
    category: 'Safety & Compliance',
  },
];

export const CONTACT_PLACEHOLDERS = {
  location: '[Physical Street Address Placeholder], Mdantsane, Eastern Cape, South Africa',
  phone: '[Telephone Number Placeholder]',
  email: '[Email Address Placeholder]',
  hours: '[Operating Hours Placeholder — e.g. Mon – Fri, 08:00 – 17:00]',
};
