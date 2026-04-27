import React from "react";
import { Img, interpolate, useCurrentFrame } from "remotion";
import { THEME } from "./theme";

interface LogoProps {
  scale?: number;
  style?: React.CSSProperties;
}

export const LetsVibeLogo: React.FC<LogoProps> = ({ scale = 1, style }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        ...style,
      }}
    >
      <Img
        src="/letsvibeai_app_icon.svg"
        style={{
          width: THEME.logo.width * scale,
          height: THEME.logo.height * scale,
        }}
      />
    </div>
  );
};

export const AnimatedLogo: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 20], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <Img
        src="/letsvibeai_app_icon.svg"
        style={{
          width: 60,
          height: 60,
        }}
      />
      <span
        style={{
          fontFamily: THEME.fonts.heading,
          fontSize: 32,
          fontWeight: 700,
          color: THEME.colors.text,
          marginLeft: 16,
          letterSpacing: "-0.5px",
        }}
      >
        Let's Vibe AI
      </span>
    </div>
  );
};
