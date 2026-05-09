"use client";

import { useState } from "react";

const COMPANY_SIZES = [
  "1–10",
  "11–50",
  "51–200",
  "201–1,000",
  "1,001–5,000",
  "5,000+",
];
const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "India",
  "Singapore",
  "Australia",
  "Other",
];
const HEARD = [
  "Search",
  "X / Twitter",
  "LinkedIn",
  "Word of mouth",
  "Investor",
  "Press",
  "Other",
];

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="demo-form demo-form-done" role="status">
        <h3>We have it.</h3>
        <p>
          Someone from the Sentra team will write back within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="demo-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="demo-field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="demo-row-2">
        <div className="demo-field">
          <label htmlFor="first">First name</label>
          <input id="first" name="first" autoComplete="given-name" required />
        </div>
        <div className="demo-field">
          <label htmlFor="last">Last name</label>
          <input id="last" name="last" autoComplete="family-name" required />
        </div>
      </div>

      <div className="demo-field">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          required
        />
      </div>

      <div className="demo-field">
        <label htmlFor="size">Company size</label>
        <select id="size" name="size" defaultValue="" required>
          <option value="" disabled>
            Select a company size
          </option>
          {COMPANY_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="demo-field">
        <label htmlFor="country">Country</label>
        <select id="country" name="country" defaultValue="" required>
          <option value="" disabled>
            Select a country
          </option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="demo-field">
        <label htmlFor="heard">How did you hear about us?</label>
        <select id="heard" name="heard" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {HEARD.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </div>

      <div className="demo-field">
        <label htmlFor="motivation">What brought you to Sentra?</label>
        <textarea
          id="motivation"
          name="motivation"
          rows={4}
          placeholder="A system that captures decisions across meetings and Slack."
        />
      </div>

      <button type="submit" className="demo-submit">
        Submit
      </button>
    </form>
  );
}
