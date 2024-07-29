import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicosListComponent } from './topicos-list.component';

describe('TopicosListComponent', () => {
  let component: TopicosListComponent;
  let fixture: ComponentFixture<TopicosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
