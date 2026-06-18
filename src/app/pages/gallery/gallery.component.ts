import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare const gsap: any;

export interface ClientFeedback {
  rating: number;   // 1–5
  text: string;
  author: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'banner' | 'hoarding' | 'acrylic' | 'acp' | 'standee' | 'other';
  type: 'image' | 'video';
  src?: string;          // real path e.g. 'assets/images/banners/project1.jpg'
  thumb?: string;        // video thumbnail
  placeholder: string;   // SVG shown when no real src — remove once you have photos
  location?: string;
  description?: string;
  feedback?: ClientFeedback;
}

export interface Category {
  key: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {

  // ── Categories ───────────────────────────────────────────────────────────────
  categories: Category[] = [
    { key: 'all', label: 'All', color: '#F59E0B' },
    { key: 'banner', label: 'Banners', color: '#3B82F6' },
    { key: 'hoarding', label: 'Hoardings', color: '#EF4444' },
    { key: 'acrylic', label: 'Acrylic', color: '#8B5CF6' },
    { key: 'acp', label: 'ACP Cladding', color: '#10B981' },
    { key: 'standee', label: 'Standees', color: '#F97316' },
  ];

  activeCategory = 'all';

  setCategory(key: string): void {
    this.activeCategory = key;
    // Re-run stagger animation on filter change
    setTimeout(() => this.animateCards(), 50);
  }

  getCount(key: string): number {
    if (key === 'all') return this.galleryItems.length;
    return this.galleryItems.filter(i => i.category === key).length;
  }

  get filteredItems(): GalleryItem[] {
    if (this.activeCategory === 'all') return this.galleryItems;
    return this.galleryItems.filter(i => i.category === this.activeCategory);
  }

  getActiveLabel(): string {
    return this.categories.find(c => c.key === this.activeCategory)?.label ?? '';
  }

  getCategoryLabel(key: string): string {
    return this.categories.find(c => c.key === key)?.label ?? key;
  }

  getCategoryColor(key: string): string {
    return this.categories.find(c => c.key === key)?.color ?? '#F59E0B';
  }

  // ── Gallery data ─────────────────────────────────────────────────────────────
  // TO ADD REAL PHOTOS: set src: 'assets/images/banners/your-file.jpg'
  // TO ADD REAL VIDEOS: set type:'video', src:'assets/videos/your-file.mp4', thumb:'assets/...'
  // Placeholder SVGs are shown when src is empty — remove placeholder key once src is set.
  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Grand Opening Banner — Koregaon Park',
      category: 'banner', type: 'image',
      src: '/assets/image/banners/central empire.webp',   // → 'assets/images/banners/koregaon-banner.jpg'
      location: 'Koregaon Park, Mumbai',
      description: '20×8 ft backlit flex banner for retail grand opening. Printed on 440gsm star flex.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0F1923"/><rect x="20" y="30" width="360" height="180" rx="3" fill="#1B4FD8" opacity=".25"/><rect x="20" y="30" width="360" height="40" fill="#1B4FD8" opacity=".5"/><text x="200" y="57" text-anchor="middle" fill="#F59E0B" font-size="16" font-weight="bold" font-family="sans-serif">GRAND OPENING</text><text x="200" y="148" text-anchor="middle" fill="#fff" font-size="22" font-weight="bold" font-family="sans-serif">BANNER</text><circle cx="22" cy="32" r="5" fill="#666"/><circle cx="378" cy="32" r="5" fill="#666"/><circle cx="22" cy="208" r="5" fill="#666"/><circle cx="378" cy="208" r="5" fill="#666"/></svg>`,
      feedback: { rating: 5, text: 'Perfect print quality, delivered same day!', author: 'Rahul M., Koregaon Park' },
    },
    {
      id: 2,
      title: 'Highway Hoarding — Hadapsar Bypass',
      category: 'hoarding', type: 'image',
      src: '/assets/image/banners/minara resturant.webp',
      location: 'Hadapsar Bypass, Mumbai',
      description: '40×15 ft steel-frame LED hoarding. Double-sided, LED module illuminated.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0a0a0a"/><rect x="15" y="20" width="370" height="175" rx="3" fill="#0F3460" stroke="#F59E0B" stroke-width="2"/><text x="200" y="118" text-anchor="middle" fill="#F59E0B" font-size="28" font-weight="bold" font-family="sans-serif">HOARDING</text><text x="200" y="148" text-anchor="middle" fill="#fff" font-size="11" font-family="sans-serif">LED BACKLIT · 40×15 FT</text><line x1="185" y1="195" x2="185" y2="270" stroke="#444" stroke-width="6"/><line x1="215" y1="195" x2="215" y2="270" stroke="#444" stroke-width="6"/><rect x="150" y="268" width="100" height="8" rx="3" fill="#333"/></svg>`,
      feedback: { rating: 5, text: 'Excellent work, structure is rock solid.', author: 'Priya S., Real Estate' },
    },
    {
      id: 3,
      title: 'Acrylic 3D Letters — Tech Startup Lobby',
      category: 'acrylic', type: 'image',
      src: '/assets/image/banners/mumbra chai wala.webp',
      location: 'Baner, Mumbai',
      description: '5mm gold-mirror acrylic raised letters, wall-mounted with standoff pins.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#111"/><rect x="30" y="80" width="340" height="140" rx="4" fill="#1a1a1a" stroke="#2a2a2a"/><text x="200" y="162" text-anchor="middle" fill="#D4AF37" font-size="36" font-weight="bold" font-family="sans-serif" filter="url(#gs)">ACRYLIC</text><defs><filter id="gs"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>`,
      feedback: { rating: 5, text: 'Gold acrylic looks stunning in our lobby!', author: 'Neha K., Baner' },
    },
    {
      id: 4,
      title: 'ACP Shop Fascia — Clothing Brand',
      category: 'acp', type: 'image',
      src: '/assets/image/banners/tthe white teak company.webp',
      location: 'FC Road, Mumbai',
      description: '30 ft wide ACP fascia with routed letters and internal LED lighting.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0D0D0D"/><rect x="0" y="40" width="400" height="100" fill="#1e293b" stroke="#334155"/><rect x="0" y="40" width="400" height="22" fill="#0F3460"/><text x="200" y="57" text-anchor="middle" fill="#fff" font-size="11" font-family="sans-serif" letter-spacing="4">BRAND NAME · ACP FASCIA</text><text x="200" y="100" text-anchor="middle" fill="#F59E0B" font-size="20" font-weight="bold" font-family="sans-serif">SHOWROOM</text><rect x="10" y="140" width="180" height="145" fill="#1e293b" stroke="#334155"/><rect x="210" y="140" width="180" height="145" fill="#1e293b" stroke="#334155"/></svg>`,
      feedback: { rating: 4, text: 'Clean finish, very professional look.', author: 'Amit D., FC Road' },
    },
    {
      id: 5,
      title: 'Flex Banner — Political Campaign',
      category: 'banner', type: 'image',
      src: '/assets/image/banners/nice world.webp',
      location: 'Hadapsar, Mumbai',
      description: '10×5 ft outdoor flex with UV-resistant print. 100 units delivered in 12 hours.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0F1923"/><rect x="20" y="25" width="360" height="200" rx="2" fill="#1a3a1a"/><rect x="20" y="25" width="360" height="50" fill="#166534"/><text x="200" y="57" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold" font-family="sans-serif" letter-spacing="2">CAMPAIGN BANNER</text><text x="200" y="148" text-anchor="middle" fill="#fff" font-size="18" font-family="sans-serif">10×5 FT · UV PRINT</text><circle cx="22" cy="27" r="5" fill="#555"/><circle cx="378" cy="27" r="5" fill="#555"/><circle cx="22" cy="223" r="5" fill="#555"/><circle cx="378" cy="223" r="5" fill="#555"/></svg>`,
    },
    {
      id: 6,
      title: 'Lollipop Standee — Real Estate Project',
      category: 'standee', type: 'image',
      src: '/assets/image/banners/xn zero.webp',
      location: 'Kharadi, Mumbai',
      description: '4×6 ft double-sided standee, GI pipe frame, backlit flex face.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0a0a0a"/><rect x="130" y="20" width="140" height="185" rx="3" fill="#0F3460" stroke="#1B4FD8"/><text x="200" y="100" text-anchor="middle" fill="#F59E0B" font-size="16" font-weight="bold" font-family="sans-serif">STANDEE</text><text x="200" y="128" text-anchor="middle" fill="#fff" font-size="10" font-family="sans-serif">4×6 FT</text><text x="200" y="148" text-anchor="middle" fill="#aaa" font-size="9" font-family="sans-serif">DOUBLE SIDED</text><line x1="200" y1="205" x2="200" y2="280" stroke="#444" stroke-width="8"/><rect x="160" y="278" width="80" height="10" rx="4" fill="#333"/></svg>`,
      feedback: { rating: 5, text: 'Very sturdy, survived monsoon season!', author: 'Suresh P., Kharadi' },
    },
    {
      id: 7,
      title: 'CNC-Cut Acrylic Letters — Clinic',
      category: 'acrylic', type: 'image',
      src: '/assets/image/banners/ilovefakeershahbaba.webp',
      location: 'Aundh, Mumbai',
      description: '3mm white acrylic CNC-cut nameplate with doctor name. Clean, professional finish.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#111"/><rect x="40" y="90" width="320" height="120" rx="4" fill="#f8f8f8" opacity=".08" stroke="#fff" stroke-opacity=".12"/><text x="200" y="155" text-anchor="middle" fill="#fff" font-size="20" font-weight="bold" font-family="sans-serif">DR. NAME</text><text x="200" y="180" text-anchor="middle" fill="#aaa" font-size="10" font-family="sans-serif" letter-spacing="3">M.B.B.S · SPECIALIST</text></svg>`,
    },
    {
      id: 8,
      title: 'Rooftop Hoarding — Restaurant Chain',
      category: 'hoarding', type: 'image',
      src: '/assets/image/banners/lovechai.webp',
      location: 'MG Road, Mumbai',
      description: '24×10 ft rooftop hoarding, aluminium frame, backlit flex, night visibility.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#050510"/><rect x="10" y="30" width="380" height="155" rx="3" fill="#1a0533" stroke="#7C3AED" stroke-width="1.5"/><rect x="10" y="30" width="380" height="7" fill="#7C3AED"/><rect x="10" y="178" width="380" height="7" fill="#7C3AED"/><text x="200" y="118" text-anchor="middle" fill="#fff" font-size="24" font-weight="bold" font-family="sans-serif">ROOFTOP</text><text x="200" y="148" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="sans-serif" letter-spacing="4">24×10 FT · BACKLIT</text></svg>`,
      feedback: { rating: 5, text: 'Visible from 500m. Exactly what we needed.', author: 'Ravi T., MG Road' },
    },
    {
      id: 9,
      title: 'Installation Video — LED Hoarding',
      category: 'hoarding', type: 'video',
      src: '/assets/videos/MASTER CHOICE STUDIO.mp4',    // → 'assets/videos/hoarding-install.mp4'
      thumb: '',  // → 'assets/images/thumbs/install-thumb.jpg'
      location: 'Viman Nagar, Mumbai',
      description: 'Time-lapse of full steel frame + LED module installation. 2-day job.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0a0a0a"/><circle cx="200" cy="140" r="50" fill="#1a1a1a" stroke="#F59E0B" stroke-width="2"/><polygon points="190 115 230 140 190 165" fill="#F59E0B"/><text x="200" y="220" text-anchor="middle" fill="#aaa" font-size="11" font-family="sans-serif" letter-spacing="2">INSTALLATION VIDEO</text></svg>`,
    },
    {
      id: 10,
      title: 'ACP Wall Branding — Corporate Office',
      category: 'acp', type: 'image',
      src: '/assets/image/banners/mandir.webp',
      location: 'Hinjewadi, Mumbai',
      description: 'Full reception wall ACP branding — logo, tagline, and brand colours.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0D0D0D"/><rect x="0" y="0" width="400" height="300" fill="#0f172a"/><rect x="20" y="20" width="170" height="260" rx="2" fill="#1e293b" stroke="#334155"/><rect x="210" y="20" width="170" height="260" rx="2" fill="#1e293b" stroke="#334155"/><text x="105" y="155" text-anchor="middle" fill="#10B981" font-size="13" font-weight="bold" font-family="sans-serif">CORP</text><text x="295" y="155" text-anchor="middle" fill="#10B981" font-size="13" font-weight="bold" font-family="sans-serif">ACP</text></svg>`,
      feedback: { rating: 5, text: 'Our office looks completely transformed.', author: 'Divya R., Hinjewadi' },
    },
    {
      id: 11,
      title: 'Event Flex Banners — Tech Expo',
      category: 'banner', type: 'image',
      src: '/assets/image/banners/salaam air.webp',
      location: 'Balewadi, Mumbai',
      description: 'Set of 12 banners in 3 sizes. All printed and eyeleted within 6 hours.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0F1923"/><rect x="10" y="20" width="115" height="260" rx="2" fill="#1e3a5f" stroke="#3B82F6" stroke-opacity=".5"/><rect x="142" y="20" width="115" height="260" rx="2" fill="#1e3a5f" stroke="#3B82F6" stroke-opacity=".5"/><rect x="274" y="20" width="115" height="260" rx="2" fill="#1e3a5f" stroke="#3B82F6" stroke-opacity=".5"/><text x="67" y="155" text-anchor="middle" fill="#3B82F6" font-size="11" font-weight="bold" font-family="sans-serif">EXPO</text><text x="199" y="155" text-anchor="middle" fill="#3B82F6" font-size="11" font-weight="bold" font-family="sans-serif">2024</text><text x="331" y="155" text-anchor="middle" fill="#3B82F6" font-size="11" font-weight="bold" font-family="sans-serif">TECH</text></svg>`,
    },
    {
      id: 12,
      title: 'CNC Sunboard Display — Pharmacy',
      category: 'acrylic', type: 'image',
      src: '/assets/image/banners/7heaven.webp',
      location: 'Katraj, Mumbai',
      description: 'CNC-cut Sunboard display panel with 5mm depth letters. Quick turnaround for opening.',
      placeholder: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0a0a12"/><rect x="50" y="60" width="300" height="180" rx="4" fill="#1a1a2e" stroke="#8B5CF6" stroke-width="1.5"/><text x="200" y="158" text-anchor="middle" fill="#a78bfa" font-size="22" font-weight="bold" font-family="sans-serif">PHARMACY</text><text x="200" y="185" text-anchor="middle" fill="#666" font-size="9" font-family="sans-serif" letter-spacing="3">SUNBOARD · CNC CUT</text></svg>`,
    },
  ];

  // ── Lightbox ─────────────────────────────────────────────────────────────────
  lightboxOpen = false;
  activeLightboxIndex = 0;

  get activeLightboxItem(): GalleryItem | null {
    return this.filteredItems[this.activeLightboxIndex] ?? null;
  }

  openLightbox(index: number): void {
    this.activeLightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  nextItem(): void {
    if (this.activeLightboxIndex < this.filteredItems.length - 1) {
      this.activeLightboxIndex++;
    }
  }

  prevItem(): void {
    if (this.activeLightboxIndex > 0) {
      this.activeLightboxIndex--;
    }
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowRight') this.nextItem();
    if (e.key === 'ArrowLeft') this.prevItem();
  }

  // ── GSAP ─────────────────────────────────────────────────────────────────────
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (typeof gsap === 'undefined') return;
    const ST = (window as any).ScrollTrigger;
    if (ST) gsap.registerPlugin(ST);

    gsap.from('.page-headline', { y: 36, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 });
    gsap.from('.page-subtext', { y: 22, opacity: 0, duration: 0.5, ease: 'power2.out', delay: 0.3 });

    this.animateCards();

    if (ST) {
      gsap.from('.gallery-cta', {
        y: 28, opacity: 0, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: '.gallery-cta', start: 'top 88%', once: true }
      });
    }
  }

  animateCards(): void {
    if (typeof gsap === 'undefined') return;
    gsap.from('.gallery-card', {
      y: 36, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out',
      clearProps: 'all'
    });
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}