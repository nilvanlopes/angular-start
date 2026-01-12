import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenthComponentComponent } from './fourteenth-component.component';

describe('FourteenthComponentComponent', () => {
  let component: FourteenthComponentComponent;
  let fixture: ComponentFixture<FourteenthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourteenthComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourteenthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
