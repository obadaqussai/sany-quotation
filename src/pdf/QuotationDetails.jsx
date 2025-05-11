import React from 'react';
import { View } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import BilingualText from './BilingualText';

const QuotationDetails = ({ quoteNumber, today, validityDate, salesman }) => (
  <View style={styles.section}>
    <BilingualText 
      english="Quotation Details" 
      arabic="تفاصيل العرض" 
    />
    <View style={styles.twoColumn}>
      <View style={styles.column}>
        <BilingualText 
          english={`Quotation #: SANY-${quoteNumber}`} 
          arabic={`رقم العرض: SANY-${quoteNumber}`} 
        />
        <BilingualText 
          english={`Date: ${today}`} 
          arabic={`التاريخ: ${today}`} 
        />
        <BilingualText 
          english={`Validity: ${validityDate}`} 
          arabic={`الصلاحية: ${validityDate}`} 
        />
      </View>
      <View style={styles.column}>
        <BilingualText 
          english={`Salesman: ${salesman.name}`} 
          arabic={`مندوب المبيعات: ${salesman.name}`} 
        />
        <BilingualText 
          english={`Mobile: ${salesman.mobile}`} 
          arabic={`جوال: ${salesman.mobile}`} 
        />
        <BilingualText 
          english={`Email: ${salesman.email}`} 
          arabic={`بريد إلكتروني: ${salesman.email}`} 
        />
      </View>
    </View>
  </View>
);

export default QuotationDetails;