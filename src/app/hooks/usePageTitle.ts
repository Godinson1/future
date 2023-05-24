"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "./useAuth";

const usePageTitle = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const splittedPath = pathname.split("/");
  const pathToUse = splittedPath[splittedPath.length - 1];
  const title = `${pathToUse}`;
  const isGreeting = pathToUse === "dashboard";
  const pageTitle = isGreeting ? `Hello ${user?.firstName},` : title;

  return {
    pageTitle,
    isGreeting,
  };
};

export default usePageTitle;
