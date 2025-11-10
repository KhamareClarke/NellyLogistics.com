import { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nelly\'s Logistics',
  description: 'Privacy policy for Nelly\'s Logistics courier services.',
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Nelly&apos;s Logistics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our courier services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Name and contact information (email, phone number)</li>
            <li>Delivery addresses and postcodes</li>
            <li>Company details (if applicable)</li>
            <li>Shipment details and special instructions</li>
            <li>Payment information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide, maintain, and improve our courier services</li>
            <li>Process and complete deliveries</li>
            <li>Send you service-related communications</li>
            <li>Respond to your requests and inquiries</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
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
