import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../shared/data';

function Work() {
    const param = useParams();
    const findData =data.find((item) => {
        return item.id == param.id
    });
    

  return (
    <div>
        할일 : {findData.todo}
    </div>
  )
}

export default Work