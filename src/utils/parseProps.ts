import { DATA_PROP_PREFIX } from "../constants";
import { parseValue } from "./parseValue";

export const parseProps = (element: Element): { [key: string]: any } => {
  const props: { [key: string]: any } = {};
  const dataset = (element as HTMLElement).dataset;

  for (const [key, value] of Object.entries(dataset)) {
    if (key.startsWith(DATA_PROP_PREFIX) && value) {
      const propName = key
        .slice(4)
        .replace(/[A-Z]/g, (letter) => letter.toLowerCase());
      props[propName] = parseValue(value);
    }
  }

  return props;
};
