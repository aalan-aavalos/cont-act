import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prihome',
  templateUrl: './prihome.component.html',
  styleUrls: ['./prihome.component.css']
})

export class PrihomeComponent {
    currentMonth: Date = new Date();
  daysInMonth: number[] = [];
  years: number[] = [];
  months = [
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' }
  ];
  selectedYear: number;
  selectedMonth: number;

  constructor() {
    this.updateDaysInMonth();
    this.populateYears();
    this.selectedYear = this.currentMonth.getFullYear();
    this.selectedMonth = this.currentMonth.getMonth();
  }

  prevMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.updateDaysInMonth();
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.updateDaysInMonth();
  }

  updateDaysInMonth() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      this.years.push(i);
    }
  }

  onYearChange() {
    this.currentMonth.setFullYear(this.selectedYear);
    this.updateDaysInMonth();
  }

  onMonthChange() {
    this.currentMonth.setMonth(this.selectedMonth);
    this.updateDaysInMonth();
  }
}