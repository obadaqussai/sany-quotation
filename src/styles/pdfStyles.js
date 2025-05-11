import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  // Cover Page Styles
  coverPage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 30
  },
  coverLogo: {
    width: 200,
    height: 100,
    marginBottom: 20
  },
  coverTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#e30613",
    marginBottom: 10,
    fontFamily: 'Helvetica-Bold'
  },
  coverTitleArabic: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#e30613",
    marginBottom: 30,
    fontFamily: 'Arabic',
    textAlign: 'right',
    direction: 'rtl'
  },
  coverNumber: {
    fontSize: 16,
    marginBottom: 5
  },
  coverDate: {
    fontSize: 14
  },
  
  // Bilingual Layout Styles
  bilingualRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  englishText: {
    width: '48%',
    textAlign: 'left',
    fontFamily: 'Helvetica'
  },
  arabicText: {
    width: '48%',
    textAlign: 'right',
    fontFamily: 'Arabic',
    direction: 'rtl'
  },
  
  // Main Document Styles
  page: { 
    padding: 30,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#333',
    lineHeight: 1.4,
    display: 'flex',
    flexDirection: 'column',
  },
  header: { 
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#e30613",
    paddingBottom: 15,
    textAlign: "center",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: { 
    width: 200,
    height: 100,
    marginRight: 15,
  },
  companyInfo: {
    textAlign: 'left',
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#e30613",
    marginBottom: 3,
    fontFamily: 'Helvetica-Bold',
  },
  section: { 
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderLeftWidth: 3,
    borderLeftColor: "#e30613",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#e30613",
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  column: {
    width: '48%',
  },
  label: { 
    fontWeight: "bold",
    color: "#000",
    fontFamily: 'Helvetica-Bold',
  },
  table: { 
    width: "100%",
    marginBottom: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 3,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#e30613",
    color: "#fff",
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    textAlign: "center",
  },
  tableRow: { 
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    alignItems: 'center',
  },
  tableRowAlt: { 
    backgroundColor: "#f9f9f9",
  },
  tableColHeader: {
    padding: 8,
    fontWeight: 'bold',
    textAlign: "center",
  },
  tableCol: {
    padding: 8,
    textAlign: "center",
    fontSize: 9,
  },
  productCol: {
    width: '18%',
  },
  descriptionCol: {
    width: '22%',
  },
  numberCol: {
    width: '10%',
  },
  totalRow: {
    backgroundColor: "#f2f2f2",
    fontFamily: 'Helvetica-Bold',
    borderTopWidth: 2,
    borderTopColor: '#e30613',
    borderTopStyle: 'solid',
    paddingVertical: 4,
  },
  totalCell: {
    fontWeight: 'bold',
    color: "#e30613",
    textAlign: 'center',
  },
  validity: {
    backgroundColor: '#fff8e6',
    padding: 5,
    borderRadius: 3,
    textAlign: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ffe8a1',
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
  },
  termsContainer: {
    marginBottom: 15,
  },
  footer: { 
    padding: 10,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    color: '#e30613',
  },
  footerTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold',
  },
  footerText: { 
    fontSize: 8,
    marginBottom: 3,
  },
  signatureArea: {
    marginTop: 'auto',
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signatureBox: {
    width: '45%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    textAlign: 'center',
  },
  signatureLine: {
    height: 1,
    backgroundColor: '#000',
    margin: '20px 0',
  },
  
  // Product Catalog Styles
  catalogPage: {
    padding: 30,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#333',
    lineHeight: 1.4
  },
  productHeader: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center'
  },
  productImage: {
    width: 150,
    height: 100,
    marginRight: 15
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#e30613",
    marginBottom: 5
  },
  specList: {
    marginBottom: 10
  },
  specItem: {
    marginBottom: 3
  },
  featureList: {
    marginLeft: 10
  },
  
  // Installment Plan Styles
  installmentTable: {
    width: '100%',
    marginTop: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  installmentRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  installmentCell: {
    padding: 8,
    width: '25%',
    textAlign: 'center',
    fontSize: 9
  },
  installmentHeader: {
    backgroundColor: '#e30613',
    color: '#fff',
    fontFamily: 'Helvetica-Bold'
  }
});

export default styles;