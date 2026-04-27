import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../theme";

interface CodeSlideProps {
  title: string;
  startFrame: number;
  lines: string[];
}

export const CodeSlide: React.FC<CodeSlideProps> = ({
  title,
  startFrame,
  lines,
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
          marginBottom: 30,
        }}
      >
        {title}
      </h2>

      {/* Code block */}
      <div
        style={{
          background: THEME.colors.surface,
          borderRadius: 10,
          padding: "20px 24px",
          border: `1px solid ${THEME.colors.primary}15`,
          fontFamily: THEME.fonts.mono,
          fontSize: 14,
          lineHeight: 1.7,
          overflow: "hidden",
        }}
      >
        {lines.map((line, i) => {
          const lineOpacity = interpolate(
            localFrame,
            [15 + i * 6, 25 + i * 6],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const lineX = interpolate(
            localFrame,
            [15 + i * 6, 25 + i * 6],
            [-15, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          const isArrow = line.includes("→");
          const isComment = line.startsWith("#") || line.startsWith("//");

          return (
            <div
              key={i}
              style={{
                opacity: lineOpacity,
                transform: `translateX(${lineX}px)`,
                color: isArrow
                  ? THEME.colors.secondary
                  : isComment
                    ? THEME.colors.textMuted
                    : THEME.colors.text,
                fontWeight: isArrow ? 600 : 400,
                whiteSpace: "pre",
              }}
            >
              {line}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
