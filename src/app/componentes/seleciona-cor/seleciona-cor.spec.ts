import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaCor } from './seleciona-cor';

describe('SelecionaCor', () => {
  let component: SelecionaCor;
  let fixture: ComponentFixture<SelecionaCor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionaCor],
    }).compileComponents();

    fixture = TestBed.createComponent(SelecionaCor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
