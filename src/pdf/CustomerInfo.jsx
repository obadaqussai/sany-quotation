import React from 'react';
import { View } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import BilingualText from './BilingualText';

const CustomerInfo = ({ customer }) => (
  <View style={styles.section}>
    <BilingualText 
      english="Customer Information" 
      arabic="بيانات العميل" 
    />
    <View style={styles.twoColumn}>
      <View style={styles.column}>
        <BilingualText 
          english={`Name: ${customer.name}`} 
          arabic={`الاسم: ${customer.name}`} 
        />
        <BilingualText 
          english={`Company: ${customer.company}`} 
          arabic={`الشركة: ${customer.company}`} 
        />
        <BilingualText 
          english={`Address: ${customer.address}`} 
          arabic={`العنوان: ${customer.address}`} 
        />
      </View>
      <View style={styles.column}>
        <BilingualText 
          english={`Phone: ${customer.phone}`} 
          arabic={`هاتف: ${customer.phone}`} 
        />
        <BilingualText 
          english={`Email: ${customer.email}`} 
          arabic={`بريد إلكتروني: ${customer.email}`} 
        />
        <BilingualText 
          english={`Tax ID / CR: ${customer.taxId}`} 
          arabic={`السجل الضريبي: ${customer.taxId}`} 
        />
      </View>
    </View>
  </View>
);

export default CustomerInfo;