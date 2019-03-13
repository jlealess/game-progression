import { Platform } from '../../models/platform.models';
import { GameInput } from '../../models/game.models';

export const mapPlatformsToGames = (platforms: Platform[], games: GameInput[]) => {
  return games.map(game => {
    const platform = platforms.find(
      platform => platform.id === game.platformId
    );
    const platformName = platform.name;
    return { 
      ...game, 
      platformName 
    }
  })
}

export const mapUserToGames = (user, games) => {
  return games.map(game => {
    const hoursLeft = game.numberOfHoursToComplete - game.numberOfHoursPlayed;
    const daysLeft = hoursLeft / user.averageNumberOfHoursPerDay;
    const percentCompleted = (game.numberOfHoursPlayed / game.numberOfHoursToComplete) * 100;
    const date = new Date();
    const completionDate = new Date(
      date.setDate(date.getDate() + daysLeft)
    ).toLocaleDateString("en-US");
    return {
      ...game,
      percentCompleted,
      completionDate
    }
  })
}