import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
    creatUser(user:any):Observable<any>
    { return this.http.post<any>("http://localhost:3000/users  ",user)}
  
}
