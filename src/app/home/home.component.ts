import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainPageComponent } from '../main-page/main-page.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,MainPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
