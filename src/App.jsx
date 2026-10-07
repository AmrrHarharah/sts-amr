import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <Navbar />
      <main className="mx-3 mt-4 bg-neutral-50 md:mx-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
