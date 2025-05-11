import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const saveQuotation = (quotation) => {
  const quotations = JSON.parse(localStorage.getItem('sany_quotations') || '[]');
  quotations.push(quotation);
  localStorage.setItem('sany_quotations', JSON.stringify(quotations));
};

export const loadQuotations = () => {
  return JSON.parse(localStorage.getItem('sany_quotations') || '[]');
};

export const getNextQuoteNumber = () => {
  const lastNumber = parseInt(localStorage.getItem('last_quote_number') || '0');
  const nextNumber = lastNumber + 1;
  localStorage.setItem('last_quote_number', nextNumber.toString());
  return nextNumber;
};