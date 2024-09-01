import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTask } from '../utils/taskSlice';

const Row = ({item,index}) => {
    const dispatch=useDispatch();
    // console.log(item.data);
    // console.log(index);
    const handleClick=()=>{
        dispatch(removeTask(item.date));
    }
  return (
    <div className='flex justify-between m-4'>
        <h1 className='px-2'>{index}</h1>
      <h1 className='px-2 w-1/2'>{item.inputValue}</h1>
      <h1 className='px-2'>{item.date}</h1>
      <button onClick={handleClick} className='h-10 w-10'><img src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-green-recycle-bin-with-recycle-symbol-png-image_13324116.png" alt="" /></button>
    </div>
  )
}

export default Row
