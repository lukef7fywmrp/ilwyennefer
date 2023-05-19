import { Dispatch, SetStateAction } from "react";

export const getPlaneKeyframes = (
  set: (targets: gsap.TweenTarget, vars: gsap.TweenVars) => gsap.core.Tween,
  fromTo: (
    targets: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ) => gsap.core.Tween,
  button: HTMLButtonElement,
  setActive: Dispatch<SetStateAction<boolean>>,
  setInput: Dispatch<SetStateAction<string>>
) => {
  return [
    {
      "--left-wing-first-x": "50%",
      "--left-wing-first-y": "100%",
      "--right-wing-second-x": "50%",
      "--right-wing-second-y": "100%",
      duration: 0.2,
      onComplete() {
        set(button, {
          "--left-wing-first-y": "0%",
          "--left-wing-second-x": "40%",
          "--left-wing-second-y": "100%",
          "--left-wing-third-x": "0%",
          "--left-wing-third-y": "100%",
          "--left-body-third-x": "40%",
          "--right-wing-first-x": "50%",
          "--right-wing-first-y": "0%",
          "--right-wing-second-x": "60%",
          "--right-wing-second-y": "100%",
          "--right-wing-third-x": "100%",
          "--right-wing-third-y": "100%",
          "--right-body-third-x": "60%",
        });
      },
    },
    {
      "--left-wing-third-x": "20%",
      "--left-wing-third-y": "90%",
      "--left-wing-second-y": "90%",
      "--left-body-third-y": "90%",
      "--right-wing-third-x": "80%",
      "--right-wing-third-y": "90%",
      "--right-body-third-y": "90%",
      "--right-wing-second-y": "90%",
      duration: 0.2,
    },
    {
      "--rotate": "50deg",
      "--left-wing-third-y": "95%",
      "--left-wing-third-x": "27%",
      "--right-body-third-x": "45%",
      "--right-wing-second-x": "45%",
      "--right-wing-third-x": "60%",
      "--right-wing-third-y": "83%",
      duration: 0.25,
    },
    {
      "--rotate": "60deg",
      "--plane-x": "-8px",
      "--plane-y": "40px",
      duration: 0.2,
    },
    {
      "--rotate": "40deg",
      "--plane-x": "45px",
      "--plane-y": "-300px",
      "--plane-opacity": 0,
      duration: 0.375,
      onComplete() {
        setTimeout(() => {
          button.removeAttribute("style");

          fromTo(
            button,

            { opacity: 0, y: -8 },
            {
              opacity: 1,
              y: 0,
              clearProps: true,
              duration: 0.3,
              onComplete() {
                setActive(false);
                setInput("");
              },
            }
          );
        }, 2500);
      },
    },
  ];
};
