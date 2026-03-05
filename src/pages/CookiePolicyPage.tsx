import { Cookie } from 'lucide-react';

function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
      <div className="text-center mb-12">
        <Cookie className="w-16 h-16 text-teal-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-gray-600">Last updated: March 2, 2026</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
          <p className="text-gray-700">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
            They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
          <p className="text-gray-700 mb-3">We use cookies for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Preference cookies: Remember your settings and preferences</li>
            <li>Marketing cookies: Track your browsing habits to show relevant advertisements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
          <p className="text-gray-700">
            You can control and manage cookies in your browser settings. Please note that removing or blocking cookies 
            may impact your user experience and some features of our website may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about our use of cookies, please contact us at{' '}
            <a href="mailto:privacy@biotech.com" className="text-teal-600 hover:text-teal-700">
              privacy@biotech.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default CookiePolicyPage;
