import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutterviewComponent } from './outterview.component';

describe('OutterviewComponent', () => {
  let component: OutterviewComponent;
  let fixture: ComponentFixture<OutterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
