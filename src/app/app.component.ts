import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'projectexemple1';
  style={'background':'red'}
  classBackground="Backgroundclass"
isSpecial=true
  canSave=true;
  Form:FormGroup;
  constructor(private Fb:FormBuilder) {
    this.Form=this.Fb.group({
      name:['name',Validators.required],
      age:['',[Validators.required,Validators.min(0)]],
      Email:['',[Validators.email,Validators.required]]
    
    })

  }
  setStyle(){
    let style=
    {'background':'green',
      'font-size':'25px',
      'color':'blue'
    }
    return style
  }



    setClass(){
      return {
        'special':this.isSpecial,
        'saveable':this.canSave};
      }
      inputValue:any
      changeValue(){
        console.log("value",this.inputValue)
      }
    }
