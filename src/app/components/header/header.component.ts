import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
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
