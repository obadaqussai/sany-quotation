import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import { translations } from '../utils/translations';

const BilingualText = ({ english, arabic }) => {
  const translatedEnglish = translations.en[english] || english;
  const translatedArabic = translations.ar[arabic] || arabic || english;
  
  return (
    <View style={styles.bilingualRow}>
      <Text style={styles.englishText}>{translatedEnglish}</Text>
      <Text style={styles.arabicText}>{translatedArabic}</Text>
    </View>
  );
};

export default BilingualText;