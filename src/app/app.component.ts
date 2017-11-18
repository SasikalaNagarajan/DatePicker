import { Component, ViewEncapsulation, Inject } from '@angular/core';

@Component({
    selector: 'control-content',
    styleUrls: ['datepicker-style.css'],
    templateUrl: 'default.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    public date: Object = new Date();

}