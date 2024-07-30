import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardBenefitComponent } from '../card-benefit/card-benefit.component';
import { PostListComponent } from '../post-list/post-list.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { TopicosListComponent } from '../topicos-list/topicos-list.component';
import { NgOptimizedImage } from '@angular/common';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CardBenefitComponent,
    PostListComponent,
    TopicosListComponent,
    NgOptimizedImage,
    NewsletterFormComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
