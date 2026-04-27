import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../theme";
import { AnimatedLogo } from "../Logo";

interface TitleCardProps {
  title: string;
  subtitle: string;
}

export const TitleCard: React.FC<TitleCardProps> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleSlide = interpolate(frame, [10, 40], [30, 0], {
    extrapolateRight: "clamp",
  });
  const subtitleOpacity = interpolate(frame, [40, 70], [0, 1], {
    extrapolateRight: "clamp",
  });
  const dividerWidth = interpolate(frame, [20, 50], [0, 120], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        justifyContent: "center",
        alignItems: "center",
        padding: THEME.spacing.padding,
      }}
    >
      {/* Background gradient accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${THEME.colors.primary}15 0%, transparent 70%)`,
        }}
      />

      {/* Logo */}
      <div style={{ marginBottom: 40 }}>
        <AnimatedLogo />
      </div>

      {/* Divider */}
      <div
        style={{
          width: dividerWidth,
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${THEME.colors.primary}, ${THEME.colors.secondary})`,
          marginBottom: 30,
        }}
      />

      {/* Title */}
      <h1
        style={{
          fontFamily: THEME.fonts.heading,
          fontSize: 52,
          fontWeight: 700,
          color: THEME.colors.text,
          textAlign: "center",
          margin: 0,
          opacity: titleOpacity,
          transform: `translateY(${titleSlide}px)`,
          lineHeight: 1.15,
          maxWidth: 900,
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: THEME.fonts.body,
          fontSize: 22,
          color: THEME.colors.textMuted,
          marginTop: 20,
          opacity: subtitleOpacity,
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        {subtitle}
      </p>
    </AbsoluteFill>
  );
};
