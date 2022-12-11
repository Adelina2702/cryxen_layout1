import React from 'react';
import './index.css';
import In from '../../img/in.png';
import Zen from "../../img/zen.png";
import Pci from "../../img/pci.png";

const Footer = () => {
    return (
        <div className='section'>
            <div className="up">
                <div className="list1">
                    <div className="item1">Learn</div>
                    <div className="item2">Help center</div>
                    <div className="item3">Join ZEN team</div>
                    <div className="item4">Privacy Policy</div>
                    <div className="item5">Cookies</div>
                    <div className="item6">Terms of use</div>
                </div>
                <div className="list2">
                <div className="item1">Discover</div>
                <div className="item2">For developers</div>
                <div className="item3">Apple Pay</div>
                <div className="item4">Google Pay</div>
                </div>
                <div className="list3">
                <div className="item1">Offer</div>
                <div className="item2">Business</div>
                <div className="item3">Personal</div>

                </div>
                <div className="list4">
                <div className="item1">Language</div>
                <div className="item2">English</div>
                <div className="item3">Polish</div>

                </div>
                <div className="list5">
                <div className="item1">Follow us</div>
                <div className="list5_item2"><img src={In} alt="" /></div>

                </div>
                <div className="list6">
                    <div className="item1">Contact</div>
                    <div className="item2">hello@zen.com</div>

                </div>
            </div>
            <div className="down">
                <div className="down_first">
                    <img src={Zen} alt="" />
                    <p className="down_first__txt">
                    ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by 
                    European Banking Authority for 31 countries. Registration number of the company 304749651, VAT ID LT100011714916. 
                    License of electronic money institutions number LB000457. Share capital 2.185.000,00 EUR.
                    Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. 
                    Emilii Plater 53, 00-113 Warsaw, Poland.
                    </p>
                </div>
                <div className="down_second">
                <img src={Pci} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
