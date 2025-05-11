import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import styles from '../styles/pdfStyles';
import BilingualText from './BilingualText';

const InstallmentPlans = ({ finalTotal }) => {
  const plans = [
    { months: 3, interest: 0, interestRate: 0 },
    { months: 6, interest: 5, interestRate: 0.05 },
    { months: 12, interest: 10, interestRate: 0.10 }
  ];
  
  return (
    <View style={styles.section}>
      <BilingualText 
        english="INSTALLMENT PLANS" 
        arabic="خطط التقسيط"
      />
      <View style={styles.installmentTable}>
        {/* Header */}
        <View style={[styles.installmentRow, styles.installmentHeader]}>
          <Text style={styles.installmentCell}>
            <BilingualText english="Months" arabic="شهور" />
          </Text>
          <Text style={styles.installmentCell}>
            <BilingualText english="Monthly Payment" arabic="الدفع الشهري" />
          </Text>
          <Text style={styles.installmentCell}>
            <BilingualText english="Interest" arabic="فائدة" />
          </Text>
          <Text style={styles.installmentCell}>
            <BilingualText english="Total Payment" arabic="إجمالي السداد" />
          </Text>
        </View>
        
        {/* Plan Rows */}
        {plans.map((plan, index) => {
          const totalWithInterest = finalTotal * (1 + plan.interestRate);
          const monthlyWithInterest = totalWithInterest / plan.months;
          
          return (
            <View style={styles.installmentRow} key={index}>
              <Text style={styles.installmentCell}>
                {plan.months} <Text style={{ fontFamily: 'Arabic' }}>شهور</Text>
              </Text>
              <Text style={styles.installmentCell}>
                {monthlyWithInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })} SAR
              </Text>
              <Text style={styles.installmentCell}>
                {plan.interest}%
              </Text>
              <Text style={styles.installmentCell}>
                {totalWithInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })} SAR
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default InstallmentPlans;