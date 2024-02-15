import React from 'react'
import "App.css";


function Block (props) {
  return <div className='square-style'>{props.name}</div>
}

function App() {
  const testArr = ["감자", "고구마", "오이", "가지", "옥수수"]

  return (
    <>
    <div className='app-style'>
        {
          testArr.map(function(item){
              return <Block name = {item}></Block>
          })

        }
    </div>

    
  <div className='app-style'>
        {
            testArr.filter(function(item){
                return item !== "감자"
            }).map(function(item) {
              return <Block name = {item}></Block>
            })
          }

  </div>
  </>
  )
}

export default App 