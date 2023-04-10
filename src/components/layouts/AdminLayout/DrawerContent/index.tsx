import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineHome, HiOutlineTag } from "react-icons/hi2";

interface Props {
  isMini: boolean;
}

const DrawerContent = ({ isMini }: Props) => {
  const router = useRouter();
  // router.pathname==
  const linkClassHandler = (active: boolean) =>
    classNames(
      "flex gap-3 items-center  rounded p-1.5 transition-all duration-100 my-2",
      active ? "bg-cyan-600 text-white" : "",
      isMini
        ? "rounded-[100%] m-auto justify-center w-[32.99px] [&>span]:hidden"
        : ""
    );
  return (
    <section className="p-1">
      <h4 className="text-center mt-5 text-lg">store</h4>
      <div className="px-1 py-3 mt-8">
        <Link
          replace={true}
          href={"/admin"}
          className={linkClassHandler(router.pathname === "/admin")}
        >
          <HiOutlineHome fontSize={20} />
          <span>home</span>
        </Link>
        <Link
          replace={true}
          href={"/admin/categories"}
          className={linkClassHandler(router.pathname === "/admin/products")}
        >
          <HiOutlineTag fontSize={20} />
          <span>categories</span>
        </Link>
        <Link
          replace={true}
          href={"/admin/products"}
          className={linkClassHandler(router.pathname === "/admin/products")}
        >
          <HiOutlineTag fontSize={20} />
          <span>products</span>
        </Link>
        <Link
          replace={true}
          href={"/admin/units"}
          className={linkClassHandler(router.pathname === "/admin/products")}
        >
          <HiOutlineTag fontSize={20} />
          <span>units</span>
        </Link>
      </div>
    </section>
  );
};

export default DrawerContent;
