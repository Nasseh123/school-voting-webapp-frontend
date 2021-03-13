import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteChildComponent } from './vote-child.component';

describe('VoteChildComponent', () => {
  let component: VoteChildComponent;
  let fixture: ComponentFixture<VoteChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
