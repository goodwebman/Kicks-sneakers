import * as fs from 'fs';
import * as path from 'path';

const iconsDir: string = path.resolve(__dirname, '../../ui/icons');
const indexPath: string = path.join(iconsDir, 'index.ts');

function toComponentName(fileName: string): string {
  return fileName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function generateIndex(): void {
  const files: string[] = fs
    .readdirSync(iconsDir, { encoding: 'utf8' })
    .filter(file => file.endsWith('.tsx'));

  const exports: string = files
    .map(file => {
      const name = path.basename(file, '.tsx');
      const componentName = toComponentName(name);
      return `export { default as ${componentName} } from "./${name}";`;
    })
    .join('\n');

  fs.writeFileSync(indexPath, exports + '\n', { encoding: 'utf8' });
}

generateIndex();
