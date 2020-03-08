import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLowerComponent } from './header-lower.component';

describe('HeaderLowerComponent', () => {
  let component: HeaderLowerComponent;
  let fixture: ComponentFixture<HeaderLowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
