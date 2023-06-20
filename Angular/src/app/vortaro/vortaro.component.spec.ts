import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortaroComponent } from './vortaro.component';

describe('VortaroComponent', () => {
  let component: VortaroComponent;
  let fixture: ComponentFixture<VortaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VortaroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
