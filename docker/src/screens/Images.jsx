import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { getImages } from "../utils/backend";

export default function Images() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContainer = async () => {
      const _images = await getImages();
      setImages(_images);
      console.log(_images);
    };
    fetchContainer();
  }, []);

  if (loading) <Loader />;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg ">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search Image
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <Link
              to={"/tournaments/create"}
              className="flex items-center justify-center  text-white bg-blue-700  dark:bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <svg
                className="h-3.5 w-3.5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Create Image
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Image
                </th>
                <th scope="col" className="px-4 py-3">
                  Tag
                </th>
                <th scope="col" className="px-4 py-3">
                  Created
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
              {images.map((image) => (
                <tr
                  key={image.Id}
                  className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/80 cursor-pointer"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    onClick={()=>{navigate(`/images/${image.Id}`)}}
                  >
                    {image.RepoTags[0].split(":")[0]}
                  </th>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                    {image.RepoTags[0].split(":")[1]}
                  </td>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                    {Math.floor((new Date() - new Date(image.Created * 1000)) / (1000 * 60 * 60 * 24))} Days ago
                  </td>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                    {image.Size}
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
}
