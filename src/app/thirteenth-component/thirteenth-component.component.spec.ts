import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirteenthComponentComponent } from './thirteenth-component.component';

describe('ThirteenthComponentComponent', () => {
  let component: ThirteenthComponentComponent;
  let fixture: ComponentFixture<ThirteenthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirteenthComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirteenthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
