import React from 'react';
import { View, Image, Text } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import sanyLogo from '../assets/sany-logo.png';
import BilingualText from './BilingualText';

const HeaderSection = ({ quoteNumber, today }) => (
  <View style={styles.header}>
    <View style={styles.headerContainer}>
      <Image src={sanyLogo} style={styles.logo} />
      <View style={styles.companyInfo}>
        <Text style={styles.companyName}>SANY International Development Trading Co. LTD</Text>
        <Text>P.O. Box: 38653 Al Khobar 31942, Saudi Arabia</Text>
        <Text>Tel: 013 8820399 | www.Sanyglobal.com</Text>
      </View>
    </View>
    <BilingualText 
      english="COMMERCIAL QUOTATION" 
      arabic="عرض سعر تجاري" 
    />
  </View>
);

export default HeaderSection;