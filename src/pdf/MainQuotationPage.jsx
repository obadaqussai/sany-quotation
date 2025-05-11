import React from 'react';
import { Page, View } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import HeaderSection from './HeaderSection';
import QuotationDetails from './QuotationDetails';
import CustomerInfo from './CustomerInfo';
import ProductsTable from './ProductsTable';
import InstallmentPlans from './InstallmentPlans';
import TermsAndConditions from './TermsAndConditions';
import Signatures from './Signatures';
import BilingualText from './BilingualText';

const MainQuotationPage = ({ 
  customer, 
  items, 
  quoteNumber, 
  today, 
  salesman, 
  validityDate 
}) => {
  // Calculate totals
  const { subtotal, vatTotal, finalTotal } = items.reduce((totals, item) => {
    const itemTotal = item.customPrice * item.quantity;
    const vat = itemTotal * 0.15;
    
    totals.subtotal += itemTotal;
    totals.vatTotal += vat;
    totals.finalTotal += itemTotal + vat;
    
    return totals;
  }, { subtotal: 0, vatTotal: 0, finalTotal: 0 });

  return (
    <Page size="A4" style={styles.page}>
      <HeaderSection quoteNumber={quoteNumber} today={today} />
      <QuotationDetails 
        quoteNumber={quoteNumber} 
        today={today} 
        validityDate={validityDate} 
        salesman={salesman} 
      />
      <CustomerInfo customer={customer} />
      <ProductsTable items={items} subtotal={subtotal} vatTotal={vatTotal} finalTotal={finalTotal} />
      <View style={styles.validity}>
        <BilingualText 
          english={`This quotation is valid until ${validityDate}`} 
          arabic={`هذا العرض ساري حتى ${validityDate}`} 
        />
      </View>
      <InstallmentPlans finalTotal={finalTotal} />
      <TermsAndConditions />
      <Signatures today={today} salesman={salesman} />
    </Page>
  );
};

export default MainQuotationPage;