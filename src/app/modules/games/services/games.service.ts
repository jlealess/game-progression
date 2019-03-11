import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Game } from '../../../models/game.models';
import { Platform } from '../../../models/platform.models';

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) {}

  apiUrl = "http://localhost:3000";

  gamesEndpoint = `${this.apiUrl}/games`;
  platformsEndpoint = `${this.apiUrl}/platforms`;

  getGames() {
    return this.http.get<Game[]>(this.gamesEndpoint, {
      observe: 'body',
      responseType: 'json'
    });
  }

  updateGames(games: Game[]) {
    return this.http.put<Game[]>(this.gamesEndpoint, games);
  }

  getPlatforms() {
    return this.http.get<any>(this.platformsEndpoint, {
      observe: "body",
      responseType: "json"
    });
  }
}
