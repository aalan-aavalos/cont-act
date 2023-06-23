import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrihomeComponent } from './prihome.component';

describe('PrihomeComponent', () => {
  let component: PrihomeComponent;
  let fixture: ComponentFixture<PrihomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrihomeComponent]
    });
    fixture = TestBed.createComponent(PrihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
