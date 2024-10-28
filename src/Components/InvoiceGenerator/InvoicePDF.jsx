import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const InvoicePDF = ({ invoiceData }) => {
  const { customerName, companyName, address, city, phone, email, items, total, subtotal, shipping } = invoiceData;

  return (
    <Document>
      <Page style={styles.body}>
        {/* Header */}
        <Text style={styles.title}>Invoice</Text>
        <Text style={styles.subtitle}>Billing Details</Text>

        {/* Billing Details */}
        <View style={styles.section}>
          <Text style={styles.text}>First Name: {customerName}</Text>
          <Text style={styles.text}>Company Name: {companyName}</Text>
          <Text style={styles.text}>Address: {address}</Text>
          <Text style={styles.text}>City: {city}</Text>
          <Text style={styles.text}>Phone: {phone}</Text>
          <Text style={styles.text}>Email: {email}</Text>
        </View>

        {/* Order Summary */}
        <Text style={styles.subtitle}>Order Summary</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, styles.bold]}>Item</Text>
            <Text style={[styles.tableCol, styles.bold]}>Price</Text>
          </View>
          {items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCol}>{item.name}</Text>
              <Text style={styles.tableCol}>${item.price}</Text>
            </View>
          ))}
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Subtotal</Text>
            <Text style={styles.tableCol}>${subtotal}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Shipping</Text>
            <Text style={styles.tableCol}>{shipping}</Text>
          </View>
          <View style={[styles.tableRow, styles.bold]}>
            <Text style={styles.tableCol}>Total</Text>
            <Text style={styles.tableCol}>${total}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Tailwind-like styles for the PDF
const styles = StyleSheet.create({
  body: {
    padding: 20,
    fontFamily: 'Helvetica',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#1f2937',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#374151',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  text: {
    fontSize: 12,
    color: '#4b5563',
    marginBottom: 4,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingVertical: 4,
  },
  tableCol: {
    width: '50%',
    fontSize: 12,
    color: '#111827',
    paddingVertical: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default InvoicePDF;
