import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  // ── Business Info — update these ────────────────────────────────────────────
  phone = '+91 99874 41798';
  email = 'signtech105@gmail.com';

  socials = {
    instagram: 'https://instagram.com/thesigntech',
    facebook: 'https://facebook.com/YOUR_PAGE',
    whatsapp: 'https://wa.me/919987441798?text=Hi%2C%20I%20need%20a%20signage%20quote',
  };
  // ────────────────────────────────────────────────────────────────────────────

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992 && this.menuOpen) {
      this.closeMenu();
    }
  }

  // Close menu on Escape key
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen) this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    // Ensure scroll lock is released on destroy
    document.body.style.overflow = '';
  }
}