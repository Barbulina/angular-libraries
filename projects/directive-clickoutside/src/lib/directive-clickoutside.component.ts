import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  OnInit
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[libOnClickOut]'
})
export class OnClickOutDirective implements OnInit {
  @Output() libOnClickOut = new EventEmitter();

  captured = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target) {
    if (!this.captured) {
      return;
    }

    if (!this.elRef.nativeElement.contains(target)) {
      this.libOnClickOut.emit();
    }
  }

  ngOnInit() {
    fromEvent(document, 'click', { capture: true })
      .pipe(take(1))
      .subscribe(() => (this.captured = true));
  }
}
