import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  styles: [
    require('./app-header.scss')
  ],
  template: require('./app-header.html')
})

export class AppHeader {
  @Input() authenticated: boolean;
  @Output() signOut: EventEmitter<any> = new EventEmitter(false);
}
