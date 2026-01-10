import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleventhComponentComponent } from './eleventh-component.component';

describe('EleventhComponentComponent', () => {
  let component: EleventhComponentComponent;
  let fixture: ComponentFixture<EleventhComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleventhComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleventhComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
