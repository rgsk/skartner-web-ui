import Link from "next/link";

interface FooterProps {}
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="py-[30px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/privacy-policy" className="sm:text-xl">
            Privacy Policy
          </Link>
          <div className="h-[16px] w-[1px] bg-black sm:h-[20px]"></div>
          <Link href="/terms-and-conditions" className="sm:text-xl">
            Terms and Conditions
          </Link>
        </div>
        <p className="sm:text-xl">
          Contact Me -&nbsp;
          <a href="mailto:rahulguptasde@gmail.com">rahulguptasde@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
