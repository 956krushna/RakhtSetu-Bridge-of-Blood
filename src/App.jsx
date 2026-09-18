import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Profile from "./Pages/Profile";
import Faq from "./Pages/Faq";
import Appointments from "./Pages/Appointments";
import Donations from "./Pages/Donations";
import Donateblood from "./Pages/Donateblood";
import Findblood from "./Pages/Findblood";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">

        {/* Navbar stays fixed/common */}
        <Navbar />

        <div className="flex flex-1 overflow-hidden">

          {/* Sidebar stays common */}
          <Sidebar />

          {/* Only this area changes */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Findblood" element={<Findblood />} />
              <Route path="/Donateblood" element={<Donateblood />} />
              <Route path="/Donations" element={<Donations />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Appointment" element={<Appointments />} />
              <Route path="/Faq" element={<Faq />} />
            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
