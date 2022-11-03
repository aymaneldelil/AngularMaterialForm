import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationUIComponent } from './authentication-ui.component';

describe('AuthenticationUIComponent', () => {
  let component: AuthenticationUIComponent;
  let fixture: ComponentFixture<AuthenticationUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
