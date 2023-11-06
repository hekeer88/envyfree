import React, { FC } from 'react';
import './App.css';
import {useCreditCalculation} from "./hooks/useCreditCalculation";
import CreditScoreTable from "./components/CreditScoreTable";
import CreditCalculationForm from "./components/creditCalculationForm";
import {Button, Divider} from "antd";

const App: FC = () => {
  const { result, sliderValue, isValidResult, fieldValues, handleInputChange, onChangeValue} = useCreditCalculation();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Envy Free</h5>
          <div className="mb-4">
            <label htmlFor="formControlRange">Please select amount of members: {sliderValue}</label>
            <input
              type="range"
              className="form-range"
              id="formControlRange"
              min="3"
              max="10"
              value={sliderValue}
              onChange={onChangeValue}
            />
          </div>
          <CreditCalculationForm handleInputChange={handleInputChange} fieldValues={fieldValues} />
          <Divider />
          <Button type="primary" shape="round">Submit</Button>
          <Button type="primary" shape="round" danger>Clear</Button>
          <Divider />
          <CreditScoreTable results={result} isValidResult={isValidResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
