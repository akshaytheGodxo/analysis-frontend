import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col w-screen`}>
      <Navbar/>
    </div>
  );
}
