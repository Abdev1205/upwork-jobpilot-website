import Footer from "@/components/custom/common/Footer";
import Navbar from "@/components/custom/common/Navbar";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how our
          Chrome Extension{" "}
          <span className="font-semibold">Upwork JobPilot</span> handles
          information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We do{" "}
          <span className="font-semibold">not collect, store, or share</span>{" "}
          any personal information, browsing history, or usage data from our
          users.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. Permissions</h2>
        <p className="mb-4">
          Our extension may request limited permissions in order to function
          (e.g., access to tabs or websites), but no data is transmitted to our
          servers or third parties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">
          3. Third-Party Services
        </h2>
        <p className="mb-4">
          We do not use third-party analytics, ads, or tracking services within
          this extension.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">
          4. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy if necessary. Updates will always be
          available on this page.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact
          us at:{" "}
          <a
            href="mailto:abhaym1205@gmail.com"
            className="text-blue-600 underline"
          >
            abhaym1205@gmail.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}
