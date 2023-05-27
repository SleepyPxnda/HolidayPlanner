import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDialogComponent } from './load-dialog.component';

describe('LoadDialogComponent', () => {
  let component: LoadDialogComponent;
  let fixture: ComponentFixture<LoadDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadDialogComponent]
    });
    fixture = TestBed.createComponent(LoadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
