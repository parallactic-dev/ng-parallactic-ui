import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    constructor(private _elementRef: ElementRef) { }

    @Output()
    public appClickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event'])
    public onClick(event: MouseEvent): void {
        const targetElementPath = typeof event.composedPath === 'function' ? event.composedPath() : this._getComposedPath(event.target);
        const elementRefInPath = targetElementPath.find(e => e === this._elementRef.nativeElement);
        if (!elementRefInPath) {
            this.appClickOutside.emit(event);
        }
    }

    private _getComposedPath(node) {
        let parent;
        if (node.parentNode) {
            parent = node.parentNode;
        } else if (node.host) {
            parent = node.host;
        } else if (node.defaultView) {
            parent = node.defaultView;
        }

        if (parent !== undefined) {
            return [node].concat(this._getComposedPath(parent));
        }

        return [node];
    };
}
