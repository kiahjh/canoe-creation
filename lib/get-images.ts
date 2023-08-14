import { glob } from 'glob';

export default function getImages(
  path: string,
  first: string,
  second: string,
  third: string,
): string[] {
  let images = glob.sync(path, {}).map((i) => i.replace('public', ''));
  [third, second, first].forEach((featuredImage) => {
    const image = images.find((i) => i.includes(featuredImage));
    if (image) {
      images = [image, ...images.filter((i) => i !== image)];
    }
  });

  return images;
}
