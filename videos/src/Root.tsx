import React from "react";
import { Composition, Folder } from "remotion";
import { GTMEmailVideo } from "./GTMEmailVideo";
import { THEME } from "./theme";

// Calculate total duration from section estimates
const sectionFrames = {
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
const totalFrames = Object.values(sectionFrames).reduce((a, b) => a + b, 0);

export const Root: React.FC = () => {
  return (
    <>
      <Folder name="Course-Videos">
        <Composition
          id="GTMEmailVideo"
          component={GTMEmailVideo}
          durationInFrames={totalFrames}
          fps={THEME.fps}
          width={1920}
          height={1080}
        />
      </Folder>
    </>
  );
};
