import React from 'react';
import { SiteHeader } from '@/components/navbar/site-header';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - watch-movie.com",
  description: "Understand how watch-movie.com collects, uses, and protects your personal information. Read our Privacy Policy to learn more about our data practices.",
  openGraph: {
    title: "Privacy Policy - watch-movie.com",
    description: "Learn about the data collection, usage, and protection practices at watch-movie.com. Your privacy is our priority.",
   
  },
};

const PrivacyPolicy = () => {
  return (
    <>
   <SiteHeader/> 
    <div className="privacy-container p-6 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg mb-4">
        Welcome to movie-watch.com. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="text-lg mb-4">
        We may collect personal information such as your name, email address, and browsing activity. This information helps us improve your experience on our site and provide personalized content.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="text-lg mb-4">
        The information we collect is used to enhance your experience, provide customer support, and send occasional updates or promotions. We do not share your personal data with third parties except as necessary to operate our services.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
      <p className="text-lg mb-4">
        We use cookies to track your preferences and activity on our site. Cookies help us understand your usage patterns and improve our services. You can choose to disable cookies in your browser settings, but this may affect your experience on our site.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
      <p className="text-lg mb-4">
        We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
      <p className="text-lg mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="text-lg">
        If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
      </p>
    </div></>
  );
}

export default PrivacyPolicy;
