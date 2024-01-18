import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoInfoComponent } from './reclamo-info.component';

describe('ReclamoInfoComponent', () => {
  let component: ReclamoInfoComponent;
  let fixture: ComponentFixture<ReclamoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamoInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
