import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  selectedUser: User;
  users : User[];
  readonly URL_API = 'http://localhost:10000/api/users';

  constructor(private http: HttpClient) {
    this.selectedUser = new User();
     this.users = [];
   }

  getUsers(){
    return this.http.get(this.URL_API);
  }

  PostUser(User:User){
    return this.http.post(this.URL_API, User);
  }

  putUser(User:User){
    return this.http.put(this.URL_API +  `/${User}`, User);// 
  }

  deleteUser(_id: string) { // Solo se necesita el id, no todo lo del empleado
    return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el m�todo delete
  }

}
