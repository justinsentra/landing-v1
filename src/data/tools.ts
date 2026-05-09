export type Tool = {
  name: string;
  file: string;
  color: string;
  category?: string;
};

export const tools = {
  hubspot: {
    name: "HubSpot",
    file: "hubspot.svg",
    color: "#FF7A59",
    category: "Sales",
  },
  gmail: {
    name: "Gmail",
    file: "gmail.svg",
    color: "#EA4335",
    category: "Coordination",
  },
  slack: {
    name: "Slack",
    file: "slack.svg",
    color: "#4A154B",
    category: "Messaging",
  },
  granola: {
    name: "Granola",
    file: "granola.svg",
    color: "#FF6B35",
    category: "Meetings",
  },
  notion: {
    name: "Notion",
    file: "notion.svg",
    color: "#111111",
    category: "Productivity",
  },
  linear: {
    name: "Linear",
    file: "linear.svg",
    color: "#5E6AD2",
    category: "Planning",
  },
  github: {
    name: "GitHub",
    file: "github.svg",
    color: "#181717",
    category: "Development",
  },
  sentry: {
    name: "Sentry",
    file: "sentry.svg",
    color: "#362D59",
    category: "Monitoring",
  },
  quickbooks: {
    name: "QuickBooks",
    file: "quickbooks.svg",
    color: "#2CA01C",
    category: "Finance",
  },
  gsheets: {
    name: "Google Sheets",
    file: "google-sheets.svg",
    color: "#34A853",
    category: "Spreadsheets",
  },
  gdocs: {
    name: "Google Docs",
    file: "google-docs.svg",
    color: "#4285F4",
    category: "Documents",
  },
  gdrive: {
    name: "Google Drive",
    file: "google-drive.svg",
    color: "#4285F4",
    category: "Storage",
  },
  gcal: {
    name: "Google Calendar",
    file: "google-calendar.svg",
    color: "#4285F4",
    category: "Planning",
  },
  asana: {
    name: "Asana",
    file: "asana.svg",
    color: "#F06A6A",
    category: "Projects",
  },
  airtable: {
    name: "Airtable",
    file: "airtable.svg",
    color: "#18BFFF",
    category: "Databases",
  },
  zoom: {
    name: "Zoom",
    file: "zoom.svg",
    color: "#2D8CFF",
    category: "Meetings",
  },
  dropbox: {
    name: "Dropbox",
    file: "dropbox.svg",
    color: "#0061FF",
    category: "Storage",
  },
  mixpanel: {
    name: "Mixpanel",
    file: "mixpanel.svg",
    color: "#7856FF",
    category: "Analytics",
  },
  shopify: {
    name: "Shopify",
    file: "shopify.svg",
    color: "#7AB55C",
    category: "Commerce",
  },
  zendesk: {
    name: "Zendesk",
    file: "zendesk.svg",
    color: "#03363D",
    category: "Support",
  },
  calendly: {
    name: "Calendly",
    file: "calendly.svg",
    color: "#006BFF",
    category: "Scheduling",
  },
  posthog: {
    name: "PostHog",
    file: "posthog.svg",
    color: "#1D4AFF",
    category: "Analytics",
  },
  supabase: {
    name: "Supabase",
    file: "supabase.svg",
    color: "#3FCF8E",
    category: "Database",
  },
  intercom: {
    name: "Intercom",
    file: "intercom.svg",
    color: "#1F8DED",
    category: "Support",
  },
  trello: {
    name: "Trello",
    file: "trello.svg",
    color: "#0052CC",
    category: "Projects",
  },
} as const satisfies Record<string, Tool>;

export type ToolKey = keyof typeof tools;

export const toolStyle = (tool: Tool): React.CSSProperties =>
  ({
    ["--logo" as string]: `url(/logos/${tool.file})`,
    ["--brand" as string]: tool.color,
  }) as React.CSSProperties;

export const appsGrid: ToolKey[] = [
  "hubspot",
  "gdrive",
  "mixpanel",
  "sentry",
  "gmail",
  "gdocs",
  "shopify",
  "slack",
  "gsheets",
  "zendesk",
  "linear",
  "airtable",
  "calendly",
  "gcal",
  "asana",
  "posthog",
  "github",
  "dropbox",
  "supabase",
  "granola",
  "intercom",
  "quickbooks",
  "notion",
  "trello",
];
