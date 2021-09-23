import fs from 'fs/promises';

export interface Model {
  file: fs.FileHandle;
  fileLength: number;
  numPages: number;
}
