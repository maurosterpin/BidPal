"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";

export default function Logo() {
  const router = useRouter();
  const pathname = usePathname();

  function reset() {
    if (pathname !== "/") router.push("/");
  }
  return (
    <div
      onClick={reset}
      className="flex items-center gap-2 text-3xl font-semibold text-blue-500 cursor-pointer"
    >
      <BiShoppingBag size={34} />
      <div>BidPal</div>
    </div>
  );
}
