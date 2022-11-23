import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/footer.png'



const Footer = () => {
    return (
        <div className='bg-cover my-20 h-96' style={{ backgroundImage: `url(${img})` }}>
            <footer className="footer p-10  ">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <p className='text-center font-bold'>Copyright © 2022 - All right reserved</p>
        </div>
    );
};

export default Footer;