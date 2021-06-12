// global dependencies
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// local dependencies
import styles from './privacyPolicyPage.module.scss';
import SEO from '../components/seo';
import Layout from '../components/gatsby_elements/layout';

const PrivacyPolicyPage: React.FC<any> = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Privacy Policy Page"
          description="Page contains an information about user privacy and cookies"
          pathname="/user-privacy"
        />
        <div className={styles.articleBody}>
          <p>
            <span>
              This Privacy Policy provides information on how 3d-points.com
              processes personal data. The Data controller for the processing of
              personal data is Lukasz Wiszniewski, email:&nbsp;
            </span>
            <OutboundLink
              className={styles.mailLink}
              href="mailto:3dpoints.contact@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              data-stringify-link="mailto:3dpoints.contact@gmail.com"
              data-sk="tooltip_parent"
            >
              3dpoints.contact@gmail.com
            </OutboundLink>
            <br />
            <br />
            3d-points.com is established in Norway, and adheres to the General
            Data Protection Regulation (GDPR). 3d-points.com processes personal
            data relating to customers and other persons who have contacted
            3d-points.com. The different types of personal data processed, as
            well as the purpose of the processing, legal basis and source are
            further described below.
          </p>
          {/* <p>3D-POINTS.COM’S CUSTOMERS AND USERS</p>
        <p>
          3d-points.com processes the following data for the purpose of
          providing our customers with the products and services the customer
          has ordered, including entering into an agreement, placing a purchase,
          processing payment, delivering the product and the cloud service with
          its connected features. We also provide our customers and users with
          information relevant to the product:
        </p>
        <ul>
          <li>
            Contact and payment information: Name, e-mail address, phone number,
            credit card information or other payment information.
          </li>
          <li>
            Device information: a 3d-points.com ID (e-mail address), IP-address,
            wi-fi password (stored locally on the customer’s device, and not
            otherwise transferred to or accessed by 3d-points.com). Storage of
            data, information and documents the customer uploads, enters into or
            generates in 3d-points.com’s cloud service.
          </li>
        </ul>
        <p>
          After a purchase, we store your order and service details to ensure
          that we can provide you with the rights you are granted in our terms
          and conditions.
          <br />
          <br />
          <br />
          The legal basis for the processing is fulfilling an agreement to which
          the customer/user is party.
        </p>
        <p>&nbsp;</p>
        <p>
          The data is provided to 3d-points.com by the customer or user when
          purchasing a product or using a service from 3d-points.com, or
          subsequently provided or generated by the customer when using
          3d-points.com’s cloud service. 3d-points.com ID is generated by
          3d-points.com upon registration to the cloud service. If a customer
          does not wish to provide the necessary contact and payment
          information, the customer will be unable to purchase or use
          3d-points.com’s products and services.
        </p>
        <p>&nbsp;</p>
        <p>MARKETING</p>
        <p>
          3d-points.com processes the following personal data for the purpose of
          sending marketing to the customer as well as finding potential new
          customers based on similarities between the customer and the potential
          customer, using social media tools such as lookalike audience and
          similar:
        </p>
        <ul>
          <li>Contact information: E-mail address</li>
        </ul>
        <p>&nbsp;</p>
        <p>
          The legal basis for the processing is consent from the data subject,
          which is voluntary to submit.
        </p>
        <p>&nbsp;</p>
        <p>
          The data is provided to 3d-points.com by the customer. The customer
          can choose to provide this information in the ordering process. If you
          have given a previous consent you now wish to withdraw, either choose
          the “unsubscribe” option provided in our marketing e-mails or contact
          3d-points.com via 3dpoints.contact@gmail.com.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p> */}
          <p>SUBSCRIBERS TO 3D-POINTS.COM’S NEWSLETTER</p>
          <p>
            3d-points.com processes the following personal data for the purpose
            of providing subscribers with the newsletters the subscriptions
            comprise:
          </p>
          <ul>
            <li>Contact information: name, E-mail address</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            The legal basis for the processing is consent, which is voluntary to
            submit.
          </p>
          <p>&nbsp;</p>
          <p>
            The data is provided to 3d-points.com by the subscriber. The
            subscriber can at any time choose the “unsubscribe” option included
            in our newsletter should the subscriber no longer wish to be a
            recipient of the newsletter.
          </p>
          <p>&nbsp;</p>
          {/* <p>CUSTOMERS AND OTHERS CONTACTING 3D-POINTS.COM’S SUPPORT SERVICE</p>
        <p>
          3d-points.com has a support service on our website which is open for
          everyone to use if they have questions about our products and
          services, both before and after purchase. 3d-points.com processes the
          following information for the purpose of answering any question or
          inquiry received by 3d-points.com’s support service:
        </p>
        <ul>
          <li>Contact information: e-mail address</li>
          <li>
            Any other requested and unrequested information sent to
            3d-points.com in the inquiry
          </li>
        </ul>
        <p>&nbsp;</p>
        <p>
          The legal basis for the processing is fulfilling an agreement as
          requested by the inquirer.
        </p>
        <p>&nbsp;</p>
        <p>The data is provided to 3d-points.com by customer/sender.</p> */}
          <p>DISCLOSURE TO THIRD PARTIES</p>
          <p>
            3d-points.com does not disclose the personal data to unauthorized
            third parties.
          </p>
          {/*  <p>Any transfer of personal data is in accordance with
          law.</p>
        <p>
          Based on our understanding of the term "sell" under the CCPA, we do
          not "sell" your personal information and have not sold it to third
          parties for a business or commercial purpose in the 12 months
          preceding the CCPA's entry into force. However, like many companies
          online, we use services provided by Google, Facebook and other that
          help deliver ads and for web analytic purposes. See both how you can
          manage your cookie settings in our cookie policy and how to withdraw
          your consent to marketing above.
        </p>
        <p>&nbsp;&nbsp;</p>
        <p>HOW LONG IS THE DATA STORED?</p>
        <p>
          3d-points.com deletes or irreversibly anonymizes data as soon as the
          purpose of the processing is fulfilled or we are no longer required by
          law to store your data:
        </p>
        <p>
          <u>3d-points.com’s customers and users</u>
        </p>
        <p>
          Data uploaded or generated by the customer when using 3d-points.com’s
          cloud service is deleted 3 months after the customer has deleted their
          account. The customer may delete data at any time through the cloud
          service.
        </p>
        <p>
          Name, contact information and order details are deleted when they are
          no longer necessary to fulfill the purpose of processing, and when
          they are no longer necessary to process in order to fulfil legal
          obligations or for 3d-points.com to be able to handle claims and
          complaints. */}
          <br />
          <br />
          <u>Subscribers to 3d-points.com’s newsletter</u>
          <br />
          The personal data is deleted when the subscriber unsubscribes to
          3d-points.com’s newsletter or when the newsletter is discontinued.
          {/* </p> */}
          <p>&nbsp;</p>
          <p>
            Customer data relating to 3d-points.com’s cloud service is
            irreversibly anonymized, and thereafter used in anonymized and
            aggregated form for statistical purposes, as well as for improvement
            and development of 3d-points.com’s products and services. Anonymized
            data may also be used for other purposes. The legal basis for the
            anonymization is our legitimate interest and it is not overridden by
            your rights.
          </p>
          <p>
            <br />
            YOUR RIGHTS
          </p>
          <p>
            3d-points.com’s general obligation regarding information to the
            public is fulfilled by this privacy policy. You also have individual
            rights under the GDPR or the CCPA. You can exercise your rights
            under the GDPR or the CCPA by sending a request by email to{' '}
            <OutboundLink href="mailto:3dpoints.contact@gmail.com">
              3dpoints.contact@gmail.com
            </OutboundLink>
            <br />
            <br />
            Your rights under GDPR:
            <br />• Requesting information about the processing of personal data
            and access to the data
            <br />• Rectification and deletion of inaccurate or incorrect data
            <br />• Restriction of processing
            <br />• Objecting to processing
            <br />• Data portability
            <br />• Being forgotten
            <br />
            <br />
          </p>
          {/*          If you are a customer permanently located in California, US, you have
          the following rights:
        </p>
        <p>
          • Deletion of personal data, unless 3d-points.com has a legal
          obligation to store the personal data
          <br />• Requesting information about the processing of personal data
          and access to the personal data collected by 3d-points.com
          <br />• Non-discrimination where you exercised your rights under the
          CCPA
        </p>
        <p>
          <br />
          Customers with a subscription to the cloud service may at any time
          rectify and/or delete personal data by logging into their user
          account. Persons who are registered or believe they are registered by
          3d-points.com can contact 3d-points.com at by mail or e-mail for any
          use of their rights: 3d-points.com, Griffenfeldtsgate 13, 0473 Oslo,
          Norway or email at{' '}
          <OutboundLink href="mailto:3dpoints.contact@gmail.com">
            3dpoints.contact@gmail.com
          </a>
          .
        </p>
        <p>&nbsp;</p> */}
          <p>COMPLAINTS</p>
          <p>
            If you are dissatisfied with 3d-points.com’s processing of personal
            data or have questions or inquiries concerning 3d-points.com’s
            processing of personal data, please email us at
            3dpoints.contact@gmail.com. We are happy to assist.
            {/* Data subjects may
          also file a complaint by contacting the Data Protection Authority in
          Norway or if the customer is resident elsewhere in Europe their local
          data protection authority. */}
          </p>
          <p>&nbsp;</p>
          <p>COOKIES</p>
          <p>
            By using the Service, you agree to the use of cookies such as Google
            Analytics and Facebook Pixel. Cookies collect and store a small
            amount of data from a website when you access it through your
            browser on your computer, mobile phone or tablet. Cookies are used
            to retrieve statistics from the website, improve the performance of
            the website and optimize user experience.&nbsp;
          </p>
          <p>
            Google Analytics is used to analyze how our customers behave on the
            website and does not collect personal information about you as a
            user. Google Analytics makes it possible for 3d-points.com to
            collect statistics about the number of visitors, page views, what
            was searched for, length of visit, geographical location and more.
            This data helps 3d-points.com to make the website more efficient.
            All data that is collected is stored on Google's servers, and you
            can read more about how Google collects and protects your data here:
            <OutboundLink href="https://policies.google.com/privacy?hl=en">
              https://policies.google.com/privacy?hl=en
            </OutboundLink>
          </p>
          <p>
            Facebook Pixel is used for 3d-points.com to adapt information and
            marketing based on how you use the website. This provides relevant
            ads based on the content you viewed on 3d-points.com. The ads may
            appear on Facebook and Instagram (owned by Facebook).
          </p>
          <p>
            All information collected through Facebook pixel is confidential and
            cannot be traced back to you as an individual. Read more about the
            privacy of the Facebook Pixel here:
            <OutboundLink href="https://www.facebook.com/policies/cookies/">
              https://www.facebook.com/policies/cookies/
            </OutboundLink>
            <p>&nbsp;</p>
          </p>
          <p>
            You can always decline or withdraw your acceptance of the use of
            cookies on your computer by changing the settings in your browser.
          </p>
          <p>
            If you have any questions, please feel free to contact us at
            <OutboundLink href="mailto:3dpoints.contact@gmail.com">
              3dpoints.contact@gmail.com
            </OutboundLink>
          </p>
          <p>&nbsp;</p>
          <p>Last updated: 07 March 2021.</p>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicyPage;