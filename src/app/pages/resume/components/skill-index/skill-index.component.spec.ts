import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillIndexComponent } from './skill-index.component';

describe('SkillIndexComponent', () => {
  let component: SkillIndexComponent;
  let fixture: ComponentFixture<SkillIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
