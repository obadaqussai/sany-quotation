import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import BilingualText from './BilingualText';

const TermsAndConditions = () => (
  <View style={styles.termsContainer}>
    <BilingualText 
      english="Terms and Conditions" 
      arabic="الشروط والأحكام" 
    />
    <View style={styles.footer}>
      <Text style={styles.footerText}>1. Payment Terms: 100% advance payment by bank transfer</Text>
      <Text style={styles.footerText}>2. Delivery: Ex-Dammam warehouse, subject to prior sale</Text>
      <Text style={styles.footerText}>3. Prices are in Saudi Riyals (SAR) and exclude transportation, insurance, and registration</Text>
      <Text style={styles.footerText}>4. Warranty: As specified in product catalogs</Text>
      <Text style={styles.footerText}>5. This quotation does not constitute an offer and is subject to change without notice</Text>
      <Text style={styles.footerText}>6. All disputes are subject to Saudi Arabian law and jurisdiction</Text>
    </View>
  </View>
);

export default TermsAndConditions;