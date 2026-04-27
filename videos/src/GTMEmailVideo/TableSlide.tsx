import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "../theme";

interface TableSlideProps {
  title: string;
  startFrame: number;
  headers: string[];
  rows: string[][];
}

export const TableSlide: React.FC<TableSlideProps> = ({
  title,
  startFrame,
  headers,
  rows,
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
          marginBottom: 36,
        }}
      >
        {title}
      </h2>

      {/* Table */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          overflow: "hidden",
          border: `1px solid ${THEME.colors.primary}25`,
          width: "100%",
          maxWidth: 800,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            background: THEME.colors.surface,
          }}
        >
          {headers.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: "14px 18px",
                fontFamily: THEME.fonts.body,
                fontSize: 15,
                fontWeight: 600,
                color: THEME.colors.secondary,
                borderRight:
                  i < headers.length - 1
                    ? `1px solid ${THEME.colors.primary}15`
                    : "none",
              }}
            >
              {h}
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, ri) => {
          const rowOpacity = interpolate(
            localFrame,
            [20 + ri * 8, 30 + ri * 8],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const slideY = interpolate(
            localFrame,
            [20 + ri * 8, 30 + ri * 8],
            [10, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          return (
            <div
              key={ri}
              style={{
                display: "flex",
                background:
                  ri % 2 === 0
                    ? "transparent"
                    : `${THEME.colors.primary}08`,
                borderTop: `1px solid ${THEME.colors.primary}15`,
                opacity: rowOpacity,
                transform: `translateY(${slideY}px)`,
              }}
            >
              {row.map((cell, ci) => (
                <div
                  key={ci}
                  style={{
                    flex: 1,
                    padding: "12px 18px",
                    fontFamily: THEME.fonts.body,
                    fontSize: 14,
                    color: ci === 0 ? THEME.colors.text : THEME.colors.textMuted,
                    fontWeight: ci === 0 ? 600 : 400,
                    lineHeight: 1.4,
                    borderRight:
                      ci < row.length - 1
                        ? `1px solid ${THEME.colors.primary}15`
                        : "none",
                  }}
                >
                  {cell}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
