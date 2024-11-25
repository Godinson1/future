"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ViewportProvider } from "src/app/hooks/useViewPort";
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthProvider } from "./hooks/useAuth";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const metadata = {
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
        </QueryClientProvider>
      </body>
    </html>
  );
}
