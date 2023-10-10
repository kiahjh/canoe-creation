import { glob } from "glob";

export default function getImages(
  path: string,
  first?: string,
  second?: string,
  third?: string,
): string[] {
  let images = glob.sync(path, {}).map((i) => i.replace(`public`, ``));
  [third, second, first]
    .filter((x): x is string => Boolean(x))
    .forEach((featuredImage) => {
      const image = images.find((i) => i.includes(featuredImage));
      if (image) {
        images = [image, ...images.filter((i) => i !== image)];
      }
    });

  return images;
}
