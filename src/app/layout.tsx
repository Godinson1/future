"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "./globals.css";
import { ViewportProvider } from "@/hooks/useViewPort";
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthProvider } from "./hooks/useAuth";

export const metadata = {
  title: "Future",
  description: "Your journey to seamless possibilities",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang='en'>
      <body>
        <QueryClientProvider client={queryClient}>
          <ViewportProvider>
            <AuthProvider>
              <ContextProvider>{children}</ContextProvider>
            </AuthProvider>
          </ViewportProvider>
          <ToastContainer />
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </body>
    </html>
  );
}
