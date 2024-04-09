import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-5 max-w-[1300px] mx-auto">
      <div><h1 className="text-2xl font-semibold">BrainNect</h1></div>
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-7 text-base font-normal">
          <li><Link className="font-medium text-lg" href={"/"}>Home</Link></li>
          <li><Link className="font-medium text-lg" href={"/about-us"}>About Us</Link></li>
          <li><Link className="font-medium text-lg" href={"/projects"}>Projects</Link></li>
          <li><Link className="font-medium text-lg" href={"/contact-us"}>Contact Us</Link></li>
        </ul>
        <button className="primary-btn">{`Let's Talk`}</button>
      </div>
    </div>
  );
};

export default Navbar;
