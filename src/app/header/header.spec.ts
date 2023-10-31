import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponents } from './header';

describe('HeaderComponents', () => {
  let component: HeaderComponents;
  let fixture: ComponentFixture<HeaderComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponents]
    });
    fixture = TestBed.createComponent(HeaderComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
