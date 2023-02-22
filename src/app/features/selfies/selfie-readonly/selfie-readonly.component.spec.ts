import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfieReadonlyComponent } from './selfie-readonly.component';

describe('SelfieReadonlyComponent', () => {
  let component: SelfieReadonlyComponent;
  let fixture: ComponentFixture<SelfieReadonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfieReadonlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfieReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
