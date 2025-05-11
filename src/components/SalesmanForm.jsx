import React from 'react';
import InputField from './InputField';
import { inputGroupStyle } from '../styles/appStyles';

const SalesmanForm = ({ salesman, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...salesman, [field]: value });
  };

  return (
    <div style={inputGroupStyle}>
      <h4 style={{ color: "#e30613", marginBottom: "10px" }}>Salesman Information</h4>
      <InputField 
        label="Name" 
        value={salesman.name} 
        onChange={(e) => handleChange('name', e.target.value)} 
      />
      <InputField 
        label="Mobile" 
        value={salesman.mobile} 
        onChange={(e) => handleChange('mobile', e.target.value)} 
      />
      <InputField 
        label="Email" 
        type="email" 
        value={salesman.email} 
        onChange={(e) => handleChange('email', e.target.value)} 
      />
    </div>
  );
};

export default SalesmanForm;