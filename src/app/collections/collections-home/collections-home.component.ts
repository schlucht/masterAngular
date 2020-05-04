import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-collections-home',
    templateUrl: './collections-home.component.html',
    styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
    data = [
        { name: 'James', age: '24', job: 'Designer', employed: true },
        { name: 'Lothar', age: '52', job: 'Developer', employed: false },
        { name: 'Janina', age: '47', job: 'Doctor', employed: true },
    ];
    headers = [
        { key: 'name', value: 'Name' },
        { key: 'age', value: 'Age' },
        { key: 'job', value: 'Job' },
        { key: 'employed', value: 'Employed ' },
    ];
    constructor() {}

    ngOnInit() {}
}
