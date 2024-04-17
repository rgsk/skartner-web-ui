import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div>
      <nav className="fixed top-0 w-screen flex py-[20px] bg-white">
        <Link href="/">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpg"
                alt="logo"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <h1 className="font-medium text-[30px]">Skartner</h1>
            </div>
          </div>
        </Link>
      </nav>
      <div className="h-[85px]"></div>
    </div>
  );
};
export default Navbar;
