import './globals.css';
import type { Metadata } from 'next';
import ButtonCall from './ButtonCall';

export const metadata: Metadata = {
  title: 'Best Appliance Repair Services Near Me | 24x7 Customer Service India | Washing Machine, Refrigerator, TV Repair',
  description: 'Professional appliance repair services for washing machines, refrigerators, TVs, AC, microwave, dishwasher repair. Same day service, affordable rates, expert technicians. Call now for 24/7 customer support across India.',
  keywords: 'appliance repair, washing machine repair, refrigerator repair, TV repair, AC repair, microwave repair, dishwasher repair, home appliance service, appliance technician near me, same day repair, 24/7 customer service India',
  openGraph: {
    title: 'Best Appliance Repair Services Near Me | 24x7 Customer Service India',
    description: 'Professional appliance repair services with same day service and 24/7 support. Expert technicians for all major appliances.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Appliance Repair Services | 24x7 Customer Service India',
    description: 'Professional appliance repair services with same day service and 24/7 support across India.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://24x7customerserviceindia.in/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-arial" style={{ fontWeight: 400 }}>
        {children}
        <ButtonCall />
      </body>
    </html>
  );
}