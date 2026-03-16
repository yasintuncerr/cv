"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface OptimizedAvatarProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function Avatar({
  src,
  alt,
  fallback,
  className,
}: OptimizedAvatarProps) {
  const [failedSrc, setFailedSrc] = React.useState<string | null>(null);

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-xl bg-muted",
        className
      )}
    >
      {src && failedSrc !== src ? (
        // biome-ignore lint/performance/noImgElement: Native img prints more reliably across browsers.
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
          onError={() => setFailedSrc(src)}
          loading="eager"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-lg font-semibold">
          {fallback}
        </div>
      )}
    </div>
  );
}
