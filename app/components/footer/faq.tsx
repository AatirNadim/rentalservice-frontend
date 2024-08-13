import React from "react";

const FAQ = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
      <ul className="space-y-2">
        <li>
          <h4 className="text-sm font-medium">How do I contact support?</h4>
          <p className="text-sm">
            You can reach our support team by email at support@example.com or by
            phone at 1-800-123-4567.
          </p>
        </li>
        <li>
          <h4 className="text-sm font-medium">What is your return policy?</h4>
          <p className="text-sm">
            We offer a 30-day return policy on all of our products. If you are
            not satisfied, you can return the item for a full refund.
          </p>
        </li>
        <li>
          <h4 className="text-sm font-medium">
            Do you offer international shipping?
          </h4>
          <p className="text-sm">
            Yes, we ship to over 50 countries worldwide. Shipping rates and
            delivery times may vary depending on your location.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
