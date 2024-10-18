import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <div className="bg-black text-gray-200 min-h-screen py-12 px-6 pt-[5rem]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to Netflix India. We are committed to protecting your personal
          information and respecting your privacy. This policy outlines the data
          we collect, how we use it, and your rights regarding your data.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-2">
            We collect personal information that you provide directly to us, such as when
            you create an account, make a payment, or contact customer support.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal details (name, email, phone number, etc.)</li>
            <li>Payment information (credit/debit card details)</li>
            <li>Browsing and usage data (IP address, cookies)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-2">We use your information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide and personalize our services</li>
            <li>To process payments and manage your subscription</li>
            <li>To communicate with you about your account or service updates</li>
            <li>To analyze and improve our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
          <p className="mb-2">
            We do not sell your personal data. However, we may share it with third parties
            in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>With service providers who assist with payment processing</li>
            <li>When required by law or legal processes</li>
            <li>To protect against fraud and unauthorized activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
          <p className="mb-2">
            You have the right to access, update, or delete your personal information.
            You can also choose to opt out of promotional emails.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-2">
            We use industry-standard security measures to protect your data. However,
            no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
          <p className="mb-2">
            We may update this policy from time to time. We encourage you to review it
            periodically to stay informed about our data practices.
          </p>
        </section>

        <p className="mb-4">
          If you have any questions about this policy, please contact us at{" "}
          <a href="mailto:privacy@netflix.com" className="text-blue-400 hover:underline">
            privacy@netflix.com
          </a>.
        </p>

        <p className="text-sm mt-8">
          Effective Date: <span className="font-semibold">October 18, 2024</span>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
