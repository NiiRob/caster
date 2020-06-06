import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, LoginResponse } from '../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setupForm();
  }

  async signIn(credentials: any) {
    try {
      this.spinner.show();
      const res: LoginResponse = await this.authService.login(credentials);
      if (res) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/customers']);
      }
    } catch (error) { this.errorMsg = error.error; } finally { this.spinner.hide(); }
  }

  setupForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: [null, Validators.required]
    });
  }

}
