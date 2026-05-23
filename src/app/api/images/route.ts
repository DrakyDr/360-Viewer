import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");
  
  const files = fs.readdirSync(publicDir).filter((file) =>
    /^Image\d+\.(jpg|jpeg|png)$/i.test(file)
  );

  // Sort by number: Image1, Image2, Image10...
  files.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] ?? "0");
    const numB = parseInt(b.match(/\d+/)?.[0] ?? "0");
    return numA - numB;
  });

  return NextResponse.json({ images: files });
}