import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
    selector: 'pl-input',
    templateUrl: './pl-input.component.html',
    styleUrls: ['./pl-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlInputComponent),
            multi: true,
        }
    ]
})
export class PlInputComponent implements ControlValueAccessor, OnInit {
    @Input() label: string;
    @Input() type: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
    @Input() helpText: string;
    @Input() validationMessage: string;
    @Input() showValidationMessage: boolean = false;

    public model: any;

    constructor() { }

    ngOnInit() {
    }

    public onChange(value) {
        this.propagateChange(value.data);
    }






    public propagateChange = (value: any) => value;
    private propagateTouch: () => void = noop;

    public writeValue(value: any) {
        this.model = value;
    }

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any) {
        this.propagateTouch = fn;
    }

}
