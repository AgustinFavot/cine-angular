import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarActoresComponent } from './editar-actores.component';

describe('EditarActoresComponent', () => {
  let component: EditarActoresComponent;
  let fixture: ComponentFixture<EditarActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarActoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
