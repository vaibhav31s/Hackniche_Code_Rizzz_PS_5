import React from 'react'

const ContainersDetails = ({text, count}) => {

  return (
    <div>
        

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 
      <div className="flex flex-col items-center p-5">
        {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="" alt="Bonnie image"/> */}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{text}</h5>
        <div className="flex mt-4 md:mt-6">
            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{count}</a>
        </div>
    </div>
</div>

    </div>
  )
}

export default ContainersDetails