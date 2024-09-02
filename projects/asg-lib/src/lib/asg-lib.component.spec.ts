import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgLibComponent } from './asg-lib.component';

describe('AsgLibComponent', () => {
  let component: AsgLibComponent;
  let fixture: ComponentFixture<AsgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsgLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
