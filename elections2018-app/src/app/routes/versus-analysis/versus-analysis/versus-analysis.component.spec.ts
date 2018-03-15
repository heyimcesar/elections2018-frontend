import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusAnalysisComponent } from './versus-analysis.component';

describe('VersusAnalysisComponent', () => {
  let component: VersusAnalysisComponent;
  let fixture: ComponentFixture<VersusAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersusAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
