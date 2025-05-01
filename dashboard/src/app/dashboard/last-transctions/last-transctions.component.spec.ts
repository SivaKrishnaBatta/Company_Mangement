import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTransctionsComponent } from './last-transctions.component';

describe('LastTransctionsComponent', () => {
  let component: LastTransctionsComponent;
  let fixture: ComponentFixture<LastTransctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastTransctionsComponent]
    });
    fixture = TestBed.createComponent(LastTransctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
