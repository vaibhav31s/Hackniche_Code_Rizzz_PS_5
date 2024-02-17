import React from 'react'
import {data} from "./inspect"
import ReactJson from 'react-json-view'
const Info = () => {
  return (
    <div className="">
        <div className='bg-white'>

        </div>
        <ReactJson src={data} />
    </div>
  )
}

export default Info
