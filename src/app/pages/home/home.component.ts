import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

declare const gsap: any;

export interface Stat { number: string; label: string; }
export interface ServicePreview { icon: string; title: string; description: string; image: string; }
export interface Machine { svgIcon: string; name: string; desc: string; }
export interface AcrylicSwatch { name: string; hex: string; }
export interface GalleryTeaser { label: string; type: string; image: string; thumb?: string; alt: string; }
export interface WhyUs { svgIcon: string; title: string; body: string; }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  foundedYear = 2015;
  get yearsActive(): number { return new Date().getFullYear() - this.foundedYear; }

  stats: Stat[] = [
    { number: '10,000+', label: 'Projects Delivered' },
    { number: `${new Date().getFullYear() - 2015}+`, label: 'Years in Business' },
    { number: '4', label: 'In-House Machines' },
    { number: '100%', label: 'In-House Fabrication' },
  ];

  highlights = [
    { text: 'CNC Sunboard & ACP Cutting' },
    { text: 'Acrylic Cutting Machine' },
    { text: 'Design to Installation' },
    { text: 'Custom Sizes & Formats' },
    { text: 'No Outsourcing' },
    { text: '24-hr Quote Response' },
  ];

  servicesPreview: ServicePreview[] = [
    {
      icon: 'lollipop', title: 'Lollipop Standees',
      image: `/assets/image/banners/lollypop.png`,
      description: 'Freestanding outdoor standees — aluminium frame, flex face, weather-sealed and built to last years.'
    },
    {
      icon: 'acrylic', title: 'Acrylic Signage',
      image: `/assets/image/banners/mumbra chai wala.webp`,
      description: 'Precision-cut acrylic letters, boards and displays in any colour — 2mm to 10mm thickness.'
    },
    {
      icon: 'acp', title: 'ACP Cladding',
      image: `/assets/image/banners/mandir.webp`,
      description: 'Aluminium Composite Panel fascia boards and wall branding for showrooms and corporate offices.'
    },
    {
      icon: 'cnc', title: 'CNC Cutting Only',
      image: `/assets/image/banners/cnc_cutting.jpg`,
      description: 'Bring your own Sunboard, ACP or Acrylic — we cut it with CNC precision. No print order needed.'
    },
  ];

  // ── Trusted brands ────────────────────────────────────────────────────────────
  // logo: optional image path e.g. '/assets/image/brands/client-logo.png'
  // name: shown as text if no logo, used as alt text if logo present
  brandsRow1: { name: string; logo?: string }[] = [
    { name: 'Airtel', logo: '/assets/image/brands logos/airtel.png' },
    { name: 'Philips', logo: '/assets/image/brands logos/Philips.jpeg' },
    { name: 'SBI', logo: '/assets/image/brands logos/sbi.png' },
    { name: 'OYO', logo: '/assets/image/brands logos/oyo.png' },
    { name: 'Uber', logo: '/assets/image/brands logos/uber2.jpg' },
    { name: 'JCB', logo: '/assets/image/brands logos/jcb.png' },
    { name: 'L&T', logo: '/assets/image/brands logos/l&t.png' },
    { name: 'Paytm', logo: '/assets/image/brands logos/Paytm.png' },
    { name: 'Okaya', logo: '/assets/image/brands logos/okaya.png' },
    { name: 'Tesa', logo: '/assets/image/brands logos/tesa.jpg' },
  ];

  brandsRow2: { name: string; logo?: string }[] = [
    { name: 'Nikon', logo: '/assets/image/brands logos/Nikon.png' },
    { name: 'CEAT', logo: '/assets/image/brands logos/ceat.png' },
    { name: 'Maruti Suzuki', logo: '/assets/image/brands logos/Suzuki.png' },
    { name: 'Jeep', logo: '/assets/image/brands logos/jeep.png' },
    { name: 'Vivo', logo: '/assets/image/brands logos/vivo.png' },
    { name: 'Makita', logo: '/assets/image/brands logos/makita.png' },
    { name: '7th Heaven', logo: '/assets/image/brands logos/7th heaven.jpg' },
    { name: 'DBS', logo: '/assets/image/brands logos/DBS.png' },
    { name: 'Tea Post', logo: '/assets/image/brands logos/teapost.png' },
    { name: 'Motorola', logo: '/assets/image/brands logos/moto.svg' },
  ];

  get brandsRow1Doubled() { return [...this.brandsRow1, ...this.brandsRow1]; }
  get brandsRow2Doubled() { return [...this.brandsRow2, ...this.brandsRow2]; }

  brandsPaused = false;
  pauseBrands() { this.brandsPaused = true; }
  resumeBrands() { this.brandsPaused = false; }

  machines: Machine[] = [
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v5M9.5 14.5l2.5-2.5 2.5 2.5"/></svg>`,
      name: 'CNC Sunboard Cutter',
      desc: 'Router-precision cutting for Sunboard and foam boards up to 8×4 ft. Clean edges, no post-processing.'
    },
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>`,
      name: 'ACP Cutting Machine',
      desc: 'Clean-edge cuts on Aluminium Composite Panels — no burrs, no warping, no rework required.'
    },
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 7 19 17 12 22 5 17 5 7"/><path d="M12 7v10M7.5 9.5l9 0"/></svg>`,
      name: 'Acrylic Cutting Machine',
      desc: 'Laser-sharp cuts through cast acrylic from 2mm to 10mm — intricate shapes, bevelled edges possible.'
    },
  ];

  acrylicSwatches: AcrylicSwatch[] = [
    { name: 'Crystal Clear', hex: '#C8ECF5' },
    { name: 'Gloss White', hex: '#F0F0F0' },
    { name: 'Jet Black', hex: '#111111' },
    { name: 'Royal Blue', hex: '#1B4FD8' },
    { name: 'Signal Red', hex: '#DC2626' },
    { name: 'Lime Green', hex: '#16A34A' },
    { name: 'Sunshine Yellow', hex: '#F59E0B' },
    { name: 'Hot Pink', hex: '#EC4899' },
    { name: 'Deep Orange', hex: '#EA580C' },
    { name: 'Violet', hex: '#7C3AED' },
    { name: 'Teal', hex: '#0D9488' },
    { name: 'Peach', hex: '#FDBA74' },
    { name: 'Gold Mirror', hex: '#D4AF37' },
    { name: 'Silver Mirror', hex: '#C0C0C0' },
    { name: 'Bronze', hex: '#8B6914' },
    { name: 'Bluish Cyan', hex: '#59A9D7' },
    { name: 'Snow White', hex: '#FFFFFF' },
    { name: 'Ivory', hex: '#FFFFF0' },
    { name: 'Cream', hex: '#FFFDD0' },
    { name: 'Beige', hex: '#F5F5DC' },
    { name: 'Sand', hex: '#C2B280' },
    { name: 'Khaki', hex: '#BDB76B' },
    { name: 'Champagne', hex: '#F7E7CE' },
    { name: 'Pearl White', hex: '#EAE0C8' },
    { name: 'Smoke Gray', hex: '#708090' },
    { name: 'Charcoal', hex: '#36454F' },
    { name: 'Graphite', hex: '#41424C' },
    { name: 'Ash Gray', hex: '#B2BEB5' },
    { name: 'Steel Gray', hex: '#71797E' },
    { name: 'Light Gray', hex: '#D3D3D3' },
    { name: 'Dark Gray', hex: '#4F4F4F' },
    { name: 'Navy Blue', hex: '#000080' },
    { name: 'Sky Blue', hex: '#87CEEB' },
    { name: 'Baby Blue', hex: '#89CFF0' },
    { name: 'Ocean Blue', hex: '#0077BE' },
    { name: 'Cobalt Blue', hex: '#0047AB' },
    { name: 'Sapphire Blue', hex: '#0F52BA' },
    { name: 'Midnight Blue', hex: '#191970' },
    { name: 'Turquoise', hex: '#40E0D0' },
    { name: 'Aqua', hex: '#00FFFF' },
    { name: 'Mint Green', hex: '#98FB98' },
    { name: 'Forest Green', hex: '#228B22' },
    { name: 'Emerald Green', hex: '#50C878' },
    { name: 'Olive Green', hex: '#556B2F' },
    { name: 'Neon Green', hex: '#39FF14' },
    { name: 'Bottle Green', hex: '#006A4E' },
    { name: 'Sea Green', hex: '#2E8B57' },
    { name: 'Apple Green', hex: '#8DB600' },
    { name: 'Pista Green', hex: '#93C572' },
    { name: 'Dark Green', hex: '#013220' },
    { name: 'Maroon', hex: '#800000' },
    { name: 'Crimson', hex: '#DC143C' },
    { name: 'Cherry Red', hex: '#D2042D' },
    { name: 'Ruby Red', hex: '#9B111E' },
    { name: 'Scarlet', hex: '#FF2400' },
    { name: 'Burgundy', hex: '#800020' },
    { name: 'Coral Red', hex: '#FF4040' },
    { name: 'Tomato Red', hex: '#FF6347' },
    { name: 'Candy Pink', hex: '#FF69B4' },
    { name: 'Rose Pink', hex: '#FF66CC' },
    { name: 'Baby Pink', hex: '#F4C2C2' },
    { name: 'Blush Pink', hex: '#DE5D83' },
    { name: 'Magenta', hex: '#FF00FF' },
    { name: 'Fuchsia', hex: '#C154C1' },
    { name: 'Lavender', hex: '#E6E6FA' },
    { name: 'Lilac', hex: '#C8A2C8' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Deep Purple', hex: '#673AB7' },
    { name: 'Indigo', hex: '#4B0082' },
    { name: 'Plum', hex: '#8E4585' },
    { name: 'Orchid', hex: '#DA70D6' },
    { name: 'Amber', hex: '#FFBF00' },
    { name: 'Mustard Yellow', hex: '#E1AD01' },
    { name: 'Canary Yellow', hex: '#FFEF00' },
    { name: 'Lemon Yellow', hex: '#FFF44F' },
    { name: 'Golden Yellow', hex: '#FFDF00' },
    { name: 'Saffron', hex: '#F4C430' },
    { name: 'Honey', hex: '#FFC30B' },
    { name: 'Tangerine', hex: '#F28500' },
    { name: 'Pumpkin Orange', hex: '#FF7518' },
    { name: 'Burnt Orange', hex: '#CC5500' },
    { name: 'Coral Orange', hex: '#FF7F50' },
    { name: 'Apricot', hex: '#FBCEB1' },
    { name: 'Copper', hex: '#B87333' },
    { name: 'Rose Gold', hex: '#B76E79' },
    { name: 'Metallic Gold', hex: '#D4AF37' },
    { name: 'Metallic Silver', hex: '#C0C0C0' },
    { name: 'Metallic Bronze', hex: '#CD7F32' },
    { name: 'Chocolate Brown', hex: '#7B3F00' },
    { name: 'Coffee Brown', hex: '#6F4E37' },
    { name: 'Walnut Brown', hex: '#5C4033' },
    { name: 'Mocha', hex: '#967969' },
    { name: 'Caramel', hex: '#C68E17' },
    { name: 'Tan', hex: '#D2B48C' },
    { name: 'Transparent Blue', hex: '#80BFFF' },
    { name: 'Transparent Red', hex: '#FF7F7F' },
    { name: 'Transparent Green', hex: '#90EE90' },
    { name: 'Transparent Yellow', hex: '#FFFACD' },
    { name: 'Transparent Smoke', hex: '#A9A9A9' }
  ];

  activeSwatch: AcrylicSwatch | null = null;
  thicknesses: number[] = [2, 2.5, 3, 4, 5, 6, 8, 10];
  selectedThickness: number | null = null;

  getThicknessNote(t: number): string {
    const notes: Record<number, string> = {
      2: 'Ideal for nameplates, small letters and lightweight indoor display.',
      2.5: 'Popular for signboards and indoor display panels.',
      3: 'Most common — great balance of rigidity and weight for most signs.',
      4: 'For medium-format letters and wall-mounted displays.',
      5: 'Heavy-duty indoor signs, standees and thick letter fabrication.',
      6: 'Structural panels, large 3D letters and premium displays.',
      8: 'Industrial-grade — used for large backlit sign boxes.',
      10: 'Maximum thickness — for bespoke furniture-grade sign elements.',
    };
    return notes[t] ?? 'Available on request.';
  }

  galleryTeaser: GalleryTeaser[] = [
    { label: 'Led Sign board — Restaurant', type: 'Sign Board', image: `/assets/image/banners/nice world.webp`, alt: 'Outdoor Hoarding' },
    { label: 'Acrylic 3D Letters — Showroom', type: 'Acrylic Signage', image: `/assets/image/banners/nice world.webp`, alt: 'Acrylic Signage' },
    { label: 'ACP Shop Fascia — Retail', type: 'ACP Cladding', image: `/assets/image/banners/nice world.webp`, alt: 'ACP Cladding' },
    { label: 'Fabric Board - Outlet', type: 'Fabric Board', image: `/assets/image/banners/nice world.webp`, alt: 'Fabric Board' },
  ];

  whyUs: WhyUs[] = [
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      title: 'Full In-House Production',
      body: 'Design, cutting, fabrication and installation — all done by us. No outsourcing means tighter quality control at every step.'
    },
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      title: 'Fast Turnaround',
      body: 'Our in-house machines skip the outsourcing queue. Most orders are cut and delivered within 7 days.'
    },
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      title: 'CNC Precision',
      body: 'Four dedicated machines — CNC Sunboard, ACP cutter, and Acrylic cutter — delivering tolerances that hand-cutting can\'t match.'
    },
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Durable Materials',
      body: 'We only use commercial-grade flex, UV-resistant inks, 5052 aluminium ACP, and branded cast acrylic — not budget imports.'
    },
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      title: 'Competitive Pricing',
      body: 'No middleman markup. You pay for materials and craftsmanship — not someone else\'s outsourcing cost added to your bill.'
    },
    {
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: '10+ Years Experience',
      body: 'Over a decade of signage in PAN India — retail, hospitality, corporate, events. We\'ve seen every project type and know what lasts.'
    },
  ];

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (typeof gsap === 'undefined') return;

    const ScrollTrigger = (window as any).ScrollTrigger;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 0.1 });
    tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
      .from('.hero-headline', { y: 40, opacity: 0, duration: 0.65, ease: 'power3.out' }, '-=0.2')
      .from('.hero-subtext', { y: 24, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from('.hero-actions', { y: 20, opacity: 0, duration: 0.45, ease: 'power2.out' }, '-=0.25')
      .from('.hero-trust', { y: 16, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
      .from('.hero-sign-mockup', { x: 40, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');

    gsap.from('.stat-item', {
      y: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '.hero-stats-bar', start: 'top 90%', once: true }
    });

    if (ScrollTrigger) {
      (gsap.utils.toArray('.gsap-reveal') as HTMLElement[]).forEach((el) => {
        gsap.from(el, {
          y: 36, opacity: 0, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        });
      });

      document.querySelectorAll('.services-grid, .gallery-teaser-grid').forEach((grid) => {
        gsap.from(grid.querySelectorAll('.gsap-card'), {
          y: 44, opacity: 0, duration: 0.55, stagger: 0.09, ease: 'power2.out',
          scrollTrigger: { trigger: grid, start: 'top 82%', once: true }
        });
      });

      gsap.from('.machine-card', {
        x: 30, opacity: 0, duration: 0.55, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.machines-grid', start: 'top 82%', once: true }
      });

      gsap.from('.why-card', {
        y: 30, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.why-grid', start: 'top 82%', once: true }
      });
    }
  }

  ngOnDestroy(): void { }
}