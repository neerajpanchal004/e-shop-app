import { Inter } from "next/font/google";
import "./globals.css";
import Contextapi from "./context/Contextapi";
import { Chakraprovider } from "./components/ChakkraProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Shop",
  description: "Created by Neeraj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chakraprovider>
          <Contextapi>
            <Header/>
            {children}
            <Footer/>
          </Contextapi>
        </Chakraprovider>
      </body>
    </html>
  );
}
