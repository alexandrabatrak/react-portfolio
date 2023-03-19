import { useEffect } from "react";
import Container from "../components/Container/Container";
import PageTitle from "../components/PageTitle/PageTitle";
import MotionPage from "../components/Motion/MotionPage";
import MotionParagraph from "../components/Motion/MotionParagraph";
import Separator from "../components/Separator/Separator";
import Subheading from "../components/Subheading/Subheading";
import TableOfContents from "../components/TableOfContents/TableOfContents";

export default function Terms() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <MotionPage id={"terms"} className='terms'>
      <Container>
        <PageTitle title={"Terms & conditions"} />
        <Separator />
        <p>
          <small>
            The Terms and Conditions were last updated on 19th of March 2023.
          </small>
        </p>
        <TableOfContents />
        <MotionParagraph>
          <Subheading text={"1. Introduction"} />
          <p className='text-font'>
            These Terms and conditions apply to this website and to the
            transactions related to my products and services. You may be bound
            by additional contracts related to your relationship with me or any
            products or services that you receive from me. If any provisions of
            the additional contracts conflict with any provisions of these
            Terms, the provisions of these additional contracts will control and
            prevail.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"2. Binding"} />
          <p className='text-font'>
            By accessing, or otherwise using this website, you hereby agree to
            be bound by these Terms and conditions set forth below. The mere use
            of this website implies the knowledge and acceptance of these Terms
            and conditions. In some particular cases, I can also ask you to
            explicitly agree.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"3. Electronic communication"} />
          <p className='text-font'>
            By using this website or communicating with me by electronic means,
            you agree and acknowledge that I may communicate with you
            electronically on my website or by sending an email to you, and you
            agree that all agreements, notices, disclosures, and other
            communications that I provide to you electronically satisfy any
            legal requirement, including but not limited to the requirement that
            such communications should be in writing.{" "}
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"4. Intellectual property"} />
          <p className='text-font'>
            I or my licensors own and control all of the copyright and other
            intellectual property rights in the website and the data,
            information, and other resources displayed by or accessible within
            the website.
          </p>
          <h5 className='text-font'>4.1 All the rights are reserved</h5>
          <p className='text-font'>
            Unless specific content dictates otherwise, you are not granted a
            license or any other right under Copyright, Trademark, Patent, or
            other Intellectual Property Rights. This means that you will not
            use, copy, reproduce, perform, display, distribute, embed into any
            electronic medium, alter, reverse engineer, decompile, transfer,
            download, transmit, monetize, sell, market, or commercialize any
            resources on this website in any form, without my prior written
            permission, except and only insofar as otherwise stipulated in
            regulations of mandatory law (such as the right to quote).
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"5. Third-party property"} />
          <p className='text-font'>
            This website may include hyperlinks or other references to other
            party/'s websites. I do not monitor or review the content of other
            party's websites which are linked to from this website. Products or
            services offered by other websites shall be subject to the
            applicable Terms and Conditions of those third parties. Opinions
            expressed or material appearing on those websites are not
            necessarily shared or endorsed by me. I will not be responsible for
            any privacy practices or content of these sites. You bear all risks
            associated with the use of these websites and any related
            third-party services. I will not accept any responsibility for any
            loss or damage in whatever manner, however caused, resulting from
            your disclosure to third parties of personal information.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"6. Responsible use"} />
          <p className='text-font'>
            By visiting my website, you agree to use it only for the purposes
            intended and as permitted by these Terms, any additional contracts
            with me, and applicable laws, regulations, and generally accepted
            online practices and industry guidelines. You must not use my
            website or services to use, publish or distribute any material which
            consists of (or is linked to) malicious computer software; use data
            collected from our website for any direct marketing activity, or
            conduct any systematic or automated data collection activities on or
            in relation to our website. Engaging in any activity that causes, or
            may cause, damage to the website or that interferes with the
            performance, availability, or accessibility of the website is
            strictly prohibited. To exercise the right of withdrawal, you must
            inform me of your decision to withdraw from this contract by an
            unequivocal statement (for example a letter sent by post, fax, or
            email). My contact details can be found below. You may use the
            attached model withdrawal form, but it is not obligatory.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"7. Idea submission"} />
          <p className='text-font'>
            Do not submit any ideas, inventions, works of authorship, or other
            information that can be considered your own intellectual property
            that you would like to present to me unless we have first signed an
            agreement regarding the intellectual property or a non-disclosure
            agreement. If you disclose it to me absent such written agreement,
            you grant to me a worldwide, irrevocable, non-exclusive,
            royalty-free license to use, reproduce, store, adapt, publish,
            translate and distribute your content in any existing or future
            media.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"8. Termination of use"} />
          <p className='text-font'>
            I may, in my sole discretion, at any time modify or discontinue
            access to, temporarily or permanently, the website or any Service
            thereon. You agree that I will not be liable to you or any third
            party for any such modification, suspension or discontinuance of
            your access to, or use of, the website or any content that you may
            have shared on the website. You will not be entitled to any
            compensation or other payment, even if certain features, settings,
            and/or any Content you have contributed or have come to rely on, are
            permanently lost. You must not circumvent or bypass, or attempt to
            circumvent or bypass, any access restriction measures on my website.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"9. Warranties and liability"} />
          <p className='text-font'>
            Nothing in this section will limit or exclude any warranty implied
            by law that it would be unlawful to limit or to exclude. This
            website and all content on the website are provided on an “as is”
            and “as available” basis and may include inaccuracies or
            typographical errors. I expressly disclaim all warranties of any
            kind, whether express or implied, as to the availability, accuracy,
            or completeness of the Content. I make no warranty that: this
            website or my content will meet your requirements; this website will
            be available on an uninterrupted, timely, secure, or error-free
            basis. Nothing on this website constitutes or is meant to
            constitute, legal, financial or medical advice of any kind. If you
            require advice you should consult an appropriate professional. The
            following provisions of this section will apply to the maximum
            extent permitted by applicable law and will not limit or exclude my
            liability in respect of any matter which it would be unlawful or
            illegal for me to limit or to exclude our liability. In no event
            will I be liable for any direct or indirect damages (including any
            damages for loss of profits or revenue, loss or corruption of data,
            software or database, or loss of or harm to property or data)
            incurred by you or any third party, arising from your access to, or
            use of, my website. Except to the extent any additional contract
            expressly states otherwise, my maximum liability to you for all
            damages arising out of or related to the website or any products and
            services marketed or sold through the website, regardless of the
            form of legal action that imposes liability (whether in contract,
            equity, negligence, intended conduct, tort or otherwise) will be
            limited to the total price that you paid to me to purchase such
            products or services or use the website. Such limit will apply in
            the aggregate to all of your claims, actions and causes of action of
            every kind and nature.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"10. Privacy"} />
          <p className='text-font'>
            To access my website and/or services, you may be required to provide
            certain information about yourself as part of the registration
            process. You agree that any information you provide will always be
            accurate, correct, and up to date. I have developed a policy to
            address any privacy concerns you may have. For more information,
            please see the <a href='privacy-statement'>Privacy Statement</a>.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"11. Export restrictions / Legal compliance"} />
          <p className='text-font'>
            Access to the website from territories or countries where the
            Content or purchase of the products or Services sold on the website
            is illegal is prohibited. You may not use this website in violation
            of export laws and regulations of United Kingdom.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"12. Assignment"} />
          <p className='text-font'>
            You may not assign, transfer or sub-contract any of your rights
            and/or obligations under these Terms and conditions, in whole or in
            part, to any third party without my prior written consent. Any
            purported assignment in violation of this Section will be null and
            void.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"13. Breaches of these Terms and conditions"} />
          <p>
            Without prejudice to my other rights under these Terms and
            Conditions, if you breach these Terms and Conditions in any way, I
            may take such action as I deem appropriate to deal with the breach,
            including temporarily or permanently suspending your access to the
            website, contacting your internet service provider to request that
            they block your access to the website, and/or commence legal action
            against you.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"14. Force majeure"} />
          <p className='text-font'>
            Except for obligations to pay money hereunder, no delay, failure or
            omission by either party to carry out or observe any of its
            obligations hereunder will be deemed to be a breach of these Terms
            and conditions if and for as long as such delay, failure or omission
            arises from any cause beyond the reasonable control of that party.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"15. Indemnification"} />
          <p className='text-font'>
            You agree to indemnify, defend and hold me harmless, from and
            against any and all claims, liabilities, damages, losses and
            expenses, relating to your violation of these Terms and conditions,
            and applicable laws, including intellectual property rights and
            privacy rights. You will promptly reimburse me for my damages,
            losses, costs and expenses relating to or arising out of such
            claims.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"16. Waiver"} />
          <p className='text-font'>
            Failure to enforce any of the provisions set out in these Terms and
            Conditions and any Agreement, or failure to exercise any option to
            terminate, shall not be construed as waiver of such provisions and
            shall not affect the validity of these Terms and Conditions or of
            any Agreement or any part thereof, or the right thereafter to
            enforce each and every provision.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"17. Language"} />
          <p className='text-font'>
            These Terms and Conditions will be interpreted and construed
            exclusively in English. All notices and correspondence will be
            written exclusively in that language.{" "}
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"18. Entire agreement"} />
          <p className='text-font'>
            These Terms and Conditions, together with my privacy statement,
            constitute the entire agreement between you and Alexandra Batrak in
            relation to your use of this website.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"19. Updating of these Terms and conditions"} />
          <p className='text-font'>
            I may update these Terms and Conditions from time to time. It is
            your obligation to periodically check these Terms and Conditions for
            changes or updates. The date provided at the beginning of these
            Terms and Conditions is the latest revision date. Changes to these
            Terms and Conditions will become effective upon such changes being
            posted to this website. Your continued use of this website following
            the posting of changes or updates will be considered notice of your
            acceptance to abide by and be bound by these Terms and Conditions.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"20. Choice of Law and Jurisdiction"} />
          <p className='text-font'>
            These Terms and Conditions shall be governed by the laws of United
            Kingdom. Any disputes relating to these Terms and Conditions shall
            be subject to the jurisdiction of the courts of United Kingdom. If
            any part or provision of these Terms and Conditions is found by a
            court or other authority to be invalid and/or unenforceable under
            applicable law, such part or provision will be modified, deleted
            and/or enforced to the maximum extent permissible so as to give
            effect to the intent of these Terms and Conditions. The other
            provisions will not be affected.
          </p>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"21. Contact information"} />
          <p className='text-font'>
            This website is owned and operated by Alexandra Batrak. You may
            contact me regarding these Terms and Conditions through my{" "}
            <a href='/contact'>contact page</a>.
          </p>
        </MotionParagraph>
      </Container>
    </MotionPage>
  );
}
