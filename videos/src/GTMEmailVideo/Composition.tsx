import React from "react";
import { Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { THEME } from "../theme";
import { TitleCard } from "./TitleCard";
import { ContentSlide } from "./ContentSlide";
import { ArchitectureSlide } from "./ArchitectureSlide";
import { TableSlide } from "./TableSlide";
import { Outro } from "./Outro";

// Estimated durations per section in frames (30fps).
// These are overridden by the audio manifest when available.
const ESTIMATED_DURATIONS: Record<string, number> = {
  intro: 20 * THEME.fps,
  what_is_gtm: 25 * THEME.fps,
  architecture: 28 * THEME.fps,
  step1_lead_sheet: 25 * THEME.fps,
  step2_create_scenario: 45 * THEME.fps,
  step3_schedule: 15 * THEME.fps,
  deliverability: 28 * THEME.fps,
  extensions: 22 * THEME.fps,
  outro: 18 * THEME.fps,
};

// Built-in timing if no audio manifest is available
const FALLBACK_DURATIONS = [
  "intro",
  "what_is_gtm",
  "architecture",
  "step1_lead_sheet",
  "step2_create_scenario",
  "step3_schedule",
  "deliverability",
  "extensions",
  "outro",
];

const totalEstimate = () => {
  return Object.values(ESTIMATED_DURATIONS).reduce((a, b) => a + b, 0);
};

export const GTMEmailVideo: React.FC = () => {
  const { fps } = useVideoConfig();
  const totalFrames = totalEstimate();

  const sectionIds = FALLBACK_DURATIONS;

  // Calculate start frames for each section
  const getStartFrame = (index: number) => {
    return sectionIds
      .slice(0, index)
      .reduce((sum, id) => sum + ESTIMATED_DURATIONS[id], 0);
  };

  return (
    <>
      {/* Audio tracks for each section */}
      {sectionIds.map((id) => (
        <Audio
          key={id}
          src={staticFile(`voiceover/${id}.wav`)}
          startAt={0}
        />
      ))}

      {/* Scene 1: Title Card */}
      <Sequence
        name="Intro"
        from={0}
        durationInFrames={ESTIMATED_DURATIONS.intro}
      >
        <TitleCard
          title="GTM Email Automation with Make.com"
          subtitle="Build a cold email outreach pipeline powered by AI and automation"
        />
      </Sequence>

      {/* Scene 2: What is GTM Engineering */}
      <Sequence
        name="What is GTM Engineering"
        from={getStartFrame(1)}
        durationInFrames={ESTIMATED_DURATIONS.what_is_gtm}
      >
        <ContentSlide
          title="What Is GTM Engineering?"
          bullets={[
            "Combines AI, automation, and sales strategy",
            "Sales professionals become Go-to-Market Engineers",
            "Design systems using software + AI, not manual effort",
            "Massive advantage in saturated markets",
          ]}
          startFrame={0}
        />
      </Sequence>

      {/* Scene 3: Architecture */}
      <Sequence
        name="Architecture"
        from={getStartFrame(2)}
        durationInFrames={ESTIMATED_DURATIONS.architecture}
      >
        <ArchitectureSlide startFrame={0} />
      </Sequence>

      {/* Scene 4: Step 1 - Lead Sheet */}
      <Sequence
        name="Step 1: Lead Sheet"
        from={getStartFrame(3)}
        durationInFrames={ESTIMATED_DURATIONS.step1_lead_sheet}
      >
        <ContentSlide
          title="Step 1: Prepare Your Lead Sheet"
          bullets={[
            "Create columns: Name, Email, Company, Email 1-3 Date, Notes",
            "Date columns track which emails have been sent",
            "Your spreadsheet is your database — no APIs needed",
            "Source leads from LinkedIn Sales Navigator or Apollo",
          ]}
          startFrame={0}
        />
      </Sequence>

      {/* Scene 5: Step 2 - Create Scenario */}
      <Sequence
        name="Step 2: Create Scenario"
        from={getStartFrame(4)}
        durationInFrames={ESTIMATED_DURATIONS.step2_create_scenario}
      >
        <CodeSlide
          title="Step 2: Create the Make.com Scenario"
          startFrame={0}
          lines={[
            "Google Sheet → Search Rows",
            "    ↓ (find leads with email)",
            "Tools → Filter",
            "    ↓ (email exists AND email_1_date is empty)",
            "Resend → Send Email",
            "    ↓ (personalized subject + body)",
            "Tools → Sleep (3 seconds)",
            "    ↓ (prevent throttling)",
            "Google Sheets → Update Row",
            "    ↓ (set email_1_date = now)",
          ]}
        />
      </Sequence>

      {/* Scene 6: Step 3 - Schedule */}
      <Sequence
        name="Step 3: Schedule"
        from={getStartFrame(5)}
        durationInFrames={ESTIMATED_DURATIONS.step3_schedule}
      >
        <ContentSlide
          title="Step 3: Schedule the Scenario"
          bullets={[
            "Run every 30-60 minutes during business hours",
            "Start with 20-50 emails per day",
            "Gradually increase volume as domain warms up",
            "Slow ramp protects email deliverability",
          ]}
          startFrame={0}
        />
      </Sequence>

      {/* Scene 7: Deliverability */}
      <Sequence
        name="Deliverability"
        from={getStartFrame(6)}
        durationInFrames={ESTIMATED_DURATIONS.deliverability}
      >
        <TableSlide
          title="Email Deliverability Essentials"
          startFrame={0}
          headers={["Setting", "Purpose", "How to Set"]}
          rows={[
            ["SPF", "Authorizes sending servers", "TXT: v=spf1 include:resend.com ~all"],
            ["DKIM", "Cryptographic email signing", "Generate key in Resend, add TXT"],
            ["DMARC", "Policy for unauthenticated email", "Start p=none → p=quarantine"],
          ]}
        />
      </Sequence>

      {/* Scene 8: Extensions */}
      <Sequence
        name="Extensions"
        from={getStartFrame(7)}
        durationInFrames={ESTIMATED_DURATIONS.extensions}
      >
        <ContentSlide
          title="Extensions & Next Steps"
          bullets={[
            "Add LLM personalization with LinkedIn data",
            "Build multi-touch sequences (day 3, 7, 14)",
            "Implement reply detection & auto-remove",
            "Create analytics dashboard for outreach metrics",
          ]}
          startFrame={0}
        />
      </Sequence>

      {/* Scene 9: Outro */}
      <Sequence
        name="Outro"
        from={getStartFrame(8)}
        durationInFrames={ESTIMATED_DURATIONS.outro}
      >
        <Outro startFrame={0} />
      </Sequence>
    </>
  );
};
