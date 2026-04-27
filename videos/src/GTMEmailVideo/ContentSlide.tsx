import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, spring } from "remotion";
import { THEME } from "../theme";

interface ContentSlideProps {
  title: string;
  bullets: string[];
  startFrame: number;
}

const BulletPoint: React.FC<{
  text: string;
  index: number;
  startFrame: number;
}> = ({ text, index, startFrame }) => {
  const frame = useCurrentFrame();
  const appearFrame = startFrame + index * 12;

  const opacity = interpolate(frame, [appearFrame, appearFrame + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(frame, [appearFrame, appearFrame + 8], [-20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        marginBottom: 16,
        opacity,
        transform: `translateX(${x}px)`,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: THEME.colors.secondary,
          marginTop: 8,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: THEME.fonts.body,
          fontSize: 22,
          color: THEME.colors.text,
          lineHeight: 1.5,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export const ContentSlide: React.FC<ContentSlideProps> = ({
  title,
  bullets,
  startFrame,
}) => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(
    frame,
    [startFrame, startFrame + 15],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        padding: THEME.spacing.padding,
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

      {/* Section indicator */}
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 30,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: THEME.colors.primary,
          opacity: 0.3,
        }}
      />

      {/* Title */}
      <h2
        style={{
          fontFamily: THEME.fonts.heading,
          fontSize: 36,
          fontWeight: 700,
          color: THEME.colors.text,
          margin: 0,
          marginBottom: 40,
          opacity: titleOpacity,
        }}
      >
        {title}
      </h2>

      {/* Bullet points */}
      <div style={{ paddingRight: 40 }}>
        {bullets.map((bullet, index) => (
          <BulletPoint
            key={index}
            text={bullet}
            index={index}
            startFrame={startFrame + 20}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
