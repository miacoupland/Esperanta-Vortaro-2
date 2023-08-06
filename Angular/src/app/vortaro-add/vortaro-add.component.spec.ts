import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortaroAddComponent } from './vortaro-add.component';

describe('VortaroAddComponent', () => {
  let component: VortaroAddComponent;
  let fixture: ComponentFixture<VortaroAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VortaroAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortaroAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
