import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardBenefitComponent } from '../card-benefit/card-benefit.component';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CardBenefitComponent,
    PostListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
