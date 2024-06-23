import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1Component } from '../page1/page1.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, HeaderComponent, Page1Component],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
