import React from 'react';
import { Page, View, Text, Image } from '@react-pdf/renderer';
import styles  from '../styles/pdfStyles';
import BilingualText from './BilingualText';

const ProductCatalogPage = ({ product }) => {
  if (!product) {
    return (
      <Page size="A4" style={styles.catalogPage}>
        <Text>Error: Product information missing</Text>
      </Page>
    );
  }

  // Add image fallback
  const productImage = product.image || '../assets/default-product.png';

  return (
    <Page size="A4" style={styles.catalogPage}>
      <View style={styles.productHeader}>
        <Image src={productImage} style={styles.productImage} />
        <View>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text>{product.description}</Text>
        </View>
      </View>
      
      <BilingualText 
        english="Technical Specifications" 
        arabic="المواصفات الفنية" 
      />
      <View style={styles.specList}>
        {product.catalog?.technicalSpecs?.map((spec, i) => (
          <Text key={i} style={styles.specItem}>• {spec}</Text>
        ))}
      </View>
      
      <BilingualText 
        english="Standard Features" 
        arabic="المميزات القياسية" 
      />
      <View style={styles.specList}>
        {product.catalog?.features?.map((feature, i) => (
          <Text key={i} style={styles.specItem}>• {feature}</Text>
        ))}
      </View>
      
      <BilingualText 
        english="Warranty" 
        arabic="الضمان" 
      />
      <Text style={{ marginBottom: 10 }}>{product.catalog?.warranty || 'Not specified'}</Text>
    </Page>
  );
};

export default ProductCatalogPage;