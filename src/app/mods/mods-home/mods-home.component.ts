import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mods-home',
    templateUrl: './mods-home.component.html',
    styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
    constructor() {}
    modalOpen = false;
    items = [
        {
            title: 'Why is the sky blue?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veniam mollitia voluptatem iusto blanditiis rem!',
        },
        {
            title: 'Why is the banane yellow?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veniam mollitia voluptatem iusto blanditiis rem!',
        },
        {
            title: 'Whose tree is big?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veniam mollitia voluptatem iusto blanditiis rem!',
        },
    ];
    ngOnInit() {}
    onClick() {
        this.modalOpen = !this.modalOpen;
    }
}
