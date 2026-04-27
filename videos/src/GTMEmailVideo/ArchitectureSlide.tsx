import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../theme";

interface ArchitectureSlideProps {
  startFrame: number;
}

const steps = [
  { label: "Google Sheet", sub: "Lead database", row: 0, col: 1 },
  { label: "Search Rows", sub: "Find uncontacted", row: 1, col: 1 },
  { label: "Filter", sub: "Email exists, date empty", row: 2, col: 0 },
  { label: "Resend API", sub: "Send email", row: 2, col: 2 },
  { label: "Sleep 3s", sub: "Avoid throttling", row: 3, col: 0 },
  { label: "Update Row", sub: "Timestamp + status", row: 3, col: 2 },
];

export const ArchitectureSlide: React.FC<ArchitectureSlideProps> = ({
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  const opacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        padding: THEME.spacing.padding,
        opacity,
      }}
    >
      {/* Side accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 5,
          height: "100%",
          background: `linear-gradient(180deg, ${THEME.colors.primary}, ${THEME.colors.secondary})`,
        }}
      />

      <h2
        style={{
          fontFamily: THEME.fonts.heading,
          fontSize: 36,
          fontWeight: 700,
          color: THEME.colors.text,
          margin: 0,
          marginBottom: 40,
        }}
      >
        Architecture Overview
      </h2>

      {/* Pipeline steps as connected boxes */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%",
          maxWidth: 700,
        }}
      >
        {steps.map((step, i) => {
          const stepOpacity = interpolate(
            localFrame,
            [20 + i * 10, 30 + i * 10],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const stepX = interpolate(
            localFrame,
            [20 + i * 10, 30 + i * 10],
            [step.col === 0 ? -20 : 20, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          return (
            <React.Fragment key={i}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 24px",
                  background: `linear-gradient(135deg, ${THEME.colors.surface}, ${THEME.colors.surface}DD)`,
                  border: `1px solid ${THEME.colors.primary}25`,
                  borderRadius: 10,
                  opacity: stepOpacity,
                  transform: `translateX(${stepX}px)`,
                  marginLeft: step.col === 0 ? 0 : step.col === 2 ? 200 : 100,
                  width: 300,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: THEME.fonts.body,
                      fontSize: 18,
                      fontWeight: 600,
                      color: THEME.colors.text,
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      fontFamily: THEME.fonts.body,
                      fontSize: 13,
                      color: THEME.colors.textMuted,
                      marginTop: 2,
                    }}
                  >
                    {step.sub}
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div
                  style={{
                    width: 2,
                    height: 16,
                    background: THEME.colors.primary + "40",
                    marginLeft: 150 + (step.col === 0 ? 0 : step.col === 2 ? 200 : 100),
                    opacity: stepOpacity,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
