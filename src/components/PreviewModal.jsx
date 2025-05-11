import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { previewModalStyle, closeButtonStyle } from '../styles/appStyles';
// import QuotationPDF from '../pdf/QuotationPDF';

const PreviewModal = ({ children, onClose }) => {
  return (
    <div style={previewModalStyle}>
      <button 
        onClick={onClose} 
        style={closeButtonStyle}
        aria-label="Close preview"
      >
        ×
      </button>
      <PDFViewer 
        style={{ 
          width: '90%', 
          height: '90%',
          maxWidth: '800px',
          maxHeight: '600px'
        }}
      >
        {children}
      </PDFViewer>
    </div>
  );
};

export default PreviewModal;