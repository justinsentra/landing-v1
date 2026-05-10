// One-shot generator: emits src/data/brand-paths.ts and src/data/integrations.ts.
// Resolves icons by chaining several open icon sets, then a small set of custom
// brand-tile fallbacks (letter mark in the brand's actual public colour) for
// the long tail of niche SaaS tools that aren't in any open icon library.
// Run: node scripts/gen-brand-paths.js
const fs = require("fs");
const path = require("path");
const logosSet = require("@iconify-json/logos/icons.json");
const siSet = require("@iconify-json/simple-icons/icons.json");
const cibSet = require("@iconify-json/cib/icons.json");
const arcSet = require("@iconify-json/arcticons/icons.json");
const faSet = require("@iconify-json/fa6-brands/icons.json");

// Tuple: [name, category, hint, attempts[]]
// attempts is an ordered list of [setName, slug] pairs to try. The first hit
// wins; if all miss, BrandIcon falls back to a coloured letter tile (see
// BRAND_TILE below for niche tools that have no open icon set entry).
const ORDERED = [
  // ─────────── tier A — user-pinned popular first ───────────
  ["Gmail", "Email", "Triage priority threads", [["logos", "google-gmail"]]],
  [
    "Outlook",
    "Email",
    "Triage priority threads",
    [["arc", "microsoft-outlook"]],
  ],
  [
    "Google Calendar",
    "Calendar",
    "Find time, book meetings",
    [["logos", "google-calendar"]],
  ],
  [
    "Google Drive",
    "Storage",
    "Pull the right files",
    [["logos", "google-drive"]],
  ],
  [
    "Google Sheets",
    "Spreadsheets",
    "Read ranges, append rows",
    [["si", "googlesheets"]],
  ],
  [
    "Supabase",
    "Databases",
    "Query databases, manage tables",
    [["logos", "supabase-icon"]],
  ],
  [
    "Notion",
    "Productivity",
    "Search pages, append blocks",
    [["logos", "notion-icon"]],
  ],
  [
    "Slack",
    "Messaging",
    "Post updates, watch channels",
    [["logos", "slack-icon"]],
  ],
  [
    "Airtable",
    "Databases",
    "Query records, append rows",
    [["logos", "airtable"]],
  ],
  [
    "Google Docs",
    "Documents",
    "Land output in a shared doc",
    [["si", "googledocs"]],
  ],
  ["HubSpot", "CRM", "Drive deal motion forward", [["logos", "hubspot"]]],
  ["Salesforce", "CRM", "Drive accounts and opps", [["logos", "salesforce"]]],

  // ─────────── tier B — extremely popular ───────────
  [
    "GitHub",
    "Development",
    "Watch PRs, surface owners",
    [["logos", "github-icon"]],
  ],
  [
    "Linear",
    "Project Management",
    "Move issues, ship cycles",
    [["logos", "linear"]],
  ],
  [
    "Jira",
    "Project Management",
    "Move tickets, track sprints",
    [["logos", "jira"]],
  ],
  [
    "Asana",
    "Project Management",
    "Track tasks, manage projects",
    [["logos", "asana"]],
  ],
  ["Figma", "Design", "Watch comments, pull frames", [["logos", "figma"]]],
  [
    "Zoom",
    "Video Conferencing",
    "Spin up call links",
    [["logos", "zoom-icon"]],
  ],
  [
    "Microsoft Teams",
    "Messaging",
    "Post updates, watch channels",
    [["logos", "microsoft-teams"]],
  ],
  [
    "Discord",
    "Messaging",
    "Post updates, watch channels",
    [["logos", "discord-icon"]],
  ],
  ["ChatGPT", "AI", "Reason over context", [["logos", "openai-icon"]]],
  ["OpenAI", "AI", "Reason over context", [["logos", "openai-icon"]]],
  ["Anthropic", "AI", "Run grounded reasoning", [["logos", "anthropic"]]],
  ["Stripe", "Finance", "Watch payments and revenue", [["logos", "stripe"]]],
  [
    "Shopify",
    "Ecommerce",
    "Query orders, manage products",
    [["logos", "shopify"]],
  ],
  [
    "Calendly",
    "Scheduling",
    "Check meetings, manage event types",
    [["si", "calendly"]],
  ],
  ["Dropbox", "Storage", "Find files, pull context", [["logos", "dropbox"]]],
  ["Loom", "Video", "Pull recordings in context", [["logos", "loom"]]],
  [
    "Confluence",
    "Documents",
    "Search wikis, attach evidence",
    [["logos", "confluence"]],
  ],
  [
    "Intercom",
    "Support",
    "Manage conversations, track customers",
    [["logos", "intercom-icon"]],
  ],
  [
    "Zendesk",
    "Support",
    "Search tickets, manage support",
    [["logos", "zendesk-icon"]],
  ],
  ["Pipedrive", "CRM", "Move deals through pipeline", [["logos", "pipedrive"]]],
  ["Vercel", "Cloud", "Watch builds and deploys", [["logos", "vercel-icon"]]],
  ["AWS", "Cloud", "Inspect resources, run jobs", [["logos", "aws"]]],
  [
    "Datadog",
    "Observability",
    "Watch metrics, surface anomalies",
    [["logos", "datadog"]],
  ],
  [
    "Sentry",
    "Observability",
    "Monitor errors, triage by impact",
    [["logos", "sentry-icon"]],
  ],
  [
    "Posthog",
    "Analytics",
    "Watch product behavior",
    [["logos", "posthog-icon"]],
  ],
  [
    "Amplitude",
    "Analytics",
    "Watch event funnels",
    [["logos", "amplitude-icon"]],
  ],
  [
    "Mailchimp",
    "Marketing",
    "Trigger sends, segment lists",
    [["logos", "mailchimp"]],
  ],
  [
    "Twitter",
    "Social Media",
    "Watch posts and replies",
    [["logos", "twitter"]],
  ],
  [
    "LinkedIn",
    "Social Media",
    "Watch reach and replies",
    [["logos", "linkedin-icon"]],
  ],
  [
    "WhatsApp",
    "Messaging",
    "Reply on the right thread",
    [["logos", "whatsapp-icon"]],
  ],

  // ─────────── tier C — common ───────────
  ["GitLab", "Development", "Track pipelines and MRs", [["logos", "gitlab"]]],
  [
    "Bitbucket",
    "Development",
    "Watch PRs, ship faster",
    [["logos", "bitbucket"]],
  ],
  [
    "ClickUp",
    "Project Management",
    "Move tasks, track progress",
    [["arc", "clickup"]],
  ],
  [
    "Trello",
    "Project Management",
    "Track boards, lists, cards",
    [["logos", "trello"]],
  ],
  [
    "Monday",
    "Project Management",
    "Move items across boards",
    [["logos", "monday-icon"]],
  ],
  ["Cal.com", "Scheduling", "Find time, book slots", [["si", "caldotcom"]]],
  ["Box", "Storage", "Search files, pull context", [["logos", "box"]]],
  [
    "OneDrive",
    "Storage",
    "Find files, pull context",
    [["logos", "microsoft-onedrive"]],
  ],
  ["Front", "Support", "Drop the next reply", [["logos", "frontapp"]]],
  ["Freshdesk", "Support", "Triage and answer tickets", []],
  ["ServiceNow", "Support", "Move tickets through queues", []],
  ["Apollo", "Sales", "Enrich the next outreach", []],
  ["Clay", "Sales", "Enrich every contact", []],
  ["Gong", "Sales", "Pull call moments", []],
  ["Close", "CRM", "Drive deal motion forward", [["logos", "close"]]],
  ["Attio", "CRM", "Manage contacts, companies, deals", []],
  ["Azure", "Cloud", "Manage tenants and runs", [["logos", "microsoft-azure"]]],
  ["Netlify", "Cloud", "Watch builds and deploys", [["logos", "netlify"]]],
  ["Heroku", "Cloud", "Watch dynos and releases", [["logos", "heroku-icon"]]],
  [
    "PagerDuty",
    "Observability",
    "Watch incidents, route owners",
    [["logos", "pagerduty"]],
  ],
  [
    "New Relic",
    "Observability",
    "Watch performance signals",
    [["logos", "new-relic"]],
  ],
  ["Segment", "Analytics", "Track events across stack", [["logos", "segment"]]],
  [
    "Tableau",
    "Analytics",
    "Surface dashboard signals",
    [["logos", "tableau-icon"]],
  ],
  [
    "Google Analytics",
    "Analytics",
    "Track traffic in context",
    [["logos", "google-analytics"]],
  ],
  [
    "Snowflake",
    "Databases",
    "Run analytical queries",
    [["logos", "snowflake-icon"]],
  ],
  [
    "Google Bigquery",
    "Databases",
    "Run analytical queries",
    [["si", "googlebigquery"]],
  ],
  [
    "MongoDB",
    "Databases",
    "Query collections fast",
    [["logos", "mongodb-icon"]],
  ],
  [
    "PostgreSQL",
    "Databases",
    "Run queries on demand",
    [["logos", "postgresql"]],
  ],
  ["MySQL", "Databases", "Run queries on demand", [["logos", "mysql-icon"]]],
  ["Pinecone", "Databases", "Query semantic memory", [["logos", "pinecone"]]],
  ["Firebase", "Databases", "Read realtime data", [["logos", "firebase"]]],
  ["Mercury", "Finance", "Watch balances and flows", []],
  ["Ramp", "Finance", "Watch spend and bills", []],
  [
    "Quickbooks",
    "Finance",
    "Surface invoices and bills",
    [["si", "quickbooks"]],
  ],
  ["Xero", "Finance", "Pull invoices and expenses", [["logos", "xero"]]],
  ["Plaid", "Finance", "Resolve account activity", []],
  ["Square", "Finance", "Watch sales and payouts", [["logos", "square"]]],
  ["Webflow", "CMS", "Update content live", [["logos", "webflow"]]],
  [
    "WordPress",
    "CMS",
    "Publish and update posts",
    [["logos", "wordpress-icon"]],
  ],
  ["Make", "Automation", "Trigger downstream scenarios", [["si", "make"]]],
  [
    "Zapier",
    "Automation",
    "Trigger downstream zaps",
    [["logos", "zapier-icon"]],
  ],
  ["Composio", "Integration Platform", "Wire any tool quickly", []],
  ["Perplexity", "AI", "Pull cited answers", [["logos", "perplexity-icon"]]],
  ["Hugging Face", "AI", "Run hosted models", [["logos", "hugging-face-icon"]]],
  ["Replicate", "AI", "Run hosted model inference", [["si", "replicate"]]],
  ["ElevenLabs", "AI", "Generate spoken output", [["si", "elevenlabs"]]],
  ["DeepL", "AI", "Translate the next reply", [["si", "deepl"]]],
  ["Typeform", "Forms", "Pull form responses in", [["logos", "typeform-icon"]]],
  ["Granola", "Productivity", "Pull meeting notes in", []],
  ["Fireflies", "Productivity", "Capture meeting transcripts", []],
  ["BambooHR", "HR", "Sync people data", [["arc", "bamboohr"]]],
  [
    "Greenhouse",
    "HR",
    "Move candidates through stages",
    [["si", "greenhouse"]],
  ],
  ["Workday", "HR", "Sync workforce records", [["arc", "workday"]]],
  ["Rippling", "HR", "Sync people and access", []],
  ["Lever", "HR", "Track candidate momentum", []],
  ["Ashby", "HR", "Move candidates forward", []],
  [
    "Reddit",
    "Social Media",
    "Watch threads worth replying to",
    [["logos", "reddit-icon"]],
  ],
  ["Facebook", "Social Media", "Pull page activity", [["logos", "facebook"]]],
  [
    "Instagram",
    "Social Media",
    "Watch posts and DMs",
    [["logos", "instagram-icon"]],
  ],
  [
    "TikTok",
    "Social Media",
    "Track post performance",
    [["logos", "tiktok-icon"]],
  ],
  ["YouTube", "Media", "Watch video performance", [["logos", "youtube-icon"]]],
  ["Spotify", "Media", "Pull listening context", [["logos", "spotify-icon"]]],

  // ─────────── tier D — long tail ───────────
  [
    "Active Campaign",
    "Marketing",
    "Trigger sends, segment lists",
    [["logos", "active-campaign"]],
  ],
  ["Adobe", "Design", "Pull asset metadata", [["logos", "adobe"]]],
  ["Affinity", "CRM", "Update relationship intel", []],
  ["Ahrefs", "Marketing", "Track ranking shifts", []],
  ["Algolia", "Search", "Index live content", [["logos", "algolia"]]],
  ["Alpha Vantage", "Finance", "Pull market quotes", []],
  [
    "Atlassian",
    "Development",
    "Wire issues to context",
    [["logos", "atlassian"]],
  ],
  [
    "Auth0",
    "Authentication",
    "Audit identity events",
    [["logos", "auth0-icon"]],
  ],
  ["Baserow", "Databases", "Query, append, edit rows", []],
  ["Bitly", "Marketing", "Track campaign clicks", [["si", "bitly"]]],
  ["Brave Search", "Search", "Pull live web answers", [["logos", "brave"]]],
  ["Brevo", "Email", "Send transactional mail", []],
  ["Browserbase", "Development", "Run headless flows", []],
  [
    "Bubble",
    "Development",
    "Trigger workflows in app",
    [["logos", "bubble-icon"]],
  ],
  ["Canva", "Design", "Pull brand assets", [["cib", "canva"]]],
  ["Canvas", "Education", "Sync course events", [["arc", "canvas"]]],
  [
    "Chargebee",
    "Finance",
    "Track subscription state",
    [["logos", "chargebee"]],
  ],
  ["Clockify", "Productivity", "Log time against work", [["si", "clockify"]]],
  ["Coda", "Documents", "Update docs and tables", [["logos", "coda"]]],
  ["Code Interpreter", "Development", "Run code on demand", []],
  ["Contentful", "CMS", "Update entries at scale", [["logos", "contentful"]]],
  ["Docusign", "Documents", "Send and track agreements", [["cib", "docusign"]]],
  ["Dropbox Sign", "Documents", "Send things to sign", []],
  ["Dynamics 365", "CRM", "Update accounts and deals", []],
  ["Elastic", "Search", "Query indexes fast", [["si", "elastic"]]],
  [
    "Eventbrite",
    "Events",
    "Track registrations live",
    [["logos", "eventbrite"]],
  ],
  ["Exa", "Search", "Find research-grade results", []],
  [
    "Expensify",
    "Finance",
    "Surface receipts to approve",
    [["arc", "expensify"]],
  ],
  ["Firecrawl", "Web Scraping", "Pull pages on demand", []],
  [
    "Google Ads",
    "Marketing",
    "Watch campaign spend",
    [["logos", "google-ads"]],
  ],
  [
    "Google Forms",
    "Forms",
    "Capture responses to act on",
    [["si", "googleforms"]],
  ],
  [
    "Google Maps",
    "Maps",
    "Resolve addresses, pull places",
    [["logos", "google-maps"]],
  ],
  [
    "Google Meet",
    "Video Conferencing",
    "Spin up call links",
    [["logos", "google-meet"]],
  ],
  [
    "Google Search Console",
    "Marketing",
    "Surface search performance",
    [["logos", "google-search-console"]],
  ],
  [
    "Google Slides",
    "Documents",
    "Build decks from live context",
    [["si", "googleslides"]],
  ],
  [
    "Google Tasks",
    "Productivity",
    "Capture next actions",
    [["si", "googletasks"]],
  ],
  ["Grok", "AI", "Reason over live posts", [["logos", "grok"]]],
  [
    "Hootsuite",
    "Social Media",
    "Schedule and queue posts",
    [["si", "hootsuite"]],
  ],
  ["Jotform", "Forms", "Capture submissions live", []],
  ["Klaviyo", "Marketing", "Trigger lifecycle sends", []],
  ["LangChain", "AI", "Wire chains into flows", [["si", "langchain"]]],
  ["Mailgun", "Email", "Send transactional mail", [["logos", "mailgun-icon"]]],
  ["MariaDB", "Databases", "Query rows on demand", [["logos", "mariadb-icon"]]],
  ["Medium", "Publishing", "Pull post performance", [["logos", "medium-icon"]]],
  ["Mem", "Productivity", "Capture lasting notes", []],
  ["Meta Ads", "Marketing", "Watch campaign spend", [["logos", "meta-icon"]]],
  ["Miro", "Collaboration", "Pull board context in", [["logos", "miro"]]],
  ["PandaDoc", "Documents", "Send proposals to sign", []],
  [
    "Pinterest",
    "Social Media",
    "Track pin performance",
    [["logos", "pinterest"]],
  ],
  ["Razorpay", "Finance", "Track payments and refunds", [["si", "razorpay"]]],
  ["Resend", "Email", "Send transactional mail", [["si", "resend"]]],
  [
    "Rollbar",
    "Observability",
    "Monitor errors, route owners",
    [["logos", "rollbar-icon"]],
  ],
  ["Sage", "Finance", "Pull ledger context", []],
  ["SAP", "ERP", "Read system records", [["logos", "sap"]]],
  ["SendGrid", "Email", "Send transactional mail", [["logos", "sendgrid"]]],
  [
    "Shortcut",
    "Project Management",
    "Move stories across iterations",
    [["si", "shortcut"]],
  ],
  [
    "Stack Overflow",
    "Development",
    "Pull answers in context",
    [["logos", "stackoverflow-icon"]],
  ],
  ["SugarCRM", "CRM", "Drive accounts forward", []],
  [
    "SurveyMonkey",
    "Forms",
    "Capture responses to act on",
    [["si", "surveymonkey"]],
  ],
  ["Tally", "Forms", "Capture form submissions", []],
  ["Tavily", "Search", "Pull research-grade answers", []],
  [
    "Telegram",
    "Messaging",
    "Post updates, watch chats",
    [["logos", "telegram"]],
  ],
  [
    "Todoist",
    "Productivity",
    "Capture next actions",
    [["logos", "todoist-icon"]],
  ],
  ["Toggl", "Productivity", "Log time against work", [["si", "toggl"]]],
  [
    "Twilio",
    "Communications",
    "Send SMS and calls",
    [["logos", "twilio-icon"]],
  ],
  ["Twitch", "Media", "Watch stream activity", [["logos", "twitch"]]],
  ["Vimeo", "Video", "Pull video metadata", [["logos", "vimeo-icon"]]],
  ["Wix", "CMS", "Update content and pages", [["logos", "wix"]]],
  [
    "WooCommerce",
    "Ecommerce",
    "Track orders and stock",
    [["logos", "woocommerce-icon"]],
  ],
  ["Wrike", "Project Management", "Move tasks through stages", []],
  ["Zoho CRM", "CRM", "Drive accounts and deals", [["logos", "zoho"]]],
  ["Zoho Mail", "Email", "Triage priority threads", [["logos", "zoho"]]],
];

// Branded letter-mark tile for niche tools that aren't in any open icon set.
// Uses each brand's actual public colour so the cell still feels distinct.
// (Hex values are facts — public brand colours, not creative IP.)
const BRAND_TILE = {
  Freshdesk: "#25c16f",
  ServiceNow: "#62d84e",
  Apollo: "#1a73e8",
  Clay: "#6c5ce7",
  Gong: "#7c3aed",
  Attio: "#111111",
  Mercury: "#f4b41a",
  Ramp: "#fec900",
  Plaid: "#111111",
  Composio: "#7c3aed",
  Granola: "#f4b400",
  Fireflies: "#ff4530",
  Rippling: "#f9b22a",
  Lever: "#5c47e5",
  Ashby: "#f97316",
  Affinity: "#1b3a4b",
  Ahrefs: "#ff7a00",
  "Alpha Vantage": "#0a66c2",
  Baserow: "#5e8aff",
  Brevo: "#0b996e",
  Browserbase: "#111111",
  "Code Interpreter": "#111111",
  "Dropbox Sign": "#0061ff",
  "Dynamics 365": "#002050",
  Exa: "#1a1a1a",
  Firecrawl: "#ff6b00",
  Jotform: "#ff6100",
  Klaviyo: "#19191a",
  Mem: "#5b8def",
  PandaDoc: "#28b463",
  Sage: "#00a040",
  SugarCRM: "#ff6c2c",
  Tally: "#111111",
  Tavily: "#0ea5e9",
  Wrike: "#0e7c66",
};

const SETS = {
  logos: logosSet,
  si: siSet,
  cib: cibSet,
  arc: arcSet,
  fa: faSet,
};

function readFromSet(setName, slug) {
  const set = SETS[setName];
  if (!set) return null;
  const i = set.icons[slug];
  if (!i) return null;
  if (setName === "logos") {
    // gilbarbara/logos: full-colour, inline body as-is.
    const w = i.width || set.width || 256;
    const h = i.height || set.height || 256;
    return { kind: "logo", body: i.body, viewBox: `0 0 ${w} ${h}` };
  }
  // Mono sets (si/cib/arc/fa): one or more <path>; recolour via currentColor.
  // Strip explicit fills so CSS `color` controls the rendered hue.
  const body = i.body.replace(/\sfill="[^"]*"/g, "");
  const w = i.width || set.width || 24;
  const h = i.height || set.height || 24;
  return { kind: "mono", body, viewBox: `0 0 ${w} ${h}` };
}

const result = {};
const integrations = [];
const misses = [];

for (const [name, category, hint, attempts] of ORDERED) {
  let key = null;
  for (const [setName, slug] of attempts) {
    const icon = readFromSet(setName, slug);
    if (icon) {
      key = `${setName}:${slug}`;
      if (!result[key]) result[key] = icon;
      break;
    }
  }
  if (!key && BRAND_TILE[name]) {
    key = `tile:${name}`;
    result[key] = { kind: "tile", color: BRAND_TILE[name] };
  }
  integrations.push({ name, category, hint, key });
  if (!key) misses.push(name);
}

const outDir = path.join(__dirname, "..", "src", "data");
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, "brand-paths.ts"),
  `// AUTO-GENERATED by scripts/gen-brand-paths.js — do not edit by hand.\n` +
    `// Sources: gilbarbara/logos, simple-icons, CoreUI Brand Icons, Arcticons,\n` +
    `// FontAwesome 6 Brands. Brand identifying marks used to indicate\n` +
    `// integration support — standard nominative use.\n\n` +
    `export type LogoBrand = { kind: "logo"; body: string; viewBox: string };\n` +
    `export type MonoBrand = { kind: "mono"; body: string; viewBox: string };\n` +
    `export type TileBrand = { kind: "tile"; color: string };\n` +
    `export type Brand = LogoBrand | MonoBrand | TileBrand;\n\n` +
    `export const brandPaths: Record<string, Brand> = ${JSON.stringify(
      result,
      null,
      2,
    )};\n`,
);

const intLines = integrations
  .map(
    (i) =>
      `  { name: ${JSON.stringify(i.name)}, category: ${JSON.stringify(
        i.category,
      )}, hint: ${JSON.stringify(i.hint)}, key: ${
        i.key ? JSON.stringify(i.key) : "null"
      } },`,
  )
  .join("\n");

fs.writeFileSync(
  path.join(outDir, "integrations.ts"),
  `export type Integration = {\n  name: string;\n  category: string;\n  hint: string;\n  key: string | null;\n};\n\n// Ordered by popularity — pinned brands come first, long tail after.\nexport const integrations: Integration[] = [\n${intLines}\n];\n`,
);

console.log(
  Object.keys(result).length,
  "icon entries /",
  integrations.length,
  "integrations.",
);
console.log(
  "Coverage:",
  integrations.filter((i) => i.key).length,
  "with brand mark,",
  misses.length,
  "uncovered.",
);
if (misses.length) console.log("Uncovered:", misses.join(", "));
