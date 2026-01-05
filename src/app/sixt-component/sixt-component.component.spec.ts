import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtComponentComponent } from './sixt-component.component';

describe('SixtComponentComponent', () => {
  let component: SixtComponentComponent;
  let fixture: ComponentFixture<SixtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixtComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
