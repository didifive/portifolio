"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string;
  loadingClassName?: string;
  errorClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder-image.jpg",
  loadingClassName = "animate-pulse bg-gray-200",
  errorClassName = "bg-gray-100",
  className = "",
  ...props
}: Readonly<OptimizedImageProps>) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(false);
    }
  };

  const imageClassName = `
    ${className}
    ${isLoading ? loadingClassName : ""}
    ${hasError ? errorClassName : ""}
    transition-opacity duration-300
    ${isLoading ? "opacity-0" : "opacity-100"}
  `.trim();

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      className={imageClassName}
      onLoad={handleLoad}
      onError={handleError}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      priority={props.priority || false}
      loading={props.loading || "lazy"}
    />
  );
}

// Hook para lazy loading de imagens
export function useLazyImage() {
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const ref = (node: HTMLImageElement | null) => {
    if (imageRef) {
      // Cleanup previous observer
    }

    if (node) {
      setImageRef(node);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      observer.observe(node);
    }
  };

  return { ref, isVisible };
}
