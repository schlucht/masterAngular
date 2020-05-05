import {
    Component,
    OnInit,
    ElementRef,
    OnDestroy,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'app-mods',
    templateUrl: './mods.component.html',
    styleUrls: ['./mods.component.css'],
})
export class ModsComponent implements OnInit, OnDestroy {
    constructor(private el: ElementRef) {}
    @Output() close = new EventEmitter();
    ngOnInit() {
        document.body.appendChild(this.el.nativeElement);
    }

    ngOnDestroy() {
        this.el.nativeElement.remove();
    }
    onCloseClick() {
        this.close.emit();
    }
}
