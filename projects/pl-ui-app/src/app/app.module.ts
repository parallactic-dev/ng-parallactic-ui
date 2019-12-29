import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { NgParallacticUiModule } from 'ng-parallactic-ui';
import { NgParallacticUiModule } from 'projects/ng-parallactic-ui/src/public-api';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableColorCellRendererComponent } from './components/table/table-color-cell-renderer/table-color-cell-renderer.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        TableColorCellRendererComponent,
        DatepickerComponent,
        InputComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgParallacticUiModule
    ],
    providers: [],
    entryComponents: [
        TableColorCellRendererComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
