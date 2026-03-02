import { Shield } from 'lucide-react';

function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Shield className="w-16 h-16 text-teal-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: March 2, 2026</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700">
            At Biotech, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-3">We may collect information about you in a variety of ways, including:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Educational background and professional information</li>
            <li>Usage data and analytics</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-3">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Provide and maintain our services</li>
            <li>Process your enrollment in certification programs</li>
            <li>Send you updates and marketing communications</li>
            <li>Improve our website and user experience</li>
            <li>Respond to your inquiries and support requests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@biotech.com" className="text-teal-600 hover:text-teal-700">
              privacy@biotech.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
