export const useCreditScoreTable = () => {
  const prepareTableData = (results: number[] | null, persons: string[]) => results?.map((result, index) => ({
    key: index + 1,
    member: persons[index],
    score: result ? result.toFixed(2) : 0,
  }));

  const columns = [
    {
      title: 'Member',
      dataIndex: 'member',
      key: 'member',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ];

  return { prepareTableData, columns };
}
