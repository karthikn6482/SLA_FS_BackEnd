import {
    createFile,
    writeFile,
    updateFile,
    deleteFile,
    filePath
  } from "./fileOperations.js";
  
  import { checkPath } from "./pathOperations.js";
  import { getExtension } from "./extension.js";
  
  createFile();
  writeFile();
  updateFile();
  checkPath(filePath);
  getExtension(filePath);  