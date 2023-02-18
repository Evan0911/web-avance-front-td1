import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotItemComponent } from './spot-item.component';

describe('SpotItemComponent', () => {
  let component: SpotItemComponent;
  let fixture: ComponentFixture<SpotItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
