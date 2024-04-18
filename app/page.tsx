import Link from "next/link";
import ProductCarts from "./components/ProductCarts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HELLO WORLD</h1>
      <Link href="/users">User</Link>
      <Link href="/users/newusers">NewUser</Link>
      <ProductCarts />
    </main>
  );
}
