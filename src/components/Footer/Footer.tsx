"use client";
import Link from "next/link";
import Container from "../Shared/Container/Container";

interface FooterProps {}
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div>
      <div className="bg-gray-100">
        <Container>
          <footer className="py-[10px] md:py-[30px] ">
            <div className="flex flex-col gap-2 items-start justify-between md:flex-row-reverse">
              <p className="sm:text-xl">
                Contact Me -&nbsp;
                <a href="mailto:rahulguptasde@gmail.com">
                  rahulguptasde@gmail.com
                </a>
              </p>
              <div className="flex items-center gap-2">
                <Link href="/privacy-policy" className="sm:text-xl">
                  Privacy Policy
                </Link>
                <div className="h-[16px] w-[1px] bg-black sm:h-[20px]"></div>
                <Link href="/terms-and-conditions" className="sm:text-xl">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </footer>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
