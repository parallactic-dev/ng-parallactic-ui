import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[pl-table-cell]'
})
export class PlTableCellDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }

}
