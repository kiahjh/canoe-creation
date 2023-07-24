export function formatAgeRange(min: number | null, max: number | null): string {
  if (min === null && max === null) {
    return `All ages`;
  } else if (min === null) {
    return `Ages up to ${max}`;
  } else if (max === null) {
    return `Ages ${min} and up`;
  } else if (min === max) {
    return `Age ${min}`;
  } else {
    return `Ages ${min} to ${max}`;
  }
}
