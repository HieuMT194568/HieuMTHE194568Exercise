import React, { useState } from 'react';

function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) {
      setResult('Please enter two numbers');
      return;
    }
    switch (operator) {
      case '+':
        setResult(x + y);
        break;
      case '-':
        setResult(x - y);
        break;
      case '*':
        setResult(x * y);
        break;
      case '/':
        setResult(y === 0 ? 'Cannot divide by 0' : x / y);
        break;
      default:
        setResult('');
    }
  };

  return (
    <div className="container my-4">
      <h2>2. Calculator</h2>
      <div className="d-flex gap-2 align-items-center" style={{ maxWidth: 600 }}>
        <input type="number" className="form-control" value={a} onChange={(e) => setA(e.target.value)} />
        <select className="form-select" style={{ width: 80 }} value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" className="form-control" value={b} onChange={(e) => setB(e.target.value)} />
        <button className="btn btn-success" onClick={calculate}>=</button>
      </div>
      <h4 className="mt-3">Result: {result}</h4>
    </div>
  );
}

export default Calculator;
