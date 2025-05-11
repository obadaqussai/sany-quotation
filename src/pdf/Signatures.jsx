import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import BilingualText from './BilingualText';

const Signatures = ({ today, salesman }) => (
  <View style={styles.signatureArea}>
    <View style={styles.signatureBox}>
      <BilingualText 
        english="Customer Signature" 
        arabic="توقيع العميل" 
      />
      <View style={styles.signatureLine} />
      <Text>Name: ________________________</Text>
      <Text>Date: ________________________</Text>
    </View>
    <View style={styles.signatureBox}>
      <BilingualText 
        english="Authorized Signature" 
        arabic="توقيع مفوض" 
      />
      <View style={styles.signatureLine} />
      <Text>Name: {salesman.name}</Text>
      <Text>Date: {today}</Text>
    </View>
  </View>
);

export default Signatures;