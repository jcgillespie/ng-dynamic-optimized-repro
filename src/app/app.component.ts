import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-content test app';
  content = '<p>Runtime hello!</p><img [attr.src]="\'https://angular.io/assets/images/logos/angular/angular.svg\'">';
}
