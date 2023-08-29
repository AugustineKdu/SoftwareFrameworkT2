import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];

  constructor(private router: Router) { }

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.router.navigate(['/account']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
