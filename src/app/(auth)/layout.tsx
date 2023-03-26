import AuthNavbar from "../components/ui/MonoNavbar";

export const metadata = {
  title: "Future",
  description: "Find the possibilities..",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AuthNavbar />
      {children}
    </main>
  );
}
