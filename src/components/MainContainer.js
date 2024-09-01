import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { pushTask } from '../utils/taskSlice';
import DisplayAllTask from './DisplayAllTask';

const MainContainer = () => {
    const [inputValue,setInputValue]=useState("");
    //const [data,setData]= useState("");
    const dispatch = useDispatch();
    const handleClick=()=>{
        //console.log(inputValue);
        // console.log(Date());
        const date=Date();
        dispatch(pushTask({inputValue,date}));
        setInputValue("");
    }
  return (
    <div className='mt-6 bg-white h-screen w-8/12 mx-auto p-10'>
      <h1 className='text-center font-bold text-4xl font-sans mb-4'>Add todo works</h1>
      <div className='flex '>
        <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} className='w-3/4 px-5 border-2 border-black' placeholder='Write your todo task here..'/>
        <button onClick={handleClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm w-1/2 px-5 py-2 mx-4 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
      </div>
      <DisplayAllTask/>
    </div>
  )
}

export default MainContainer
