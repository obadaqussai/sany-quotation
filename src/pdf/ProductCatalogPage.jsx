import React from 'react';
import { Page, View, Text, Image } from '@react-pdf/renderer';
import styles  from '../styles/pdfStyles';

const ProductCatalogPage = ({ product }) => (
  <Page size="A4" style={styles.catalogPage}>
    <View style={styles.productHeader}>
      <Image src={product.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.name}</Text>
      <Text>{product.description}</Text>
    </View>
  </Page>
);

export default ProductCatalogPage;