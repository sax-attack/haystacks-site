/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect } from 'react';
import { routes } from '../../router';

const anchors = {
  types: 'types-of-information-we-collect',
  collect: 'how-collect-information',
  use: 'how-use-information',
  share: 'how-share-information',
  protect: 'how-protect-information',
  transfers: 'data-transfers',
  children: 'childrens-privacy',
  california: 'california-privacy',
  choices: 'choices',
  thirdParty: 'third-party',
  contact: 'contact-us',
};

const Privacy = () => {
  useEffect(() => {
    document.title = routes.privacy.title;
  }, []);

  return (
    <section className="container">
      <div className="section">
      <h2 className='text-3xl my-20'>Haystacks.AI Privacy Notice</h2>
        <p className='text-sm md:text-base'>
          Last Updated: August 5, 2022 <br />
          <br />
          We at HaystacksAI, Inc. (“<b>Haystacks</b>”, “<b>us</b>”, “<b>our</b>”, or “<b>we</b>”) are strongly committed to
          transparency, and we want you to understand how we collect, use, share and protect your personal information, as well as
          how you can manage the personal information we collect. This Privacy Notice applies to your interactions with us through
          your use of our website (https://haystacks.ai/) (our “<b>Website</b>”). <br />
          <br />
          Please note that the Website is primarily for informational purposes. For more information about how to become an
          enterprise customer, please contact us. This Privacy Notice does not apply to the portal that is accessible via our
          Website. The collection and use of information on the portal is governed by the master servicing agreement with the
          respective customer.
          <br />
          <br /> By using our Website, you acknowledge the terms of this Privacy Notice. If you do not agree to the terms of this
          Privacy Notice, please do not use our Website. If you do not understand, or if you have questions about, this Privacy
          Notice, please contact us before using, or continuing to use, our Website. We reserve the right to change our Privacy
          Notice from time to time by posting the changes here. If we choose to amend this Privacy Notice, we will revise the Last
          Updated date at the top of this Privacy Notice when we post the updated version. We may also provide you with notice by
          prominently posting on our Website, via email or both, if we make any significant changes to this Privacy Notice. We may
          also highlight those changes at the top of this Privacy Notice and provide a prominent link to it for a reasonable length
          of time following the change. Your use of our Website after we have informed you in one of these ways that we made changes
          to our Privacy Notice will mean that you have accepted those changes.
          <br />
          <br />
          <br />
        </p>
        <ol className='text-sm md:text-base list-decimal'>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.types}>TYPES OF INFORMATION WE COLLECT</a>
          </li>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.collect}>HOW WE COLLECT PERSONAL INFORMATION</a>
          </li>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.use}>HOW WE USE PERSONAL INFORMATION</a>
          </li>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.share}>HOW WE SHARE PERSONAL INFORMATION</a>
          </li>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.protect}>HOW WE PROTECT PERSONAL INFORMATION</a>
          </li>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.transfers}>DATA TRANSFERS</a>
          </li>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.children}>CHILDREN’S PRIVACY</a>
          </li>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.california}>YOUR CALIFORNIA PRIVACY RIGHTS</a>
          </li>
          <li className='ml-4 mb-3'>
            <a href={'#' + anchors.choices}>YOUR CHOICES</a>
          </li>
          <li className='ml-6 mb-3'>
            <a href={'#' + anchors.thirdParty}>THIRD PARTY WEBSITE AND APPS</a>
          </li>
          <li className='ml-6 mb-3'>
            <a href={'#' + anchors.contact}>CONTACT US</a>
          </li>
        </ol>
        <br />
        <br />
        <p className='text-sm md:text-base'>
          <a id={anchors.types} />
          <h4 className='mb-2'>
            <b>1. TYPES OF INFORMATION WE COLLECT</b>
          </h4>
          We collect two basic types of information from you when you provide it to us or when you use or interact with our Website:
          personal information and non-personal information.
          <br />
          <br />
          Personal information includes all information that relates to you and either identifies or may be used to identify you
          personally (collectively, “personal information”). We may collect the following type of personal information from you
          depending upon the device you are using and how you interact with us or use or interact with our Website, such as your:
          <br />
          <br />
          <ul className='text-sm md:text-base list-disc'>
            <li className='ml-6'>
              Device Information. IP address, browser type and version, browser plug-in types and versions, operating system and
              platform, device type and device identifiers.
            </li>
          </ul>
          <br />
          Non-personal information includes information that does not personally identify you or information that has been
          anonymized (collectively, “non-personal information”). When we combine non-personal information with personal information,
          we treat the combined information as personal information.
          <br />
          <br />
          <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.collect} />
          <h4 className='mb-2'>
            <b>2. HOW WE COLLECT PERSONAL INFORMATION</b>
          </h4>
          We need to collect personal information from you in order to provide you with our Website, as well as to improve your
          experience while using our Website. Please note that when you visit or use our Website, you may provide us with personal
          information. <br />
          <br />
          <p className='underline text-sm md:text-base'>Cookies</p>
          <br />
          Like many websites and apps, we use “cookies”, which are small text files that are stored on your computer or equipment
          when you visit certain online pages that record your preferences and actions, including how you use the website. We use
          this information for analytics purposes which allows us to improve your browsing experience. The information we collect
          through these technologies will also be used to manage your session. Out of these cookies, the cookies that are
          categorized as "necessary" are stored on your browser as they are essential for the working of basic functionalities of
          the website. These necessary cookies cannot be disabled. <br />
          <br />
          Cookie Opt-out. You can set your browser or device to refuse all cookies or to indicate when a cookie is being sent. If
          you delete your cookies, if you opt-out from cookies, or if you set your browser or device to decline these technologies,
          the Website may not function properly. Our Website does not currently change the way it operates upon detection of a Do
          Not Track or similar signal. <br /> <br />
          <p className='underline text-sm md:text-base'>Online Analytics</p> <br />
          We also use various types of online analytics including Google Analytics, a web analytics service provided by Google, Inc.
          (“Google”), on our Website. Google Analytics uses cookies or other tracking technologies to help us analyze how users
          interact with and use the Website, compile reports on the related activities, and provide other services related to
          website and app activity and usage. The technologies used by Google may collect information such as your IP address, time
          of visit, whether you are a return visitor, and any referring website or app. The information generated by Google
          Analytics will be transmitted to and stored by Google and will be subject to Google’s privacy policies. To learn more
          about Google’s services and to learn how to opt-out of tracking of analytics by Google click here. <br /> <br />
          <p className='underline text-sm md:text-base'>Other Sources</p> <br />
          We also may collect personal information from other sources, such as our partners or third party service providers, for
          the purposes listed in the How We Use Personal Information section below, including to enable us to verify or update
          information contained in our records and to better customize the Website for you. <br /> <br /> <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.use} />
          <h4 className='mb-2'>
            <b>3.HOW WE USE PERSONAL INFORMATION</b>
          </h4>
          We may use personal information to do any or all of the following:
          <br /> <br />
          <ul className='list-disc'>
            <li className='ml-4 mb-3'>provide you with our Website;</li>
            <li className='ml-4 mb-3'>facilitate your interactions and transactions with us;</li>
            <li className='ml-4 mb-3'>
              respond to your requests, communications, suggestions, comments, inquiries, and requests (including your feedback
              about our Website);
            </li>
            <li className='ml-4 mb-3'>administer our relationship with you, including creating and managing your account;</li>
            <li className='ml-4 mb-3'>maintain and improve our business;</li>
            <li className='ml-4 mb-3'>measure the performance of our business;</li>
            <li className='ml-4 mb-3'>develop new products and features;</li>
            <li className='ml-4 mb-3'>better understand the preferences of our customers;</li>
            <li className='ml-4 mb-3'>provide personalized content, including ads;</li>
            <li className='ml-4 mb-3'>
              provide you with, and improve, relevant marketing offers or information from us or relevant third parties;
            </li>
            <li className='ml-4 mb-3'>
              respond to legally binding requests from law enforcement, regulatory authorities, or other third parties;
            </li>
            <li className='ml-4 mb-3'>
              defend, protect or enforce our rights or applicable terms of service or to fulfill our legal or contractual
              obligations;
            </li>
            <li className='ml-4 mb-3'>to prevent fraud or the recurrence of fraud;</li>
            <li className='ml-4 mb-3'>assist in the event of an emergency;</li>
            <li className='ml-4 mb-3'>comply with applicable law;</li>
            <li className='ml-4 mb-3'>any other purpose with your consent.</li>
          </ul>
          We may also combine your personal information collected through various sources, including information collected through
          our Website, and develop a customer profile that will be used for the purposes above.
          <br /> <br /> Except as otherwise permitted or required by applicable law, we only retain personal information for as long
          as we need to use the information for the purposes listed above, including, for legal, regulatory, backup, archival,
          accounting, and/or audit purposes.
          <br /> <br /> We may use personal information to create non-personal information. We may use non-personal information for
          any legitimate business purpose. <br /> <br /> <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.share} />
          <h4 className='mb-2'>
            <b>4.HOW WE SHARE PERSONAL INFORMATION </b>
          </h4>
          We may share personal information with our third party service providers, suppliers, vendors, professional advisors and
          business partners, which may include IT service providers, financial institutions and payment providers, customer
          relationship management vendors, other cloud-based solutions providers, lawyers, accountants, auditors and other
          professional advisors. We contract with such vendors and advisers to ensure that they only process your personal
          information under our instructions and ensure the security and confidentiality of your personal information. We share
          personal information with these third parties to help us:
          <br />
          <br />
          <ul className='list-disc'>
            <li className='ml-4 mb-3'>with the uses described in the How We Use Information section above;</li>
            <li className='ml-4 mb-3'>
              in the operation, management, improvement, research and analysis of our Website and/or business;
            </li>
            <li className='ml-4 mb-3'>
              with our marketing and promotional projects, such as sending you information about products you may like and other
              promotions (provided you have not unsubscribed from receiving such marketing and promotional information from us);
            </li>
            <li className='ml-4 mb-3'>and comply with your directions or any consent you have provided us.</li>
          </ul>
          <br />
          We may share personal information with law enforcement and regulatory authorities or other third parties as required or
          permitted by law for the purpose of:
          <br />
          <br />
          <ul className='list-disc'>
            <li className='ml-4 mb-3'>responding to a subpoena, court order, or other legal processes;</li>
            <li className='ml-4 mb-3'>defending, protecting, or enforcing our rights;</li>
            <li className='ml-4 mb-3'>assisting in the event of an emergency;</li>
            <li className='ml-4 mb-3'>and complying with applicable law.</li>
          </ul>
          In accordance with applicable law, we may also transfer or assign personal information to third parties as a result of, or
          in connection with, a sale, merger, consolidation, change in control, transfer of assets, bankruptcy, reorganization, or
          liquidation. If we are involved in defending a legal claim, we may disclose personal information about you that is
          relevant to the claim to third parties as a result of, or in connection with, the associated legal proceedings.
          <br />
          <br />
          We share non-personal information with third parties as reasonably necessary to meet our business needs.
          <br />
          <br />
          <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.protect} />
          <h4 className='mb-2'>
            <b>5.HOW WE PROTECT PERSONAL INFORMATION</b>
          </h4>
          We are dedicated to ensuring the security of your personal information. We use physical, electronic, and administrative
          security measures appropriate to the risks and sensitivity of the personal information we collect. We aim to provide
          secure transmission of your personal information from your devices to our servers. We have processes to store personal
          information that we have collected in secure operating environments. Our security procedures mean that we may occasionally
          request proof of identity before we disclose your personal information to you. We try our best to safeguard personal
          information once we receive it, but please understand that no transmission of data over the Internet or any other public
          network can be guaranteed to be 100% secure. If you suspect an unauthorized use or security breach of your personal
          information, please contact us immediately.
          <br />
          <br />
          <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.transfers} />
          <h4 className='mb-2'>
            <b>6. DATA TRANSFERS</b>
          </h4>
          We are a global business. As such, information we collect may be transferred to, stored, and processed in any country or
          territory where one or more of our business partners or service providers are based or have facilities which may be a
          different to your home country. In these circumstances, the governments, courts, law enforcement, or regulatory agencies
          of that country may be able to obtain access to your personal information through the laws that country. While other
          countries or territories may not have the same standards of data protection as those in your home country, we will
          continue to protect personal information that we transfer in line with this Privacy Notice by requiring that our business
          partners or service providers adhere to this Privacy Notice and the applicable privacy regulations in your home country.
          <br />
          <br />
          <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.children} />
          <h4 className='mb-2'>
            <b>7. CHILDREN’S PRIVACY</b>
          </h4>
          Our Website is not for children or those under the age of 13. We do not knowingly collect personal information from
          children or other persons who are under 13 years of age. Individuals who are children or those under the age of 13 should
          not attempt to provide us with any personal information. If you think we have received personal information from children
          or those under the age of 13, please contact us immediately.
          <br />
          <br />
          <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.california} />
          <h4 className='mb-2'>
            <b>8. YOUR CALIFORNIA PRIVACY RIGHTS</b>
          </h4>
          We do not share personal information with third parties for their own direct marketing purposes without your consent.
          California residents under 18 years old, in certain circumstances, may request and obtain removal of personal information
          or content that you have posted on our Website. Please be mindful that this would not ensure complete removal of the
          content posted by you on our Website. To make any request pursuant to California privacy law, please contact us.
          <br />
          <br />
          <br />
        </p>
        <p className='text-sm md:text-base'>
          <h4 className='mb-2'>
            <b>9. YOUR CHOICES</b>
          </h4>
          We offer you certain choices in connection with our Website.
          <br />
          <br />
          <h5>
            <b>Email Communications / Direct Marketing</b>
          </h5>
          <br />
          You may have the opportunity to receive certain communications from us related to our business. You can opt-out of
          marketing emails at any time by following the instructions at the bottom of our emails and adjusting your email
          preferences. Please note that certain emails may be necessary for the operation of our business. You will continue to
          receive these necessary emails, if lawful and appropriate, even if you unsubscribe from our optional marketing
          communications. <br />
          <br />
          <h5>
            <b>Cookies / Beacons</b>
          </h5>
          <br />
          If you wish to minimize information collected by cookies or beacons, you can adjust the settings of your device or
          browser. You can also set your device or browser to automatically reject any cookies. You may also be able to install
          plug-ins and add-ins that serve similar functions. However, please be aware that our Website may not work properly if you
          reject cookies. In addition, the offers we provide when you visit us may not be as relevant to you or tailored to your
          interests. For more information about how our Website use cookies, please see our Cookie section above. <br /> <br />
          <h5>
            <b>Do Not Track</b>
          </h5>
          <br /> Some devices and browsers support a “Do Not Track” (or, DNT) feature, a privacy preference that you can set in
          certain browsers, which is intended to be a signal to websites that you do not wish to be tracked across different
          websites or online services you visit. Please note that we cannot control how third party websites or online services you
          visit through our Website respond to Do Not Track signals. Check the privacy policies of those third parties for
          information on their privacy practices. Our Website does not currently change the way they operate upon detection of a Do
          Not Track or similar signal.
          <br />
          <br />
          <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.thirdParty} />
          <h4 className='mb-2'>
            <b>10. THIRD PARTY WEBSITES AND APPS</b>
          </h4>
          Our Website may contain links to other websites or apps operated by third parties. Please be advised that the practices
          described in this Privacy Notice do not apply to information gathered through these third party websites and apps. We have
          no control over, and are not responsible for, the actions and privacy policies of third parties and other websites and
          apps.
          <br />
          <br />
          <br />
        </p>
        <p className='text-sm md:text-base'>
          <a id={anchors.contact} />
          <h4 className='mb-2'>
            <b>11. CONTACT US</b>
          </h4>
          We welcome requests, questions, comments, and feedback on this Privacy Notice and our management of personal information.
          If you have requests, questions, concerns, or feedback, you can always contact us in the following ways. For your
          protection, we may need to verify your identity before assisting with your request, such as verifying that the information
          used to contact us matches the information that we have on file. <br />
          <br />
          Email: <a href='mailto:hello@haystacks.ai'>hello@haystacks.ai</a>
          <br />
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export { Privacy };
