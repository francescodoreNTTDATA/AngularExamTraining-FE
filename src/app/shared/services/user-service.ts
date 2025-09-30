import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private BASE_URL = 'http://localhost:4100/api'; // Bad practice, doesn't matter for this demo

	private httpClient: HttpClient = inject(HttpClient);

	public getAllUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(`${this.BASE_URL}/users`);
	}
}
