export const CLINIC_DATA = {
  name: "Ishwaryam Physiotherapy speciality clinic",
  shortName: "Ishwaryam",
  doctor: {
    name: "Dr. S. Ishwarya",
    qualifications: "B.P.T., M.I.A.P., Hindi B.A.",
    credentialFull: "Bachelor of Physiotherapy | Member, Indian Association of Physiotherapists",
    tagline: "Your Wellness. Our Purpose.",
    taglineTamil: "உங்கள் நலம்... எங்கள் நோக்கம்",
    bio: `Dr. S. Ishwarya founded Ishwaryam Physiotherapy speciality clinic with a single conviction — that the people of Gudiyatham deserve world-class rehabilitation without traveling to Chennai or Vellore city. With 6+ years of clinical excellence, her Bachelor of Physiotherapy degree, and active membership in the Indian Association of Physiotherapists (M.I.A.P.), Dr. Ishwarya brings surgical precision to every assessment and genuine human care to every session. At Ishwaryam, we don't just treat symptoms; we architect your recovery.`,
    experience: "6+ Years",
  },
  address: {
    line1: "No. 52, Neeli Govindappa Chetty Street (Neeligovindhappan St)",
    line2: "Dharanampet, Near National Higher School, MBS Nagar",
    line3: "Gudiyatham, Vellore District, Tamil Nadu — 632602",
    full: "No. 52, Neeli Govindappa Chetty Street, Dharanampet, Gudiyatham — 632602",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.344485361044!2d78.8714!3d12.946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzQ1LjYiTiA3OMKwNTInMTcuMCJF!5e0!3m2!1sen!2sin!4v1712910000000!5m2!1sen!2sin", // Placeholder
  },
  contact: {
    primary: "093614 26487",
    alt: "9843954861",
    whatsapp: "919361426487",
    whatsappLink: "https://wa.me/919361426487",
    email: "ishwaryamphysio@gmail.com",
    youtube: "https://youtube.com/@ishwaryamphysio2687?si=HTg4DojVZGYZm0dh",
    facebook: "#",
    instagram: "#",
  },
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM | Sunday: Closed",
  rating: {
    score: "5.0 / 5.0",
    reviews: "15+ Verified Reviews",
  },
  speciality: "Physiotherapy · Pain Rehabilitation · Neurological Recovery · Sports Medicine",
};

export interface ClinicalProtocol {
  phase: string;
  action: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  clinicalData: {
    focus: string;
    objectives: string[];
    protocol: ClinicalProtocol[];
    recoveryWindow: string;
  };
}

export const SERVICES: Service[] = [
  {
    title: "Orthopedic Physiotherapy",
    description: "Targeted recovery for fractures, joint replacements, ligament tears, and chronic musculoskeletal dysfunction.",
    icon: "Activity",
    clinicalData: {
      focus: "Structural Alignment & Osteokinematics",
      objectives: ["Restore joint range of motion", "Reverse muscle atrophy", "Pain-free weight bearing"],
      protocol: [
        { phase: "Phase 1: Acute", action: "Inflammation control & gentle passive mobilization." },
        { phase: "Phase 2: Sub-acute", action: "Isometrics & active-assisted range of motion." },
        { phase: "Phase 3: Strengthening", action: "Progressive resistive exercise & load management." },
        { phase: "Phase 4: Functional", action: "Proprioceptive training & return to activity." }
      ],
      recoveryWindow: "4–12 Weeks"
    }
  },
  {
    title: "Spine & Back Pain Rehabilitation",
    description: "Disc bulge, PIVD, scoliosis, lumbar spondylosis — addressed at the structural root at Ishwaryam.",
    icon: "Stethoscope",
    clinicalData: {
      focus: "Core Stability & Neural Decompression",
      objectives: ["Centralization of symptoms", "Improved core endurance", "Ergonomic correction"],
      protocol: [
        { phase: "Assessment", action: "Directional preference & neuro-dynamic screening." },
        { phase: "Correction", action: "McKenzie-based mobilization & postural correction." },
        { phase: "Stability", action: "Deep core activation (Transversus Abdominis/Multifidus)." },
        { phase: "Prevention", action: "Mechanical back safety & workplace ergonomics." }
      ],
      recoveryWindow: "6–10 Weeks"
    }
  },
  {
    title: "Neurological Rehabilitation",
    description: "Stroke recovery, Parkinson's management, Bell's palsy — restoring neural pathways through movement science.",
    icon: "Brain",
    clinicalData: {
      focus: "Neuroplasticity & Motor Re-learning",
      objectives: ["Normalize muscle tone", "Improve balance & coordination", "Functional independence"],
      protocol: [
        { phase: "Sensorimotor", action: "Proprioceptive neuromuscular facilitation (PNF)." },
        { phase: "Balance", action: "Static and dynamic equilibrium retraining." },
        { phase: "Gait", action: "Walking pattern correction and load symmetry." },
        { phase: "ADL", action: "Integration into Activities of Daily Living." }
      ],
      recoveryWindow: "3–12 Months"
    }
  },
  {
    title: "Post-Surgical Recovery",
    description: "Structured rehabilitation protocols following orthopedic surgeries to restore full pre-operative function.",
    icon: "ClipboardCheck",
    clinicalData: {
      focus: "Scar Management & Safe Load Progression",
      objectives: ["Zero post-op contractures", "Maximum muscle preservation", "Safe return to sport"],
      protocol: [
        { phase: "Protection", action: "Suture site care & safe range limitations." },
        { phase: "Activation", action: "Inhibiting muscle shutdown & controlled loading." },
        { phase: "Strength", action: "Hypertrophy focus and kinetic chain stability." },
        { phase: "Impact", action: "Plyometric and sport-specific loading (if applicable)." }
      ],
      recoveryWindow: "8–24 Weeks"
    }
  },
  {
    title: "Sports Injury Treatment",
    description: "From ACL tears to shoulder impingement — return-to-sport programs designed at Ishwaryam Physiotherapy speciality clinic.",
    icon: "Dumbbell",
    clinicalData: {
      focus: "Performance Optimization & Re-injury Prevention",
      objectives: ["Restored explosive power", "Mechanical efficiency", "Psychological readiness"],
      protocol: [
        { phase: "Healing", action: "Soft tissue repair and mechanical unloading." },
        { phase: "Drills", action: "Low-impact sport-specific movement patterns." },
        { phase: "Agility", action: "Change of direction and deceleration training." },
        { phase: "Return", action: "Full-contact or high-intensity sport integration." }
      ],
      recoveryWindow: "2–9 Months"
    }
  },
  {
    title: "Neck Pain & Cervical Spondylosis",
    description: "Manual therapy and targeted mobilization for cervical dysfunction and radiating arm pain.",
    icon: "PersonStanding",
    clinicalData: {
      focus: "Cervicothoracic Mobility & Postural Reset",
      objectives: ["Eliminate radiating pain", "Restore neck rotation", "Headache resolution"],
      protocol: [
        { phase: "Traction", action: "Manual decompression and pain relief." },
        { phase: "Mobilization", action: "Apophyseal glides and scapular positioning." },
        { phase: "Stability", action: "Deep neck flexor endurance training." },
        { phase: "Dynamic", action: "Kinetic chain integration with upper limb." }
      ],
      recoveryWindow: "3–6 Weeks"
    }
  },
  {
    title: "Diabetic Neuropathy Management",
    description: "Specialized physiotherapy protocols to manage nerve pain and improve circulation.",
    icon: "Waves",
    clinicalData: {
      focus: "Peripheral Circulation & Neural Desensitization",
      objectives: ["Reduced neuropathic pain", "Improved protective sensation", "Fall risk reduction"],
      protocol: [
        { phase: "Sensory", action: "Tactile stimulation and desensitization." },
        { phase: "Vascular", action: "Buerger-Allen exercises for circulation." },
        { phase: "Balance", action: "Proprioceptive training for numb feet." },
        { phase: "Care", action: "Self-monitoring education and skin integrity." }
      ],
      recoveryWindow: "Ongoing Management"
    }
  },
  {
    title: "Musculoskeletal Therapy",
    description: "Deep tissue techniques and therapeutic exercise for acute and chronic muscle conditions.",
    icon: "Move",
    clinicalData: {
      focus: "Soft Tissue Release & Length-Tension Balance",
      objectives: ["Myofascial trigger point release", "Restored muscle length", "Injury prophylaxis"],
      protocol: [
        { phase: "Release", action: "Ischemic compression and myofascial release." },
        { phase: "Stretch", action: "Static and PNF stretching techniques." },
        { phase: "Balance", action: "Correction of agonist-antagonist imbalances." },
        { phase: "Load", action: "Eccentric loading for tendon health." }
      ],
      recoveryWindow: "2–6 Weeks"
    }
  },
  {
    title: "Geriatric Physiotherapy",
    description: "Fall prevention and mobility restoration programs designed for older adults in Gudiyatham.",
    icon: "Accessibility",
    clinicalData: {
      focus: "Functional Autonomy & Safety",
      objectives: ["Reduced fall risk", "Bone density preservation", "Pain management"],
      protocol: [
        { phase: "Safety", action: "Environment audit and gait assessment." },
        { phase: "Balance", action: "Otago-based balance and strength training." },
        { phase: "Activity", action: "Walking endurance and sit-to-stand power." },
        { phase: "Social", action: "Community reintegration and confidence." }
      ],
      recoveryWindow: "Long-term Maintenance"
    }
  },
  {
    title: "Pediatric Physiotherapy",
    description: "Developmental delay and postural correction — gentle, play-based rehabilitation for children.",
    icon: "Baby",
    clinicalData: {
      focus: "Neurodevelopmental Milestones",
      objectives: ["Motor milestone achievement", "Postural symmetry", "Play-based engagement"],
      protocol: [
        { phase: "Sensory", action: "Integration of primitive reflexes." },
        { phase: "Motor", action: "Facilitation of rolling, crawling, and standing." },
        { phase: "Tone", action: "Management of spasticity or hypotonia." },
        { phase: "Home", action: "Caregiver education and home play protocols." }
      ],
      recoveryWindow: "Developmental Dependent"
    }
  },
  {
    title: "Shoulder, Knee & Hip Joint Pain",
    description: "Biomechanical assessment and precision treatment for major joint dysfunction.",
    icon: "Target",
    clinicalData: {
      focus: "Joint Arthrokinematics & Functional Stability",
      objectives: ["Pain-free stair climbing", "Improved overhead reach", "Restored squat depth"],
      protocol: [
        { phase: "Scanning", action: "Assessment of kinetic chain dysfunction." },
        { phase: "Manual", action: "Mulligan or Maitland joint mobilizations." },
        { phase: "Isolation", action: "Specific rotator cuff or gluteal strengthening." },
        { phase: "Integration", action: "Multi-joint compound movement patterns." }
      ],
      recoveryWindow: "4–10 Weeks"
    }
  },
  {
    title: "Home Visit Physiotherapy",
    description: "Clinic-quality treatment delivered to your home by specialized therapists (Women for Women | Men for Men available).",
    icon: "Home",
    clinicalData: {
      focus: "In-situ Functional Recovery",
      objectives: ["Clinic-standard care at home", "Gender-specific therapist options", "Home environment optimization", "Caregiver support"],
      protocol: [
        { phase: "Setup", action: "Portable equipment deployment and safety audit." },
        { phase: "Care", action: "Standard clinical protocols adapted for home." },
        { phase: "Mobility", action: "Navigating home obstacles (stairs, washroom)." },
        { phase: "Review", action: "Progress tracking and clinical handover." }
      ],
      recoveryWindow: "Situation Dependent"
    }
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "BavanaD",
    location: "Gudiyatham",
    rating: 5,
    date: "4 days ago",
    review: "Best service and gud explanation about the condition and treatment... Love the treatment 👌👌",
    highlight: "Best explanation about condition & treatment",
    source: "Google Reviews",
    badge: "Recent",
  },
  {
    id: 2,
    name: "Girija",
    location: "Gudiyatham",
    rating: 5,
    date: "4 days ago",
    review: "Gud treatment and service...best results...thank you 👍",
    highlight: "Best results",
    source: "Google Reviews",
    badge: "Recent",
  },
  {
    id: 3,
    name: "Jothi Nathan",
    location: "Gudiyatham",
    rating: 5,
    date: "5 months ago",
    review: "Excellent service recovered within 5 days after treatment 🙏",
    highlight: "Recovered in just 5 days",
    source: "Google Reviews",
    badge: "Verified",
    featured: true,
  },
  {
    id: 4,
    name: "V. Vaideeswaran",
    location: "Gudiyatham",
    rating: 5,
    date: "3 months ago",
    review: "Excellent treatment 👍👏👏",
    highlight: "Excellent treatment",
    source: "Google Reviews",
    badge: "Verified",
  },
  {
    id: 5,
    name: "Kalim",
    location: "Gudiyatham",
    rating: 5,
    date: "3 months ago",
    review: "Good treatment and service thank you",
    highlight: "Good treatment & service",
    source: "Google Reviews",
    badge: "Verified",
  },
  {
    id: 6,
    name: "Parveen",
    location: "Gudiyatham",
    rating: 5,
    date: "3 years ago",
    review: "Good treatment and service 🙏",
    highlight: "Good treatment & service",
    source: "Google Reviews",
    badge: "Verified",
  },
];
