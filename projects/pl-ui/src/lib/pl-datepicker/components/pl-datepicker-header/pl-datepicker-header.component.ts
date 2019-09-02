import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlDatepickerService } from '../../services/pl-datepicker.service';

@Component({
    selector: 'pl-datepicker-header',
    templateUrl: './pl-datepicker-header.component.html',
    styleUrls: ['./pl-datepicker-header.component.scss']
})
export class PlDatepickerHeaderComponent implements OnDestroy {
    public currentMonth: Date;
    private currentMonthSubscription: Subscription;

    constructor(
        private plDatepickerService: PlDatepickerService
    ) {
        this.currentMonthSubscription = this.plDatepickerService.currentMonth$
            .subscribe(date => this.currentMonth = date);
    }

    public onNavigateToNextMonth(): void {
        this.plDatepickerService.setCurrentMonth(
            new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1)
        );
    }

    public onNavigateToPreviousMonth(): void {
        this.plDatepickerService.setCurrentMonth(
            new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1)
        );
    }

    ngOnDestroy() {
        this.currentMonthSubscription.unsubscribe();
    }
}
