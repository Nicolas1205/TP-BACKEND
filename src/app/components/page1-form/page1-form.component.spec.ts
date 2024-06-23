import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1FormComponent } from './page1-form.component';

describe('Page1FormComponent', () => {
  let component: Page1FormComponent;
  let fixture: ComponentFixture<Page1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1FormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
