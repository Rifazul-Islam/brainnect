import Link from "next/link";
import logo from '@/assets/logo.png'
import bars from '@/assets/bars.png'
import Image from 'next/image'

const Navbar = () => {

  return (
    <div className="flex justify-between items-center py-5 max-w-[90%] lg:max-w-[1200px] mx-auto">
      <Link href={'/'}>
        <Image src={logo} alt='logo' className="w-32"></Image>
      </Link>
      <div className="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer">
            <Image src={bars} alt='logo' className="w-5 ml-auto rotate-180 cursor-pointer"></Image>
          </label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 md:w-72 min-h-full bg-base-200 text-base-content">
            <Image src={logo} alt='logo' className="w-32 mb-3"></Image>
            <li><Link className="font-medium text-lg" href={"/"}>Home</Link></li>
            <li><Link className="font-medium text-lg" href={"/about-us"}>About Us</Link></li>
            <li><Link className="font-medium text-lg" href={"/projects"}>Projects</Link></li>
            <li><Link className="font-medium text-lg" href={"/contact-us"}>Contact Us</Link></li>    
            <button className="primary-btn !py-3 mt-3 !w-full">{`Let's Talk`}</button>      
          </ul>
        </div>
      </div>
      <div className="hidden items-center gap-4 lg:flex">
        <ul className="flex items-center gap-7 text-base font-normal">
          <li><Link className="font-medium text-base" href={"/"}>Home</Link></li>
          <li><Link className="font-medium text-base" href={"/about-us"}>About Us</Link></li>
          <li><Link className="font-medium text-base" href={"/projects"}>Projects</Link></li>
          <li><Link className="font-medium text-base" href={"/contact-us"}>Contact Us</Link></li>
        </ul>
        <button className="primary-btn ml-3">{`Let's Talk`}</button>
      </div>
    </div>
  );
};

export default Navbar;
