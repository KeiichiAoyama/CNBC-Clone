import Image from "next/image";
import Navbar from "./compartment/navbar/NavBar.js"

export default function Home() {
  return (
      <main className="min-h-screen bg-white">
          <Navbar />
      </main>
  );
}
