import { FileText } from 'lucide-react';

function TermsConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <FileText className="w-16 h-16 text-teal-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-gray-600">Last updated: March 2, 2026</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700">
            By accessing and using the Biotech website, you accept and agree to be bound by the terms and provisions 
            of this agreement. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
          <p className="text-gray-700 mb-3">
            Permission is granted to temporarily access the materials on Biotech's website for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <p className="text-gray-700">Under this license you may not:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Certification Programs</h2>
          <p className="text-gray-700">
            Enrollment in our certification programs is subject to availability and acceptance criteria. 
            We reserve the right to modify program content, schedules, and fees at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
          <p className="text-gray-700">
            All content, trademarks, and data on this website, including but not limited to software, databases, 
            text, graphics, icons, and hyperlinks, are the property of or licensed to Biotech and are protected 
            by applicable copyright and trademark laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700">
            Biotech shall not be liable for any damages arising out of or in connection with the use or inability 
            to use our services, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            For questions about these Terms & Conditions, please contact us at{' '}
            <a href="mailto:legal@biotech.com" className="text-teal-600 hover:text-teal-700">
              legal@biotech.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default TermsConditionsPage;
