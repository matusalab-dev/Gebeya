import localFont from "next/font/local";
import "./globals.css";

import Header from "../components/Header";
import NavBar from "../components/nav-bar/NavBar";
import Footer from "../components/Footer";
import CartProvider from "../context/CartContext";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },

    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

const alfaSlabOne = localFont({
  src: [
    {
      path: "./fonts/AlfaSlabOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alfa-slab-one",
});

export const metadata = {
  title: "Gebeya shop",
  description:
    "Discover a world of convenience with our user-friendly platform, curated collections, and exceptional customer service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${alfaSlabOne.variable}  font-poppins antialiased max-w-[98%] 2xl:max-w-screen-7xl mx-auto px-3 xs:px-2`}
      >
        <CartProvider>
          <Header>
            <NavBar />
          </Header>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
