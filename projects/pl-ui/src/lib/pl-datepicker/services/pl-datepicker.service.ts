import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlDatepickerService {
    public selectedDate: Date;
    public selectedDate$: BehaviorSubject<Date> = new BehaviorSubject(this.selectedDate);
    public currentMonth: Date;
    public currentMonth$: BehaviorSubject<Date> = new BehaviorSubject(this.currentMonth);

    constructor() {
        this.setCurrentMonth(this.getFirstDayOfMonth(new Date()));
    }

    public setSelectedDate(date: Date): void {
        this.selectedDate = date;
        this.selectedDate$.next(this.selectedDate);
    }

    public setCurrentMonth(date: Date): void {
        this.currentMonth = this.getFirstDayOfMonth(date);
        this.currentMonth$.next(this.currentMonth);
    }


    public getMonthMatrix(month: Date): any {
        if (!this.isTypeOfDate(month)) return;

        const firstDayWeekIndex = this.adjustWeekIndex(this.getFirstDayOfMonth(month).getDay());
        const matrixStartDate = new Date(month.getFullYear(), month.getMonth(), 1 - firstDayWeekIndex);

        let daysOfTheMonth = [];
        let days = [];

        for (let i = 0; i <= 42; i++) {
            const date = new Date(matrixStartDate.getFullYear(), matrixStartDate.getMonth(), matrixStartDate.getDate() + i);
            days.push(date);

            if ((i + 1) % 7 === 0) {
                daysOfTheMonth.push({
                    no: this.getWeek(date),
                    days
                });
                days = [];
            }
            
        }

        return daysOfTheMonth;
    }


    public isTypeOfDate(date: any): boolean {
        return Object.prototype.toString.call(date) === '[object Date]';
    }

    public getFirstDayOfMonth(date: Date): Date {
        if (!this.isTypeOfDate(date)) {
            date = new Date();
        }
        return new Date(date.getFullYear(), date.getMonth(), 1); 
    }

    public getLastDayOfMonth(date: Date): Date {
        if (!this.isTypeOfDate(date)) {
            date = new Date();
        }
        return new Date(date.getFullYear(), date.getMonth() + 1, 0); 
    }

    public isInCurrentMonth(date: Date): boolean {
        return date.getMonth() === this.currentMonth.getMonth();
    }

    public isSelectedDate(date: Date): boolean {
        return this.isSameDay(date, this.selectedDate);
    }

    public isToday(date: Date): boolean {
        return this.isSameDay(date, new Date());
    }

    public isSameDay(date1: Date, date2: Date): boolean {
        if (!this.isTypeOfDate(date1) || !this.isTypeOfDate(date2)) return;
        return date1.getDate() == date2.getDate() &&
            date1.getMonth() == date2.getMonth() &&
            date1.getFullYear() == date2.getFullYear();
    }

    public adjustWeekIndex(index: number): number {
        const offset = 1; //todo: put to options;
        return index < offset ? 7 - offset : index - offset;
    }

    public getWeek(_date: Date): number {
        if (!this.isTypeOfDate(_date)) return 0;
        let date = new Date(_date.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        const week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
      }
}
