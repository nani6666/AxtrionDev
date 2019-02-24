import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoDistributionComponent } from './ico-distribution.component';

describe('IcoDistributionComponent', () => {
  let component: IcoDistributionComponent;
  let fixture: ComponentFixture<IcoDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
