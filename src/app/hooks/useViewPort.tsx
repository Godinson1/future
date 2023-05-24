"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

const ViewportContext = createContext({});

const ViewportProvider = ({ children }: any) => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  const handleWindowResize = () => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return <ViewportContext.Provider value={{ width, height }}>{children}</ViewportContext.Provider>;
};

const useViewport = () => {
  const { width, height } = useContext<any>(ViewportContext);
  return { width, height };
};

export { ViewportProvider, useViewport };
