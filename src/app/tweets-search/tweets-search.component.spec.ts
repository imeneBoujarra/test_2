import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsSearchComponent } from './tweets-search.component';

describe('TweetsSearchComponent', () => {
  let component: TweetsSearchComponent;
  let fixture: ComponentFixture<TweetsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
