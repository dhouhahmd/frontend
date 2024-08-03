import { Component } from '@angular/core';
import { Validators , FormGroup ,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        first: ['Luke', Validators.required],
        last: ['Skywalker', Validators.required],
      }),
      contact: this.formBuilder.group({
        email: ['',[Validators.email,Validators.required]],
        phone: [''],
      }),
      password:this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
       }
      , {
        
          validator: this.passwordMatchValidator
      
        }
      
      
    )
  
    });
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get(' confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  submit() {
    console.log('reactive form submit', this.form.value);
  }
  }
 
  