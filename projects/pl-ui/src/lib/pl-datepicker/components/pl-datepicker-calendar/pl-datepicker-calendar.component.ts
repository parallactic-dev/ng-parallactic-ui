import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlDatepickerService } from '../../services/pl-datepicker.service';

@Component({
    selector: 'pl-datepicker-calendar',
    templateUrl: './pl-datepicker-calendar.component.html',
    styleUrls: ['./pl-datepicker-calendar.component.scss']
})
export class PlDatepickerCalendarComponent implements OnDestroy {
    public model: Date;
    public currentMonth: Date;
    private currentMonthSubscription: Subscription;

    constructor(
        private plDatepickerService: PlDatepickerService
    ) {
        this.currentMonthSubscription = this.plDatepickerService.currentMonth$
            .subscribe(date => this.currentMonth = date);
    }

    public getDaysInMonth(): any {
        return this.plDatepickerService.getMonthMatrix(this.currentMonth)
    }

    public isInCurrentMonth(date: Date): boolean {
        return this.plDatepickerService.isInCurrentMonth(date);
    }
    
    public isSelectedDate(date: Date): boolean {
        return this.plDatepickerService.isSelectedDate(date);
    }

    public isToday(date: Date): boolean {
        return this.plDatepickerService.isToday(date);
    }

    public onDateSelect(date: Date): void {
        this.plDatepickerService.setSelectedDate(date);
    }

    ngOnDestroy() {
        this.currentMonthSubscription.unsubscribe();
    }
}
