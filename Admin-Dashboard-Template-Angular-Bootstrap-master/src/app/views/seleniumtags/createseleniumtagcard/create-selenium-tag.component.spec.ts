import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RegressiontestComponent} from "./regressiontest.component";


describe('RegressiontestComponent', () => {
  let component: RegressiontestComponent;
  let fixture: ComponentFixture<RegressiontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressiontestComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressiontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
