/* eslint-disable react/no-unescaped-entities */

interface TopicHeadingProps {
  children: string;
}
export const TopicHeading: React.FC<TopicHeadingProps> = ({ children }) => {
  return <h2 className="mb-2 text-xl md:text-3xl">{children}</h2>;
};

interface TopicGapProps {}
export const TopicGap: React.FC<TopicGapProps> = ({}) => {
  return <div className="h-[40px]"></div>;
};

interface ParaProps {
  children: any;
}
export const Para: React.FC<ParaProps> = ({ children }) => {
  return <p className="mt-4">{children}</p>;
};

interface TermsAndConditionsPageProps {}
const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({}) => {
  return (
    <div>
      <div>
        <div className="h-[40px]"></div>
        <h1 className="text-3xl md:text-6xl">Terms and Conditions</h1>
        <div className="h-[40px]"></div>
        <div>
          <div>
            <TopicHeading>Introduction</TopicHeading>
            <Para>
              Welcome to Skartner. This website is operated by Rahul Gupta, a
              solopreneur. By using this website, you agree to be bound by the
              following terms and conditions.
            </Para>
            <TopicGap />
            <TopicHeading>User Agreement</TopicHeading>
            <Para>
              By using Skartner, you agree to use the website only for lawful
              purposes and in a manner that does not infringe the rights of any
              third party. You also agree to comply with all applicable laws and
              regulations.
            </Para>
            <TopicGap />
            <TopicHeading>Intellectual Property</TopicHeading>
            <Para>
              All content on Skartner, including text, images, and code, is the
              property of Rahul Gupta and is protected by copyright laws. You
              may not use any content from Skartner without prior written
              permission from Rahul Gupta.
            </Para>
            <TopicGap />
            <TopicHeading>Liability Limitations</TopicHeading>
            <Para>
              Rahul Gupta will not be liable for any damages or losses incurred
              by users while using Skartner. This includes, but is not limited
              to, direct, indirect, special, incidental, or consequential
              damages.
            </Para>
            <TopicGap />
            <TopicHeading>Changes to Terms</TopicHeading>
            <Para>
              Rahul Gupta reserves the right to modify these terms of service at
              any time. You will be notified of any changes by email or through
              a notice on this website. Your continued use of Skartner after any
              changes have been made constitutes your acceptance of the new
              terms of service.
            </Para>
            <TopicGap />
            <TopicHeading>Governing Law</TopicHeading>
            <Para>
              These terms of service will be governed by the laws of India. Any
              legal disputes arising from these terms of service will be
              resolved in the courts of India.
            </Para>
            <TopicGap />
            <TopicHeading>Dispute Resolution</TopicHeading>
            <Para>
              Any disputes arising from these terms of service will be resolved
              through mediation or arbitration. You agree to submit to the
              jurisdiction of the courts of India for this purpose.
            </Para>
            <TopicGap />
            <TopicHeading>Privacy Policy</TopicHeading>
            <Para>
              Please refer to our separate privacy policy for information on how
              we collect, use, and protect your personal information.
            </Para>
            <TopicGap />
            <TopicHeading>Contact Us</TopicHeading>
            <Para>
              If you have any questions or concerns about these terms of
              service, please contact us at email - rahulguptasde@gmail.com.
            </Para>
            <TopicGap />
            <TopicHeading>Acceptance</TopicHeading>
            <Para>
              By using this website, you acknowledge that you have read,
              understood, and agreed to these terms of service. If you do not
              agree to these terms of service, please do not use this website
              Skartner.
            </Para>
          </div>
        </div>
        <div className="h-[100px]"></div>
      </div>
    </div>
  );
};
export default TermsAndConditionsPage;
