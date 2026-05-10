import type { Metadata } from "next";
import LandingShell from "@/components/landing/LandingShell";
import { LegalView, type LegalSection } from "@/components/landing/LegalView";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  canonical: "/data-privacy",
});

const sections: LegalSection[] = [
  {
    id: "company-memory",
    clause: "01",
    heading: "Company Memory",
    body: [
      "Company Memory is the shared knowledge base that aggregates summaries, decisions, and action items from meetings and other authorized sources. It exists to keep teams aligned without forcing every employee to read every artifact.",
      "Raw, sensitive material — full transcripts, recordings, private notes — stays with the people who generated it. Only the derived intelligence is shared, and only with the people authorized to see it.",
    ],
  },
  {
    id: "meeting-privacy",
    clause: "02",
    heading: "Meeting Data Privacy",
    body: [
      <>
        <span className="mb-defined">Private meetings.</span> Participants can
        designate a meeting as private by typing{" "}
        <code className="lg-code">@sentra private</code> during the meeting, or
        marking it private afterward. Private meetings are never added to
        Company Memory and are visible only to participants.
      </>,
      <>
        <span className="mb-defined">What is collected.</span> Meeting
        transcripts and participant lists.
      </>,
      <>
        <span className="mb-defined">What is generated.</span> Summaries, key
        decisions, status updates, and action items.
      </>,
    ],
  },
  {
    id: "access-levels",
    clause: "03",
    heading: "Access Levels",
    body: [
      "Visibility is determined by participation, role, and explicit sharing. The defaults are conservative; sensitive content does not surface by accident.",
      <ul className="mb-list" key="access">
        <li>
          <span className="mb-defined">Event participants</span> — full
          transcript, summaries, and action items, plus the ability to share
          selectively.
        </li>
        <li>
          <span className="mb-defined">Admin non-participants</span> — public
          notes and summaries only.
        </li>
        <li>
          <span className="mb-defined">Member non-participants</span> — only
          meetings they attended or that were explicitly shared with them.
        </li>
        <li>
          <span className="mb-defined">All non-participants</span> — no access
          to private meetings, ever.
        </li>
      </ul>,
    ],
  },
  {
    id: "security-retention",
    clause: "04",
    heading: "Security & Retention",
    body: [
      "Data is encrypted in transit (TLS) and at rest (AES-256). The platform maintains SOC 2 Type II compliance with regular third-party audits. Private meetings are excluded from Company Memory by design — not by policy alone, but by the storage layer.",
      <ul className="mb-list" key="security">
        <li>End-to-end encryption in transit.</li>
        <li>AES-256 encryption at rest.</li>
        <li>SOC 2 Type II compliance with periodic audits.</li>
        <li>Private meetings excluded from Company Memory at the substrate.</li>
      </ul>,
    ],
  },
  {
    id: "user-rights",
    clause: "05",
    heading: "Your Rights",
    body: [
      <>
        You can access, download, and delete your data at any time. Requests can
        be made through in-product settings or by emailing{" "}
        <a href="mailto:contact@sentra.app" className="lg-mailto">
          contact@sentra.app
        </a>
        . You also control which derived insights are shared into Company
        Memory.
      </>,
    ],
  },
  {
    id: "principles",
    clause: "06",
    heading: "Principles That Guide Us",
    body: [
      "These commitments are not aspirational. They are the architectural constraints under which Sentra is built.",
      <ul className="mb-list" key="principles">
        <li>
          <span className="mb-defined">Least access, full provenance.</span>{" "}
          Every read is scoped; every fact carries its source.
        </li>
        <li>
          <span className="mb-defined">No training on customer content.</span>{" "}
          Customer meeting and workspace content is never used to train
          generalized models without explicit permission.
        </li>
        <li>
          <span className="mb-defined">User-owned originals.</span> The raw
          artifacts you produce remain yours; Sentra holds derived intelligence
          on your behalf.
        </li>
        <li>
          <span className="mb-defined">Reversible by default.</span> Connections
          can be disconnected, content can be deleted, and exports are always
          available.
        </li>
      </ul>,
    ],
  },
];

export default function DataPrivacyPage() {
  return (
    <LandingShell>
      <LegalView
        screenLabel="Data Privacy"
        title="How We Handle Data"
        lede="Sentra is built on the data your organization produces. This page is the operating contract for how that data is captured, who can see it, and how it is protected — written in the same plain language we use to describe our research."
        thesis={
          <>
            Raw sensitive content stays with the people who generated it. Only{" "}
            <span className="mb-egi">derived intelligence</span> — summaries,
            decisions, action items — flows into Company Memory, and only along
            access paths participants have explicitly authorized.
          </>
        }
        lastUpdated="July 18, 2025"
        sections={sections}
      />
    </LandingShell>
  );
}
