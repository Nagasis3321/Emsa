import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySectorComponent } from './modify-sector.component';

describe('ModifySectorComponent', () => {
  let component: ModifySectorComponent;
  let fixture: ComponentFixture<ModifySectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifySectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifySectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
