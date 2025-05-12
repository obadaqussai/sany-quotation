import React from 'react';
import { inputGroupStyle } from '../styles/appStyles';

const PaymentOptions = ({ paymentType, setPaymentType, priceAdjustment, setPriceAdjustment }) => {
  return (
    <div style={inputGroupStyle}>
      <h4 style={{ color: "#e30613", marginBottom: "10px" }}>Payment Options</h4>
      
      <div style={{ marginBottom: "15px" }}>
        <label>
          <input
            type="radio"
            checked={paymentType === 'cash'}
            onChange={() => setPaymentType('cash')}
          />
          Cash Payment
        </label>
        
        <label style={{ marginLeft: "20px" }}>
          <input
            type="radio"
            checked={paymentType === 'installment'}
            onChange={() => setPaymentType('installment')}
          />
          Installment Plan
        </label>
      </div>

      {paymentType === 'installment' && (
        <div>
          <div style={{ marginBottom: "10px" }}>
            <label>Price Adjustment (SAR): </label>
            <input
              type="number"
              value={priceAdjustment}
              onChange={(e) => setPriceAdjustment(Number(e.target.value))}
              style={{ width: "100px", marginLeft: "10px" }}
              min="0"
            />
          </div>
          
          {/* Additional installment controls will go here */}
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;