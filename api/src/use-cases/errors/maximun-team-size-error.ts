export class MaximumTeamSizeError extends Error {
  constructor() {
    super('Maximum team size reached.');
  }
}
