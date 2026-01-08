import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthComponentComponent } from './ninth-component.component';

describe('NinthComponentComponent', () => {
  let component: NinthComponentComponent;
  let fixture: ComponentFixture<NinthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinthComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
