"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const SimpleViewer = dynamic(
  () => import("../components/SimpleViewer"),
  { ssr: false }
) as React.ComponentType<{ imageUrl: string }>;

function ViewerContent() {
  const params = useSearchParams();
  const img = params.get("img");

  if (!img) {
    return <p style={{ color: "white", padding: "2rem" }}>No image specified.</p>;
  }

  return <SimpleViewer imageUrl={`/${img}`} />;
}

export default function ViewPage() {
  return (
    <Suspense fallback={<div style={{ background: "#000", width: "100vw", height: "100vh" }} />}>
      <ViewerContent />
    </Suspense>
  );
}