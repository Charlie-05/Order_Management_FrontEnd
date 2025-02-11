import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private toastr:ToastrService) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        this.toastr.success('Login successful!', 'Welcome');
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.toastr.error('Invalid email or password', 'Login Failed');
      }
    );
  }
}