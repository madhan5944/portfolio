import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
export const routes: Routes = [

    { path:'header',component:HeaderComponent },
    { path:'main',component:MainPageComponent },
    { path:'home',component:HomeComponent},
    { path:'button',component:CustomButtonComponent}
];
