import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from './bg.jpg'; 

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male'); 
  const [bmi, setBMI] = useState(null);
  const [showOutput, setShowOutput] = useState(false);

  const calculateBMI = (e) => {
    e.preventDefault(); 
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseInt(age);

    if (weightNum > 0 && heightNum > 0 && ageNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBMI(bmiValue.toFixed(2));
      setShowOutput(true);
    } else {
      setBMI(null);
      setShowOutput(false);
    }
  };

  const getBMICategory = () => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const getWarningMessage = () => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'You are underweight. Consult a doctor.';
    if (bmi >= 18.5 && bmi < 25) return 'You are in a healthy weight range. Keep it up!';
    if (bmi >= 25 && bmi < 30) return 'You are overweight. Consider losing weight.';
    return 'You are obese. Immediate action required.';
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('Male');
    setBMI(null);
    setShowOutput(false);
  };

  return (
    <div>
      <div className="container-fluid mx-auto d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: '50%' }}>
          <h5 className="card-header bg-primary text-white">BMI Calculator</h5>
          <div className="card-body">
            <form onSubmit={calculateBMI}>
              <div>
                <div className="mb-3">
                  <label htmlFor="weight" className="form-label">Weight (kg):</label>
                  <input
                    type="number"
                    className="form-control"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="height" className="form-label">Height (m):</label>
                  <input
                    type="number"
                    className="form-control"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Gender:</label><br/>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mr-4 button-space">Calculate BMI</button>
                <button type="button" className="btn btn-secondary ml-4" onClick={resetForm}>Reset</button>
              </div>
            </form>
            {showOutput && (
              <div className="mt-3 d-flex justify-content-center">
                <table className="table table-bordered colored-table" style={{ width: '70%' }}>
                  <tbody style={{ backgroundColor: '#f5f5f5' }}>
                    <tr>
                      <td>Your BMI is:</td>
                      <td>{bmi}</td>
                    </tr>
                    <tr>
                      <td>BMI Category:</td>
                      <td>{getBMICategory()}</td>
                    </tr>
                    <tr>
                      <td>Warning:</td>
                      <td>{getWarningMessage()}</td>
                    </tr>
                    <tr>
                      <td>Age:</td>
                      <td>{age}</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td>{gender}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        body {
          background-image: url(${bgImage});
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center;
          min-height: 100vh;
        }
        .colored-table tbody {
          background-color: #f5f5f5;
        }
        .button-space {
          margin-right: 15px; /* Adjust as needed */
      }
      `}</style>
    </div>
  );
};

export default BMI;
