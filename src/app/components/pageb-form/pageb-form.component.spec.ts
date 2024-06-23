import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebFormComponent } from './pageb-form.component';

describe('PagebFormComponent', () => {
  let component: PagebFormComponent;
  let fixture: ComponentFixture<PagebFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagebFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagebFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
