import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PlTableColumnDefinition } from '../../interfaces/pl-table-column-definition';
import { PlTableOptions } from '../../interfaces/pl-table-options';

@Component({
    selector: 'pl-table-header-cell',
    templateUrl: './pl-table-header-cell.component.html',
    styleUrls: ['./pl-table-header-cell.component.scss']
})
export class PlTableHeaderCellComponent {
    @Input() tableOptions: PlTableOptions;
    @Input() tableColumnDefinition: PlTableColumnDefinition;
    @Output() sortChange = new EventEmitter();

    constructor() { }

    public onLabelClick() {
        if (this.tableColumnDefinition.sortable) {
            const sortOrder = this.tableOptions.sortBy === this.tableColumnDefinition.field ? this.tableOptions.sortOrder === 'asc' ? 'desc' : 'asc' : 'asc';
            this.sortChange.emit({ tableColumnKey: this.tableColumnDefinition.field, sortOrder });
        }
    }

}
