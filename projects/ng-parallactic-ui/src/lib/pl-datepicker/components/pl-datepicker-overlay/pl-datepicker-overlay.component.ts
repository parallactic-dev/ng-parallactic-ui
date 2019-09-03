import { Component, OnDestroy } from '@angular/core';
import { PlDatepickerService } from '../../services/pl-datepicker.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pl-datepicker-overlay',
    templateUrl: './pl-datepicker-overlay.component.html',
    styleUrls: ['./pl-datepicker-overlay.component.scss']
})
export class PlDatepickerOverlayComponent implements OnDestroy {
    public model: Date;
    public currentMonth: Date;
    private selectedDateSubscription: Subscription;
    private currentMonthSubscription: Subscription;

    constructor(
        private plDatepickerService: PlDatepickerService
    ) {
        this.selectedDateSubscription = this.plDatepickerService.selectedDate$
            .subscribe(date => this.model = date);
        this.currentMonthSubscription = this.plDatepickerService.currentMonth$
            .subscribe(date => this.currentMonth = date);
    }

    public getDaysInMonth(): any {
        return this.plDatepickerService.getMonthMatrix(this.currentMonth)
    }

    public onNavigateToNextMonth(): void {
        this.plDatepickerService.setCurrentMonth(
            new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1)
        );
    }

    public onNavigateToPreviousMonth(): void {
        this.plDatepickerService.setCurrentMonth(
            new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1))
        ;
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
        this.selectedDateSubscription.unsubscribe();
        this.currentMonthSubscription.unsubscribe();
    }

}
