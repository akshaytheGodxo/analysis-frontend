import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import { HomePage } from "@/components/ui/Home";
export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col w-screen`}>
      <Navbar/>
      <Home />
    </div>
  );
}
