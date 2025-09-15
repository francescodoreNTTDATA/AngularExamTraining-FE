import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
	signal,
	WritableSignal,
} from '@angular/core';
import { HomepageCounterExample } from './shared/components/homepage-counter-example/homepage-counter-example';
import { User } from './shared/models/User.model';
import { UserService } from './shared/services/user-service';
import { Observable } from 'rxjs';
import { UserListExample } from './shared/components/user-list-example/user-list-example';

@Component({
	selector: 'app-root',
	imports: [HomepageCounterExample, UserListExample],
	providers: [],
	templateUrl: './app.html',
	styleUrl: './app.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
	public usersAsSignal: WritableSignal<User[] | undefined> = signal(undefined);

	public usersAsObservableResponse!: User[];

	constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		// Following code just decouples by doing a deep copy of objects.
		// Code would be simpler without it, needed to show different usage between signals and RxJS
		// In a real app, you would never do this, but rather work with immutability and pure objects
		// Also, error handling is omitted for brevity

		// TL;DR this is just recieving and assigning API data response.

		this.userService.getAllUsers().subscribe((users) => {
			this.usersAsSignal.set(users.map((u) => ({ ...u })));
			this.usersAsObservableResponse = users.map((u) => ({ ...u }));
		});
	}

	public mutateFirstUser(): void {
		if (this.usersAsSignal()?.length) {
			const firstUser = this.usersAsSignal()![0];
			firstUser.name = firstUser.name + ' (mutated)';
			this.usersAsSignal.set([...this.usersAsSignal()!]);
			// No need to call markForCheck because signals automatically trigger change detection
		}

		if (this.usersAsObservableResponse?.length) {
			const firstUser = this.usersAsObservableResponse[0];
			firstUser.name = firstUser.name + ' (mutated)';
			this.usersAsObservableResponse = [...this.usersAsObservableResponse];
			// Need to call markForCheck because the array reference changed but Angular doesn't know about it
			this.cdr.markForCheck();
		}
	}
}
