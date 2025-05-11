import React from 'react';
import { inputGroupStyle } from '../styles/appStyles';

const SavedQuotations = ({ quotations, onLoad }) => {
  return (
    <div style={inputGroupStyle}>
      <h4 style={{ color: "#e30613", marginBottom: "10px" }}>Saved Quotations</h4>
      {quotations.length === 0 ? (
        <p>No saved quotations yet</p>
      ) : (
        <div style={{ maxHeight: "200px", overflowY: "auto" }}>
          {quotations.map((quote) => (
            <div 
              key={quote.id} 
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f0f0f0"
                }
              }} 
              onClick={() => onLoad(quote)}
            >
              <div><strong>SANY-{quote.quoteNumber}</strong></div>
              <div>{quote.customer.company} - {quote.date}</div>
              <div>Total: SAR {quote.total.toLocaleString('en-US')}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedQuotations;