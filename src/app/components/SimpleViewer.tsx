"use client";

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

interface Props {
  imageUrl: string;
}

export default function SimpleViewer({ imageUrl }: Props) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactPhotoSphereViewer
        src={imageUrl}
        height="100vh"
        width="100%"
        defaultZoomLvl={0}
      />
    </div>
  );
}