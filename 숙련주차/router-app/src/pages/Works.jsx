import React from 'react'
import { data }  from "../shared/data";
import { Link } from 'react-router-dom';

function Works() {
    return (
        <>
            <div>할일 목록</div>
            {data.map((item) => {
               return (
               <div key={item.id}>
                {item.id}
                &nbsp; 
                <Link to={`/work/${item.id}`}>{item.todo}</Link>
               </div>
               );
            })}
        </>

    )
}

export default Works