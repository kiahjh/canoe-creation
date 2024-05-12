import type { CCEvent } from "./types";

export function formatEventType(event: CCEvent): string {
  switch (event.type) {
    case `little-solomons`:
      return `Little Solomons`;
    case `pollywogs`:
      return `Pollywog Float`;
    case `rappelling`:
      return `Rappelling`;
    case `river-rangers`:
      return `River Rangers`;
    case `river-schools`:
      return `River School`;
    case `other`:
      return event.otherEventType ?? `Other`;
  }
}
