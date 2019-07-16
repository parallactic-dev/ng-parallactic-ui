import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColorCellRendererComponent } from './table-color-cell-renderer.component';

describe('TableColorCellRendererComponent', () => {
  let component: TableColorCellRendererComponent;
  let fixture: ComponentFixture<TableColorCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColorCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColorCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
