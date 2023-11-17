import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignMainComponent } from './design-main.component';

describe('DesignMainComponent', () => {
  let component: DesignMainComponent;
  let fixture: ComponentFixture<DesignMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
