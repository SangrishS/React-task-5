import React, { useState } from 'react';

const AgeCalculator = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [age, setAge] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(selectedDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </div>
      <button style={{ backgroundColor: 'cyan', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={calculateAge}>
        Calculate age
      </button>
      {age !== null && <p style={{ fontWeight: 'bold', marginTop: '20px' }}>You are {age} years old</p>}
    </div>
  );
};

export default AgeCalculator;
