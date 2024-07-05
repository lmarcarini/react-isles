import ReactDOM from "react-dom/client";
import { DATA_PREFIX, MUTATION_ATTRIBUTE } from "../constants";
import { parseProps } from "../utils/parseProps";
import React from "react";
import { camelToKebab } from "../utils/camelToKebab";


export const observeChanges = (
    Component: React.ComponentType<any>,
    element: HTMLElement,
    root: ReactDOM.Root
  ) => {
    // Set up MutationObserver to watch for changes in dataset
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === MUTATION_ATTRIBUTE &&
          mutation.attributeName?.startsWith(DATA_PREFIX)
        ) {
          const newProps = parseProps(element);
          root.render(React.createElement(Component, newProps));
        }
      });
    });

    observer.observe(element, {
      attributes: true,
      attributeFilter: Object.keys(element.dataset).map(
        (key) => `${DATA_PREFIX}${camelToKebab(key)}`
      ),
    });
  };