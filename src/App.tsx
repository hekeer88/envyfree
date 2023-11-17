import React, { FC } from 'react';
import './App.css';
import {useCreditCalculation} from "./hooks/useCreditCalculation";
import CreditScoreTable from "./components/CreditScoreTable";
import CreditCalculationForm from "./components/creditCalculationForm";
import {Button, Divider} from "antd";
import MembersForm from "./components/MembersForm";

const App: FC = () => {
  const {
    result,
    personCount,
    isValidResult,
    fieldValues,
    handleInputChange,
    onChangeMemberCountValue,
    personValues,
    onChangeMemberValue,
    clearValues
  } = useCreditCalculation();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Envy Free</h5>
          <div className="mb-4">
            <label htmlFor="formControlRange">Please select amount of members: {personCount}</label>
            <Divider />
            <input
              type="range"
              className="form-range"
              id="formControlRange"
              min="3"
              max="10"
              value={personCount}
              onChange={onChangeMemberCountValue}
            />
          </div>
          <MembersForm handleInputChange={onChangeMemberValue} persons={personValues} personCount={personCount} />
          <CreditCalculationForm handleInputChange={handleInputChange} fieldValues={fieldValues} />
          <Divider />
          <Button type="primary" shape="round">Submit</Button>
          <Button type="primary" shape="round" danger onClick={clearValues}>Clear</Button>
          <Divider />
          <CreditScoreTable results={result} isValidResult={isValidResult} persons={personValues} />
        </div>
      </div>
    </div>
  );
}

export default App;
