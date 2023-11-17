import React, { FC } from 'react';
import {Table, Empty} from "antd";
import {useCreditScoreTable} from "../hooks/useCreditScoreTable";

export interface IDisplayCreditResultsProps {
  results: number[] | null
  isValidResult: boolean;
  persons: string[];
}

const CreditScoreTable: FC<IDisplayCreditResultsProps> = ({ results, isValidResult, persons }: IDisplayCreditResultsProps) => {
  const { prepareTableData, columns} = useCreditScoreTable();

  return (<div>
    <h3>Results of calculation</h3>
    {isValidResult ?
      <Table dataSource={prepareTableData(results, persons)} columns={columns} pagination={false} /> :
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    }
  </div>);
};

export default CreditScoreTable;
