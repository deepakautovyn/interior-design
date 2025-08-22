import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; 
// import { Router, NavigationEnd } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'


  // imports: [RouterModule]
})
export class App {
  protected readonly title = signal('angularproject');
  
}
