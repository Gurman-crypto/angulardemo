import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
    selector: 'signup-form',
    templateUrl: './signupform.component.html',
    styleUrls: ['./signupform.component.css']
  })
  class ModelFormComponent implements OnInit {
    langs: string[] = [
      'English',
      'French',
      'punjabi'
    ];
    myform: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;
  
  
    ngOnInit() {
      this.createFormControls();
      this.createForm();
    }
  
    createFormControls() {
      this.firstName = new FormControl('', Validators.required);
      this.lastName = new FormControl('', Validators.required);
      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]);
      this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]);
      this.language = new FormControl('');
    }
  
    createForm() {
      this.myform = new FormGroup({
        name: new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName,
        }),
        email: this.email,
        password: this.password,
        language: this.language
      });
    }
  }