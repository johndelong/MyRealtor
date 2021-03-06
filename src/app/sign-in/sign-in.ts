import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';


@Component({
  selector: 'sign-in',
  styles: [
    require('./sign-in.scss'),
  ],
  template: require('./sign-in.html'),
})

export class SignIn {
  constructor(private auth: AuthService, private router: Router) {}

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['']);
  }
}
