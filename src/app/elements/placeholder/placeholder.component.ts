import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
    selector: 'app-placeholder',
    templateUrl: './placeholder.component.html',
    styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
    @Input() lines = 3;
    @Input() header = true;

    constructor() {}

    ngOnInit() {}
}
