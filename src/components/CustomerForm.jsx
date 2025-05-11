import React from 'react';
import InputField from './InputField';
import { inputGroupStyle } from '../styles/appStyles';

const CustomerForm = ({ customer, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...customer, [field]: value });
  };

  return (
    <div style={inputGroupStyle}>
      <h4 style={{ color: "#e30613", marginBottom: "10px" }}>Customer Information</h4>
      <InputField 
        label="Customer Name" 
        value={customer.name} 
        onChange={(e) => handleChange('name', e.target.value)} 
      />
      <InputField 
        label="Company" 
        value={customer.company} 
        onChange={(e) => handleChange('company', e.target.value)} 
      />
      <InputField 
        label="Address" 
        value={customer.address} 
        onChange={(e) => handleChange('address', e.target.value)} 
      />
      <InputField 
        label="Phone" 
        value={customer.phone} 
        onChange={(e) => handleChange('phone', e.target.value)} 
      />
      <InputField 
        label="Email" 
        type="email" 
        value={customer.email} 
        onChange={(e) => handleChange('email', e.target.value)} 
      />
      <InputField 
        label="Tax ID / CR" 
        value={customer.taxId} 
        onChange={(e) => handleChange('taxId', e.target.value)} 
      />
    </div>
  );
};

export default CustomerForm;