import React from 'react';
import { Page, Image, Text } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import sanyLogo from '../assets/sany-logo.png';

const CoverPage = ({ quoteNumber, today }) => (
  <Page size="A4" style={styles.coverPage}>
    <Image src={sanyLogo} style={styles.coverLogo} />
    <Text style={styles.coverTitle}>COMMERCIAL QUOTATION</Text>
    <Text style={styles.coverTitleArabic}>عرض سعر تجاري</Text>
    <Text style={styles.coverNumber}>Quotation #: SANY-{quoteNumber}</Text>
    <Text style={styles.coverDate}>Date: {today}</Text>
  </Page>
);

export default CoverPage;