import { getVar } from "./getVar";

export const getTrailsKeyframes = (button: HTMLButtonElement) => {
  return [
    {
      "--text-opacity": 0,
      "--border-radius": "0px",
      "--left-wing-background": getVar("--primary-dark", button),
      "--right-wing-background": getVar("--primary-dark", button),
      duration: 0.1,
    },
    {
      "--left-wing-background": getVar("--primary", button),
      "--right-wing-background": getVar("--primary", button),
      duration: 0.15,
    },
    {
      "--left-body-background": getVar("--primary-dark", button),
      "--right-body-background": getVar("--primary-darkest", button),
      duration: 0.25,
      delay: 0.1,
    },
    {
      "--trails-stroke": "171px",
      duration: 0.22,
      delay: 0.22,
    },
    {
      "--success-opacity": 1,
      "--success-x": "0px",
      duration: 0.2,
      delay: 0.15,
    },
    {
      "--success-stroke": "0px",
      duration: 0.15,
    },
  ];
};
