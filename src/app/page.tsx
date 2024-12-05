"use client"
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import { HomePage } from "@/components/ui/Home";
import store from "@/redux/store";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider> 
  );
}
