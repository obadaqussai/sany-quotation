import React, { useMemo, useEffect } from "react";
import { Document, Page, Text } from "@react-pdf/renderer";
import CoverPage from './CoverPage';
import MainQuotationPage from './MainQuotationPage';
import ProductCatalogPage from './ProductCatalogPage';
import PdfErrorBoundary from './PdfErrorBoundary';
import registerFonts from './fonts';

const QuotationPDF = ({ customer, items, quoteNumber, today, salesman }) => {
  useEffect(() => {
    registerFonts();
  }, []);

  const validityDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }, []);

  // Validate props
  if (!customer || !items || !quoteNumber || !today || !salesman) {
    return (
      <Document>
        <Page>
          <Text>Error: Missing required quotation data</Text>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <PdfErrorBoundary>
        <CoverPage quoteNumber={quoteNumber} today={today} customer={customer} />
        <MainQuotationPage 
          customer={customer}
          items={items}
          quoteNumber={quoteNumber}
          today={today}
          salesman={salesman}
          validityDate={validityDate}
        />
        {items.map((item, index) => (
          <ProductCatalogPage key={`catalog-${index}`} product={item.product} />
        ))}
      </PdfErrorBoundary>
    </Document>
  );
};

export default QuotationPDF;