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
        {/* 3 diagonal ascending strokes */}
        <line
          x1="4"
          y1="26"
          x2="10"
          y2="6"
          stroke="#FF6A00"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="24"
          strokeDashoffset="24"
          style={{
            animation: "stroke-draw 0.5s ease forwards 0s",
          }}
        />
        <line
          x1="13"
          y1="26"
          x2="19"
          y2="6"
          stroke="#FF6A00"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="24"
          strokeDashoffset="24"
          style={{
            animation: "stroke-draw 0.5s ease forwards 0.15s",
          }}
        />
        <line
          x1="22"
          y1="26"
          x2="28"
          y2="6"
          stroke="#FF6A00"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="24"
          strokeDashoffset="24"
          style={{
            animation: "stroke-draw 0.5s ease forwards 0.3s",
          }}
        />
      </svg>
      {showText && (
        <span
          className="font-heading text-xl font-bold tracking-tight text-[var(--text)]"
        >
          Autoflow
        </span>
      )}
    </Link>
  );
}
