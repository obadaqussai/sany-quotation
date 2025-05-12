export const calculateInstallments = (basePrice, adjustment, downPaymentPercent, interestRate, years) => {
  const adjustedPrice = basePrice + adjustment;
  const downPayment = (adjustedPrice * 1.15) * (downPaymentPercent / 100);
  const remainingAmount = (adjustedPrice * 1.15) - downPayment;
  const totalWithInterest = remainingAmount * (1 + interestRate / 100);
  const months = years * 12;
  const monthlyPayment = totalWithInterest / months;

  return {
    adjustedPrice,
    downPayment,
    monthlyPayment,
    totalPayment: downPayment + totalWithInterest,
    terms: `${years} year${years > 1 ? 's' : ''} (${months} months)`
  };
};