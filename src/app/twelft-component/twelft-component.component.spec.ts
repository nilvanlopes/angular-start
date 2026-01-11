import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelftComponentComponent } from './twelft-component.component';

describe('TwelftComponentComponent', () => {
  let component: TwelftComponentComponent;
  let fixture: ComponentFixture<TwelftComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelftComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwelftComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
