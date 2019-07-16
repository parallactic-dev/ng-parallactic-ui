import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlTableComponent } from './pl-table/pl-table.component';
import { PlTableRowComponent } from './pl-table/components/pl-table-row/pl-table-row.component';
import { PlTableCellComponent } from './pl-table/components/pl-table-cell/pl-table-cell.component';
import { PlTableCellDirective } from './pl-table/directives/pl-table-cell.directive';
import { PlTableCellRendererComponent } from './pl-table/components/pl-table-cell-renderer/pl-table-cell-renderer.component';
import { PlTableHeaderComponent } from './pl-table/components/pl-table-header/pl-table-header.component';
import { PlTableHeaderCellComponent } from './pl-table/components/pl-table-header-cell/pl-table-header-cell.component';

@NgModule({
    declarations: [
        PlTableComponent,
        PlTableRowComponent,
        PlTableCellComponent,
        PlTableCellDirective,
        PlTableCellRendererComponent,
        PlTableHeaderComponent,
        PlTableHeaderCellComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PlTableComponent
    ],
    entryComponents: [
        PlTableCellRendererComponent
    ]
})
export class PlUiModule { }
