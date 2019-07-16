import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlTableColumnDefinition } from './interfaces/pl-table-column-definition';
import { PlTableRowClickEvent } from './interfaces/pl-table-row-click-event';
import { PlTableSortOptions } from './interfaces/pl-table-sort-options';
import { PlTableOptions } from './interfaces/pl-table-options';
import { PlTableCellService } from './services/pl-table-cell.service';

@Component({
    selector: 'pl-table',
    templateUrl: './pl-table.component.html',
    styleUrls: ['./pl-table.component.scss'],
    host: { '[class.pl-table]': 'true' },
    providers: [ PlTableCellService ]
})
export class PlTableComponent {
    private _tableData: any[];
    public appliedTableOptions: PlTableOptions = {};
    public selectedTableRows: any[] = [];

    @Input() tableOptions: PlTableOptions = {};
    @Input() tableColumnsDefinitions: PlTableColumnDefinition[];
    @Output() tableRowClicked: EventEmitter<PlTableRowClickEvent> = new EventEmitter();
    @Output() tableRowSelectionChanged: EventEmitter<any> = new EventEmitter();

    @Input('tableData')
    set tableData(tableData: any[]) {
        this._tableData = tableData;
        this.applyTableOptions(this.tableOptions);
    }
    get tableData() {
        return this._tableData;
    }

    constructor(
        private plTableCellService: PlTableCellService
    ) { }

    private applyTableOptions(options: PlTableOptions) {
        this.appliedTableOptions.sortBy = options.sortBy || null;
        this.appliedTableOptions.sortOrder = options.sortOrder || 'asc';
        this.appliedTableOptions.selectableRows = options.selectableRows || false;

        this.sortTableData();
    }


    /* Sort table rows */

    public onSortChange(sortOptions: PlTableSortOptions) {
        if (!sortOptions) return;
        this.appliedTableOptions.sortBy = sortOptions.tableColumnKey;
        this.appliedTableOptions.sortOrder = sortOptions.sortOrder;
        this.sortTableData();
    }

    private sortTableData() {
        this.tableData.sort((a, b) => {
            const orderModifyer = this.appliedTableOptions.sortOrder === 'asc' ? 1 : -1;
            const tableColumnDefinition = this.tableColumnsDefinitions.find(item => item.field === this.appliedTableOptions.sortBy);

            let tableCellA = this.plTableCellService.getTableCellValue(a, tableColumnDefinition).value;
            let tableCellB = this.plTableCellService.getTableCellValue(b, tableColumnDefinition).value;

            if (typeof tableCellA === 'string')
                tableCellA = tableCellA.toLowerCase();

            if (typeof tableCellB === 'string')
                tableCellB = tableCellB.toLowerCase();

            if (tableCellA > tableCellB) return 1 * orderModifyer;
            if (tableCellA < tableCellB) return -1 * orderModifyer;
            return 0;
        });
    }


    /* Selected table rows */

    public onSelectedTableRowsAdd(tableRow: any) {
        this.selectedTableRows.push(tableRow);
        this.tableRowSelectionChanged.emit(this.selectedTableRows);
    }

    public onSelectedTableRowsRemove(tableRow: any) {
        const rowIndex = this.selectedTableRows.indexOf(tableRow);
        if (rowIndex > -1)
            this.selectedTableRows.splice(rowIndex, 1);
        this.tableRowSelectionChanged.emit(this.selectedTableRows);
    }

    public onSelectedTableRowsAddAll() {
        this.selectedTableRows = this.tableData;
        this.tableRowSelectionChanged.emit(this.selectedTableRows);
    }

    public onSelectedTableRowsRemoveAll() {
        this.selectedTableRows = [];
        this.tableRowSelectionChanged.emit(this.selectedTableRows);
    }


    /* Table events */

    public onTableRowClick(event: Event, tableRowData: any, tableRowIndex: number) {
        this.tableRowClicked.emit({ event, tableRowData, tableRowIndex });
    }

}
