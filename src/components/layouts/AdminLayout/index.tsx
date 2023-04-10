import { ReactElement, useMemo, useState } from "react";
import Navbar from "../Navbar";
import Drawer from "../../core/Drawer";

import DrawerContent from "./DrawerContent";

interface Props {
  children: ReactElement;
}

const AdminLayout = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const [isMini, setIsMini] = useState<boolean>(false);
  const DrawerClassName = useMemo(() => (isMini ? `w-20` : `w-64`), [isMini]);
  return (
    <>
      <div className={"flex flex-nowrap flex-row"}>
        <Drawer className={DrawerClassName} open={open} setOpen={setOpen}>
          <DrawerContent isMini={isMini} />
        </Drawer>
        <div className={"flex-1"}>
          <Navbar
            setOpen={setOpen}
            isMini={isMini}
            setIsMini={() => setIsMini((v) => !v)}
          />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
