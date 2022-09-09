import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaAngularCliComponent } from './ola-angular-cli.component';

describe('OlaAngularCliComponent', () => {
  let component: OlaAngularCliComponent;
  let fixture: ComponentFixture<OlaAngularCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlaAngularCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlaAngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
