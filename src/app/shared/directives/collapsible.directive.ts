import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[app-collapsible]',
  exportAs: 'collapsible',
})
export class CollapsibleDirective {
  @Input('collapsible') isCollapsed = false;

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
