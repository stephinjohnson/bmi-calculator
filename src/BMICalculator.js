import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('You have a normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center text-primary">BMI Calculator</h2>
        <div className="form-group">
          <label>Height (cm): </label>
          <input
            type="number"
            className="form-control"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Weight (kg): </label>
          <input
            type="number"
            className="form-control"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-4" onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-4">
            <h3 className="text-center">Your BMI: {bmi}</h3>
            <p className="text-center">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
