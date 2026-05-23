"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/images")
      .then((r) => r.json())
      .then((data) => setImages(data.images));
  }, []);

  return (
    <main style={{ background: "#111", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.5rem" }}>
        360° Panorama Viewer
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {images.map((img) => (
          <Link
            key={img}
            href={`/view?img=${img}`}
            style={{
              display: "block",
              background: "#222",
              color: "white",
              padding: "1rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              border: "1px solid #444",
            }}
          >
            🔭 {img}
          </Link>
        ))}
      </div>
    </main>
  );
}