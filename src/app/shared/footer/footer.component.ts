import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // ── Business Info — update these ────────────────────────────────────────────
  phone = '+91 99874 41798';
  email = 'signtech105@gmail.com';
  address = 'Mumbra-Thane, Mumbai — 400612, Maharashtra';
  workingHours = 'Mon – Sat: 10:00 AM – 10:00 PM';
  foundedYear = 2015;

  socials = {
    instagram: 'https://instagram.com/thesigntech',
    facebook: 'https://facebook.com/YOUR_PAGE',
    whatsapp: 'https://wa.me/919987441798?text=Hi%2C%20I%20need%20a%20signage%20quote',
  };
  // ────────────────────────────────────────────────────────────────────────────

  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  serviceLinks = [
    'Name Plate',
    'Screen Wall',
    'Running Design',
    'Fabric Board',
    'Slim Board',
    'Sunboard',
    'Korean Sheet',
    'SS Letters',
    'LED Sign boards',
    'Lollipop Standees',
    'Acrylic Signage',
    'ACP Cladding',
    'CNC Cutting Only',
  ];
}