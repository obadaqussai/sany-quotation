import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import BilingualText from './BilingualText';

const ProductsTable = ({ items, subtotal, vatTotal, finalTotal }) => (
  <View>
    <BilingualText 
      english="Products & Services" 
      arabic="المنتجات والخدمات" 
    />
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={[styles.tableColHeader, styles.productCol]}>
          <BilingualText english="Product" arabic="المنتج" />
        </Text>
        <Text style={[styles.tableColHeader, styles.descriptionCol]}>
          <BilingualText english="Description" arabic="الوصف" />
        </Text>
        <Text style={[styles.tableColHeader, styles.numberCol]}>
          <BilingualText english="Unit Price" arabic="سعر الوحدة" />
        </Text>
        <Text style={[styles.tableColHeader, styles.numberCol]}>
          <BilingualText english="Qty" arabic="الكمية" />
        </Text>
        <Text style={[styles.tableColHeader, styles.numberCol]}>
          <BilingualText english="Price" arabic="السعر" />
        </Text>
        <Text style={[styles.tableColHeader, styles.numberCol]}>
          <BilingualText english="VAT (15%)" arabic="ضريبة (15%)" />
        </Text>
        <Text style={[styles.tableColHeader, styles.numberCol]}>
          <BilingualText english="Total" arabic="الإجمالي" />
        </Text>
      </View>
      
      {items.map((item, index) => {
        const itemTotal = item.customPrice * item.quantity;
        const vat = itemTotal * 0.15;
        const finalItemTotal = itemTotal + vat;

        return (
          <View style={[styles.tableRow, index % 2 === 0 ? styles.tableRowAlt : null]} key={index}>
            <Text style={[styles.tableCol, styles.productCol]}>{item.product.name}</Text>
            <Text style={[styles.tableCol, styles.descriptionCol]}>{item.product.description}</Text>
            <Text style={[styles.tableCol, styles.numberCol]}>{item.customPrice.toLocaleString('en-US')}</Text>
            <Text style={[styles.tableCol, styles.numberCol]}>{item.quantity}</Text>
            <Text style={[styles.tableCol, styles.numberCol]}>{itemTotal.toLocaleString('en-US')}</Text>
            <Text style={[styles.tableCol, styles.numberCol]}>{vat.toLocaleString('en-US')}</Text>
            <Text style={[styles.tableCol, styles.numberCol]}>{finalItemTotal.toLocaleString('en-US')}</Text>
          </View>
        );
      })}
      
      {/* Total Row */}
      <View style={[styles.tableRow, styles.totalRow]}>
        <Text style={[styles.tableCol, styles.productCol, { textAlign: 'right', fontWeight: 'bold' }]} colSpan={4}>
          <BilingualText english="TOTAL (SAR)" arabic="الإجمالي (ريال)" />
        </Text>
        <Text style={[styles.tableCol, styles.numberCol, styles.totalCell]}>{subtotal.toLocaleString('en-US')}</Text>
        <Text style={[styles.tableCol, styles.numberCol, styles.totalCell]}>{vatTotal.toLocaleString('en-US')}</Text>
        <Text style={[styles.tableCol, styles.numberCol, styles.totalCell]}>{finalTotal.toLocaleString('en-US')}</Text>
      </View>
    </View>
  </View>
);

export default ProductsTable;