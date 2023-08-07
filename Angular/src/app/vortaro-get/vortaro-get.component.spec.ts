import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortaroGetComponent } from './vortaro-get.component';

describe('VortaroComponent', () => {
  let component: VortaroGetComponent;
  let fixture: ComponentFixture<VortaroGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VortaroGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortaroGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
