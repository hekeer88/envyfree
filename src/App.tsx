import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [sliderValue, setSliderValue] = useState(3);
  const initialFieldValues = Array.from({ length: sliderValue }, () => 
    Array(sliderValue).fill(0)
  );
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  useEffect(() => {
    setFieldValues(Array.from({ length: sliderValue }, () => Array(sliderValue).fill(0)));
  }, [sliderValue]);

  function handleInputChange(row: number, col: number, value: number) {
    const newFieldValues = [...fieldValues];
    newFieldValues[row][col] = value;
    setFieldValues(newFieldValues);
  }

  function isRowValid(rowValues: number[]): boolean {
    const sum = rowValues.reduce((acc, val) => acc + val, 0);
    const hasNoNegatives = rowValues.every(val => val >= 0);
    return hasNoNegatives && sum === 100;
  }

  function generateFormFields() {
    const columnsPerRow = 12; // Bootstrap grid system is based on 12 columns
    return fieldValues.map((rowValues, rowIndex) => {
      const colSize = Math.floor(columnsPerRow / rowValues.length);
      const colClass = `col-${colSize > 0 ? colSize : 1}`; // Ensure there's at least col-1
  
      return (
        <div key={`row-${rowIndex}`} className="row mb-2 justify-content-center">
          {rowValues.map((value, colIndex) => {
            const isValidRow = isRowValid(rowValues);
            return (
              <div key={`col-${rowIndex}-${colIndex}`} className={colClass}>
                <input
                  type="number"
                  className={`form-control ${isValidRow ? 'is-valid' : 'is-invalid'}`}
                  placeholder={`Field ${colIndex + 1}`}
                  value={value}
                  onChange={(e) => handleInputChange(rowIndex, colIndex, Number(e.target.value))}
                />
              </div>
            );
          })}
        </div>
      );
    });
  }
  
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
              onChange={(e) => setSliderValue(Number(e.target.value))}
            />
          </div>
          <form>
            {generateFormFields()}
            {/* Additional form elements here if needed */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
