import type { EventType, FormattedEventType } from "./types";

export function formatEventType(eventType: EventType): FormattedEventType {
  switch (eventType) {
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
  }
}
