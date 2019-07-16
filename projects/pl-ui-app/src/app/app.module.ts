import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PlUiModule } from 'pl-ui';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableColorCellRendererComponent } from './components/table/table-color-cell-renderer/table-color-cell-renderer.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        TableColorCellRendererComponent,
    ],
    imports: [
        BrowserModule,
        PlUiModule
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
