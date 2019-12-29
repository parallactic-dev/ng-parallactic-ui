import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    public form: FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            fullName: new FormControl('', Validators.required)
        })
    }

}
