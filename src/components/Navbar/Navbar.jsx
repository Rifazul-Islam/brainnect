import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-5">
      <div><h1 className="text-2xl font-semibold">BrainNect</h1></div>
      <div className="flex items-center gap-4">
        <ul className="flex items-center space-x-5 text-base font-normal">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/about-us"}>About Us</Link></li>
          <li><Link href={"/"}>Projects</Link></li>
          <li><Link href={"/"}>Contact Us</Link></li>
        </ul>
        <button className="primary-btn">{`Let's Talk`}</button>
      </div>
    </div>
  );
};

export default Navbar;
