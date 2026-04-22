"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export function Logo({ className = "", showText = true, size = 32 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="Autoflow — página inicial">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <style>{`
          @keyframes flowLoop {
            0%   { stroke-dashoffset: 25; stroke-opacity: 0; }
            15%  { stroke-opacity: 1; }
            85%  { stroke-opacity: 1; }
            100% { stroke-dashoffset: -25; stroke-opacity: 0; }
          }
        `}</style>
        <path
          d="M4 26 L13 6"
          stroke="var(--accent)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="25"
          style={{ animation: "flowLoop 1.5s ease-in-out infinite 0s" }}
        />
        <path
          d="M12 27 L21 7"
          stroke="var(--accent)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="25"
          style={{ animation: "flowLoop 1.5s ease-in-out infinite 0.25s" }}
        />
        <path
          d="M20 28 L29 8"
          stroke="var(--accent)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="25"
          style={{ animation: "flowLoop 1.5s ease-in-out infinite 0.5s" }}
        />
      </svg>
      {showText && (
        <span className="font-heading text-xl font-bold tracking-tight text-[var(--text)]">
          Autoflow
        </span>
      )}
    </Link>
  );
}
