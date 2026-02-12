import path from "path";

export function getExtension(filePath) {
  const ext = path.extname(filePath);
  console.log("File Extension:", ext);
}
