import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";
import Swal from 'sweetalert2'
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email: ['ocamejo123@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required]
  });

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.usuarioService.login(this.loginForm.value)
      .subscribe(response => {
        console.log(response)
          this.router.navigate(['/dashboard'])
        },
        err => {
          Swal.fire('', err.error.message, 'error')
        })

  }
}
