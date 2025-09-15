import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HomepageCounterExample } from './shared/components/homepage-counter-example/homepage-counter-example';

@Component({
  selector: 'app-root',
  imports: [HomepageCounterExample],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('AngularExamTraining-FE');
}
