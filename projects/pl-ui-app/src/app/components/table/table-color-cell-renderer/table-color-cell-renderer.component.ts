import { Component, Input } from '@angular/core';
import { PlTableCellData } from 'projects/ng-parallactic-ui/src/lib/pl-table/interfaces/pl-table-cell-data';

@Component({
    selector: 'app-table-color-cell-renderer',
    templateUrl: './table-color-cell-renderer.component.html',
    styleUrls: ['./table-color-cell-renderer.component.scss']
})
export class TableColorCellRendererComponent {
    @Input() tableCellData: PlTableCellData;

}
