export const getVar = (property: string, element: Element) =>
  getComputedStyle(element).getPropertyValue(property);
