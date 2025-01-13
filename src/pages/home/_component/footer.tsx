import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-600">
              Study Path
            </h4>
            <p className="text-sm mb-4">
              Helping you make informed decisions with great tools and insights.
            </p>
          </div>

          {/* Product Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Services</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Documentation</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Support</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@company.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: City, Country</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-teal-600 text-white p-4 text-center text-sm">
        © {new Date().getFullYear()} Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
