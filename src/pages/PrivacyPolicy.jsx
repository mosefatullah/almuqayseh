import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function PrivacyPolicy() {
 return (
  <div>
   <Helmet>
    <title>Privacy Policy – Al Muqayseh</title>
   </Helmet>
   <Navbar />
   <main className="__privacy-policy">
    <div className="container">
     <h1>Privacy Policy</h1>
     <p>
      Effective Date: 16 Feb 2024
      <br />
      <br />
      Thank you for visiting Al Muqayseh General Contracting Est.{" "}
      <i>("we", "us", or "our")</i>. This Privacy Policy describes how we
      collect, use, and disclose personal information when you visit our website
      or engage with our services.
      <br />
      <br />
      <b>1. Information We Collect</b>
      <br />
      <br />
      We may collect personal information directly from you or from third
      parties, such as:
      <br />
      <ul>
       <li>Contact information (e.g., name, email address, phone number)</li>
       <li>Payment information (e.g., credit card details)</li>
       <li>Employment history and qualifications</li>
       <li>Any other information you provide to us voluntarily</li>
      </ul>
      <br />
      <b>2. Use of Information</b>
      <br />
      <br />
      We may use the collected information for the following purposes:
      <br />
      <ul>
       <li>To provide and maintain our services</li>
       <li>
        To communicate with you about our services, promotions, and updates
       </li>
       <li>To process your employment application</li>
       <li>To process payments and fulfill orders</li>
       <li>To comply with legal obligations</li>
       <li>For other purposes with your consent</li>
      </ul>
      <br />
      <b>3. Disclosure of Information</b>
      <br />
      <br />
      We may share your personal information with:
      <br />
      <ul>
       <li>
        Third-party service providers who assist us in operating our website or
        conducting our business
       </li>
       <li>
        Business partners and affiliates for marketing purposes or to provide
        services on our behalf
       </li>
       <li>
        Law enforcement agencies, government bodies, or other third parties when
        required by law or to protect our rights
       </li>
      </ul>
      <br />
      <b>4. Data Security</b>
      <br />
      <br />
      We take reasonable measures to protect your personal information from
      unauthorized access, disclosure, alteration, or destruction. However,
      please be aware that no method of transmission over the internet or
      electronic storage is completely secure.
      <br />
      <br />
      <b>5. Your Choices</b>
      <br />
      <br />
      You have the right to:
      <br />
      <ul>
       <li>Access, update, or delete your personal information</li>
       <li>Opt-out of receiving promotional communications</li>
       <li>
        Request restrictions on the processing of your personal information
       </li>
      </ul>
      <br />
      <b>6. Children's Privacy</b>
      <br />
      <br />
      Our services are not directed to individuals under the age of 18. We do
      not knowingly collect personal information from children. If you are a
      parent or guardian and become aware that your child has provided us with
      personal information, please contact us.
      <br />
      <br />
      <b>7. Changes to this Policy</b>
      <br />
      <br />
      We reserve the right to update or modify this Privacy Policy at any time.
      We will notify you of any changes by posting the new Privacy Policy on
      this page.
      <br />
      <br />
      <b>8. Contact Us</b>
      <br />
      <br />
      If you have any questions or concerns about our Privacy Policy, please
      contact us at +966 55160 6778.
      <br />
      By using our services or accessing our website, you agree to the terms
      outlined in this Privacy Policy.
      <br />
      <br />
      Last Updated: 16 Feb 2024
     </p>
    </div>
   </main>
   <Footer />
  </div>
 );
}

export default PrivacyPolicy;
