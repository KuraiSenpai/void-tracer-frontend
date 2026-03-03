import { CommonModule } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, shareReplay, take } from 'rxjs';
import { Calendar, DayEvent, WorldState } from 'warframe-worldstate-parser';
import { WorldStateService } from '../../core/services/world-state.service';
import { eventTypes, seasonIcons, weekdays } from '../../shared/constants/calendar.constants';
import { CollapsibleDirective } from '../../shared/directives/collapsible.directive';
import { CountdownPipe } from '../../shared/pipes/countdown.pipe';
import { Skeleton } from '../../shared/skeleton/skeleton';

@Component({
  selector: 'app-calendar-1999',
  imports: [CommonModule, MatIconModule, Skeleton, CountdownPipe, MatCardModule, CollapsibleDirective],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar1999 {
  readonly WEEKDAYS = weekdays;
  weekdayNames: string[] = Object.keys(weekdays);
  readonly YEAR = 1999;
  readonly SEASON_ICONS = seasonIcons;

  currentMonth: WritableSignal<number> = signal(1);
  currentMonthsNumbers: number[] = [];

  calendarData$!: Observable<Calendar>;

  constructor(private worldStateService: WorldStateService) {}

  ngOnInit(): void {
    this.calendarData$ = this.worldStateService.getWorldState().pipe(
      map((data: WorldState) => data.calendar),
      shareReplay(1),
    );

    this.calendarData$.pipe(take(1)).subscribe((calendar) => {
      if (calendar) {
        const firstEntry = new Date(calendar.days[0].date);
        this.changeMonth(firstEntry.getUTCMonth() + 1);

        this.currentMonthsNumbers = this.getCurrentMonthNumbers(calendar.days);
      }
    });
  }

  getSeasonIcons(season: string): string {
    return seasonIcons[season] || '';
  }

  getCurrentMonthNumbers(days: any[]): number[] {
    const currentMonths = days.map((day) => new Date(day.date).getMonth() + 1);
    return [...new Set(currentMonths)];
  }

  // TODO: transform into a pipe => application keeps calling this endlessly atm
  getEventTypeForDate(calendar: Calendar, dayNum: number): DayEvent[] | null {
    const dayStr = dayNum.toString().padStart(2, '0');
    const monthStr = this.currentMonth().toString().padStart(2, '0');

    const targetDate = `${this.YEAR}-${monthStr}-${dayStr}`;

    const dayData = calendar.days.find((d) => d.date.startsWith(targetDate));
    if (!dayData || !dayData.events.length) return null;

    return dayData.events.filter((e) => eventTypes.includes(e.type));
  }

  getRewardEmoji(type: string): string {
    // TODO: don't hardcode this
    switch (type) {
      case 'Big Prize!':
        return '🎁';

      case 'Override':
        return '🔧';

      case 'To Do':
        return '📝';
    }
    return '';
  }

  totalDays = computed(() => {
    return new Date(this.YEAR, this.currentMonth(), 0).getDate();
  });

  startDayIndex = computed(() => {
    return new Date(this.YEAR, this.currentMonth() - 1, 1).getDay();
  });

  daysArray = computed(() => {
    return Array.from({ length: this.totalDays() }, (_, i) => i + 1);
  });

  currentMonthName = computed(() => {
    const date = new Date(this.YEAR, this.currentMonth() - 1, 1);
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  });

  changeMonth(delta: number) {
    this.currentMonth.update((val) => {
      const next = delta;
      return next >= 1 && next <= 12 ? next : val;
    });
  }
}
