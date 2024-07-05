import React from "react";
import { ComponentMap, ReactIslesOptions } from "../types";
import { parseProps } from "../utils/parseProps";
import ReactDOM from "react-dom/client";
import { observeChanges } from "./observeChanges";


export const renderComponentBuilder = (components: ComponentMap, options?: ReactIslesOptions)=>(element: Element) =>{
    const elementHtml = element as HTMLElement;
    const componentName = (element as HTMLElement).dataset.component;
    if (!componentName || !components[componentName]) return;

    const Component = components[componentName];
    const props = parseProps(element);

    if (elementHtml.dataset) {
      props.childHtml = element.innerHTML;
    } else {
      element.innerHTML = "";
    }

    const root = ReactDOM.createRoot(element);
    const componentElement = React.createElement(Component, props);
    options?.wrapper
      ? root.render(
          React.createElement(options.wrapper, null, componentElement)
        )
      : root.render(componentElement);

    if (options?.editable) {
      observeChanges(Component, elementHtml, root);
    } else {
      Object.keys(elementHtml.dataset).forEach((key) => {
        delete elementHtml.dataset[key];
      });
    }
  }