import fs from "fs";
import path from "path";

export function checkPath(filePath) {
  console.log("Path Exists:", fs.existsSync(filePath));
  console.log("Absolute Path:", path.resolve(filePath));
}
