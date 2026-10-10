import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      {/* The current page shows here */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
