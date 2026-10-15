import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Door } from './door';

describe('Door', () => {
  let component: Door;
  let fixture: ComponentFixture<Door>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Door],
    }).compileComponents();

    fixture = TestBed.createComponent(Door);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
