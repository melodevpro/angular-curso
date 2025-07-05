import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uncomponente } from './uncomponente';

describe('Uncomponente', () => {
  let component: Uncomponente;
  let fixture: ComponentFixture<Uncomponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uncomponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uncomponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
