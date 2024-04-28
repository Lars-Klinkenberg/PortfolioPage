import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIndicatorComponent } from './page-indicator.component';

describe('PageIndicatorComponent', () => {
  let component: PageIndicatorComponent;
  let fixture: ComponentFixture<PageIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
