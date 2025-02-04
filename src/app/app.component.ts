import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrackComponent } from './track/track.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admirScalextric';
}
