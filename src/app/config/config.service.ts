import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  languageId: number;
  averageNumberOfHoursPerDay: number;
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  profileEndpoint = 'http://localhost:3000/profile';

  getUser() {
    return this.http.get<User>(this.profileEndpoint);
  }
}