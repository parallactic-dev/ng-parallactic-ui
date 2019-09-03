import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClickOutsideDirective } from './directives/click-outside.directive';

import { PlTableComponent } from './pl-table/pl-table.component';
import { PlTableRowComponent } from './pl-table/components/pl-table-row/pl-table-row.component';
import { PlTableCellComponent } from './pl-table/components/pl-table-cell/pl-table-cell.component';
import { PlTableCellDirective } from './pl-table/directives/pl-table-cell.directive';
import { PlTableCellRendererComponent } from './pl-table/components/pl-table-cell-renderer/pl-table-cell-renderer.component';
import { PlTableHeaderComponent } from './pl-table/components/pl-table-header/pl-table-header.component';
import { PlTableHeaderCellComponent } from './pl-table/components/pl-table-header-cell/pl-table-header-cell.component';

import { PlDatepickerComponent } from './pl-datepicker/pl-datepicker.component';
import { PlDatepickerOverlayComponent } from './pl-datepicker/components/pl-datepicker-overlay/pl-datepicker-overlay.component';
import { PlDatepickerCalendarComponent } from './pl-datepicker/components/pl-datepicker-calendar/pl-datepicker-calendar.component';
import { PlDatepickerHeaderComponent } from './pl-datepicker/components/pl-datepicker-header/pl-datepicker-header.component';

@NgModule({
    declarations: [
        ClickOutsideDirective,

        PlTableComponent,
        PlTableRowComponent,
        PlTableCellComponent,
        PlTableCellDirective,
        PlTableCellRendererComponent,
        PlTableHeaderComponent,
        PlTableHeaderCellComponent,

        PlDatepickerComponent,
        PlDatepickerOverlayComponent,
        PlDatepickerCalendarComponent,
        PlDatepickerHeaderComponent,
    ],
    providers: [
        ClickOutsideDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        PlTableComponent,
        PlDatepickerComponent,
    ],
    entryComponents: [
        PlTableCellRendererComponent
    ]
})
export class NgParallacticUiModule { }
