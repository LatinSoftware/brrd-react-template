import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/Navbar";
import { Footer } from "../components/Footer";



export default function Root() {
    return (
      <>
        <NavbarComponent />
        <main className="p-5 min-h-[86.8vh]">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }