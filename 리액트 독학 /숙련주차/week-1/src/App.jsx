import React from 'react'
import HeavyComponent from './components/HeavyComponent'

function App() {
  
  return (
    <div>
        <nav style={{
          backgroundColor : 'yellow',
          marginBottom : '30px'
        }}>네비케이션 바</nav>
        <HeavyComponent></HeavyComponent>
        <footer>푸터 영역이에요</footer>

    </div>
  )
}

export default App