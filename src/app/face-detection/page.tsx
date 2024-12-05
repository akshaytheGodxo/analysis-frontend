'use client';
import Navbar from "@/components/ui/Navbar";
import { WebcamDemo } from "@/components/face-models/face-model";
import Footer from "@/components/ui/Footer";
const Page = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center font-bold text-2xl mt-4">Real-Time Face Detection</h1>
      <div className="flex justify-center mt-6">
        {/* <FaceCapture /> */}
        <WebcamDemo />
        
      </div>
      <Footer />
    </div>
  );
};


/* 0*/

export default Page;