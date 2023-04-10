import { Variants } from "framer-motion";

export const drawerMotion: Variants = {
  hidden: {
    opacity: 0,
    x: "-16rem",
    transition: {
      type: "tween",
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    },
  },
};
