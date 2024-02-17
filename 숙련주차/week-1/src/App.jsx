import React from 'react'
import styled from 'styled-components'
import TestPage from './componet/TestPage'
import GlobalStyle from './GlobalSyle'

const StContainer = styled.div`
  display: flex;
`

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${({ borderColor }) => borderColor};
  margin: 20px;
`

function App() {
  const colors = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }, { color: 'black' }]

  const getBoxName = (color) => {
    switch (color) {
      case 'red':
        return '빨간박스'
      case 'blue':
        return '파란박스'
      case 'yellow':
        return '노랑박스'
      case 'black':
        return '검정박스'

    }
  }

  return (
    <>
    <GlobalStyle/>
    <TestPage></TestPage>
    </>
    // <StContainer>
    //   {
    //     colors.map(function (item) {
    //       return <StBox borderColor={item.color}>{getBoxName(item.color)}</StBox>
    //     })
    //   }
    // </StContainer>
  )
}

export default App