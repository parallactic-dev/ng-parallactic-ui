import { Component, Input } from '@angular/core';
import { PlTableCellData } from '../../interfaces/pl-table-cell-data';

@Component({
    selector: 'pl-table-cell-renderer',
    templateUrl: './pl-table-cell-renderer.component.html',
    styleUrls: ['./pl-table-cell-renderer.component.scss']
})
export class PlTableCellRendererComponent {
    @Input() tableCellData: PlTableCellData;

    constructor() { }

}
