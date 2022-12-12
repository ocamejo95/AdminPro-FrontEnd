import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import Swal from 'sweetalert2'
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  remember: boolean = false;
  email: string;
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    recuerdame: [false]

  });

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.remember = true;
    }



  }


  login() {
    if (this.loginForm.value.recuerdame) {
      localStorage.setItem('email', <string>this.loginForm.value.email)
    } else {
      localStorage.removeItem('email')
    }

    this.authService.login(this.loginForm.value)
      .subscribe((response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        err => {
          Swal.fire('', err.error.message, 'error')
        })

  }
}
