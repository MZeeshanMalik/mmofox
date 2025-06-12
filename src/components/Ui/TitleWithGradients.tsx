interface CornerGradientsProps {
  reverse?: boolean;
  flip?: boolean; // new prop
  title?: string; // optional title prop for TitleWithCornerGradients
}

function CornerGradients({
  reverse = false,
  flip = false,
}: CornerGradientsProps) {
  const topClass = flip
    ? `absolute bottom-4 ${reverse ? "right-[-15px]" : "right-[205px]"}`
    : `absolute top-6 ${reverse ? "left-[205px]" : "left-[-16px]"}`;

  const bottomClass = flip
    ? `absolute top-6 ${reverse ? "left-[205px]" : "left-[-16px]"}`
    : `absolute bottom-4 ${reverse ? "right-[-15px]" : "right-[205px]"}`;

  return (
    <>
      <div
        className={`${topClass} w-3 h-3 bg-gradient-to-br from-purple-300 to-purple-500 opacity-80 z-0`}
      />
      <div
        className={`${bottomClass} w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-700 opacity-80 z-0`}
      />
    </>
  );
}

export function TitleWithCornerGradients({
  reverse = false,
  flip = false,
  title,
}: CornerGradientsProps) {
  return (
    <h2 className="text-3xl font-bold flex items-center gap-2 h-12 relative">
      <span className="text-white relative text-4xl">
        <CornerGradients reverse={reverse} flip={flip} />
        <span className="mr-2 ml-2">{title}</span>
        <CornerGradients reverse={!reverse} flip={flip} />
      </span>
    </h2>
  );
}
