import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlTableColumnDefinition } from '../../interfaces/pl-table-column-definition';
import { PlTableOptions } from '../../interfaces/pl-table-options';

@Component({
    selector: 'pl-table-header',
    templateUrl: './pl-table-header.component.html',
    styleUrls: ['./pl-table-header.component.scss']
})
export class PlTableHeaderComponent {
    @Input() tableOptions: PlTableOptions;
    @Input() tableColumnDefinitions: PlTableColumnDefinition;
    @Input() allTabelRowsAreSelected: boolean;
    @Output() sortChange = new EventEmitter();
    @Output() allRowsSelected = new EventEmitter();
    @Output() AllRowsUnselected = new EventEmitter();

    constructor() { }

    public onSortChange(eventData) {
        this.sortChange.emit(eventData);
    }

    public onTableRowSelectAll(event) {
        event.stopPropagation();
        if (!this.allTabelRowsAreSelected)
            this.allRowsSelected.emit();
        else
            this.AllRowsUnselected.emit();
    }

}
