import React from 'react';
import { Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import sanyLogo from '../assets/sany-logo.png';
import productsImage from '../assets/products-collage.png';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#f8f8f8',
    position: 'relative'
  },
  border: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    border: '2px solid #e30613',
    borderRadius: 10
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#e30613",
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center'
  },
  productsImage: {
    width: '80%',
    height: 200,
    marginBottom: 30,
    objectFit: 'cover'
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  infoLabel: {
    fontWeight: 'bold',
    width: '40%'
  },
  infoValue: {
    width: '60%'
  }
});

const CoverPage = ({ quoteNumber, today, customer }) => (
  <Page size="A4" style={styles.page}>
    <View style={styles.border} />
    
    <View style={styles.content}>
      <Image src={sanyLogo} style={styles.logo} />
      
      <Text style={styles.title}>COMMERCIAL QUOTATION</Text>
      <Text style={styles.subtitle}>SANY Heavy Equipment</Text>
      
      <Image src={productsImage} style={styles.productsImage} />
      
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Customer:</Text>
          <Text style={styles.infoValue}>{customer.company || customer.name}</Text>
        </View>
      </View>
    </View>
  </Page>
);

export default CoverPage;