/* eslint-disable react/no-unescaped-entities */

import {
  Para,
  TopicGap,
  TopicHeading,
} from "../TermsAndConditionsPage/TermsAndConditionsPage";

interface PrivacyPolicyPageProps {}
const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({}) => {
  return (
    <div>
      <div>
        <div className="h-[40px]"></div>
        <h1 className="text-3xl md:text-6xl">Privacy Policy</h1>
        <div className="h-[40px]"></div>
        <div>
          <TopicHeading>Introduction</TopicHeading>
          <Para>
            Welcome to Skartner. We take the privacy of our users seriously and
            are committed to protecting your personal information. This privacy
            policy outlines how we collect, use, and protect your personal
            information.
          </Para>
          <TopicGap />
          <TopicHeading>Information Collection</TopicHeading>
          <Para>
            We collect personal information from users when they register on our
            website, place an order, or subscribe to our newsletter. This
            information may include your name, email address, mailing address,
            and payment information. We may also collect information about your
            usage of our website through cookies and other tracking
            technologies.
          </Para>
          <TopicGap />
          <TopicHeading>Use of Information</TopicHeading>
          <Para>
            We use your personal information to provide you with the services
            and products you request, to process your transactions, and to
            communicate with you about your account and our services. We may
            also use your personal information to improve our website and
            services, and to send you marketing communications.
          </Para>
          <TopicGap />
          <TopicHeading>Protection of Information</TopicHeading>
          <Para>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction. We
            use industry-standard security measures, such as SSL encryption, to
            protect your personal information during transmission. However, no
            method of transmission over the internet or electronic storage is
            completely secure, so we cannot guarantee its absolute security.
          </Para>
          <TopicGap />
          <TopicHeading>Disclosure of Information</TopicHeading>
          <Para>
            We may disclose your personal information to third-party service
            providers who perform services on our behalf, such as payment
            processing and shipping. We may also disclose your personal
            information to law enforcement or other government authorities if
            required by law or if we believe it is necessary to protect the
            security, property, or rights of Skartner or others.
          </Para>
          <TopicGap />
          <TopicHeading>Cookies and Tracking Technologies</TopicHeading>
          <Para>
            We use cookies and other tracking technologies to improve your
            experience on our website and to analyze website traffic. You can
            disable cookies in your browser settings, but this may limit your
            ability to use certain features of our website.
          </Para>
          <TopicGap />
          <TopicHeading>User Rights</TopicHeading>
          <Para>
            You have the right to access, correct, or delete your personal
            information. You can exercise these rights by contacting us at email
            - rahulguptasde@gmail.com. We will respond to your request within a
            reasonable timeframe.
          </Para>
          <TopicGap />
          <TopicHeading>Changes to Privacy Policy</TopicHeading>
          <Para>
            We reserve the right to modify this privacy policy at any time. You
            will be notified of any changes by email or through a notice on our
            website. Your continued use of our website after any changes have
            been made constitutes your acceptance of the new privacy policy.
          </Para>
          <TopicGap />
          <TopicHeading>Contact Us</TopicHeading>
          <Para>
            If you have any questions or concerns about this privacy policy,
            please contact us at email - rahulguptasde@gmail.com.
          </Para>
          <TopicGap />
          <TopicHeading>Acceptance</TopicHeading>
          <Para>
            By using Skartner, you acknowledge that you have read, understood,
            and agreed to this privacy policy. If you do not agree to this
            privacy policy, please do not use this website Skartner.
          </Para>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};
export default PrivacyPolicyPage;
