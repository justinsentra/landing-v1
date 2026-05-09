// One-shot generator: emits src/data/brand-paths.ts and src/data/integrations.ts
// Run: node scripts/gen-brand-paths.js
const fs = require("fs");
const path = require("path");
const logosSet = require("@iconify-json/logos/icons.json");
const siSet = require("@iconify-json/simple-icons/icons.json");

// Tuple: [name, category, hint, logosSlug?, siSlug?]
// logosSlug = gilbarbara/logos (full-colour). siSlug = simple-icons (mono).
// null = letter monogram fallback.
const ORDERED = [
  // tier A — user-pinned popular first
  ["Gmail", "Email", "Triage priority threads", "google-gmail", "gmail"],
  ["Outlook", "Email", "Triage priority threads", null, null],
  [
    "Google Calendar",
    "Calendar",
    "Find time, book meetings",
    "google-calendar",
    "googlecalendar",
  ],
  [
    "Google Drive",
    "Storage",
    "Pull the right files",
    "google-drive",
    "googledrive",
  ],
  [
    "Google Sheets",
    "Spreadsheets",
    "Read ranges, append rows",
    null,
    "googlesheets",
  ],
  [
    "Supabase",
    "Databases",
    "Query databases, manage tables",
    "supabase-icon",
    "supabase",
  ],
  [
    "Notion",
    "Productivity",
    "Search pages, append blocks",
    "notion-icon",
    "notion",
  ],
  ["Slack", "Messaging", "Post updates, watch channels", "slack-icon", null],
  [
    "Airtable",
    "Databases",
    "Query records, append rows",
    "airtable",
    "airtable",
  ],
  [
    "Google Docs",
    "Documents",
    "Land output in a shared doc",
    null,
    "googledocs",
  ],
  ["HubSpot", "CRM", "Drive deal motion forward", "hubspot", "hubspot"],
  ["Salesforce", "CRM", "Drive accounts and opps", "salesforce", null],

  // tier B — extremely popular
  [
    "GitHub",
    "Development",
    "Watch PRs, surface owners",
    "github-icon",
    "github",
  ],
  [
    "Linear",
    "Project Management",
    "Move issues, ship cycles",
    "linear",
    "linear",
  ],
  ["Jira", "Project Management", "Move tickets, track sprints", "jira", "jira"],
  [
    "Asana",
    "Project Management",
    "Track tasks, manage projects",
    "asana",
    "asana",
  ],
  ["Figma", "Design", "Watch comments, pull frames", "figma", "figma"],
  ["Zoom", "Video Conferencing", "Spin up call links", "zoom-icon", "zoom"],
  [
    "Microsoft Teams",
    "Messaging",
    "Post updates, watch channels",
    "microsoft-teams",
    null,
  ],
  [
    "Discord",
    "Messaging",
    "Post updates, watch channels",
    "discord-icon",
    "discord",
  ],
  ["ChatGPT", "AI", "Reason over context", "openai-icon", null],
  ["OpenAI", "AI", "Reason over context", "openai-icon", null],
  ["Anthropic", "AI", "Run grounded reasoning", "anthropic", "anthropic"],
  ["Stripe", "Finance", "Watch payments and revenue", "stripe", "stripe"],
  [
    "Shopify",
    "Ecommerce",
    "Query orders, manage products",
    "shopify",
    "shopify",
  ],
  [
    "Calendly",
    "Scheduling",
    "Check meetings, manage event types",
    null,
    "calendly",
  ],
  ["Dropbox", "Storage", "Find files, pull context", "dropbox", "dropbox"],
  ["Loom", "Video", "Pull recordings in context", "loom", "loom"],
  [
    "Confluence",
    "Documents",
    "Search wikis, attach evidence",
    "confluence",
    "confluence",
  ],
  [
    "Intercom",
    "Support",
    "Manage conversations, track customers",
    "intercom-icon",
    "intercom",
  ],
  [
    "Zendesk",
    "Support",
    "Search tickets, manage support",
    "zendesk-icon",
    "zendesk",
  ],
  ["Pipedrive", "CRM", "Move deals through pipeline", "pipedrive", null],
  ["Vercel", "Cloud", "Watch builds and deploys", "vercel-icon", "vercel"],
  ["AWS", "Cloud", "Inspect resources, run jobs", "aws", null],
  [
    "Datadog",
    "Observability",
    "Watch metrics, surface anomalies",
    "datadog",
    "datadog",
  ],
  [
    "Sentry",
    "Observability",
    "Monitor errors, triage by impact",
    "sentry-icon",
    "sentry",
  ],
  ["Posthog", "Analytics", "Watch product behavior", "posthog-icon", "posthog"],
  ["Amplitude", "Analytics", "Watch event funnels", "amplitude-icon", null],
  [
    "Mailchimp",
    "Marketing",
    "Trigger sends, segment lists",
    "mailchimp",
    "mailchimp",
  ],
  ["Twitter", "Social Media", "Watch posts and replies", "twitter", "x"],
  [
    "LinkedIn",
    "Social Media",
    "Watch reach and replies",
    "linkedin-icon",
    "linkedin",
  ],
  [
    "WhatsApp",
    "Messaging",
    "Reply on the right thread",
    "whatsapp-icon",
    "whatsapp",
  ],

  // tier C — common
  ["GitLab", "Development", "Track pipelines and MRs", "gitlab", "gitlab"],
  [
    "Bitbucket",
    "Development",
    "Watch PRs, ship faster",
    "bitbucket",
    "bitbucket",
  ],
  [
    "ClickUp",
    "Project Management",
    "Move tasks, track progress",
    null,
    "clickup",
  ],
  [
    "Trello",
    "Project Management",
    "Track boards, lists, cards",
    "trello",
    "trello",
  ],
  [
    "Monday",
    "Project Management",
    "Move items across boards",
    "monday-icon",
    null,
  ],
  ["Cal.com", "Scheduling", "Find time, book slots", null, "caldotcom"],
  ["Box", "Storage", "Search files, pull context", "box", "box"],
  [
    "OneDrive",
    "Storage",
    "Find files, pull context",
    "microsoft-onedrive",
    null,
  ],
  ["Front", "Support", "Drop the next reply", "frontapp", null],
  ["Freshdesk", "Support", "Triage and answer tickets", null, null],
  ["ServiceNow", "Support", "Move tickets through queues", null, null],
  ["Apollo", "Sales", "Enrich the next outreach", null, null],
  ["Clay", "Sales", "Enrich every contact", null, null],
  ["Gong", "Sales", "Pull call moments", null, null],
  ["Close", "CRM", "Drive deal motion forward", "close", null],
  ["Attio", "CRM", "Manage contacts, companies, deals", null, null],
  ["Azure", "Cloud", "Manage tenants and runs", "microsoft-azure", null],
  ["Netlify", "Cloud", "Watch builds and deploys", "netlify", "netlify"],
  ["Heroku", "Cloud", "Watch dynos and releases", "heroku-icon", "heroku"],
  [
    "PagerDuty",
    "Observability",
    "Watch incidents, route owners",
    "pagerduty",
    "pagerduty",
  ],
  [
    "New Relic",
    "Observability",
    "Watch performance signals",
    "new-relic",
    "newrelic",
  ],
  ["Segment", "Analytics", "Track events across stack", "segment", null],
  ["Tableau", "Analytics", "Surface dashboard signals", "tableau-icon", null],
  [
    "Google Analytics",
    "Analytics",
    "Track traffic in context",
    "google-analytics",
    "googleanalytics",
  ],
  [
    "Snowflake",
    "Databases",
    "Run analytical queries",
    "snowflake-icon",
    "snowflake",
  ],
  [
    "Google Bigquery",
    "Databases",
    "Run analytical queries",
    null,
    "googlebigquery",
  ],
  ["MongoDB", "Databases", "Query collections fast", "mongodb-icon", "mongodb"],
  [
    "PostgreSQL",
    "Databases",
    "Run queries on demand",
    "postgresql",
    "postgresql",
  ],
  ["MySQL", "Databases", "Run queries on demand", "mysql-icon", "mysql"],
  ["Pinecone", "Databases", "Query semantic memory", "pinecone", null],
  ["Firebase", "Databases", "Read realtime data", "firebase", "firebase"],
  ["Mercury", "Finance", "Watch balances and flows", null, null],
  ["Ramp", "Finance", "Watch spend and bills", null, null],
  ["Quickbooks", "Finance", "Surface invoices and bills", null, "quickbooks"],
  ["Xero", "Finance", "Pull invoices and expenses", "xero", "xero"],
  ["Plaid", "Finance", "Resolve account activity", null, null],
  ["Square", "Finance", "Watch sales and payouts", "square", "square"],
  ["Webflow", "CMS", "Update content live", "webflow", "webflow"],
  [
    "WordPress",
    "CMS",
    "Publish and update posts",
    "wordpress-icon",
    "wordpress",
  ],
  ["Make", "Automation", "Trigger downstream scenarios", null, "make"],
  ["Zapier", "Automation", "Trigger downstream zaps", "zapier-icon", "zapier"],
  ["Composio", "Integration Platform", "Wire any tool quickly", null, null],
  ["Perplexity", "AI", "Pull cited answers", "perplexity-icon", "perplexity"],
  [
    "Hugging Face",
    "AI",
    "Run hosted models",
    "hugging-face-icon",
    "huggingface",
  ],
  ["Replicate", "AI", "Run hosted model inference", null, "replicate"],
  ["ElevenLabs", "AI", "Generate spoken output", null, "elevenlabs"],
  ["DeepL", "AI", "Translate the next reply", null, "deepl"],
  ["Typeform", "Forms", "Pull form responses in", "typeform-icon", "typeform"],
  ["Granola", "Productivity", "Pull meeting notes in", null, null],
  ["Fireflies", "Productivity", "Capture meeting transcripts", null, null],
  ["BambooHR", "HR", "Sync people data", null, null],
  ["Greenhouse", "HR", "Move candidates through stages", null, "greenhouse"],
  ["Workday", "HR", "Sync workforce records", null, null],
  ["Rippling", "HR", "Sync people and access", null, null],
  ["Lever", "HR", "Track candidate momentum", null, null],
  ["Ashby", "HR", "Move candidates forward", null, null],
  [
    "Reddit",
    "Social Media",
    "Watch threads worth replying to",
    "reddit-icon",
    "reddit",
  ],
  ["Facebook", "Social Media", "Pull page activity", "facebook", "facebook"],
  [
    "Instagram",
    "Social Media",
    "Watch posts and DMs",
    "instagram-icon",
    "instagram",
  ],
  ["TikTok", "Social Media", "Track post performance", "tiktok-icon", "tiktok"],
  ["YouTube", "Media", "Watch video performance", "youtube-icon", "youtube"],
  ["Spotify", "Media", "Pull listening context", "spotify-icon", "spotify"],

  // tier D — long tail
  [
    "Active Campaign",
    "Marketing",
    "Trigger sends, segment lists",
    "active-campaign",
    null,
  ],
  ["Adobe", "Design", "Pull asset metadata", "adobe", null],
  ["Affinity", "CRM", "Update relationship intel", null, null],
  ["Ahrefs", "Marketing", "Track ranking shifts", null, null],
  ["Algolia", "Search", "Index live content", "algolia", "algolia"],
  ["Alpha Vantage", "Finance", "Pull market quotes", null, null],
  [
    "Atlassian",
    "Development",
    "Wire issues to context",
    "atlassian",
    "atlassian",
  ],
  ["Auth0", "Authentication", "Audit identity events", "auth0-icon", "auth0"],
  ["Baserow", "Databases", "Query, append, edit rows", null, null],
  ["Bitly", "Marketing", "Track campaign clicks", null, "bitly"],
  ["Brave Search", "Search", "Pull live web answers", "brave", "brave"],
  ["Brevo", "Email", "Send transactional mail", null, null],
  ["Browserbase", "Development", "Run headless flows", null, null],
  ["Bubble", "Development", "Trigger workflows in app", "bubble-icon", null],
  ["Canva", "Design", "Pull brand assets", null, null],
  ["Canvas", "Education", "Sync course events", null, null],
  ["Chargebee", "Finance", "Track subscription state", "chargebee", null],
  ["Clockify", "Productivity", "Log time against work", null, "clockify"],
  ["Coda", "Documents", "Update docs and tables", "coda", null],
  ["Code Interpreter", "Development", "Run code on demand", null, null],
  ["Contentful", "CMS", "Update entries at scale", "contentful", "contentful"],
  ["Docusign", "Documents", "Send and track agreements", null, null],
  ["Dropbox Sign", "Documents", "Send things to sign", null, null],
  ["Dynamics 365", "CRM", "Update accounts and deals", null, null],
  ["Elastic", "Search", "Query indexes fast", null, "elastic"],
  ["Eventbrite", "Events", "Track registrations live", "eventbrite", null],
  ["Exa", "Search", "Find research-grade results", null, null],
  ["Expensify", "Finance", "Surface receipts to approve", null, null],
  ["Firecrawl", "Web Scraping", "Pull pages on demand", null, null],
  [
    "Google Ads",
    "Marketing",
    "Watch campaign spend",
    "google-ads",
    "googleads",
  ],
  ["Google Forms", "Forms", "Capture responses to act on", null, "googleforms"],
  [
    "Google Maps",
    "Maps",
    "Resolve addresses, pull places",
    "google-maps",
    "googlemaps",
  ],
  [
    "Google Meet",
    "Video Conferencing",
    "Spin up call links",
    "google-meet",
    "googlemeet",
  ],
  [
    "Google Search Console",
    "Marketing",
    "Surface search performance",
    "google-search-console",
    "googlesearchconsole",
  ],
  [
    "Google Slides",
    "Documents",
    "Build decks from live context",
    null,
    "googleslides",
  ],
  ["Google Tasks", "Productivity", "Capture next actions", null, "googletasks"],
  ["Grok", "AI", "Reason over live posts", "grok", null],
  ["Hootsuite", "Social Media", "Schedule and queue posts", null, "hootsuite"],
  ["Jotform", "Forms", "Capture submissions live", null, null],
  ["Klaviyo", "Marketing", "Trigger lifecycle sends", null, null],
  ["LangChain", "AI", "Wire chains into flows", "langchain-icon", "langchain"],
  ["Mailgun", "Email", "Send transactional mail", "mailgun-icon", "mailgun"],
  ["MariaDB", "Databases", "Query rows on demand", "mariadb-icon", "mariadb"],
  ["Medium", "Publishing", "Pull post performance", "medium-icon", "medium"],
  ["Mem", "Productivity", "Capture lasting notes", null, null],
  ["Meta Ads", "Marketing", "Watch campaign spend", "meta-icon", "meta"],
  ["Miro", "Collaboration", "Pull board context in", "miro", "miro"],
  ["PandaDoc", "Documents", "Send proposals to sign", null, null],
  [
    "Pinterest",
    "Social Media",
    "Track pin performance",
    "pinterest",
    "pinterest",
  ],
  [
    "Razorpay",
    "Finance",
    "Track payments and refunds",
    "razorpay-icon",
    "razorpay",
  ],
  ["Resend", "Email", "Send transactional mail", null, "resend"],
  [
    "Rollbar",
    "Observability",
    "Monitor errors, route owners",
    "rollbar-icon",
    "rollbar",
  ],
  ["Sage", "Finance", "Pull ledger context", null, null],
  ["SAP", "ERP", "Read system records", "sap", "sap"],
  ["SendGrid", "Email", "Send transactional mail", "sendgrid", null],
  [
    "Shortcut",
    "Project Management",
    "Move stories across iterations",
    null,
    "shortcut",
  ],
  [
    "Stack Overflow",
    "Development",
    "Pull answers in context",
    "stackoverflow-icon",
    "stackoverflow",
  ],
  ["SugarCRM", "CRM", "Drive accounts forward", null, null],
  [
    "SurveyMonkey",
    "Forms",
    "Capture responses to act on",
    null,
    "surveymonkey",
  ],
  ["Tally", "Forms", "Capture form submissions", null, null],
  ["Tavily", "Search", "Pull research-grade answers", null, null],
  [
    "Telegram",
    "Messaging",
    "Post updates, watch chats",
    "telegram",
    "telegram",
  ],
  [
    "Todoist",
    "Productivity",
    "Capture next actions",
    "todoist-icon",
    "todoist",
  ],
  ["Toggl", "Productivity", "Log time against work", "toggl-icon", "toggl"],
  ["Twilio", "Communications", "Send SMS and calls", "twilio-icon", null],
  ["Twitch", "Media", "Watch stream activity", "twitch", "twitch"],
  ["Vimeo", "Video", "Pull video metadata", "vimeo-icon", "vimeo"],
  ["Wix", "CMS", "Update content and pages", "wix", "wix"],
  [
    "WooCommerce",
    "Ecommerce",
    "Track orders and stock",
    "woocommerce-icon",
    "woocommerce",
  ],
  ["Wrike", "Project Management", "Move tasks through stages", null, null],
  ["Zoho CRM", "CRM", "Drive accounts and deals", null, "zoho"],
  ["Zoho Mail", "Email", "Triage priority threads", null, "zoho"],
];

function readSi(slug) {
  const i = siSet.icons[slug];
  if (!i) return null;
  // body format: <path fill="currentColor" d="…"/> — d may not be first.
  const m = i.body.match(/<path[^>]*\sd="([^"]+)"/);
  if (!m) return null;
  return { kind: "si", path: m[1] };
}

function readLogo(slug) {
  const i = logosSet.icons[slug];
  if (!i) return null;
  const w = i.width || logosSet.width || 256;
  const h = i.height || logosSet.height || 256;
  return { kind: "logo", body: i.body, viewBox: `0 0 ${w} ${h}` };
}

const result = {};
const integrations = [];
const misses = [];

for (const [name, category, hint, logoSlug, siSlug] of ORDERED) {
  let key = null;
  let icon = null;
  if (logoSlug) {
    icon = readLogo(logoSlug);
    if (icon) key = `l:${logoSlug}`;
  }
  if (!icon && siSlug) {
    icon = readSi(siSlug);
    if (icon) key = `s:${siSlug}`;
  }
  integrations.push({ name, category, hint, key });
  if (key && !result[key]) result[key] = icon;
  if (!key) misses.push(name);
}

const outDir = path.join(__dirname, "..", "src", "data");
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, "brand-paths.ts"),
  `// AUTO-GENERATED by scripts/gen-brand-paths.js — do not edit by hand.\n` +
    `// Sources: @iconify-json/logos (gilbarbara/logos, MIT) and\n` +
    `// @iconify-json/simple-icons (CC0). Brand logos used to indicate\n` +
    `// integration support — standard nominative use.\n\n` +
    `export type LogoBrand = { kind: "logo"; body: string; viewBox: string };\n` +
    `export type SiBrand = { kind: "si"; path: string };\n` +
    `export type Brand = LogoBrand | SiBrand;\n\n` +
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
  `export type Integration = {\n  name: string;\n  category: string;\n  hint: string;\n  // Lookup key into brandPaths. null → letter monogram fallback.\n  key: string | null;\n};\n\n// Ordered by popularity — pinned brands come first, long tail after.\nexport const integrations: Integration[] = [\n${intLines}\n];\n`,
);

console.log(
  "Wrote",
  Object.keys(result).length,
  "icons /",
  integrations.length,
  "integrations.",
);
console.log(
  "Coverage:",
  integrations.filter((i) => i.key).length,
  "with logo,",
  misses.length,
  "monogram fallback.",
);
if (misses.length) console.log("Monograms:", misses.join(", "));
