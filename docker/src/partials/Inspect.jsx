import React, { useEffect, useState } from "react";
import { getInspect } from "../utils/backend";
import { useParams } from "react-router-dom";

export default function Inspect() {
  const [inspect, setInspect] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchInspect = async () => {
      const _inspect = await getInspect(id);
      console.log(_inspect);
      setInspect(_inspect);
    };
    fetchInspect();
  }, []);

  return (
    <div className="p-8 flex flex-col space-y-8">
      <div>
        <h2>Environment</h2>
        <div>
          {inspect.Config?.Env?.map((env, index) => (
            <div className="flex p-5 py-4 justify-between items-center border-b-[2px] border-gray-800 dark:border-gray-400/20 text-sm">
              {/* <div className="flex space-x-14"> */}
              <p>{env.split("=")[0]}</p>
              <p>{env.split("=")[1]}</p>
              {/* </div> */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                  className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z" />
                </svg>
              </button>
            </div>
          ))}
          {/* <div className="flex p-5 py-4 justify-between items-center border-b-[2px] border-gray-800 dark:border-gray-400/20 text-sm">
            <p>PATH</p>
            <p>
              /usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
            </p>
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 focus:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z" />
              </svg>
            </button>
          </div>
          <div className="flex p-5 py-4 justify-between items-center border-b-[2px] border-gray-800 dark:border-gray-400/20 text-sm">
            <p>LANG</p>
            <p>
              /usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
            </p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
      <div>
        <h2>Ports</h2>
        <div>
          {/* exposedPorts is object */}
          {Object.keys(inspect.Config?.ExposedPorts || {}).map(
            (port, index) => (
              <div className="flex p-5 py-4 justify-between items-center border-b-[2px] border-gray-800 dark:border-gray-400/20 text-sm">
                <p>{port.split("/")[0]}</p>
                <p>{port.split("/")[1]}</p>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                    className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  >
                    <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z" />
                  </svg>
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
