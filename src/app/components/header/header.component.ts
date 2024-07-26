import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const toggleButton = document.querySelector('.navbar-toggler');
      const searchContainer = document.querySelector('.search-container');
      const navbarBrand = document.querySelector('.navbar-brand');

      if (toggleButton && searchContainer && navbarBrand) {
        toggleButton.addEventListener('click', () => {
          searchContainer.classList.toggle('show');
          navbarBrand.classList.toggle('hide');
        });
      }
    }
  }
}
