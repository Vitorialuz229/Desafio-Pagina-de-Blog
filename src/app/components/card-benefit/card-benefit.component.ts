import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'card-benefit',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule,
    SlickCarouselModule
  ],
  templateUrl: './card-benefit.component.html',
  styleUrls: ['./card-benefit.component.scss']
})
export class CardBenefitComponent {
  @Input('img-path') imgPath: string = '';
  @Input('card-title') cardTitle: string = '';
  @Input('card-data') cardData: string = '';

  @Input('imgWidth') imgWidth: number = 644;
  @Input('imgHeight') imgHeight: number = 470;

}
