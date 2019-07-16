import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlTableColumnDefinition } from '../../interfaces/pl-table-column-definition';
import { PlTableCellData } from '../../interfaces/pl-table-cell-data';
import { PlTableCellService } from '../../services/pl-table-cell.service';
import { PlTableOptions } from '../../interfaces/pl-table-options';

@Component({
    selector: 'pl-table-row',
    templateUrl: './pl-table-row.component.html',
    styleUrls: ['./pl-table-row.component.scss']
})
export class PlTableRowComponent {
    @Input() tableOptions: PlTableOptions;
    @Input() tableColumnDefinitions: PlTableColumnDefinition[];
    @Input() tableRowData: any;
    @Input() selectedTableRows: any[];
    @Output() rowSelected = new EventEmitter();
    @Output() rowUnselected = new EventEmitter();

    public rowIsSelected: boolean;

    constructor(
        private plTableCellService: PlTableCellService
    ) { }


    public getCellValue(tableRowData: any[], tableColumnDefinition: PlTableColumnDefinition): PlTableCellData {
        return this.plTableCellService.getTableCellValue(tableRowData, tableColumnDefinition);
    }

    public onTableRowSelect(event) {
        event.stopPropagation();
        if (this.isSelectedTableRow())
            this.rowUnselected.emit(this.tableRowData);
        else
            this.rowSelected.emit(this.tableRowData);
    }

    public isSelectedTableRow() {
        return this.selectedTableRows.indexOf(this.tableRowData) > -1;
    }

}
