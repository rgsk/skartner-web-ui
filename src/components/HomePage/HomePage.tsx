import TargetBlankLink from "../Shared/TargetBlankLink/TargetBlankLink";

/* eslint-disable @next/next/no-img-element */
interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div className="">
      <div className="h-[20px]"></div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
          <h1 className="font-medium text-[40px]">Skartner</h1>
        </div>
        <div className="h-[10px]"></div>
        <p className="text-[20px]">(your partner in skills development)</p>
      </div>
      <div className="h-[20px]"></div>
      <p className="text-[20px]">
        We provide education solutions with Software and AI. Our goal is to
        democratize education and make it more accessible.
      </p>
      <div className="mt-[50px]">
        <h2 className="font-medium text-[40px] text-center">Our Offerings</h2>
        <div className="h-[20px]"></div>
        <div>
          <h3 className="text-[30px] font-medium text-[#025F9C]">
            Vocab-Partner
          </h3>
          <p className="text-[20px]">
            Learn vocabulary with AI, build your dictionary and revise. Whether
            you are preparing for the GRE/TOEFL/IELTS or want to improve your
            vocabulary, Vocab-Partner is your perfect vocabulary companion.
          </p>
          <div className="h-[20px]"></div>
          <TargetBlankLink href="https://app.skartner.com">
            <Button>Try Now</Button>
          </TargetBlankLink>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <h2 className="text-2xl">Demo Video</h2>
      </div>
      <div className="flex justify-center">
        <video controls className="max-h-[60vh] object-contain">
          <source src="/demo1.webm" type="video/webm" />
          <p>Your browser does not support the video tag.</p>
        </video>
      </div>
      <div className="h-[60px]"></div>
    </div>
  );
};
export default HomePage;

interface ButtonProps {
  children: any;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-[#025F9C] text-white font-medium text-[20px] w-[150px] py-2 rounded-lg">
      {children}
    </button>
  );
};
