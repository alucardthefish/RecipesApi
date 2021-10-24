import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerviewComponent } from './innerview.component';

describe('InnerviewComponent', () => {
  let component: InnerviewComponent;
  let fixture: ComponentFixture<InnerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
