export const mapToDashboardState = (games, user) => {
    const hoursPerDay = user.averageNumberOfHoursPerDay;
    const finishedGames = games.filter((game) => game.isComplete).length;
    const unfinishedGames = games.filter((game) => !game.isComplete).length;
    const hoursRemaining = games.filter(game => !game.isComplete)
      .map(game => {
        return game.numberOfHoursToComplete - game.numberOfHoursPlayed;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    const timeRemaining = hoursRemaining / hoursPerDay;
    return {
      timeRemaining,
      finishedGames,
      unfinishedGames
    };
}