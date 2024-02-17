import { NavLink } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  //   const { logout } = useAuth();
  const logout = () => {
    console.log("logout");
  };
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0 ${
        !isSidebarOpen && "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
        {/* Logo */}
        <h1 className="text-3xl text-black font-bold px-2 py-1 mb-10 dark:text-white">
          DockMonitor
        </h1>
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-900 ${
                  isActive && "bg-gray-100 dark:bg-gray-700 "
                } rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm400 0q36-13 58-43.5t22-68.5v-40h-80v152Z" />
              </svg>

              <span className="ms-3 font-medium">Containers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/images"}
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-900 ${
                  isActive && "bg-gray-100 dark:bg-gray-700 "
                } rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
              </svg>

              <span className="ms-3 font-medium">Images</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/volumes"}
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-900 ${
                  isActive && "bg-gray-100 dark:bg-gray-700 "
                } rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
              </svg>

              <span className="ms-3 font-medium">Volume</span>
            </NavLink>
          </li>
          <li>
            <button
              onClick={logout}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"
                />
              </svg>

              <span className="ms-3 font-medium">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
