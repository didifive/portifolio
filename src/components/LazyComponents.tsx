"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

// Lazy load de componentes pesados que não aparecem above-the-fold
export const LazyAbout = dynamic(() => import("@/components/About").then(mod => ({ default: mod.About })), {
  loading: () => (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-pulse">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="h-6 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="grid gap-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-24 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false
});

export const LazyExperience = dynamic(() => import("@/components/Experience").then(mod => ({ default: mod.Experience })), {
  loading: () => (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {[1,2,3].map(i => (
            <div key={i} className="h-32 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false
});

export const LazyProjects = dynamic(() => import("@/components/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="h-80 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false
});

export const LazyContact = dynamic(() => import("@/components/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
});

export const LazyFooter = dynamic(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => (
    <div className="h-24 bg-gray-200 animate-pulse"></div>
  ),
  ssr: false
});
