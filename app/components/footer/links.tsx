import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <ul className="space-y-2">
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Services
          </Link>
        </li>
      </ul>
      <ul className="space-y-2">
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Products
          </Link>
        </li>
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </li>
      </ul>
      <ul className="space-y-2">
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Careers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
