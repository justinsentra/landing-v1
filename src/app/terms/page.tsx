import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { LegalView, type LegalSection } from "@/components/landing/LegalView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/terms" });

const sections: LegalSection[] = [
  {
    id: "service-overview",
    clause: "01",
    heading: "Sentra Service Overview",
    body: [
      "The Service provides software for organizations to capture interaction context, monitor work progression, receive automated analytics on team alignment, and integrate with existing tools such as GitHub, Jira, Asana, and Slack.",
      "The Service uses artificial intelligence and machine learning to analyze data from sources including meetings, calls, emails, and integrated platforms.",
      <div className="mb-callout" key="ai-callout">
        By using the Service you acknowledge that this technology is evolving
        and that AI tools may produce results that are inaccurate or that do not
        faithfully reflect real events, places, people, or facts.
      </div>,
    ],
  },
  {
    id: "eligibility",
    clause: "02",
    heading: "Eligibility",
    body: [
      "You must be at least 18 years old to use the Service. By accepting these Terms you represent that you are 18 or older, that you have not previously been suspended from the Service, and that your use complies with applicable law. If you accept on behalf of an entity, you represent that you are authorized to bind that entity.",
    ],
  },
  {
    id: "accounts",
    clause: "03",
    heading: "Accounts and Registration",
    body: [
      "Most features require a registered account. You agree to provide accurate, current, and complete information, and to keep account credentials confidential. You are responsible for activity occurring under your account. If you suspect compromise, notify contact@sentra.app immediately.",
    ],
  },
  {
    id: "payment",
    clause: "04",
    heading: "General Payment Terms",
    body: [
      <>
        <span className="mb-defined">Pricing.</span> Sentra sets and may change
        pricing for any feature, with advance notice before changes apply.
        Current pricing is published on the Service.
      </>,
      <>
        <span className="mb-defined">Authorization.</span> You authorize Sentra
        to charge the payment method on file for the order amount, applicable
        Service tier, and taxes. Pre-authorization may be obtained to verify
        funds.
      </>,
      <>
        <span className="mb-defined">Subscriptions.</span> Subscriptions renew
        automatically for successive periods unless cancelled before the renewal
        date. Renewal charges occur on the renewal date.
      </>,
      <>
        <span className="mb-defined">Delinquent accounts.</span> Accounts with
        unpaid balances may be suspended or terminated. Additional fees may
        apply for chargebacks or collections.
      </>,
    ],
  },
  {
    id: "licenses",
    clause: "05",
    heading: "Licenses",
    body: [
      "Subject to your continued compliance with these Terms, Sentra grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install one copy of any Service application on a device you control and to access and use the Service for business purposes.",
      <ul className="mb-list" key="restrictions">
        <li>
          No reproduction, distribution, public display, or derivative works.
        </li>
        <li>No modification of the Service.</li>
        <li>
          No interference with or circumvention of security or access controls.
        </li>
        <li>
          No decompiling, disassembling, reverse engineering, or attempts to
          derive source code.
        </li>
        <li>
          No use of the Service to train large language models or other systems
          without express written permission.
        </li>
      </ul>,
      <>
        <span className="mb-defined">Feedback.</span> If you provide feedback,
        you grant Sentra an unrestricted, perpetual, irrevocable, non-exclusive,
        fully-paid, royalty-free license to use and exploit it.
      </>,
    ],
  },
  {
    id: "ownership",
    clause: "06",
    heading: "Ownership; Proprietary Rights",
    body: [
      "Sentra owns and operates the Service. All visual interfaces, graphics, design, code, products, and software are protected by intellectual property and other laws and remain the property of Sentra or its licensors. No license is granted by implication; all rights not expressly granted are reserved.",
    ],
  },
  {
    id: "third-party",
    clause: "07",
    heading: "Third-Party Terms",
    body: [
      "The Service may let you export information to third-party services or link your accounts. You authorize Sentra to transfer information accordingly. Third-party services are not under Sentra's control, and Sentra is not responsible for how those services use exported information.",
      "The Service may incorporate open-source components made available under their own licenses. Nothing in these Terms restricts your rights under those open-source licenses.",
    ],
  },
  {
    id: "user-content",
    clause: "08",
    heading: "User Content",
    body: [
      "Some features let you submit content — work reports, meeting transcripts, internal documents — collectively, User Content. You retain ownership and copyright in your User Content, subject to the licenses granted in these Terms.",
      "By providing User Content, you grant Sentra a worldwide, non-exclusive, irrevocable, royalty-free, fully paid right and license (with the right to sublicense) to host, store, transfer, display, perform, reproduce, and create necessary derivative works for the purpose of operating the Service.",
      "You must not submit User Content unless you own or are fully authorized to grant rights in every element of it.",
    ],
  },
  {
    id: "meetings",
    clause: "09",
    heading: "Meeting Recording and Transcription",
    body: [
      "Sentra's meeting bot and desktop note-taker may capture audio, recordings, transcripts, and other meeting content. The bot's presence functions as notice that recording or transcription may occur.",
      "You are solely responsible for compliance with applicable recording, monitoring, and consent laws. You agree to provide all required notices and obtain any required consent before using Sentra to capture meeting content.",
      "You retain ownership of meeting recordings and transcripts. You grant Sentra a limited license to process, store, and analyze them solely to provide and improve the Service. We do not use customer meeting content to train generalized AI models unless explicitly permitted.",
    ],
  },
  {
    id: "communications",
    clause: "10",
    heading: "Communications",
    body: [
      "You agree that Sentra and its representatives may send SMS messages and place phone calls to numbers provided to us, including via automatic dialing systems. Carrier rates may apply. You may opt out of promotional email at any time by following unsubscribe instructions in those messages.",
    ],
  },
  {
    id: "prohibited",
    clause: "11",
    heading: "Prohibited Conduct",
    body: [
      "You agree not to use the Service to:",
      <ul className="mb-list" key="prohibited">
        <li>Violate any applicable law or regulation.</li>
        <li>Harass, threaten, or harm any other user.</li>
        <li>Spread misleading or false information.</li>
        <li>
          Violate, encourage, or instruct on violating any third-party right,
          including intellectual property rights.
        </li>
        <li>Interfere with security-related features or Service operation.</li>
        <li>
          Engage in fraud, impersonation, or unauthorized access to other
          accounts.
        </li>
        <li>Resell or transfer access granted under these Terms.</li>
        <li>Attempt, assist, or permit any of the foregoing.</li>
      </ul>,
    ],
  },
  {
    id: "ip-protection",
    clause: "12",
    heading: "Intellectual Property Rights Protection",
    body: [
      "Sentra respects the intellectual property rights of others and asks the same of its users. Infringing activity is not tolerated on or through the Service.",
      "DMCA notices and IP rights complaints can be sent to: Dynamis Labs, Inc., Attn: Legal Department (IP Notification), contact@sentra.app.",
    ],
  },
  {
    id: "term",
    clause: "13",
    heading: "Term, Termination, and Modification of the Service",
    body: [
      "These Terms are effective upon your first acceptance, download, install, or use of the Service and continue until terminated. Your authorization terminates automatically if you violate any provision. Sentra may also terminate or suspend access at any time for any reason, with or without notice.",
      "Upon termination, your license rights end, you must cease use, you remain liable for any unpaid amounts, and accrued payment obligations survive. Sentra may modify or discontinue any portion of the Service at any time without liability.",
    ],
  },
  {
    id: "indemnity",
    clause: "14",
    heading: "Indemnity",
    body: [
      "You will defend and indemnify Sentra and its affiliates, officers, directors, employees, and agents against third-party claims, liabilities, damages, losses, and expenses (including attorneys' fees) arising out of or connected with your use or misuse of the Service, your violation of these Terms or applicable law, your violation of any third-party right, or any dispute between you and a third party.",
    ],
  },
  {
    id: "warranty",
    clause: "15",
    heading: "Disclaimers; No Warranties",
    body: [
      "To the maximum extent permitted by law, Sentra disclaims all liability related to AI tool output. AI may return inaccurate or fabricated information. The Service does not provide medical, health, legal, financial, tax, accounting, or other professional advice.",
      'THE SERVICE AND ALL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. Sentra disclaims all warranties of any kind, express or implied, relating to the Service.',
    ],
  },
  {
    id: "liability",
    clause: "16",
    heading: "Limitation of Liability",
    body: [
      "TO THE FULLEST EXTENT PERMITTED BY LAW, SENTRA WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SERVICE.",
      "Sentra's aggregate liability for all claims is limited to the greater of (a) the amount you paid Sentra for the Service in the 12 months prior to the event giving rise to the claim, and (b) US$100.",
    ],
  },
  {
    id: "arbitration",
    clause: "17",
    heading: "Dispute Resolution and Arbitration",
    body: [
      "Except as described below, you and Sentra agree that every dispute arising in connection with these Terms or the Service will be resolved through binding individual arbitration. By accepting these Terms, you and Sentra each waive the right to a jury trial and to participate in any class action or representative proceeding.",
      "Exceptions: nothing here waives the right to bring an individual small-claims action; pursue enforcement through applicable agencies; seek injunctive relief in aid of arbitration; or sue to address intellectual property infringement.",
      "Opt-out: you may opt out of arbitration within 30 days of accepting these Terms by writing to Dynamis Labs, Inc., Attn: Legal Department — Arbitration Opt-Out, with your name, account email, and statement of intent to opt out.",
    ],
  },
  {
    id: "miscellaneous",
    clause: "18",
    heading: "Miscellaneous",
    body: [
      "These Terms, together with the Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and Sentra regarding the Service.",
      "These Terms are governed by the laws of the State of California without regard to conflict of law principles. The state and federal courts located in Santa Clara County, California have exclusive jurisdiction for any permitted court proceeding.",
      <>
        Questions can be sent to{" "}
        <a href="mailto:contact@sentra.app" className="lg-mailto">
          contact@sentra.app
        </a>
        .
      </>,
    ],
  },
];

export default function TermsPage() {
  return (
    <LandingShell>
      <LegalView
        screenLabel="Terms"
        title="Terms of Service"
        lede="By accessing the Service, you enter a binding agreement with Dynamis Labs, Inc. (Sentra). These Terms describe the rights and responsibilities that govern that relationship — written plainly, structured to be read."
        thesis={
          <>
            Sentra is{" "}
            <span className="mb-egi">
              infrastructure for organizational memory
            </span>
            . Trust in that infrastructure depends on a clear, durable contract
            for how the Service is used, what is owned, and how disputes are
            resolved. This document is that contract.
          </>
        }
        lastUpdated="March 2026"
        sections={sections}
      />
    </LandingShell>
  );
}
