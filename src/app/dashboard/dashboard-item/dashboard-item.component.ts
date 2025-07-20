import {Component, Input} from '@angular/core';
import {ServerStatusComponent} from "../server-status/server-status.component";

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
    imports: [
        ServerStatusComponent
    ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  @Input({required:true}) image!: {src: string; alt: string};
  @Input({required:true}) title!: string;
}
