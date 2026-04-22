"use client";

import { useEffect } from "react";
import { useNiche } from "@/providers/NicheProvider";
import { getNicheBySlug } from "@/data/niches";

export function NicheInitializer({ slug }: { slug: string }) {
  const { setActiveNiche } = useNiche();

  useEffect(() => {
    const niche = getNicheBySlug(slug);
    if (niche) setActiveNiche(niche);
  }, [slug, setActiveNiche]);

  return null;
}
