import { Directive, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { autoAnimate } from './index';

@Directive({
    selector: '[autoAnimate]',
    standalone: true
})
export class AutoAnimateDirective implements AfterViewInit, OnDestroy {
    @Input('autoAnimate') options: any;

    private cleanup: (() => void) | null = null;

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        this.cleanup = autoAnimate(this.el.nativeElement, this.options || {});
    }

    ngOnDestroy() {
        if (this.cleanup) {
            this.cleanup();
        }
    }
}
