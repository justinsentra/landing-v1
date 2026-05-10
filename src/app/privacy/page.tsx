import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { LegalView, type LegalSection } from "@/components/landing/LegalView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({ canonical: "/privacy" });

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    clause: "01",
    heading: "Information We Collect",
    body: [
      <>
        <span className="mb-defined">Information you provide.</span>{" "}
        Registration and profile data including name, email, phone number, and
        any information added voluntarily. Communications, attachments, and
        newsletter subscriptions. Payment data is collected by third-party
        processors on Sentra&apos;s behalf.
      </>,
      <>
        <span className="mb-defined">Information collected during use.</span>{" "}
        Device information (IP, browser, OS, device identifiers), user-generated
        content, usage telemetry, and timestamps. Cookies and pixel tags are set
        by Sentra and our analytics partners.
      </>,
      <>
        <span className="mb-defined">Workspace and meeting content.</span>{" "}
        Authorized Google Workspace calendar information, account metadata, and
        — when you elect — meeting audio, recordings, and transcripts captured
        by our meeting bot or desktop note-taker.
      </>,
      <div className="mb-callout" key="workspace-callout">
        We do not retain Google Workspace data to create, improve, or train
        generalized AI or ML models. Customer meeting content is never used to
        train generalized models without explicit permission.
      </div>,
    ],
  },
  {
    id: "how-we-use",
    clause: "02",
    heading: "How We Use Information",
    body: [
      "Information is used to provide, maintain, and improve the Service; personalize the experience; communicate updates and support; understand usage; prevent fraud and abuse; and meet legal obligations. Aggregate, anonymized data may be derived from collected information for analytics and product research.",
      <ul className="mb-list" key="use-list">
        <li>Operate, maintain, and harden the Service.</li>
        <li>Personalize what is surfaced to you and your organization.</li>
        <li>Send transactional, security, and lifecycle communications.</li>
        <li>Detect, investigate, and prevent abuse or fraud.</li>
        <li>Comply with applicable law and respond to lawful requests.</li>
      </ul>,
    ],
  },
  {
    id: "how-we-disclose",
    clause: "03",
    heading: "How We Disclose Information",
    body: [
      <>
        <span className="mb-defined">Affiliates and service providers.</span>{" "}
        Information is shared with vendors who help us operate the Service,
        bound by contractual confidentiality and security obligations.
      </>,
      <>
        <span className="mb-defined">Meeting infrastructure.</span> Meeting
        audio and transcripts may be processed by providers such as Recall.ai
        for the purpose of capturing and rendering meeting intelligence.
      </>,
      <>
        <span className="mb-defined">Analytics partners.</span> Limited usage
        data is shared with services like Google Analytics to understand how the
        Service is used.
      </>,
      <>
        <span className="mb-defined">Legal and business transfers.</span>{" "}
        Information may be disclosed to comply with law, respond to lawful
        requests, or as part of a merger, acquisition, or asset sale, or with
        your consent.
      </>,
    ],
  },
  {
    id: "your-choices",
    clause: "04",
    heading: "Your Choices",
    body: [
      "You can unsubscribe from marketing email at any time using the link in any promotional message. Administrative messages about your account and the Service will continue.",
      "Sentra does not currently respond to Do Not Track signals from browsers.",
    ],
  },
  {
    id: "google-data",
    clause: "05",
    heading: "Google User Data: Retention & Deletion",
    body: [
      "When you connect a Google account via OAuth, we store your Google account identifier, email, name, and an OAuth refresh token. Calendar data is refreshed during sync and is not retained beyond active use. OAuth tokens persist while the account remains connected.",
      "You can disconnect your Google account from in-product settings or by removing Sentra from your Google account permissions. Deletion is completed within 30 days. Direct deletion requests can be sent to contact@sentra.app.",
    ],
  },
  {
    id: "meeting-content",
    clause: "06",
    heading: "Data Retention for Meeting Content",
    body: [
      "Meeting recordings, transcripts, and derived artifacts are retained while your account is active. You may delete recordings and transcripts at any time from account settings, or by emailing contact@sentra.app.",
    ],
  },
  {
    id: "third-parties",
    clause: "07",
    heading: "Third Parties",
    body: [
      "Sentra is not responsible for the privacy practices of services it links to or integrates with. Review the privacy policies of any external services before sharing information through them.",
    ],
  },
  {
    id: "security",
    clause: "08",
    heading: "Security",
    body: [
      "We employ administrative, technical, and physical safeguards designed to protect information. Because no system of electronic transmission or storage is entirely secure, we cannot guarantee the security or privacy of information you provide.",
    ],
  },
  {
    id: "children",
    clause: "09",
    heading: "Children's Privacy",
    body: [
      "The Service is not directed to children under 13, and we do not knowingly collect information from anyone under 13. If we learn we have collected such information, we will delete it.",
    ],
  },
  {
    id: "international",
    clause: "10",
    heading: "International Visitors",
    body: [
      "The Service is hosted in the United States. By using it from outside the U.S., you acknowledge that your information will be transferred to and processed in the United States.",
    ],
  },
  {
    id: "changes",
    clause: "11",
    heading: "Changes to This Policy",
    body: [
      "Updates are posted to this page. Material changes will be announced through the Service, by email, or by other direct means.",
    ],
  },
  {
    id: "contact-privacy",
    clause: "12",
    heading: "Contact",
    body: [
      <>
        Questions about this Privacy Policy or your data can be directed to{" "}
        <a href="mailto:contact@sentra.app" className="lg-mailto">
          contact@sentra.app
        </a>
        .
      </>,
      "Subprocessors include Amazon Web Services, GitHub, Slack, Google Cloud Platform, OpenAI, and Anthropic.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LandingShell>
      <LegalView
        screenLabel="Privacy"
        title="Privacy Policy"
        lede="This policy explains what information Sentra collects, how it is used, and the choices you have. We hold the originals of your work — meetings, threads, decisions — and treat that responsibility with the seriousness it deserves."
        thesis={
          <>
            Sentra captures the interactions that produce organizational
            intelligence. The standard for handling that data is{" "}
            <span className="mb-egi">least access, full provenance</span>:
            collect what is needed, hold it only as long as it serves you, and
            never use customer content to train generalized models.
          </>
        }
        lastUpdated="April 15, 2026"
        sections={sections}
      />
    </LandingShell>
  );
}
