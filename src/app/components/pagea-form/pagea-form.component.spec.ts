import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaFormComponent } from './pagea-form.component';

describe('PageaFormComponent', () => {
  let component: PageaFormComponent;
  let fixture: ComponentFixture<PageaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
