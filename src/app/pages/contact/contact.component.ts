import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare const gsap: any;

export interface Review {
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  size: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit, OnDestroy {

  mapEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.owner.mapEmbed);
  }

  // ── Owner / business details — UPDATE THESE ──────────────────────────────────
  owner = {
    name: 'Sayyed Salman',
    title: 'Founder & CEO, SignTech',
    experience: 11,
    phone: '+91 99874 41798',
    email: 'signtech105@gmail.com',
    address: 'Shop 07,Ground floor, MEK industrial Estate, B wing, Mumbai - Mumbai Rd, opposite Baba Ji Pati High School, Ilthan, Mumbra, Thane, Maharashtra 400612',
    hours: 'Mon – Sat: 10:00 AM – 10:00 PM',
    instagram: 'https://instagram.com/thesigntech',
    facebook: 'https://facebook.com/YOUR_PAGE',
    whatsapp: 'https://wa.me/919987441798?text=Hi%2C%20I%20need%20a%20signage%20quote',
    // Google Maps link — right-click your location on maps.google.com → "Share or embed" → copy link
    mapsLink: 'https://maps.app.goo.gl/hJyAWHyWtdpdeXyo6',
    // Google Maps EMBED src — maps.google.com → Share → Embed a map → copy only the src value
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3287389772104!2d73.0168761840905!3d19.18083880239562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfb0bfae7017%3A0xfa1a8e48a30499f5!2sSignTech!5e0!3m2!1sen!2sin!4v1781752231990!5m2!1sen!2sin',
  };
  // ─────────────────────────────────────────────────────────────────────────────

  // SafeResourceUrl for iframe
  // get mapEmbedUrl(): SafeResourceUrl {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.owner.mapEmbed);
  // }

  // ── Service options ──────────────────────────────────────────────────────────
  serviceOptions = [
    'Flex Banner',
    'LED / Backlit Hoarding',
    'Lollipop Standee',
    'Acrylic Signage',
    'ACP Cladding / Fascia',
    'CNC Cutting Only',
    'Other / Not Sure',
  ];

  // ── Form state ───────────────────────────────────────────────────────────────
  formData: FormData = {
    name: '', phone: '', email: '', service: '', size: '', message: ''
  };
  formSubmitted = false;
  isSubmitting = false;

  submitForm(): void {
    if (!this.formData.name || !this.formData.phone || !this.formData.message) return;
    this.isSubmitting = true;
    // Simulate API call — replace with real HttpClient POST to your backend / EmailJS / Formspree
    setTimeout(() => {
      this.isSubmitting = false;
      this.formSubmitted = true;
    }, 1200);
  }

  resetForm(): void {
    this.formSubmitted = false;
    this.formData = { name: '', phone: '', email: '', service: '', size: '', message: '' };
  }

  // ── Reviews ──────────────────────────────────────────────────────────────────
  reviews: Review[] = [
    {
      name: 'Rahul Mehta', location: 'Koregaon Park, Mumbai',
      service: 'Flex Banner', rating: 5,
      text: 'Got 20 banners printed overnight for our grand opening. Print quality was sharp and the edges were perfectly hemmed. Would not go anywhere else.',
    },
    {
      name: 'Priya Sharma', location: 'Baner, Mumbai',
      service: 'LED Hoarding', rating: 5,
      text: 'The hoarding structure is solid — survived two monsoon seasons without a single issue. Night visibility is exactly what we needed for the highway.',
    },
    {
      name: 'Amit Desai', location: 'FC Road, Mumbai',
      service: 'ACP Cladding', rating: 4,
      text: 'Our showroom fascia looks completely premium now. Clean finish, tight installation. The CNC routing on the logo is crisp.',
    },
    {
      name: 'Neha Kulkarni', location: 'Aundh, Mumbai',
      service: 'Acrylic Signage', rating: 5,
      text: 'Gold acrylic 3D letters for our clinic look stunning. Precision-cut with no rough edges — exactly as we imagined from the design proof.',
    },
    {
      name: 'Suresh Patil', location: 'Kharadi, Mumbai',
      service: 'Lollipop Standee', rating: 5,
      text: 'Ordered 10 standees for our real estate project. All delivered on time and structurally rock solid. They\'re still standing after a full monsoon.',
    },
    {
      name: 'Divya Raut', location: 'Hinjewadi, Mumbai',
      service: 'ACP Cladding', rating: 5,
      text: 'Full office reception wall branding done. The team worked over the weekend to meet our opening deadline. That commitment is rare.',
    },
  ];

  // ── GSAP ─────────────────────────────────────────────────────────────────────
  ngAfterViewInit(): void {
    if (typeof gsap === 'undefined') return;
    const ST = (window as any).ScrollTrigger;
    if (ST) gsap.registerPlugin(ST);

    gsap.from('.page-headline', { y: 36, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 });
    gsap.from('.page-subtext', { y: 22, opacity: 0, duration: 0.5, ease: 'power2.out', delay: 0.28 });
    gsap.from('.contact-chip', { y: 20, opacity: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out', delay: 0.35 });

    if (!ST) return;

    // Reviews
    gsap.from('.review-card', {
      y: 36, opacity: 0, duration: 0.55, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '.reviews-grid', start: 'top 82%', once: true }
    });

    // Generic reveals
    (gsap.utils.toArray('.gsap-reveal') as HTMLElement[]).forEach(el => {
      gsap.from(el, {
        y: 30, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }

  ngOnDestroy(): void { }
}