import { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Terms of Service | Nelly\'s Logistics',
  description: 'Terms of service for Nelly\'s Logistics courier services.',
};

export default function TermsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By using Nelly&apos;s Logistics courier services, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Nelly&apos;s Logistics provides courier and logistics services including same-day delivery, next-day
            delivery, time-critical transport, and specialized sector logistics across the UK and Europe.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Booking and Payment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All bookings are subject to availability and acceptance. Payment terms will be agreed upon at
            the time of booking. We accept various payment methods including invoice for approved accounts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Liability and Insurance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We maintain comprehensive goods in transit insurance up to £100,000. Our liability is subject to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Accurate description of goods at time of booking</li>
            <li>Proper packaging of shipments</li>
            <li>Compliance with prohibited items list</li>
            <li>Declared value not exceeding insurance limits</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Prohibited Items</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not transport illegal goods, dangerous materials (without proper authorization),
            perishable items (without prior arrangement), or items prohibited by UK law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Delivery Times</h2>
          <p className="text-gray-700 leading-relaxed">
            While we make every effort to meet agreed delivery times, delays may occur due to circumstances
            beyond our control including traffic, weather, or access issues. We are not liable for
            consequential losses resulting from delays.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cancellation Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Cancellations must be made before collection. Once a driver is dispatched, cancellation
            charges may apply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Disputes</h2>
          <p className="text-gray-700 leading-relaxed">
            Any disputes will be resolved in accordance with UK law. We aim to resolve all complaints
            within 7 working days.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions about these Terms of Service, contact us at:
          </p>
          <p className="text-gray-700 leading-relaxed">
            Email: info@nellyslogistics.com<br />
            Phone: +44 XXXX XXXXXX
          </p>
        </div>
      </Container>
    </Section>
  );
}
