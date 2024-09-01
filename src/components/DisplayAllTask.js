import React from 'react'
import { useSelector } from 'react-redux'
import Row from './Row';

const DisplayAllTask = () => {
    const data=useSelector((store)=>store.task.lists);
    // console.log(data);
  return (
        <div>
            {
                data.map((item,index)=>{
                    return <Row key={index} index={index+1} item={item}/>
                })
            }
        </div>
  )
}

export default DisplayAllTask
