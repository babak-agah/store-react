import { ReactElement } from "react";
import { classes } from "./styles";
import { motion } from "framer-motion";
import { drawerMotion } from "@src/components/animations/drawer.motion";

interface Props {
  children: ReactElement;
  open: boolean;
  setOpen: (v: boolean) => void;
  className?: string;
}

export default function Drawer({
  children,
  open,
  className = "",
  setOpen,
}: Props) {
  const root = classes({ className, open });

  return (
    <motion.main
      variants={drawerMotion}
      initial={"hidden"}
      whileInView={"show"}
      className={root}
    >
      {children}
    </motion.main>
  );
}
