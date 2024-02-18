import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLayers } from "../utils/backend";

const Image = () => {
  const { id } = useParams();
  const [layers, setlayers] = useState([]);

  useEffect(() => {
    let _layer = getLayers();
    setlayers(_layer);
    console.log(_layer);
  });
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg ">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Created By
                </th>
                <th scope="col" className="px-4 py-3">
                  Created On
                </th>
                <th scope="col" className="px-4 py-3">
                  Size
                </th>

                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {layers.map((layer) => (
                <tr
                  key={layer.Id}
                  className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/80 cursor-pointer"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <pre>
                    {layer.CreatedBy.length>10?layer.CreatedBy.substring(10,20):layer.CreatedBy}
                    </pre>
                  </th>
                  <td className="px-4 py-3 text-gray-500  dark:text-gray-400">
                    {Math.floor(
                      (new Date() - new Date(layer.Created * 1000)) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    Days ago
                  </td>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                    {layer.Size}
                  </td>

                  <td className="px-4 py-3 space-x-2 flex items-center justify-end">
                    {/* Start Button */}
                    <button
                      className="inline-flex items-center py-2 px-3 bg-gray-200 dark:bg-gray-600  text-sm font-medium text-center text-white hover:text-gray-800 rounded-lg focus:outline-none dark:text-white dark:hover:text-gray-100 space-x-2 cursor-pointer"
                      type="button"
                      title="Team"
                      onClick={() =>
                        navigate(`/tournaments/${tournament._id}/teams`)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="currentColor"
                        className="w-5 h-5 fill-gray-600 dark:fill-gray-50"
                      >
                        <path d="M320-200v-560l440 280-440 280Z" />
                      </svg>
                    </button>

                    {/* Stop Button */}
                    <button
                      className="inline-flex items-center py-2 px-3 bg-gray-200 dark:bg-gray-600  text-sm font-medium text-center text-white hover:text-gray-800 rounded-lg focus:outline-none dark:text-white dark:hover:text-gray-100 space-x-2 cursor-pointer"
                      type="button"
                      title="Schedule"
                      onClick={() =>
                        navigate(`/tournaments/${tournament._id}/group`, {
                          state: { tournament },
                        })
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="currentColor"
                        className="w-5 h-5 fill-gray-600 dark:fill-gray-50"
                      >
                        <path d="M240-240v-480h480v480H240Z" />
                      </svg>
                    </button>
                    {/* Delete Button */}
                    <button
                      className="inline-flex items-center py-2 px-3 bg-gray-200 dark:bg-gray-600 text-sm font-medium text-center text-white hover:text-gray-800 rounded-lg focus:outline-none dark:text-white dark:hover:text-gray-100 space-x-2 cursor-pointer"
                      type="button"
                      title="Edit"
                      onClick={() =>
                        navigate(`/tournaments/${tournament._id}/edit`)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="currentColor"
                        className="w-5 h-5 fill-gray-600 dark:fill-gray-50"
                      >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Image;
