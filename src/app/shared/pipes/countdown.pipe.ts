import { Pipe, PipeTransform } from '@angular/core';
import { interval, map, Observable, startWith } from 'rxjs';

@Pipe({
  name: 'countdown',
  standalone: true,
})
export class CountdownPipe implements PipeTransform {
  transform(expiryDate: string | Date): Observable<string> {
    const end = new Date(expiryDate).getTime();

    const getDisplayValue = () => {
      const now = new Date().getTime();
      const delta = end - now;
      const isExpired = delta < 0;
      const absDelta = Math.abs(delta);

      const days = Math.floor(absDelta / (1000 * 60 * 60 * 24));
      const hours = Math.floor((absDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((absDelta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((absDelta % (1000 * 60)) / 1000);

      const timeString = `${days > 0 ? days + 'd ' : ''}${hours > 0 ? hours + 'd ' : ''} ${minutes > 0 ? minutes + 'm ' : ''} ${seconds}s`;
      return isExpired ? `Expired: ${timeString}` : timeString;
    };

    return interval(1000).pipe(
      map(() => getDisplayValue()),
      startWith(getDisplayValue()),
    );
  }
}
