import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipelistitemComponent } from './recipe-list-item.component';

describe('RecipelistitemComponent', () => {
  let component: RecipelistitemComponent;
  let fixture: ComponentFixture<RecipelistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipelistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipelistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
