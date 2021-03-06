import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Game, GameInput } from '../../../models/game.models';
import { Platform } from '../../../models/platform.models';

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) {}

  apiUrl = "http://localhost:3000";

  gamesEndpoint = `${this.apiUrl}/games`;
  platformsEndpoint = `${this.apiUrl}/platforms`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getGames() {
    return this.http.get<GameInput[]>(this.gamesEndpoint, {
      observe: 'body',
      responseType: 'json'
    });
  }

  getGame(gameId: number) {
    return this.http.get<GameInput>(`${this.gamesEndpoint}?id=${gameId}`, {
      observe: 'body',
      responseType: 'json'
    })
  }

  updateGames(games: GameInput[]) {
    return this.http.put<GameInput[]>(this.gamesEndpoint, games);
  }

  updateGame(game: GameInput) {
    return this.http.put<GameInput>(`${this.gamesEndpoint}/${game.id}`, game);
  }

  deleteGame(gameId: number) {
    return this.http.delete<number>(`${this.gamesEndpoint}/${gameId}`);
  }

  addGame(game: GameInput) {
    return this.http.post<GameInput>("http://localhost:3000/games", game, this.httpOptions);
  }

  getPlatforms() {
    return this.http.get<Platform[]>(this.platformsEndpoint, {
      observe: "body",
      responseType: "json"
    });
  }
}
