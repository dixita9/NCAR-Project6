import React, { useState } from 'react';


export function CalcOne() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [divisionResult, setDivisionResult] = useState('');

  const handleCalculation = () => {
    const x = parseFloat(inputOne);
    const y = parseFloat(inputTwo);

    if (!isNaN(x) && !isNaN(y)) {
      const division = x / y;
      setDivisionResult(division);
    }
};

return (
    <div>
      <ol>
        <li>Determine the following:</li>
        <p>Total number of independent grid-points</p>
        <input
          type="text"
          value={inputOne}
          onChange={(e) => setInputOne(e.target.value)}
        />
        <br />
        <br />
        <p>Number of &#123;node, GPU&#125;: per run</p>
        <input
          type="text"
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleCalculation}>Calculate</button>
        <p>Number of grid-points per &#123;node, GPU&#125;: {divisionResult}</p>
      </ol>
    </div>
  );
}

export default CalcOne;
