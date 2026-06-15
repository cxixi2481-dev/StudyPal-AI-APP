type Props = {
  size?: number;
  mood?: "idle" | "focus" | "cheer";
  className?: string;
};

/** Glowing jelly companion. Pure SVG, no assets needed. */
export function JellyMascot({ size = 140, mood = "idle", className = "" }: Props) {
  const eyeY = mood === "cheer" ? 52 : 56;
  return (
    <div
      className={`relative inline-block animate-jelly-float ${className}`}
      style={{ width: size, height: size }}
    >
      {/* halo */}
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.94 0.23 125 / 0.55) 0%, transparent 65%)",
        }}
      />
      <svg
        viewBox="0 0 120 120"
        className="relative animate-jelly-squish drop-shadow-[0_8px_30px_rgba(204,255,0,0.35)]"
        width={size}
        height={size}
      >
        <defs>
          <radialGradient id="jellyBody" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#E7FF7A" />
            <stop offset="55%" stopColor="#CCFF00" />
            <stop offset="100%" stopColor="#8FB400" />
          </radialGradient>
          <radialGradient id="jellyHi" cx="35%" cy="30%" r="25%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* body */}
        <ellipse cx="60" cy="62" rx="42" ry="40" fill="url(#jellyBody)" />
        {/* highlight */}
        <ellipse cx="46" cy="44" rx="20" ry="14" fill="url(#jellyHi)" />
        {/* eyes */}
        <ellipse cx="48" cy={eyeY} rx="3.4" ry={mood === "cheer" ? 1.4 : 4} fill="#1E222B" />
        <ellipse cx="72" cy={eyeY} rx="3.4" ry={mood === "cheer" ? 1.4 : 4} fill="#1E222B" />
        {/* blush */}
        <circle cx="42" cy="70" r="3" fill="#ff8aa8" opacity="0.55" />
        <circle cx="78" cy="70" r="3" fill="#ff8aa8" opacity="0.55" />
        {/* mouth */}
        {mood === "cheer" ? (
          <path d="M52 74 Q60 82 68 74" stroke="#1E222B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        ) : (
          <path d="M54 74 Q60 78 66 74" stroke="#1E222B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}
      </svg>
    </div>
  );
}
