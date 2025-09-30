import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	linkedSignal,
	OnInit,
	Signal,
	WritableSignal,
} from '@angular/core';
import { CounterService } from '../../services/counter-service';

@Component({
	selector: 'app-homepage-counter-example',
	imports: [],
	templateUrl: './homepage-counter-example.html',
	styleUrl: './homepage-counter-example.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageCounterExample implements OnInit {
	public counter!: WritableSignal<number>;
	public doubleCount!: Signal<number>;
	public tripleIndependent!: WritableSignal<number>;

	private counterService: CounterService = inject(CounterService);

	ngOnInit(): void {
		this.counter = this.counterService.getCounterSignal();
		this.doubleCount = computed(() => this.counter() * 2);
		this.tripleIndependent = linkedSignal(() => this.counter() * 3);
	}

	public increment(): void {
		this.counterService.setCounter(this.counter() + 1); // Could have used update instead of set
	}

	public decrement(): void {
		this.counterService.setCounter(this.counter() - 1); // Could have used update instead of set
	}

	public incrementTripleByOne(): void {
		this.tripleIndependent.update((value) => value + 1);
	}
}
