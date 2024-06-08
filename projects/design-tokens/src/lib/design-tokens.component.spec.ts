import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTokensComponent } from './design-tokens.component';

describe('DesignTokensComponent', () => {
  let component: DesignTokensComponent;
  let fixture: ComponentFixture<DesignTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignTokensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
