import { Link } from "react-router-dom";
import { FaAmazon, FaApple, FaBeer, FaFirefox, FaGoogle, FaGooglePlay, FaTelegram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="px-4 py-12 md:px-10 bg-slate-800 text-gray-500 font-normal">
            <div className="flex justify-center">
                <ul className="flex footer-list flex-wrap text-xs md:text-lg items-center justify-center gap-5 md:gap-10 font-normal">
                    <li><Link>PREMIUM</Link></li>
                    <li><Link>API</Link></li>
                    <li><Link>ARTICLES</Link></li>
                    <li><Link>10 MINUTE MAIL</Link></li>
                    <li><Link>PRIVACY</Link></li>
                    <li><Link>TERMS</Link></li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>CONTACTS</Link></li>
                    <li><Link>ADVERTISING</Link></li>
                </ul>
            </div>
            <hr className="mt-8 w-10/12 mx-auto border-gray-600"/>
            <div className="flex justify-center mt-5">
                <div className="flex flex-wrap justify-center items-center social-link gap-5 text-xl md:text-2xl">
                <a href=""><FaApple /></a>
                <a href=""><FaGooglePlay /></a>
                <a href=""><FaGoogle /></a>
                <a href=""><FaAmazon /></a>
                <a href=""><FaFirefox /></a>
                <a href=""><FaTelegram /></a>
                </div>
            </div>
            <p className="text-center mt-5">Copyright 2023</p>
        </div>
    );
};

export default Footer;