"use client";

import { useEffect, useState, useRef } from "react";
import { useNiche } from "@/providers/NicheProvider";
import type { ChatMessage } from "@/data/niches";

interface PhoneMockupProps {
  className?: string;
  forceNicheSlug?: string;
}

export function PhoneMockup({ className = "", forceNicheSlug }: PhoneMockupProps) {
  const { activeNiche } = useNiche();
  const niche = forceNicheSlug
    ? ({ conversation: activeNiche.conversation, name: activeNiche.name } as typeof activeNiche)
    : activeNiche;

  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const clearAllTimeouts = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const runSequence = (msgs: ChatMessage[]) => {
    clearAllTimeouts();
    setVisibleMessages([]);
    setShowTyping(false);
    setCurrentIndex(0);

    let delay = 600;

    msgs.forEach((msg, i) => {
      const showTypingAt = delay;
      const showMsgAt = delay + (msg.side === "business" ? 1200 : 0);

      if (msg.side === "business") {
        const t1 = setTimeout(() => setShowTyping(true), showTypingAt);
        timeouts.current.push(t1);
      }

      const t2 = setTimeout(() => {
        setShowTyping(false);
        setVisibleMessages((prev) => [...prev, msg]);
        setCurrentIndex(i + 1);
      }, showMsgAt);
      timeouts.current.push(t2);

      delay = showMsgAt + 800;
    });

    // Reset after full loop
    const resetT = setTimeout(() => {
      runSequence(msgs);
    }, delay + 3000);
    timeouts.current.push(resetT);
  };

  useEffect(() => {
    runSequence(activeNiche.conversation);
    return clearAllTimeouts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeNiche.slug]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages, showTyping]);

  return (
    <div className={`relative mx-auto w-[260px] ${className}`} aria-hidden="true">
      {/* Phone frame */}
      <div className="relative rounded-[44px] border-[3px] border-[#2a2a2a] bg-[#1a1a1a] shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Dynamic island */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="h-6 w-20 rounded-full bg-black" />
        </div>

        {/* WhatsApp screen */}
        <div className="h-[480px] flex flex-col bg-[#0b141a]">
          {/* WA Header */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#1f2c34]">
            <div className="h-8 w-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-xs font-bold text-white shrink-0">
              A
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white leading-tight truncate">
                {niche.name}
              </p>
              <p className="text-[10px] text-[var(--success)]">em linha</p>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-2 py-3 space-y-2 text-xs">
            {visibleMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.side === "client" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 leading-relaxed ${
                    msg.side === "client"
                      ? "bg-[#202c33] text-[var(--text)]"
                      : "bg-[#005c4b] text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {showTyping && (
              <div className="flex justify-end">
                <div className="flex items-center gap-1 rounded-lg bg-[#005c4b] px-3 py-2.5">
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white/70" />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-2 py-2 bg-[#1f2c34]">
            <div className="flex-1 rounded-full bg-[#2a3942] px-3 py-1.5 text-[10px] text-[var(--muted)]">
              Mensagem
            </div>
            <div className="h-7 w-7 rounded-full bg-[var(--green)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center py-2 bg-[#1a1a1a]">
          <div className="h-1 w-16 rounded-full bg-[#444]" />
        </div>
      </div>
    </div>
  );
}
