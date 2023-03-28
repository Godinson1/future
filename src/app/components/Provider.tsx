"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const Provider = ({ children }: { children: ReactNode }) => {
  return { children };
};

export default Provider;
