const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

const directSrc = process.argv[2];
const directTar = process.argv[3];

async function redir(directSrc, directTar, extensions) {
  try {
    const files = await readdir(directSrc);

    for (const file of files) {
      const FE = path.extname(file).toLowerCase();

      if (extensions.includes(FE)) {
        const sourcep = path.join(directSrc, file);
        const tp = path.join(directTar, file);

        await copyFile(sourcep, tp);
        console.log(`${file} is copied.`);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

const Extention = ['.txt', '.jpg'];

redir(directSrc, directTar, Extention);