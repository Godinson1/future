"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import MobileButton from "@/components/ui/MobileButton";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Navbar />
      <Container component='main'>
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <Header variant='h2'>Invest in the Future with our cryptocurrency platform.</Header>
          <Container maxWidth='sm'>
            <Paragraph variant='body1' className={"header_base"}>
              Buy, sell, and trade cryptocurrencies while keeping your assets secure and your transactions fast and efficient.
            </Paragraph>
          </Container>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 3 }}>
          <Button onClick={() => router.push("/register")} size='large'>
            Create an account
          </Button>
          <MobileButton />
        </Box>
      </Container>
    </main>
  );
}
