import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/image-3.webp";

const Footer = () => {
  return (
    <div
      className="bg-cover my-20 h-full backdrop-blur-2xl"
      style={{ backgroundImage: `url(${img})` }}
    >
      <footer className="footer p-10 text-lime-50 h-9/12  ">
        <div>
          <span className=" font-bold text-xl footer-title">Services</span>
          <Link className=" font-bold text-xl link link-hover">Branding</Link>
          <Link className=" font-bold text-xl link link-hover">Design</Link>
          <Link className=" font-bold text-xl link link-hover">Marketing</Link>
          <Link className=" font-bold text-xl link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className=" font-bold text-xl footer-title">Company</span>
          <Link className=" font-bold text-xl link link-hover">About us</Link>
          <Link className=" font-bold text-xl link link-hover">Contact</Link>
          <Link className=" font-bold text-xl link link-hover">Jobs</Link>
          <Link className=" font-bold text-xl link link-hover">Press kit</Link>
        </div>
        <div>
          <span className=" font-bold text-xl footer-title">Legal</span>
          <Link className=" font-bold text-xl link link-hover">
            Terms of use
          </Link>
          <Link className=" font-bold text-xl link link-hover">
            Privacy policy
          </Link>
          <Link className=" font-bold text-xl link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <p className="text-center text-red-800 font-bold">
        Copyright © 2022 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
