import { DATA_COMPONENT_ATTR } from "./constants";
import { renderComponentBuilder } from "./core/renderComponentBuilder";
import { ComponentMap, ReactIslesOptions } from "./types";



export const reactIsles = (
  components: ComponentMap,
  options?: ReactIslesOptions
) => {
  
  const renderComponent = renderComponentBuilder(components, options);

  const parseAndRenderComponents = () => {
    const elements = document.querySelectorAll(`[${DATA_COMPONENT_ATTR}]`);
    elements.forEach(renderComponent);
  };

  return { parseAndRenderComponents };
};
