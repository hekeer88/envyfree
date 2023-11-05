import React, { useState } from 'react';
import './App.css';

function App() {
  const [sliderValue, setSliderValue] = useState(3);

  function generateFormFields(sliderValue: number) {
    let formUI = [];
    for (let i = 0; i < sliderValue; i++) {
      let rowUI = [];
      for (let j = 0; j < sliderValue; j++) {
        rowUI.push(
          <div key={`col-${i}-${j}`} className="col">
            <input type="number" className="form-control" placeholder={`Field ${j + 1}`} />
          </div>
        );
      }
      formUI.push(
        <div key={`row-${i}`} className="row mb-2 justify-content-center">
          {rowUI}
        </div>
      );
    }
    return formUI;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Envy Free</h5>
          <div className="mb-4">
            <label htmlFor="formControlRange">
              Adjust number of rows and columns: {sliderValue}
            </label>
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
            {generateFormFields(sliderValue)}
            {/* Add submit button or other elements if necessary */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
