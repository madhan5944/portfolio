import { Component } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
