import logo from '@/assets/logo.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="border-t">
            <div className="footer_container">
                <Image src={logo} alt='logo'></Image>
                <p>© Copyright 2024 dreamery all right resereved</p>
            </div>
        </div>
    );
};

export default Footer;