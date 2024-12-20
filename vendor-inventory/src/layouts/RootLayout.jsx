import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/index";

export const RootLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      <Header />
      <main className="flex-grow-1 py-3 w-100">
        <div className="container-fluid">
          <Outlet />
        </div>
      </main>
      <Footer/>
    </div>
  );
};
