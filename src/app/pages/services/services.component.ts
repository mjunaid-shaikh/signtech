import { Component, AfterViewInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

declare const gsap: any;

export interface Service {
  svgIcon: string;
  title: string;
  description: string;
  features: string[];
  idealFor: string;
  category: string;
  categoryLabel: string;
}

export interface CncMaterial {
  svgIcon: string;
  name: string;
  note: string;
}

export interface ProcessStep {
  svgIcon: string;
  title: string;
  desc: string;
}

export interface Material {
  svgIcon: string;
  name: string;
  desc: string;
  spec: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, DecimalPipe],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {

  // ── Category filter ──────────────────────────────────────────────────────────
  activeCategory = 'all';

  categories = [
    { key: 'all', label: 'All Services' },
    { key: 'print', label: 'Print & Flex' },
    { key: 'signage', label: 'Signage' },
    { key: 'fabrication', label: 'Fabrication' },
  ];

  setCategory(key: string): void {
    this.activeCategory = key;
  }

  // ── Hero stats ───────────────────────────────────────────────────────────────
  heroStats = [
    { number: '10000+', label: 'Projects Done' },
    { number: '11+', label: 'Years Experience' },
    { number: '4', label: 'Inhouse Machines' },
  ];

  // ── Main 5 services (CNC is separate callout) ────────────────────────────────
  mainServices: Service[] = [
    {
      category: 'signage',
      categoryLabel: 'Name Signage',
      title: 'Name Plate',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="11" rx="1"/><path d="M3 8h18M8 16v3M16 16v3"/></svg>`,
      description:
        'Custom name plates designed for homes, offices, cabins, shops, and businesses. Available in acrylic, stainless steel, brass, and wooden finishes.',
      features: [
        'Custom sizes and designs',
        'Acrylic, SS, brass, and wooden options',
        'Laser-cut lettering',
        'Indoor and outdoor applications',
        'Premium finishing options',
        'Easy wall mounting'
      ],
      idealFor: 'Homes, offices, cabins, doctors, advocates, and commercial establishments'
    },
    {
      category: 'interior',
      categoryLabel: 'Interior Decoration',
      title: 'Screen Wall',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z"/><path d="m3 16 5-5 4 4 3-3 4 4"/></svg>`,
      description:
        'Decorative screen walls and partition panels manufactured using CNC cutting to enhance interior and exterior spaces.',
      features: [
        'Custom CNC-cut designs',
        'Decorative partition solutions',
        'Available in MDF, ACP, and metal',
        'Modern and traditional patterns',
        'Durable finishes',
        'Indoor and outdoor usage'
      ],
      idealFor: 'Homes, offices, restaurants, hotels, and commercial interiors'
    },
    {
      category: 'cladding',
      categoryLabel: 'Exterior Cladding',
      title: 'ACP Cladding',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1"/><path d="M12 16v4M8 20h8"/><circle cx="7" cy="9" r="1" fill="currentColor"/><circle cx="12" cy="9" r="1" fill="currentColor"/><circle cx="17" cy="9" r="1" fill="currentColor"/></svg>`,
      description:
        'ACP cladding provides a modern and attractive exterior finish for commercial buildings and shop front elevations.',
      features: [
        'Weather-resistant material',
        'Premium building appearance',
        'Available in multiple shades',
        'Long-lasting finish',
        'Easy maintenance',
        'Professional installation'
      ],
      idealFor: 'Shops, showrooms, offices, commercial buildings, and facades'
    },
    {
      category: 'fabrication',
      categoryLabel: 'CNC Fabrication',
      title: 'CNC Cutting',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="14" rx="1"/><path d="M12 17v4M9 21h6"/></svg>`,
      description: 'Precision CNC cutting services for acrylic, MDF, ACP, wood, and metal materials with accurate finishing.',
      features: [
        'High-precision cutting',
        'Complex pattern designs',
        'Smooth finishing',
        'Custom dimensions',
        'Multiple material support',
        'Fast production turnaround'
      ],
      idealFor: 'Interior designers, signage projects, furniture makers, and decorators'
    },
    {
      category: 'fabrication',
      categoryLabel: 'Fabrication',
      title: 'Acrylic Signage',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 7 19 17 12 22 5 17 5 7"/><path d="M12 2v20M5 7l14 0M5 17l14 0"/></svg>`,
      description: 'Precision-cut acrylic letters, nameplates, display boards, and 3D logo signage. Available in 15+ colours and 2mm–10mm thickness — cut in-house on our own acrylic machine.',
      features: [
        '15+ cast acrylic colours in stock',
        '2mm / 2.5mm / 3mm / 4mm / 5mm / 6mm / 8mm / 10mm',
        'Flat-cut, raised & backlit 3D letters',
        'UV printed + painted finishes',
        'Office nameplates to full lobby branding',
      ],
      idealFor: 'Offices, clinics, showrooms, hotels, corporate lobbies',
    },
    {
      category: 'signage',
      categoryLabel: 'LED Signage',
      title: 'Running Design',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
      description: 'LED running displays provide dynamic scrolling text and promotional messages for businesses and public information displays.',
      features: [
        'Scrolling LED messages',
        'Custom text programming',
        'High visibility display',
        'Energy-efficient LEDs',
        'Indoor and outdoor options',
        'Remote content updates'
      ],
      idealFor: 'Shops, pharmacies, hospitals, schools, and commercial establishments'
    },
    {
      category: 'signage',
      categoryLabel: 'Fabric Signage',
      title: 'Fabric Board',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
      description: 'Fabric light boxes deliver premium illuminated branding with vibrant graphics and uniform LED lighting.',
      features: [
        'Backlit fabric graphics',
        'Bright LED illumination',
        'Wrinkle-free appearance',
        'Easy graphic replacement',
        'Lightweight aluminum frame',
        'Modern premium look'
      ],
      idealFor: 'Showrooms, malls, retail stores, exhibitions, and corporate branding'
    },
    {
      category: 'signage',
      categoryLabel: 'LED Signage',
      title: 'Slim Board',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
      description: 'Slim boards are ultra-thin illuminated signboards designed to provide elegant and attractive branding solutions.',
      features: [
        'Slim profile design',
        'LED illumination',
        'Low power consumption',
        'Modern appearance',
        'Lightweight construction',
        'Easy installation'
      ],
      idealFor: 'Retail shops, offices, clinics, salons, and indoor branding'
    },
    {
      category: 'letters',
      categoryLabel: 'Metal Letter Signage',
      title: 'SS Letters',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
      description: 'Stainless steel letters offer premium and durable signage solutions with elegant metallic finishes.',
      features: [
        'Mirror and matte finishes',
        'Rust-resistant material',
        'Available with LED lighting',
        'Premium appearance',
        'Long-lasting durability',
        'Custom fonts and sizes'
      ],
      idealFor: 'Hotels, offices, showrooms, hospitals, and luxury brands'
    },
    {
      category: 'letters',
      categoryLabel: 'Acrylic Letter Signage',
      title: 'Die Letters',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
      description: 'Die-cut letters are precision-cut acrylic or PVC letters used for attractive and professional branding.',
      features: [
        'Custom fonts and designs',
        'Available in acrylic and PVC',
        'Glossy and matte finishes',
        'Lightweight construction',
        'Indoor and outdoor use',
        'Easy installation'
      ],
      idealFor: 'Retail shops, offices, schools, clinics, and commercial signage'
    },
    {
      category: 'signage',
      categoryLabel: 'Glow Sign Board',
      title: 'Clison Board',
      svgIcon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
      description: 'Clison boards are illuminated signboards that provide excellent visibility during both day and night.',
      features: [
        'LED illumination',
        'Weather-resistant construction',
        'Bright night visibility',
        'Custom graphics and branding',
        'Energy-efficient lighting',
        'Durable outdoor performance'
      ],
      idealFor: 'Shops, restaurants, medical stores, showrooms, and commercial businesses'
    },
  ];

  // ── CNC callout materials ────────────────────────────────────────────────────
  cncMaterials: CncMaterial[] = [
    {
      name: 'Sunboard / Foam Board',
      note: 'Up to 8×4 ft sheets',
      svgIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/></svg>`,
    },
    {
      name: 'ACP Sheet',
      note: '4mm standard & composite',
      svgIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18"/></svg>`,
    },
    {
      name: 'Cast Acrylic',
      note: '2mm – 10mm thickness',
      svgIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 8 19 16 12 22 5 16 5 8"/></svg>`,
    },
  ];

  // ── Process steps ────────────────────────────────────────────────────────────
  processSteps: ProcessStep[] = [
    {
      title: 'Brief & Quote',
      desc: 'Share your requirement — size, location, material, deadline. We respond with a quote within 24 hours.',
      svgIcon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    },
    {
      title: 'Design Proof',
      desc: 'Our team prepares a print-ready design or adapts your artwork. You approve before anything goes to print.',
      svgIcon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    },
    {
      title: 'In-House Production',
      desc: 'Printing, cutting, and fabrication happens on-site. No third-party handoffs — we control every step.',
      svgIcon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    },
    {
      title: 'Delivery & Installation',
      desc: 'We deliver and install at your site. Structural mounting, electrical (for LED), and cleanup included.',
      svgIcon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
    },
  ];

  // ── Materials ────────────────────────────────────────────────────────────────
  materials: Material[] = [
    {
      name: 'Commercial Flex',
      desc: 'Star flex and backlit flex with 440gsm weight — not the thin 280gsm material most budget shops use.',
      spec: '440gsm · UV-resistant inks · 5-year outdoor life',
      svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="11" rx="1"/><path d="M3 8h18"/></svg>`,
    },
    {
      name: 'Cast Acrylic',
      desc: 'Branded cast acrylic in 15+ colours. Harder, clearer, and more colour-accurate than extruded acrylic.',
      spec: '2mm – 10mm · 15+ colours · Optical clarity',
      svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 8 19 16 12 22 5 16 5 8"/></svg>`,
    },
    {
      name: 'Aluminium ACP',
      desc: '5052 alloy aluminium composite — corrosion-resistant, flat finish, no warping in Mumbai\'s heat.',
      spec: '4mm · PVDF / Polyester coat · 10-year warranty',
      svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
    },
    {
      name: 'Steel / GI Frames',
      desc: 'Hot-dip galvanised frames for hoardings and standees — rust-proof, structurally rated for wind loads.',
      spec: 'Hot-dip galvanised · Structurally rated · Weld-fabricated',
      svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
    },
  ];

  // ── GSAP ─────────────────────────────────────────────────────────────────────
  ngAfterViewInit(): void {
    if (typeof gsap === 'undefined') return;

    const ST = (window as any).ScrollTrigger;
    if (ST) gsap.registerPlugin(ST);

    // Hero entrance
    gsap.from('.page-headline', { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 });
    gsap.from('.page-subtext', { y: 24, opacity: 0, duration: 0.55, ease: 'power2.out', delay: 0.3 });
    gsap.from('.hsc-item', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.35 });

    if (!ST) return;

    // Filter bar
    gsap.from('.filter-bar', {
      y: 20, opacity: 0, duration: 0.5, ease: 'power2.out',
      scrollTrigger: { trigger: '.filter-bar', start: 'top 88%', once: true }
    });

    // Service cards stagger
    gsap.from('.service-card', {
      y: 44, opacity: 0, duration: 0.6, stagger: 0.09, ease: 'power2.out',
      scrollTrigger: { trigger: '.services-grid', start: 'top 82%', once: true }
    });

    // CNC callout
    gsap.from('.cnc-callout', {
      y: 36, opacity: 0, duration: 0.65, ease: 'power2.out',
      scrollTrigger: { trigger: '.cnc-callout', start: 'top 85%', once: true }
    });

    // Process steps
    gsap.from('.process-step', {
      y: 30, opacity: 0, duration: 0.55, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: '.process-steps', start: 'top 82%', once: true }
    });

    // Generic reveals
    (gsap.utils.toArray('.gsap-reveal') as HTMLElement[]).forEach(el => {
      gsap.from(el, {
        y: 32, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });

    // Material cards
    gsap.from('.material-card', {
      y: 28, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '.materials-grid', start: 'top 83%', once: true }
    });
  }
}