import { Pipe, PipeTransform } from '@angular/core';
import { tierOrder } from '../constants/fissures.constants';
import { Fissure } from 'warframe-worldstate-parser';

export interface TierGroup {
    name: string;
    items: any[];
}

@Pipe({
    name: 'groupByTier',
    standalone: true
})
export class GroupByTierPipe implements PipeTransform {
    transform(fissures: Fissure[] | null): any[] {
        if (!fissures) return [];

        const groups = fissures.reduce((acc, f) => {
            const t = f.tier;

            if (!acc[t]) {
                acc[t] = [];
            }

            acc[t].push(f);
            return acc;
        }, {} as Record<string, Fissure[]>);

        return Object.keys(groups)
            .map(tierName => ({
                name: tierName,
                items: groups[tierName]
            }))
            .sort((a, b) => (tierOrder[a.name] || 99) - (tierOrder[b.name] || 99));
    }
}