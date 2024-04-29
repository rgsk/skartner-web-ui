/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Container from "../Shared/Container/Container";
import TargetBlankLink from "../Shared/TargetBlankLink/TargetBlankLink";
type SocialDetail = {
  imageSrc: string;
  link: string;
  alt: string;
};
const socialDetails: SocialDetail[] = [
  {
    imageSrc: "/X.jpg",
    link: "https://twitter.com/_skartner",
    alt: "X logo",
  },
  {
    imageSrc: "/linkedin.png",
    link: "https://www.linkedin.com/company/skartner",
    alt: "linkedin logo",
  },
];

interface FooterProps {}
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div>
      <div className="bg-gray-100">
        <Container>
          <footer className="py-[10px] md:py-[30px] ">
            <div className="flex flex-col gap-2 items-start justify-between md:flex-row-reverse md:items-center">
              <p className="sm:text-xl">
                Contact Me -&nbsp;
                <a href="mailto:rahulguptasde@gmail.com">
                  rahulguptasde@gmail.com
                </a>
              </p>
              <div className="flex items-center gap-2 md:gap-4">
                <p className="sm:text-xl">Follow Us:</p>
                <div className="flex gap-2 md:gap-4">
                  {socialDetails.map((detail, i) => {
                    return <SocialLink key={i} detail={detail} />;
                  })}
                </div>
              </div>
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

interface SocialLinkProps {
  detail: SocialDetail;
}
const SocialLink: React.FC<SocialLinkProps> = ({ detail }) => {
  return (
    <TargetBlankLink href={detail.link}>
      <img
        src={detail.imageSrc}
        alt={detail.alt}
        className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full"
      />
    </TargetBlankLink>
  );
};
