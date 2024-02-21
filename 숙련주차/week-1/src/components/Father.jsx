import React from 'react'
import Child from './Child'

function Father({houseName, pocketMoney}) {
    console.log(houseName);
    console.log(houseName);
  return (
    <Child pocketMoney={pocketMoney}
    houseName={houseName}></Child>
  )
}

export default Father