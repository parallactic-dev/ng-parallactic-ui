import { Component, OnInit, OnDestroy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PlDatepickerService } from './services/pl-datepicker.service';
import { Subscription, noop } from 'rxjs';

@Component({
    selector: 'pl-datepicker',
    templateUrl: './pl-datepicker.component.html',
    styleUrls: ['./pl-datepicker.component.scss'],
    providers: [
        PlDatepickerService,
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => PlDatepickerComponent),
          multi: true,
        }
    ]
})
export class PlDatepickerComponent implements ControlValueAccessor, OnInit, OnDestroy {
    public model: Date;
    public showOverlay: boolean = false;
    private selectedDateSubscription: Subscription;
    public appliedOptions: any = {};

    @Input() datepickerOptions: any = {};

    constructor(
        private plDatepickerService: PlDatepickerService
    ) {
        this.selectedDateSubscription = this.plDatepickerService.selectedDate$.subscribe(date => {
            this.onDateSelect(date);
        });
        this.applyOptions(this.datepickerOptions);
    }

    ngOnInit() {
        this.applyOptions(this.datepickerOptions);
    }

    private applyOptions(options: any) {
        this.appliedOptions.dateFormat = options.dateFormat || 'dd.MM.yyyy';
    }


    public onDateSelect(date: Date) {
        this.model = date;
        this.propagateChange(this.model);
        if (this.model) {
            this.showOverlay = false;
        }
    }

    public toggleDatepickerOverlay() {
        this.showOverlay = !this.showOverlay;
        this.propagateTouch();
    }

    public hideOverlay() {
        this.showOverlay = false;
    }


    public propagateChange = (date: Date) => date;
    private propagateTouch: () => void = noop;

    public writeValue(obj: any) {
        this.plDatepickerService.setSelectedDate(obj || null);
    }

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any) {
        this.propagateTouch = fn;
    }

    ngOnDestroy() {
        this.selectedDateSubscription.unsubscribe();
    }

}
