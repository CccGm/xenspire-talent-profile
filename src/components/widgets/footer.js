import React from "react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full p-4 bg-app-Teal">
      <div className="flex items-center justify-center list-none">
        <ul className="grid grid-flow-col gap-10">
          <li className="text-app-offWhite font-bold">
            <a href="/">Xenspire</a>
          </li>
          <li className="text-app-offWhite font-bold">
            <a href="/">About Us</a>
          </li>
          <li className="text-app-offWhite font-bold">
            <a href="/">Company</a>
          </li>
          <li className="text-app-offWhite font-bold">
            <a href="/">Blog</a>
          </li>
          <li className="text-app-offWhite font-bold">
            <a href="/">Careers</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
