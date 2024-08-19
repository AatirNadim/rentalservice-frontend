import Link from "next/link";
import React from "react";

const FooterTabs = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="/about" prefetch={false}>
          <span className="text-sm underline">Home</span>
        </Link>
      </li>
      <li>
        <Link href="/about" prefetch={false}>
          <span className="text-sm underline">About Us</span>
        </Link>
      </li>
      <li>
        <Link href="/about" prefetch={false}>
          <span className="text-sm underline">Blogs</span>
        </Link>
      </li>
      <li>
        <Link href="/about" prefetch={false}>
          <span className="text-sm underline">Platform Terms</span>
        </Link>
      </li>
      <li>
        <Link href="/about" prefetch={false}>
          <span className="text-sm underline">FAQs</span>
        </Link>
      </li>
      <li>
        <Link href="/about" prefetch={false}>
          <span className="text-sm underline">Contact Us</span>
        </Link>
      </li>
    </ul>
  );
};

export default FooterTabs;
