import React from 'react';
import { inputFieldStyle } from '../styles/appStyles';

const InputField = ({ label, type = "text", value, onChange }) => (
  <div style={{ marginBottom: "10px" }}>
    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>{label}</label>
    <input 
      type={type} 
      value={value} 
      onChange={onChange} 
      style={inputFieldStyle}
    />
  </div>
);

export default InputField;