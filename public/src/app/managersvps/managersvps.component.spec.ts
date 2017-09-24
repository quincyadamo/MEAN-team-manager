import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersvpsComponent } from './managersvps.component';

describe('ManagersvpsComponent', () => {
  let component: ManagersvpsComponent;
  let fixture: ComponentFixture<ManagersvpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersvpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersvpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
