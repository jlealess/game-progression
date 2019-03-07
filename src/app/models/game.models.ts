export interface Game {
  id: number,
  dateCreated: string,
  name: string,
  image: string,
  platformId: number,
  priority: number,
  numberOfHoursPlayed: number,
  numberOfHoursToComplete: number,
  isComplete: boolean
}