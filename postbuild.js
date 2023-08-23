import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.join(__dirname, './dist');
const PUBLIC_DIR = path.join(__dirname, '../app-controller/src/main/resources/public');

fs.emptyDirSync(PUBLIC_DIR);
fs.copySync(BUILD_DIR, PUBLIC_DIR);
