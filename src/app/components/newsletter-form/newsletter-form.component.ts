import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../service/newsletter.service';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BtnPrimaryComponent
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  form!: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: NewsletterService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.service.sendData(this.form.value.email).subscribe({
        next: () => {
          this.form.reset();
          this.loading = false;
        },
        error: (err) => {
          console.error('Erro ao enviar dados', err);
          this.loading = false;
        }
      });
    }
  }
}
