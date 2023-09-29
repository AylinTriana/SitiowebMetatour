export class User {
  constructor(nombre = "", apellido = "", cedula = "", telefono = "", correo = "", direccion = "", ciudad = "", profesion = "", cargo = "", salario = 0) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.cedula = cedula;
      this.telefono = telefono;
      this.correo = correo;
      this.direccion = direccion;
      this.ciudad = ciudad;
      this.profesion = profesion;
      this.cargo = cargo;
      this.salario = salario;
    }
    
  nombre: string; // Sub gui�n id porque los datos van a venir de MOngodb
  apellido: string;
  cedula: string;
  telefono: string;
  correo: string;
  direccion: string;
  ciudad: string;
  profesion: string;
  cargo: string;
  salario: number;
}
