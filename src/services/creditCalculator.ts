export default class AssignCredit {

  /**
   * @param {number} personCount: Number of individuals
   * @param {number[][]} contributions: List of lists where contributions[i][j] represents the credit person i assigns to person j
   */
  public static calculate(personCount: number, contributions: number[][]): number[] {
    const averageCredits: number[] = [];

    try {
      AssignCredit.validateAssignCreditData(personCount, contributions);
    } catch (err) {
      throw err;
    }

    // Compute the average credit for each individual
    for (let j = 0; j < personCount; j++) {
      let sum = 0;
      for (let i = 0; i < personCount; i++) {
        sum += contributions[i][j];
      }
      averageCredits.push(sum / personCount);
    }

    // Normalize the credits so they sum to 100
    const total_credit: number = averageCredits.reduce((sum, credit) => sum + credit, 0);
    return averageCredits.map((credit) => (credit * 100) / total_credit);
  }

  private static validateAssignCreditData = (personCount: number, contributions: number[][]): void | Error => {
    if (personCount !== contributions.length) {
      throw new Error('Person count should be equal as length of contributions');
    }

    for (const contribution of contributions) {
      if (personCount !== contribution.length) {
        throw new Error('Person count should be equal as length of each contribution');
      }
    }
  }
}
