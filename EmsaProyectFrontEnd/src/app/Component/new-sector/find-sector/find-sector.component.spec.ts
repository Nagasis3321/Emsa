import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSectorComponent } from './find-sector.component';

describe('FindSectorComponent', () => {
  let component: FindSectorComponent;
  let fixture: ComponentFixture<FindSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindSectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
