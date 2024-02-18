import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
const DefaultLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Toaster position="bottom-right" />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <ToastContainer />
      <div className="sm:ml-64 ">
        <Header
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <Outlet />
      </div>
      {/* <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Toggle</button> */}
    </div>
  );
};

export default DefaultLayout;
