import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexItemComponent } from './index-item.component';

describe('IndexItemComponent', () => {
  let component: IndexItemComponent;
  let fixture: ComponentFixture<IndexItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IndexItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
