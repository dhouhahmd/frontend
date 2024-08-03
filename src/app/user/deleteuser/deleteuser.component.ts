import { Component , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent {
  @Input("userId")
  userId:any
  @Output()
close=new EventEmitter()
@Output()
save=new EventEmitter()
saveAction(){
  this.save.emit("hello mohamed")
  this.close.emit(true)
}

closeAction()
{
  this.close.emit(true)
}

  
}


