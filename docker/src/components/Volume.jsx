import React from "react";
import { containerData } from "../utils/backend";

export const Volume = () => {
  return (
    <>
      <div className="text-black font-bold text-2xl my-4 py-4">
        Volume{" "}
        <span className="ml-8 text-blue-600 font-semibold text-lg">
          Give Feedback
        </span>
      </div>

      {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"> */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                CPU
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {containerData.map((data) => (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.Names}
                </th>
                <td className="px-6 py-4">{data.Image}</td>
                <td className="px-6 py-4">{data.Status}</td>
                <td className="px-6 py-4">1.2</td>
                <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </>
  );
};
