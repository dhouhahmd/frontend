import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../formateur/formateur.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
message:any
  // users=[{name:"ali",id:1,color:"blue"},
  //   {name:"sami",id:2,color:"red"},
  //   {name:"wafa",id:3,color:"green"},
  // ]
  iduser:any 
  show:boolean=false
  users: any;
  constructor( private formateurService: FormateurService ){}
  ngOnInit(): void {
    this.formateurService.getListUser().subscribe(data=>{
      this.users=data;
      console.log(data)
    })
    
  }
  onDelete(id:any){
    this.iduser=id
    this.show=true

console.log("id",id)
  }
  cancelAction(){
    this.show=false}

  }





