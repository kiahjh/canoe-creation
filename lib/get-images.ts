import { glob } from 'glob';

export default function getImages(path: string): string[] {
  return glob.sync(path, {}).map((i) => i.replace('public', ''));
}
