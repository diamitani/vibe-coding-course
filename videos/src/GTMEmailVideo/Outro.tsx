import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Img } from "remotion";
import { THEME } from "../theme";

interface OutroProps {
  startFrame: number;
}

export const Outro: React.FC<OutroProps> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  const opacity = interpolate(localFrame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(localFrame, [0, 20], [0.9, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        justifyContent: "center",
        alignItems: "center",
        padding: THEME.spacing.padding,
        opacity,
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${THEME.colors.primary}15 0%, transparent 70%)`,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${scale})`,
        }}
      >
        {/* Logo */}
        <Img
          src="/letsvibeai_app_icon.svg"
          style={{
            width: 80,
            height: 80,
            marginBottom: 24,
          }}
        />

        {/* Title */}
        <h2
          style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 40,
            fontWeight: 700,
            color: THEME.colors.text,
            margin: 0,
            marginBottom: 12,
          }}
        >
          Let's Vibe AI
        </h2>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${THEME.colors.primary}, ${THEME.colors.secondary})`,
            marginBottom: 20,
          }}
        />

        <p
          style={{
            fontFamily: THEME.fonts.body,
            fontSize: 20,
            color: THEME.colors.textMuted,
            textAlign: "center",
            maxWidth: 500,
            lineHeight: 1.6,
          }}
        >
          AI-powered courses for the modern builder.
          <br />
          Learn more at letsvibeai.com
        </p>

        <div
          style={{
            marginTop: 40,
            padding: "12px 28px",
            border: `1px solid ${THEME.colors.primary}40`,
            borderRadius: 8,
          }}
        >
          <span
            style={{
              fontFamily: THEME.fonts.mono,
              fontSize: 14,
              color: THEME.colors.secondary,
            }}
          >
            letsvibeai.com
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
