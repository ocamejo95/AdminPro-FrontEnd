import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Usuario} from "../../models/usuario";
import {FildUploadService} from "../../services/fild-upload.service";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html'
})
export class PerfilUsuarioComponent implements OnInit {
  public perfilForm: FormGroup;
  public usuario: Usuario;
  public img: any;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private fildUploadService: FildUploadService) {
    this.usuario = this.authService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]]
    });
  }

  updatePerfil() {
    this.authService.updateUsuario(this.perfilForm.value)
      .subscribe(response => {
        console.log(response)
        const {nombre, email} = response.userUpdate;
        this.usuario.nombre = nombre;
        this.usuario.email = email;
      })
  }

  capturarImg(event: any) {
    this.img = event.target.files[0];
  }

  submitImg() {
    const fd = new FormData();
    fd.append('img', this.img);

    this.fildUploadService.uploadFileUsuario(fd, this.usuario.uid)
      .subscribe((resp: any) => {
        this.usuario.img = resp.nombreFile;
      })

  }

}
