export const useCreditCalculationForm = () => {
  const columnsPerRow = 12; // Bootstrap grid system is based on 12 columns

  const isRowValid = (rowValues: number[]): boolean  => {
    const sum = rowValues.reduce((acc, val) => acc + val, 0);
    const hasNoNegatives = rowValues.every(val => val >= 0);
    return hasNoNegatives && sum === 100;
  }

  return {
    isRowValid,
    columnsPerRow,
  }
}
