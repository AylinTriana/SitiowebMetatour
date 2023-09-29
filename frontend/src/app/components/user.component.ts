import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';


declare var M: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
 
  constructor(public userService: UserService) { }
  ngOnInit(): void {
  }
  agregarUser(form?: NgForm) {
    this.userService.PostUser(form?.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Guardado satisfactoriamente'});
      });
  }

  actualizarUser(form?: NgForm) {
    this.userService.putUser(form?.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Actualizado satisfactoriamente'});
      });
  }

  eliminarUser(form?: NgForm) {
    this.userService.deleteUser(form?.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Eliminado satisfactoriamente'});
      });
  }
  

  resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }
}
