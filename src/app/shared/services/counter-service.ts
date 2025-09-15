import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CounterService {
	private counter: WritableSignal<number> = signal(0);

	public getCounterSignal(): WritableSignal<number> {
		return this.counter;
	}

	public getCounterValue(): number {
		return this.counter();
	}

	public setCounter(value: number): void {
		this.counter.set(value);
	}
}
