import React from 'react'

function Child({name, age, temp}) {
    console.log(name);
    console.log(age);
    console.log(temp);
  return (
    <div>
    </div>
  )
}

Child.defaultProps={
    temp : "temp"
}

export default Child