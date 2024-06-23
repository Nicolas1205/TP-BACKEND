import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaComponent } from './pagea.component';

describe('PageaComponent', () => {
  let component: PageaComponent;
  let fixture: ComponentFixture<PageaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
