import Link from "next/link";
import ProductCarts from "./components/ProductCarts";
import Navbar from "./components/Navbar";
import HeroSection from "./components/hero/HeroSection";

export default function Home() {
  return (
    <main>
      {/* <h1>HELLO WORLD</h1> */}
      <Navbar />
      <HeroSection />
      {/* <Link href="/users">User</Link>
      <Link href="/users/newusers">NewUser</Link> */}
      {/* <ProductCarts /> */}
    </main>
  );
}
