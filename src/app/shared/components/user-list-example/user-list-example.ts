import { Component, Input, input } from '@angular/core';
import { User } from '../../models/User.model';

@Component({
	selector: 'app-user-list-example',
	imports: [],
	templateUrl: './user-list-example.html',
	styleUrl: './user-list-example.css',
})
export class UserListExample {
	public usersSignal = input<User[] | undefined>();
	public errorSignal = input<string | null>();

	@Input() userFromRxJS!: User[];
}
