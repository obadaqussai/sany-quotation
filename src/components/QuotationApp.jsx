import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CustomerForm from './CustomerForm';
import SalesmanForm from './SalesmanForm';
import ProductList from './ProductList';
import SavedQuotations from './SavedQuotations';
import PreviewModal from './PreviewModal';
import QuotationPDF from '../pdf/QuotationPDF';
import { products } from '../utils/dataUtils';
import { useLocalStorage } from '../utils/storageUtils';
import { buttonStyles } from '../styles/appStyles';

const QuotationApp = () => {
  const [customer, setCustomer] = useState({ 
    name: "", company: "", address: "", phone: "", email: "", taxId: "" 
  });
  const [items, setItems] = useState([]);
  const [salesman, setSalesman] = useState({ 
    name: "Obada Al-Darwish", mobile: "0554865105", email: "aldarwisho@sanygroup.com" 
  });
  const [showPreview, setShowPreview] = useState(false);
  const [quotations, setQuotations] = useLocalStorage('sany_quotations', []);
  const [nextQuoteNumber, setNextQuoteNumber] = useLocalStorage('last_quote_number', 1);
  const [currentQuoteNumber, setCurrentQuoteNumber] = useState('');
  const [isReadyForDownload, setIsReadyForDownload] = useState(false);
  const [quotationType, setQuotationType] = useState('cash'); // Default to cash sale

  const today = new Date().toLocaleDateString();

  const handleAddItem = () => {
    setItems([...items, { 
      product: products[0], 
      quantity: 1, 
      customPrice: products[0].price 
    }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const updateItem = (index, field, value) => {
    const updatedItems = [...items];
    
    if (field === "product") {
      updatedItems[index].product = value;
      updatedItems[index].customPrice = value.price;
    } else {
      updatedItems[index][field] = value;
    }
    
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const itemTotal = item.customPrice * item.quantity * 1.15;
      return total + itemTotal;
    }, 0);
  };

  const calculateInstallments = (total, priceAdjustment, downPaymentPercentage, interestRate, years) => {
    const downPayment = total * (downPaymentPercentage / 100);
    const loanAmount = total - downPayment + priceAdjustment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    return { downPayment, monthlyPayment, numberOfPayments };
  };

  const generateNewQuotation = () => {
    const quoteNumber = nextQuoteNumber.toString().padStart(4, '0');
    let quotationDetails = {
      id: Date.now(),
      quoteNumber,
      date: today,
      customer: { ...customer },
      items: [...items],
      salesman: { ...salesman },
      total: calculateTotal(),
    };

    if (quotationType === 'installment') {
      const installmentDetails = calculateInstallments(
        calculateTotal(),
        0, // Price adjustment
        25, // Down payment percentage
        6,  // Interest rate
        1.5 // Years
      );
      quotationDetails = { ...quotationDetails, installmentDetails };
    }

    setQuotations([...quotations, quotationDetails]);
    setNextQuoteNumber(nextQuoteNumber + 1);
    return quoteNumber;
  };

  const prepareForDownload = () => {
    if (!customer.name || !customer.company) {
      alert("Please fill in all required customer information");
      return;
    }

    if (items.length === 0) {
      alert("Please add at least one product");
      return;
    }

    const invalidItems = items.filter(item => 
      !item.product || 
      !item.quantity || 
      isNaN(item.customPrice)
    );

    if (invalidItems.length > 0) {
      alert("Some products have invalid data. Please check all product entries.");
      return;
    }

    try {
      const newQuoteNumber = generateNewQuotation();
      setCurrentQuoteNumber(newQuoteNumber);
      setIsReadyForDownload(true);
    } catch (error) {
      console.error("Quotation generation error:", error);
      alert("Failed to prepare quotation. Please try again.");
    }
  };

  const loadQuotation = (quote) => {
    setCustomer({ ...quote.customer });
    setItems([...quote.items]);
    setSalesman({ ...quote.salesman });
    setIsReadyForDownload(false);
  };

  const resetForm = () => {
    setCustomer({ name: "", company: "", address: "", phone: "", email: "", taxId: "" });
    setItems([]);
    setSalesman({ name: "Obada Al-Darwish", mobile: "0554865105", email: "aldarwisho@sanygroup.com" });
    setIsReadyForDownload(false);
  };

  return (
    <div className="app-container">
      <h2 className="app-title">SANY Quotation Generator</h2>
      
      <div className="app-grid">
        <div className="form-column">
          <CustomerForm customer={customer} onChange={setCustomer} />
          <SalesmanForm salesman={salesman} onChange={setSalesman} />
        </div>

        <div className="form-column">
          <label htmlFor="quotationType">Quotation Type:</label>
          <select
            id="quotationType"
            value={quotationType}
            onChange={(e) => setQuotationType(e.target.value)}
          >
            <option value="cash">Cash Sale</option>
            <option value="installment">Installment Sale</option>
          </select>
          <ProductList 
            items={items} 
            onAdd={handleAddItem} 
            onRemove={handleRemoveItem} 
            onUpdate={updateItem} 
          />
          <SavedQuotations quotations={quotations} onLoad={loadQuotation} />
        </div>
      </div>

      <div className="action-buttons">
        {isReadyForDownload ? (
          <PDFDownloadLink
            document={
              <QuotationPDF 
                customer={customer} 
                items={items} 
                quoteNumber={currentQuoteNumber}
                today={today} 
                salesman={salesman} 
              />
            }
            fileName={`SANY_Quotation_${customer.company || 'Customer'}_${currentQuoteNumber}.pdf`}
          >
            {({ blob, url, loading, error }) => {
              if (error) {
                console.error('Detailed PDF Error:', error);
                return (
                  <button style={buttonStyles.danger}>
                    Error: {error.message || 'Generating PDF'}
                  </button>
                );
              }
              return loading ? (
                <button style={buttonStyles.primary}>Preparing PDF...</button>
              ) : (
                <button style={buttonStyles.primary}>Download PDF</button>
              );
            }}
          </PDFDownloadLink>
        ) : (
          <button 
            onClick={prepareForDownload} 
            style={buttonStyles.primary}
          >
            Prepare PDF Download
          </button>
        )}
        
        <button 
          onClick={() => {
            if (items.length === 0) {
              alert("Please add at least one product to preview");
              return;
            }
            setShowPreview(!showPreview);
          }} 
          style={buttonStyles.secondary}
        >
          {showPreview ? "Hide Preview" : "Preview PDF"}
        </button>
        
        <button 
          onClick={resetForm}
          style={buttonStyles.danger}
        >
          Clear Form
        </button>
      </div>

      {showPreview && (
        <PreviewModal onClose={() => setShowPreview(false)}>
          <QuotationPDF 
            customer={customer} 
            items={items} 
            quoteNumber={currentQuoteNumber || nextQuoteNumber.toString().padStart(4, '0')}
            today={today} 
            salesman={salesman} 
          />
        </PreviewModal>
      )}
    </div>
  );
};

export default QuotationApp;