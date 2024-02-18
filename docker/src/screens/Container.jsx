import React, { useState } from "react";
import Logs from "../partials/Logs";
import Inspect from "../partials/Inspect";
import Stats from "../partials/Stats";
import { useParams } from "react-router-dom";

export default function Container() {
  // from params
  const { id } = useParams();

  const TabContent = {
    logs: <Logs containerId={id} />,
    inspect: <Inspect containerId={id} />,
    stats: <Stats containerId={id} />,
  };

  const [activeTab, setActiveTab] = useState("logs");

  return (
    <div className="">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              onClick={() => setActiveTab("logs")}
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "logs"
                  ? " text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 "
              }`}
            >
              Logs
            </a>
          </li>

          <li className="me-2">
            <a
              onClick={() => setActiveTab("inspect")}
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "inspect"
                  ? " text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 "
              }`}
            >
              Inspect
            </a>
          </li>
          <li className="me-2">
            <a
              onClick={() => setActiveTab("terminal")}
              className={` inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "terminal"
                  ? " text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 "
              }`}
            >
              Terminal
            </a>
          </li>
          <li>
            <a
              onClick={() => setActiveTab("files")}
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "files"
                  ? " text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 "
              }`}
            >
              Files
            </a>
          </li>
          <li className="me-2">
            <a
              onClick={() => setActiveTab("stats")}
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "stats"
                  ? " text-blue-600 border-blue-600  dark:text-blue-500 dark:border-blue-500"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 "
              }`}
            >
              Stats
            </a>
          </li>
        </ul>
      </div>

      {TabContent[activeTab]}
    </div>
  );
}
