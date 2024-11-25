"use client";

import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { Roboto, Poppins } from "next/font/google";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "src/app/components/ui/Button";
import Navbar from "src/app/components/ui/Navbar";

import styles from "./page.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: "900" });
const poppins = Poppins({ subsets: ["latin"], weight: "900" });

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Navbar />
      <Container component='main'>
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <h2 className={`${roboto.className} ${styles.text_header}`}>Creating a future with seamless possibilities.</h2>
          <Container maxWidth='sm'>
            <p className={`${poppins.className} ${styles.header_base}`}>Buy, pay, chat and manage activities all in one place.</p>
          </Container>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 3 }}>
          <Button onClick={() => router.push("/register")} size='large'>
            Create an account
          </Button>
        </Box>
      </Container>
    </main>
  );
}
