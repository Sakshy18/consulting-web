"use client";

import Image from "next/image";
import { useState } from "react";

type ArticleFavoriteButtonProps = {
  slug: string;
};

export default function ArticleFavoriteButton({ slug }: ArticleFavoriteButtonProps) {
  const storageKey = `favorite-article:${slug}`;
  const [isFavorite, setIsFavorite] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(storageKey) === "true";
  });

  const handleToggleFavorite = () => {
    setIsFavorite((previous) => {
      const nextValue = !previous;
      window.localStorage.setItem(storageKey, String(nextValue));
      return nextValue;
    });
  };

  return (
    <button
      type="button"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorite}
      onClick={handleToggleFavorite}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f1f5f9] bg-[#f8fafc]"
    >
      <Image src="/images/svg/article-icon-favorite.svg" alt="" aria-hidden="true" width={20} height={20} />
    </button>
  );
}
