import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidasComponent } from './vidas.component';

describe('VidasComponent', () => {
  let component: VidasComponent;
  let fixture: ComponentFixture<VidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
