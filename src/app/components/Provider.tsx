"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
