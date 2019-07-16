import { Component } from '@angular/core';
import { PlTableOptions } from 'pl-ui/lib/pl-table/interfaces/pl-table-options';
import { PlTableColumnDefinition } from 'pl-ui/lib/pl-table/interfaces/pl-table-column-definition';
import { TableColorCellRendererComponent } from './table-color-cell-renderer/table-color-cell-renderer.component';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {
    public tableOptions: PlTableOptions = {
        sortBy: 'id',
        selectableRows: true,
    };
    public columnDefinitions: PlTableColumnDefinition[] = [
        { title: 'ID', field: 'id', sortable: true },
        { title: 'Name', field: 'name', valueFormatter: this.createFullName, sortable: true },
        { title: 'Animal', field: 'favorits.animal', sortable: true },
        { title: 'Color', field: 'favorits.color', tableCellRenderer: TableColorCellRendererComponent },
    ];
    public data = [
        { id: 1, prename: 'Hans', name: 'Gustav', favorits: { animal: 'Panda', color: 'blue' }},
        { id: 2, prename: 'Nathan', name: 'Bird', favorits: { animal: 'Spider', color: 'red' }},
        { id: 3, prename: 'Helene', name: 'Xing', favorits: { animal: 'Quala', color: 'green' }},
        { id: 4, prename: 'Tim', name: 'Andrews', favorits: { animal: 'Bear', color: 'yellow' }},
        { id: 5, prename: 'Ashley', name: 'Burton', favorits: { animal: 'Zebra', color: 'purple' }},
    ];

    constructor() { }

    public createFullName(value, rowData, colDef) {
        return rowData.prename + ' ' + rowData.name;
    }

}
