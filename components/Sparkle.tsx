import React from "react";
import cx from "classnames";

interface Props {
  size: number;
  position: string;
  color: "emerald" | "cyan" | "yellow";
  className?: string;
}

const Sparkle: React.FC<Props> = ({ size, position, color, className }) => {
  let bgColor = "";
  switch (color) {
    case "emerald":
      bgColor = "bg-gradient-to-b from-emerald-200 to-emerald-500";
      break;
    case "cyan":
      bgColor = "bg-gradient-to-b from-cyan-200 to-cyan-500";
      break;
    case "yellow":
      bgColor = "bg-gradient-to-b from-yellow-100 to-yellow-400";
      break;
  }

  return (
    <div
      className={cx("absolute", bgColor, position, className)}
      style={{ width: size, height: size }}
    >
      <div
        className="rounded-full bg-white absolute"
        style={{ width: size, height: size, left: -size / 2, top: -size / 2 }}
      />
      <div
        className="rounded-full bg-white absolute"
        style={{ width: size, height: size, right: -size / 2, top: -size / 2 }}
      />
      <div
        className="rounded-full bg-white absolute"
        style={{
          width: size,
          height: size,
          right: -size / 2,
          bottom: -size / 2,
        }}
      />
      <div
        className="rounded-full bg-white absolute"
        style={{
          width: size,
          height: size,
          left: -size / 2,
          bottom: -size / 2,
        }}
      />
    </div>
  );
};

export default Sparkle;
