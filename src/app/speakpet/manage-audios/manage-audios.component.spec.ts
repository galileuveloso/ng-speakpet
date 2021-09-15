import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAudiosComponent } from './manage-audios.component';

describe('ManageAudiosComponent', () => {
  let component: ManageAudiosComponent;
  let fixture: ComponentFixture<ManageAudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
