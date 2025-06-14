import React from "react";

interface CornerGradientsProps {
  side: "left" | "right";
}

function CornerGradients({ side }: CornerGradientsProps) {
  const isLeft = side === "left";

  // On each side we want:
  //  • Box A: just outside the top corner
  //  • Box B: further down & in by 1.5rem (6) to form a diagonal
  const positions = isLeft
    ? [
        // A: top-left
        "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2",
        // B: down & right
        "absolute top-3 left-6 -translate-x-1/2 -translate-y-1/2",
      ]
    : [
        // A: top-right
        "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2",
        // B: down & left
        "absolute top-3 right-6 translate-x-1/2 -translate-y-1/2",
      ];

  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`
            mt-3
            ${pos}
            w-3 h-3
            bg-gradient-to-br
            ${
              i === 0
                ? "from-purple-300 to-purple-500"
                : "from-purple-500 to-purple-700"
            }
            opacity-80
          `}
        />
      ))}
    </>
  );
}

interface TitleWithCornerGradientsProps {
  title: string;
}

export function TitleWithCornerGradients({
  title,
}: TitleWithCornerGradientsProps) {
  return (
    <h2 className="text-4xl font-bold">
      <span className="relative inline-block px-4">
        {/* left diagonal pair */}
        <CornerGradients side="right" />

        {/* your text */}
        <span className="text-white m-4">{title}</span>

        {/* right mirrored diagonal */}
        <CornerGradients side="left" />
      </span>
    </h2>
  );
}
