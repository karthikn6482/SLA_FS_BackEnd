import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, "../files");
const filePath = path.join(folderPath, "sample.txt");

export function createFile() {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  fs.writeFileSync(filePath, "Hello, this is a new file.\n");
  console.log("File Created");
}

export function writeFile() {
  fs.writeFileSync(filePath, "This content is overwritten.\n");
  console.log("File Written (Overwritten)");
}

export function updateFile() {
  fs.appendFileSync(filePath, "This line is appended.\n");
  console.log("File Updated (Appended)");
}

export function deleteFile() {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log("File Deleted");
  } else {
    console.log("File does not exist");
  }
}

export { filePath };
