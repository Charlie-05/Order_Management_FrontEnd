import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private toastr:ToastrService) {}

  onSubmit() {
    this.authService.signUp(this.signUpData).subscribe(
      (response) => {
        this.toastr.success('User registered successfully!', 'Success');
        this.router.navigate(['/login']);
      },
      (error) => {
        this.toastr.error(error.error.message, 'Error');
      }
    );
  }
}