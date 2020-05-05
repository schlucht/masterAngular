import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-views-home',
    templateUrl: './views-home.component.html',
    styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
    stats = [
        { value: '22', label: '# of User' },
        { value: '900', label: 'Uploads' },
        { value: '50', label: 'Reviews' },
    ];
    items = [
        {
            image: '/assets/images/couch.jpeg',
            title: 'Couch',
            description: 'This is a fantastic new Coutch',
        },
        {
            image: '/assets/images/dresser.jpeg',
            title: 'Dresser',
            description: 'This is a great dresser for you',
        },
    ];
    constructor() {}

    ngOnInit() {}
}
