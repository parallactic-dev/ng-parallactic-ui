import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { PlTableCellData } from '../../interfaces/pl-table-cell-data';
import { PlTableColumnDefinition } from '../../interfaces/pl-table-column-definition';
import { PlTableCellDirective } from '../../directives/pl-table-cell.directive';
import { PlTableCellRendererComponent } from '../pl-table-cell-renderer/pl-table-cell-renderer.component';

@Component({
    selector: 'pl-table-cell',
    templateUrl: './pl-table-cell.component.html',
    styleUrls: ['./pl-table-cell.component.scss']
})
export class PlTableCellComponent implements OnInit {
    @Input() tableCellData: PlTableCellData;
    @Input() tableColumnDefinition: PlTableColumnDefinition;

    @ViewChild(PlTableCellDirective, {static: true}) tableCellRenderer: PlTableCellDirective;

    private defaultTableCellRenderer = PlTableCellRendererComponent;


    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit() {
        this.loadTableCellRenderer()
    }

    private loadTableCellRenderer() {
        const tableCellRenderer = this.tableColumnDefinition.tableCellRenderer || this.defaultTableCellRenderer;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tableCellRenderer);
        const viewContainerRef = this.tableCellRenderer.viewContainerRef;
        viewContainerRef.clear();
    
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<any>componentRef.instance).tableCellData = this.tableCellData;
    }

}
