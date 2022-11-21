import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UsuarioService} from "../../services/usuario.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  public submitted = false;

  public registerForm = this.formBuilder.group({
    nombre: ['Orel', Validators.required,],
    email: ['ocamejo123@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createUser() {
    this.submitted = true;

    this.usuarioService.createUsuario(this.registerForm.value)
      .subscribe(response => {
          this.router.navigate(['/login']);
        },
        err => {
          Swal.fire('Error', err.error.message, 'error')
        })
  }

  campoNoValido(campo: string): boolean {
    return !!(this.registerForm.get(campo)?.invalid && this.submitted);
  }

  passwordValid() {
    const password1 = this.registerForm.get('password')?.value;
    const password2 = this.registerForm.get('password2')?.value;
    return password1 !== password2 && this.submitted;
  }

  emptyPass(pass1: string, pass2: string) {
    return !!((this.registerForm.get(pass1)?.invalid && this.registerForm.get(pass2)?.invalid) && this.submitted);

  }
}
