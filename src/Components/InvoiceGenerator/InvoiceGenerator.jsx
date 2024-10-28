import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF';

const InvoiceGenerator = () => {
  const invoiceData = {
    customerName: 'John Doe',
    companyName: 'Example Inc.',
    address: '1234 Street Name',
    city: 'City Name',
    phone: '123-456-7890',
    email: 'john@example.com',
    items: [
      { name: 'LCD Monitor', price: 650 },
      { name: 'H1 Gamepad', price: 1100 },
    ],
    subtotal: 1750,
    shipping: 'Free',
    total: 1750,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold text-gray-700">Invoice Generator</h1>
        <PDFDownloadLink
          document={<InvoicePDF invoiceData={invoiceData} />}
          fileName="invoice.pdf"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download Invoice PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
