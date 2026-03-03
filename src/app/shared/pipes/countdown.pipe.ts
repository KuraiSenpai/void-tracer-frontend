import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { interval, map, Observable, shareReplay, startWith } from 'rxjs';

@Pipe({
    name: 'countdown',
    standalone: true
})
export class CountdownPipe implements PipeTransform {

    transform(expiryDate: string | Date): Observable<string> {
        const end = new Date(expiryDate).getTime();

        const getDisplayValue = () => {
            const now = new Date().getTime();
            const delta = end - now;
            if (delta <= 0) return 'EXPIRED';

            const days = Math.floor(delta / (1000 * 60 * 60 * 24));
            const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((delta % (1000 * 60)) / 1000);

            return `${days > 0 ? days + 'd ' : ''}${hours}h ${minutes}m ${seconds}s`;
        };

        return interval(1000).pipe(
            map(() => getDisplayValue()),
            startWith(getDisplayValue())
        );
    }
}