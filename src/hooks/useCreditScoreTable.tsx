export const useCreditScoreTable = () => {
  const prepareTableData = (results: number[] | null) => results?.map((result, index) => ({
    key: index + 1,
    memberNr: index + 1,
    score: result ? result.toFixed(2) : 0,
  }));

  const columns = [
    {
      title: 'Member nr',
      dataIndex: 'memberNr',
      key: 'memberNr',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ];

  return { prepareTableData, columns };
}
