"use client";

import { usePathname } from "next/navigation";

const usePageTitle = () => {
  const pathname = usePathname();
  const splittedPath = pathname.split("/");
  const pathToUse = splittedPath[splittedPath.length - 1];
  const title = `PAGE / ${pathToUse}`;
  const isGreeting = pathToUse === "dashboard";
  const pageTitle = isGreeting ? "Hello Godwin," : title;

  return {
    pageTitle,
    isGreeting,
  };
};

export default usePageTitle;
