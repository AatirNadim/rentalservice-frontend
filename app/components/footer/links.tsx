import { loadBindings } from "next/dist/build/swc";
import Link from "next/link";
import React from "react";

const locations = [
  { name: "Delhi", href: "#" },
  { name: "Mumbai", href: "#" },
  { name: "Leh", href: "#" },
  { name: "Manali", href: "#" },
  { name: "Goa", href: "#" },
  { name: "Haridwar", href: "#" },
  { name: "Bangalore", href: "#" },
  { name: "Goa", href: "#" },
  { name: "Mumbai", href: "#" },
  { name: "Delhi-NCR", href: "#" },
];

const Links = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <section className="flex flex-col items-start space-y-4">
        <h1 className="text-lg font-bold">Popular Locations</h1>
        <h4 className="text-sm font-semibold">India</h4>
        <ul className="space-y-2">
          {locations.map((location, idx) => (
            <li key={idx}>
              <Link
                href={location.href}
                className="text-sm underline"
                target="_blank"
                prefetch={false}
              >
                Bike on rent in {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-start space-y-4">
        <h1 className="text-lg font-bold">Popular Locations</h1>
        <h4 className="text-sm font-semibold">India</h4>
        <ul className="space-y-2">
          {locations.map((location, idx) => (
            <li key={idx}>
              <Link
                href={location.href}
                className="text-sm underline"
                target="_blank"
                prefetch={false}
              >
                Bike on rent in {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-start space-y-4">
        <h1 className="text-lg font-bold">Popular Locations</h1>
        <h4 className="text-sm font-semibold">India</h4>
        <ul className="space-y-2">
          {locations.map((location, idx) => (
            <li key={idx}>
              <Link
                href={location.href}
                className="text-sm underline"
                target="_blank"
                prefetch={false}
              >
                Bike on rent in {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Links;
