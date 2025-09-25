import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apiairline } from './apiairline';

describe('Apiairline', () => {
  let component: Apiairline;
  let fixture: ComponentFixture<Apiairline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apiairline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apiairline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
